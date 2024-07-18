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
    const { lezaki, parasole, parawany, oddaneLezaki, oddaneParasole, oddaneParawany, updateState } = useGlobalContext()

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='p-6 bg-secondary/30'>
            <View className='flex-1 justify-center items-center gap-5'>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Leżaki</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex flex-col gap-3 justify-between items-center'>
                            <View className='flex-row gap-16 justify-between items-center'>
                                <Button
                                    disabled={oddaneLezaki === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_ODDANE_LEZAKI', 'oddaneLezaki', oddaneLezaki - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{oddaneLezaki}</Text>
                                <Button
                                    disabled={oddaneLezaki === lezaki}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_ODDANE_LEZAKI', 'oddaneLezaki', oddaneLezaki + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>
                            <Text className='native:text-lg'>Pozostało: {lezaki - oddaneLezaki}</Text>
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
                                    disabled={oddaneParasole === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_ODDANE_PARASOLE', 'oddaneParasole', oddaneParasole - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{oddaneParasole}</Text>
                                <Button
                                    disabled={oddaneParasole === parasole}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_ODDANE_PARASOLE', 'oddaneParasole', oddaneParasole + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>
                            <Text className='native:text-lg'>Pozostało: {parasole - oddaneParasole}</Text>
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
                                    disabled={oddaneParawany === 0}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_ODDANE_PARAWANY', 'oddaneParawany', oddaneParawany - 1)}
                                >
                                    <Text>-</Text>
                                </Button>
                                <Text className='native:text-lg'>{oddaneParawany}</Text>
                                <Button
                                    disabled={oddaneParawany === parawany}
                                    variant='outline'
                                    className='shadow shadow-foreground/5'
                                    onPress={() => updateState('SET_ODDANE_PARAWANY', 'oddaneParawany', oddaneParawany + 1)}
                                >
                                    <Text>+</Text>
                                </Button>
                            </View>
                            <Text className='native:text-lg'>Pozostało: {parawany - oddaneParawany}</Text>
                        </View>
                    </CardContent>
                </Card>
            </View>
        </ScrollView>
    );
}
