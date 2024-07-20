import { View, ScrollView } from 'react-native';
import { Button } from '~/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { useGlobalContext } from '~/lib/context/global-context';

export default function Screen() {
    const { lezaki, parasole, parawany, updateState } = useGlobalContext()

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='p-6 pt-10 bg-secondary/30'>
            <View className='flex-1 justify-center items-center gap-5'>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Leżaki</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex-col gap-3 items-center justify-center w-full'>
                            <View className='flex-row gap-3 justify-between items-center w-full'>
                                <Button
                                    disabled={lezaki.wynajete === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_LEZAKI', 'lezaki', lezaki.wynajete - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{lezaki.wynajete}</Text>
                                <Button
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_LEZAKI', 'lezaki', lezaki.wynajete + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>
                            <Text>Blik</Text>
                            <View className='flex-row gap-3 justify-between items-center w-full'>
                                <Button
                                    disabled={lezaki.blik === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_LEZAKI_BLIK', 'lezaki', lezaki.blik - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{lezaki.blik}</Text>
                                <Button
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_LEZAKI_BLIK', 'lezaki', lezaki.blik + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>
                        </View>
                    </CardContent>
                </Card>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Parasole</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex-col gap-3 items-center justify-center w-full'>
                            <View className='flex-row gap-3 justify-between items-center w-full'>
                                <Button
                                    disabled={parasole.wynajete === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARASOLE', 'parasole', parasole.wynajete - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{parasole.wynajete}</Text>
                                <Button
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARASOLE', 'parasole', parasole.wynajete + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>

                            <Text>Blik</Text>
                            <View className='flex-row gap-3 justify-between items-center w-full'>
                                <Button
                                    disabled={parasole.blik === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARASOLE_BLIK', 'parasole', parasole.blik - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{parasole.blik}</Text>
                                <Button
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARASOLE_BLIK', 'parasole', parasole.blik + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>
                        </View>
                    </CardContent>
                </Card>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Parawany</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex-col gap-3 items-center justify-center w-full'>
                            <View className='flex-row gap-3 justify-between items-center w-full'>
                                <Button
                                    disabled={parawany.wynajete === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARAWANY', 'parawany', parawany.wynajete - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{parawany.wynajete}</Text>
                                <Button
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARAWANY', 'parawany', parawany.wynajete + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>

                            <Text>Blik</Text>
                            <View className='flex-row gap-3 justify-between items-center w-full'>
                                <Button
                                    disabled={parawany.blik === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARAWANY_BLIK', 'parawany', parawany.blik - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{parawany.blik}</Text>
                                <Button
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARAWANY_BLIK', 'parawany', parawany.blik + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>
                        </View>
                    </CardContent>
                </Card>
            </View>
        </ScrollView>
    );
}
