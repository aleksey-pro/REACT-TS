import React, { useState, useRef, createContext, useContext, useReducer, useCallback, useMemo, useEffect } from 'react';
/**
// --------- useState ---------
// Inferred as number
const [value, setValue] = useState(0);
// Explicitly setting the types
const [val, setVal] = useState<number | undefined>(undefined);
const [values, setValues] = useState<Array<number>>([]);
interface IUser {
  name: string;
  age?: number;
}
const [valu, setValu] = useState<IUser>({ name: 'Yauhen' });


// --------- useRef ---------
const ref1 = useRef<HTMLElement>(null!); // работает на чтение
const ref2 = useRef<HTMLElement | null>(null); // мы сами управляем значением


// --------- useContext ---------
interface ITheme {
  backgroundColor: string;
  color: string;
}
// Context creation
const ThemeContext = createContext<ITheme>({
  backgroundColor: 'black',
  color: 'white',
})
// Accessing context in a child component
const themeContext = useContext<ITheme>(ThemeContext);


// --------- useReducer ---------
interface State { count: number; }
type Action = { type: 'increment' | 'decrement' }
const counterReducer = ({ count }: State, { type }: Action) => {
  switch (type) {
    case 'increment': return { count: count + 1 };
    case 'decrement': return { count: count - 1 };
    default: return {};
  }
};
const [state, dispatch] = useReducer(counterReducer, { count: 0 });
dispatch({ type: 'increment' });
dispatch({ type: 'decrement' });


// --------- useCallback & useMemo ---------
// Используются для того, чтобы контролировать число перерендаров компонента (оптимизация)
// sum(a, b) только тогда будет вызвана, если a или b изменятся в пропсах
// заменяет shouldComponentUpdate
// Callback
// Inferred as number
const a: number = 0, b: number = 0;
const sum = (a: number, b: number): number => a + b;
const memoizedCallback = useCallback(() => { sum(a, b); }, [a, b]);
// Memo
// Inferred as (value1: number, value2: number) => number
const memoizedValue = useMemo((a: number, b: number) => sum(a, b), [a, b]);


// --------- useEffect & useLayoutEffect ---------
const subscribe = (o: Array<number> ): string => o.join(', ');
const unsubscribe = (s: string): void => {};
const options: Array<number> = [];

useEffect(() => {
  const subscriber: string = subscribe(options);
  return () => {
    unsubscribe(subscriber)
  };
}, [options]);


const App:React.FC = () => null;

export default App;
**/


/**


// example - SPINNER

interface WithLoadingProps {
    loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
    class WithLoading extends React.Component<P & WithLoadingProps> {
        render() {
            const { loading, ...props } = this.props;
            return loading ? <LoadingSpinner /> <Component {...props as P} />
        }
    }
}

**/