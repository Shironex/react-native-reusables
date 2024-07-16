import { useEffect, useMemo, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from '~/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { PRICES } from '~/lib/constants';
import { useGlobalContext } from '~/lib/context/global-context';

export default function Screen() {
    const [summary, SetSummary] = useState(0);
    const { lezaki, parasole, parawany } = useGlobalContext()

    useMemo(() => {
        const lezakiWynik = lezaki * PRICES.lezak;
        const parasoleWynik = parasole * PRICES.parasol
        const parawanyWynik = parawany * PRICES.parawan

        SetSummary(lezakiWynik + parasoleWynik + parawanyWynik)
    }, [lezaki, parasole, parawany])

    const handleFetch = async () => {
        try {
            const response = await fetch('http://192.168.154.22:3000/feed');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='p-6 bg-secondary/30'>
            <View className='flex-1 justify-center items-center gap-5'>
                <Card className='w-full max-w-sm p-6 rounded-2xl'>
                    <CardHeader className='items-center'>
                        <CardTitle className='pb-2 text-center'>Podsumowanie</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <View className='flex flex-col gap-3 justify-between items-center'>
                            <Text>Rozliczenie: {summary.toString()}</Text>
                            <Text>Rozmianka na Start: 1000</Text>
                            <Text>Razem: 9999</Text>
                        </View>

                        {/* <Button onPress={handleFetch}><Text>test</Text></Button> */}
                    </CardContent>
                </Card>
            </View>
        </ScrollView>
    );
}
