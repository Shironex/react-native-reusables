'use client'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from 'react'

export type RentType = 'SET_LEZAKI' | 'SET_PARASOLE' | 'SET_PARAWANY' | 'SET_ODDANE_LEZAKI' | 'SET_ODDANE_PARASOLE' | 'SET_ODDANE_PARAWANY';

export type RentValue = 'lezaki' | 'parasole' | 'parawany' | 'oddaneLezaki' | 'oddaneParasole' | 'oddaneParawany';

type RentAction =
    | { type: 'SET_LEZAKI'; lezaki: number }
    | { type: 'SET_PARASOLE'; parasole: number }
    | { type: 'SET_PARAWANY'; parawany: number }
    | { type: 'SET_ODDANE_LEZAKI'; oddaneLezaki: number }
    | { type: 'SET_ODDANE_PARASOLE'; oddaneParasole: number }
    | { type: 'SET_ODDANE_PARAWANY'; oddaneParawany: number }
    | {
        type: 'SET_ALL'; lezaki: number; parasole: number; parawany: number, oddaneLezaki: number;
        oddaneParasole: number;
        oddaneParawany: number;
    }
    | { type: 'RESET_ALL' }

type GlobalContextType = {
    lezaki: number;
    parasole: number;
    parawany: number;
    oddaneLezaki: number;
    oddaneParasole: number;
    oddaneParawany: number;
    updateState: (type: RentType, key: RentValue, newValue: number) => Promise<void>
    dispatch: React.Dispatch<RentAction>
    fetchStorage: () => void
}

type Props = {
    children: ReactNode
}

export interface RentState {
    lezaki: number;
    parasole: number;
    parawany: number;
    oddaneLezaki: number;
    oddaneParasole: number;
    oddaneParawany: number;
}

function RentReducer(state: RentState, action: RentAction): RentState {
    switch (action.type) {
        case 'SET_LEZAKI':
            return {
                ...state,
                lezaki: action.lezaki,
            };
        case 'SET_PARASOLE':
            return {
                ...state,
                parasole: action.parasole,
            };
        case 'SET_PARAWANY':
            return {
                ...state,
                parawany: action.parawany,
            };
        case 'SET_ODDANE_LEZAKI':
            return {
                ...state,
                oddaneLezaki: action.oddaneLezaki
            };
        case 'SET_ODDANE_PARASOLE':
            return {
                ...state,
                oddaneParasole: action.oddaneParasole
            };
        case 'SET_ODDANE_PARAWANY':
            return {
                ...state,
                oddaneParawany: action.oddaneParawany
            };
        case 'SET_ALL':
            return {
                lezaki: action.lezaki,
                parasole: action.parasole,
                parawany: action.parawany,
                oddaneLezaki: action.oddaneLezaki,
                oddaneParasole: action.oddaneParasole,
                oddaneParawany: action.oddaneParawany
            };
        case 'RESET_ALL':
            AsyncStorage.multiSet([['lezaki', '0'], ['parasole', '0'], ['parawany', '0'], ['oddaneLezaki', '0'], ['oddaneParasole', '0'], ['oddaneParawany', '0']])

            return {
                lezaki: 0,
                parasole: 0,
                parawany: 0,
                oddaneLezaki: 0,
                oddaneParasole: 0,
                oddaneParawany: 0
            };
        default:
            throw new Error('Unknown action');
    }
}

const GlobalContext = createContext<GlobalContextType>({
    lezaki: 0,
    parasole: 0,
    parawany: 0,
    oddaneLezaki: 0,
    oddaneParasole: 0,
    oddaneParawany: 0,
    updateState: async () => { },
    dispatch: () => { },
    fetchStorage: () => { }
})

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(RentReducer, {
        lezaki: 0,
        parasole: 0,
        parawany: 0,
        oddaneLezaki: 0,
        oddaneParasole: 0,
        oddaneParawany: 0
    });

    useEffect(() => {
        void fetchStorage();
    }, []);

    async function fetchStorage() {
        const lezaki = Number(await AsyncStorage.getItem('lezaki') ?? 0);
        const parasole = Number(await AsyncStorage.getItem('parasole') ?? 0);
        const parawany = Number(await AsyncStorage.getItem('parawany') ?? 0);

        const oddaneLezaki = Number(await AsyncStorage.getItem('oddaneLezaki') ?? 0);
        const oddaneParasole = Number(await AsyncStorage.getItem('oddaneParasole') ?? 0);
        const oddaneParawany = Number(await AsyncStorage.getItem('oddaneParawany') ?? 0);


        dispatch({
            type: 'SET_ALL',
            lezaki,
            parasole,
            parawany,
            oddaneLezaki,
            oddaneParasole,
            oddaneParawany
        });
    }

    const handleUpdateState = async (type: RentType, key: RentValue, newValue: number) => {
        if (newValue < 0) return;

        if (state[key] !== newValue) {
            dispatch({
                type,
                [key]: newValue,
            } as RentAction);
            await AsyncStorage.setItem(key, newValue.toString());
        }
    };

    return (
        <GlobalContext.Provider
            value={{
                lezaki: state.lezaki,
                parasole: state.parasole,
                parawany: state.parawany,
                oddaneLezaki: state.oddaneLezaki,
                oddaneParasole: state.oddaneParasole,
                oddaneParawany: state.oddaneParawany,
                updateState: handleUpdateState,
                dispatch,
                fetchStorage
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
