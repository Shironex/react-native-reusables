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
                        <View className='flex flex-col gap-3 justify-between items-center'>
                            <View className='flex-row gap-16 justify-between items-center'>
                                <Button
                                    disabled={lezaki.oddane === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_LEZAKI_ODDANE', 'lezaki', lezaki.oddane - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{lezaki.oddane}</Text>
                                <Button
                                    disabled={lezaki.oddane === (lezaki.wynajete + lezaki.blik)}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_LEZAKI_ODDANE', 'lezaki', lezaki.oddane + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>
                            <Text className='native:text-lg'>Pozostało: {(lezaki.wynajete + lezaki.blik) - lezaki.oddane}</Text>
                        </View>
                    </CardContent>
                </Card>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Parasole</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex flex-col gap-3 justify-between items-center'>
                            <View className='flex-row gap-16 justify-between items-center'>
                                <Button
                                    disabled={parasole.oddane === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARASOLE_ODDANE', 'parasole', parasole.oddane - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{parasole.oddane}</Text>
                                <Button
                                    disabled={parasole.oddane === (parasole.wynajete + parasole.blik)}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARASOLE_ODDANE', 'parasole', parasole.oddane + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>
                            <Text className='native:text-lg'>Pozostało: {(parasole.wynajete + parasole.blik) - parasole.oddane}</Text>
                        </View>
                    </CardContent>
                </Card>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Parawany</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex flex-col gap-3 justify-between items-center'>
                            <View className='flex-row gap-16 justify-between items-center'>

                                <Button
                                    disabled={parawany.oddane === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARAWANY_ODDANE', 'parawany', parawany.oddane - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{parawany.oddane}</Text>
                                <Button
                                    disabled={parawany.oddane === (parawany.wynajete + parawany.blik)}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_PARAWANY_ODDANE', 'parawany', parawany.oddane + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>
                            <Text className='native:text-lg'>Pozostało: {(parawany.wynajete + parawany.blik) - parawany.oddane}</Text>
                        </View>
                    </CardContent>
                </Card>
            </View>
        </ScrollView>
    );
}
