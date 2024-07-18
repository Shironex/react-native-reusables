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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='p-6 bg-secondary/30'>
            <View className='flex-1 justify-center items-center gap-5'>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Leżaki</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex-row gap-3 justify-between items-center'>
                            <Button
                                disabled={lezaki === 0}
                                variant='outline'
                                className='shadow shadow-foreground/5'
                                onPress={() => updateState('SET_LEZAKI', 'lezaki', lezaki - 1)}
                            >
                                <Text>-</Text>
                            </Button>
                            <Text className='native:text-lg'>{lezaki}</Text>
                            <Button
                                variant='outline'
                                className='shadow shadow-foreground/5'
                                onPress={() => updateState('SET_LEZAKI', 'lezaki', lezaki + 1)}
                            >
                                <Text>+</Text>
                            </Button>
                        </View>
                    </CardContent>
                </Card>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Parasole</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex-row gap-3 justify-between items-center'>
                            <Button
                                disabled={parasole === 0}
                                variant='outline'
                                className='shadow shadow-foreground/5'
                                onPress={() => updateState('SET_PARASOLE', 'parasole', parasole - 1)}
                            >
                                <Text>-</Text>
                            </Button>
                            <Text className='native:text-lg'>{parasole}</Text>
                            <Button
                                variant='outline'
                                className='shadow shadow-foreground/5'
                                onPress={() => updateState('SET_PARASOLE', 'parasole', parasole + 1)}
                            >
                                <Text>+</Text>
                            </Button>
                        </View>
                    </CardContent>
                </Card>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Parawany</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex-row gap-3 justify-between items-center'>
                            <Button
                                disabled={parawany === 0}
                                variant='outline'
                                className='shadow shadow-foreground/5'
                                onPress={() => updateState('SET_PARAWANY', 'parawany', parawany - 1)}
                            >
                                <Text>-</Text>
                            </Button>
                            <Text className='native:text-lg'>{parawany}</Text>
                            <Button
                                variant='outline'
                                className='shadow shadow-foreground/5'
                                onPress={() => updateState('SET_PARAWANY', 'parawany', parawany + 1)}
                            >
                                <Text>+</Text>
                            </Button>
                        </View>
                    </CardContent>
                </Card>
            </View>
        </ScrollView>
    );
}
