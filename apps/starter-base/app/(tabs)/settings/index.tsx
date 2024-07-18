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
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '~/components/ui/alert-dialog';

const SettingsPage = () => {
    const { dispatch } = useGlobalContext()

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='p-6 bg-secondary/30'>
            <View className='flex-1 justify-center items-center gap-5'>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Opcje</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex flex-col items-center justify-center'>

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        variant='outline'
                                        className='shadow shadow-foreground/5'
                                    ><Text>Zresetuj leżaki</Text></Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Jesteś pewien?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Ta akcja spowoduje zresetowanie statystyk z tego dnia do 0. Działanie to jest nie odwracalne.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            <Text>Anuluj</Text>
                                        </AlertDialogCancel>
                                        <AlertDialogAction onPress={() => {
                                            dispatch({ type: 'RESET_ALL' })
                                        }}>
                                            <Text>Wykonaj</Text>
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </View>
                    </CardContent>
                </Card>
            </View>
        </ScrollView>)
}

export default SettingsPage