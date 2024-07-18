import { Tabs } from 'expo-router';
import React from 'react'
import { TabBarIcon } from '~/components/navigation/TabBarIcon';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffff',
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Strona Główna",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="rent/index"
                options={{
                    title: "Wypożyczone",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "cart" : "cart-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="return/index"
                options={{
                    title: "Oddane",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "arrow-back" : "arrow-back-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings/index"
                options={{
                    title: "Ustawienia",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "settings" : "settings-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

export default TabsLayout