'use client'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { P } from '@rn-primitives/progress/dist/types-CGCwFwhZ';
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from 'react'

export type RentType = 'SET_LEZAKI' | 'SET_PARASOLE' | 'SET_PARAWANY' | 'SET_LEZAKI_ODDANE' | 'SET_PARASOLE_ODDANE' | 'SET_PARAWANY_ODDANE' | 'SET_LEZAKI_BLIK' | 'SET_PARASOLE_BLIK' | 'SET_PARAWANY_BLIK';

export type RentValue = 'lezaki' | 'parasole' | 'parawany' | 'lezaki_blik' | 'parasole_blik' | 'parawany_blik';

type RentAction =
    | { type: 'SET_LEZAKI'; lezaki: number }
    | { type: 'SET_PARASOLE'; parasole: number }
    | { type: 'SET_PARAWANY'; parawany: number }
    | { type: 'SET_LEZAKI_ODDANE'; lezaki: number }
    | { type: 'SET_PARASOLE_ODDANE'; parasole: number }
    | { type: 'SET_PARAWANY_ODDANE'; parawany: number }
    | { type: 'SET_LEZAKI_BLIK'; lezaki: number }
    | { type: 'SET_PARASOLE_BLIK'; parasole: number }
    | { type: 'SET_PARAWANY_BLIK'; parawany: number }
    | {
        type: 'SET_ALL'; lezaki: {
            wynajete: number; oddane: number; blik: number;
        }; parasole: {
            wynajete: number; oddane: number; blik: number
        };
        parawany: {
            wynajete: number; oddane: number; blik: number
        }
    }
    | { type: 'RESET_ALL' }

type GlobalContextType = {
    lezaki: {
        wynajete: number;
        oddane: number;
        blik: number;
    };
    parasole: {
        wynajete: number;
        oddane: number;
        blik: number;
    };
    parawany: {
        wynajete: number;
        oddane: number;
        blik: number;
    };
    updateState: (type: RentType, key: RentValue, newValue: number) => Promise<void>
    dispatch: React.Dispatch<RentAction>
    fetchStorage: () => void
}

type Props = {
    children: ReactNode
}

export interface RentState {
    lezaki: {
        wynajete: number;
        oddane: number;
        blik: number;
    };
    parasole: {
        wynajete: number;
        oddane: number;
        blik: number;
    };
    parawany: {
        wynajete: number;
        oddane: number;
        blik: number;
    };
}

function RentReducer(state: RentState, action: RentAction): RentState {
    switch (action.type) {
        case 'SET_LEZAKI':
            AsyncStorage.setItem('lezaki', action.lezaki.toString());
            return {
                ...state,
                lezaki: {
                    ...state.lezaki,
                    wynajete: action.lezaki,
                },
            };
        case 'SET_PARASOLE':
            AsyncStorage.setItem('parasole', action.parasole.toString());
            return {
                ...state,
                parasole: {
                    ...state.parasole,
                    wynajete: action.parasole,
                },
            };
        case 'SET_PARAWANY':
            AsyncStorage.setItem('parawany', action.parawany.toString());
            return {
                ...state,
                parawany: {
                    ...state.parawany,
                    wynajete: action.parawany
                },
            };
        case 'SET_LEZAKI_ODDANE':
            AsyncStorage.setItem('lezaki_oddane', action.lezaki.toString());
            return {
                ...state,
                lezaki: {
                    ...state.lezaki,
                    oddane: action.lezaki
                },
            };
        case 'SET_PARASOLE_ODDANE':
            AsyncStorage.setItem('parasole_oddane', action.parasole.toString());
            return {
                ...state,
                parasole: {
                    ...state.parasole,
                    oddane: action.parasole
                }
            };
        case 'SET_PARAWANY_ODDANE':
            AsyncStorage.setItem('parawany_oddane', action.parawany.toString());
            return {
                ...state,
                parawany: {
                    ...state.parawany,
                    oddane: action.parawany
                }
            };
        case 'SET_LEZAKI_BLIK':
            AsyncStorage.setItem('lezaki_blik', action.lezaki.toString());
            return {
                ...state,
                lezaki: {
                    ...state.lezaki,
                    blik: action.lezaki
                }
            }
        case 'SET_PARASOLE_BLIK':
            AsyncStorage.setItem('parasole_blik', action.parasole.toString());
            return {
                ...state,
                parasole: {
                    ...state.parasole,
                    blik: action.parasole
                }
            }
        case 'SET_PARAWANY_BLIK':
            AsyncStorage.setItem('parawany_blik', action.parawany.toString());
            return {
                ...state,
                parawany: {
                    ...state.parawany,
                    blik: action.parawany
                }
            }
        case 'SET_ALL':

            return {
                lezaki: {
                    wynajete: action.lezaki.wynajete,
                    oddane: action.lezaki.oddane,
                    blik: action.lezaki.blik
                },
                parasole: {
                    wynajete: action.parasole.wynajete,
                    oddane: action.parasole.oddane,
                    blik: action.parasole.blik
                },
                parawany: {
                    wynajete: action.parawany.wynajete,
                    oddane: action.parawany.oddane,
                    blik: action.parawany.blik
                },
            };
        case 'RESET_ALL':
            AsyncStorage.multiSet([
                ['lezaki', '0'], ['parasole', '0'], ['parawany', '0'],
                ['lezaki_oddane', '0'], ['parasole_oddane', '0'], ['parawany_blik', '0'],
                ['lezaki_nlik', '0'], ['parasole_nlik', '0'], ['parawany_nlik', '0']
            ])

            return {
                lezaki: {
                    wynajete: 0,
                    oddane: 0,
                    blik: 0
                },
                parasole: {
                    wynajete: 0,
                    oddane: 0,
                    blik: 0
                },
                parawany: {
                    wynajete: 0,
                    oddane: 0,
                    blik: 0
                },
            };
        default:
            throw new Error('Unknown action');
    }
}

