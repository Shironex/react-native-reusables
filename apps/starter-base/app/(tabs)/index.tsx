import { useState, useMemo } from 'react';
import { View } from 'react-native';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { useGlobalContext } from '~/lib/context/global-context';
import { PRICES } from '~/lib/constants';

const ROZMIANKA = 1000;

export default function Screen() {

  const [summary, SetSummary] = useState(0);
  const { lezaki, parasole, parawany } = useGlobalContext()

  useMemo(() => {
    const lezakiWynik = (lezaki.wynajete * PRICES.lezak.wynajem) - (lezaki.blik * PRICES.lezak.blik);
    const parasoleWynik = (parasole.wynajete * PRICES.parasol.wynajem) - (parasole.blik * PRICES.parasol.blik);
    const parawanyWynik = (parawany.wynajete * PRICES.parawan.wynajem) - (parawany.blik * PRICES.parawan.blik)

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
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
        <CardHeader className='items-center'>
          <CardTitle className='pb-2 text-center'>Podsumowanie</CardTitle>
        </CardHeader>
        <CardContent>
          <View className='flex flex-col gap-3 justify-between items-center'>
            <Text>Leżaki: {lezaki.wynajete + lezaki.blik}</Text>
            <Text>Parasole: {parasole.wynajete + parasole.blik}</Text>
            <Text>Parawany: {parawany.wynajete + parawany.blik}</Text>

            <Text>Rozliczenie: {summary.toString()}</Text>
            <Text>Rozmianka na Start: {ROZMIANKA.toString()}</Text>
            <Text>Razem: {(summary + ROZMIANKA).toString()}</Text>
          </View>

          {/* <Button onPress={handleFetch}><Text>test</Text></Button> */}
        </CardContent>
      </Card>
    </View>
  );
}


// function test() {
//   const [progress, setProgress] = React.useState(78);

//   function updateProgressValue() {
//     setProgress(Math.floor(Math.random() * 100));
//   }

//   return (<Card className='w-full max-w-sm p-6 rounded-2xl'>
//     <CardHeader className='items-center'>
//       <Avatar alt="Rick Sanchez's Avatar" className='w-24 h-24'>
//         <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
//         <AvatarFallback>
//           <Text>RS</Text>
//         </AvatarFallback>
//       </Avatar>
//       <View className='p-3' />
//       <CardTitle className='pb-2 text-center'>Rick Sanchez</CardTitle>
//       <View className='flex-row'>
//         <CardDescription className='text-base font-semibold'>Scientist</CardDescription>
//         <Tooltip delayDuration={150}>
//           <TooltipTrigger className='px-2 pb-0.5 active:opacity-50'>
//             <Info size={14} strokeWidth={2.5} className='w-4 h-4 text-foreground/70' />
//           </TooltipTrigger>
//           <TooltipContent className='py-2 px-4 shadow'>
//             <Text className='native:text-lg'>Freelance</Text>
//           </TooltipContent>
//         </Tooltip>
//       </View>
//     </CardHeader>
//     <CardContent>
//       <View className='flex-row justify-around gap-3'>
//         <View className='items-center'>
//           <Text className='text-sm text-muted-foreground'>Dimension</Text>
//           <Text className='text-xl font-semibold'>C-137</Text>
//         </View>
//         <View className='items-center'>
//           <Text className='text-sm text-muted-foreground'>Age</Text>
//           <Text className='text-xl font-semibold'>70</Text>
//         </View>
//         <View className='items-center'>
//           <Text className='text-sm text-muted-foreground'>Species</Text>
//           <Text className='text-xl font-semibold'>Human</Text>
//         </View>
//       </View>
//     </CardContent>
//     <CardFooter className='flex-col gap-3 pb-0'>
//       <View className='flex-row items-center overflow-hidden'>
//         <Text className='text-sm text-muted-foreground'>Productivity:</Text>
//         <LayoutAnimationConfig skipEntering>
//           <Animated.View
//             key={progress}
//             entering={FadeInUp}
//             exiting={FadeOutDown}
//             className='w-11 items-center'
//           >
//             <Text className='text-sm font-bold text-sky-600'>{progress}%</Text>
//           </Animated.View>
//         </LayoutAnimationConfig>
//       </View>
//       <Progress value={progress} className='h-2' indicatorClassName='bg-sky-600' />
//       <View />
//       <Button
//         variant='outline'
//         className='shadow shadow-foreground/5'
//         onPress={updateProgressValue}
//       >
//         <Text>Update</Text>
//       </Button>
//     </CardFooter>
//   </Card>)
// }