const GlobalContext = createContext<GlobalContextType>({
    lezaki: {
        wynajete: 0,
        oddane: 0,
        blik: 0
    },
    parasole: {
        wynajete: 0,
        oddane: 0,
        blik: 0
    },
    parawany: {
        wynajete: 0,
        oddane: 0,
        blik: 0
    },
    updateState: async () => { },
    dispatch: () => { },
    fetchStorage: () => { }
})

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(RentReducer, {
        lezaki: {
            wynajete: 0,
            oddane: 0,
            blik: 0
        },
        parasole: {
            wynajete: 0,
            oddane: 0,
            blik: 0
        },
        parawany: {
            wynajete: 0,
            oddane: 0,
            blik: 0
        },
    });

    useEffect(() => {
        void fetchStorage();
    }, []);

    async function fetchStorage() {
        const lezaki = Number(await AsyncStorage.getItem('lezaki') ?? 0);
        const lezaki_oddane = Number(await AsyncStorage.getItem('lezaki_oddane') ?? 0);
        const lezaki_blik = Number(await AsyncStorage.getItem('lezaki_blik') ?? 0);

        const parasole = Number(await AsyncStorage.getItem('parasole') ?? 0);
        const parasole_oddane = Number(await AsyncStorage.getItem('parasole_oddane') ?? 0)
        const parasole_blik = Number(await AsyncStorage.getItem('parasole_blik') ?? 0);

        const parawany = Number(await AsyncStorage.getItem('parawany') ?? 0);
        const parawany_oddane = Number(await AsyncStorage.getItem('parawany_oddane') ?? 0);
        const parawany_blik = Number(await AsyncStorage.getItem('parawany_blik') ?? 0);



        dispatch({
            type: 'SET_ALL',
            lezaki: {
                wynajete: lezaki,
                oddane: lezaki_oddane,
                blik: lezaki_blik
            },
            parasole: {
                wynajete: parasole,
                oddane: parasole_oddane,
                blik: parasole_blik
            },
            parawany: {
                wynajete: parawany,
                oddane: parawany_oddane,
                blik: parawany_blik
            }
        });
    }

    const handleUpdateState = async (type: RentType, key: RentValue, newValue: number) => {
        if (newValue < 0) return;

        dispatch({
            type,
            [key]: newValue,
        } as RentAction);
    };

    return (
        <GlobalContext.Provider
            value={{
                lezaki: state.lezaki,
                parasole: state.parasole,
                parawany: state.parawany,
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
