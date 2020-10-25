import React, { Component } from 'react';

// 1) 1й аргумент жденерика - типизация пропсов, 2й - типизация стейта
// class Counter extends Component<{}, { count: number }> {
// ЛИБО

type CounterState = {
    count: number,
}

// если поставить readonly, то мы не сможем напрямую изменить state как в ***
// type CounterState = {
//     readonly count: number,
// }

type CounterProps = {
    readonly title?: string,
}

class Counter extends Component<CounterProps, CounterState> {
    // если у нас в классе constructor - он принимает пропсы, которые также надо затипизировать
    // типизируются 2 раза  - в constructor и в параметрах класса
    constructor(props: CounterProps) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    // Определяем тип события и тип эдементы, по которому мы кликаем, если HTMLAnchorElement опустим, то 
    // handleClick на ссылку вернет ошибку
    handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        console.log("Counter -> handleClick -> e", e.clientX);
        this.setState(({ count }) => ({
            count: ++count,
        }));
    }

    // ***
    // handleClick = () => {
    //     this.setState.count = ++count;
    // }

    static defaultProps: CounterProps = {
        title: "Default Counter",
    }


    // вернет объект для обновления состояния или null (ничего не обновлять)
    // static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    //     return true ? { count: 2 } : null;
    // }

    // ничего не принимает и не возвращает
    componentDidMount(): void {

    }

    // вернет true или false
    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
        return true;
    }

    render() {
        // Не выйдет, так как пропс title у нас только для чтения
        // this.props.title = "";

        return (
            <div>
                <h1>{this.props.title}{this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
                <a href="/" onClick={this.handleClick}>Link</a>
            </div>
        );
    }
 }


 class Form extends Component <{}, {}> {
    // ДЛЯ СОБЫТИЙ определяем тип события и тип элемента
    handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.currentTarget);
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted!");
    }

    handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
        console.log("Copied!");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Simple text:
                    <input type="text" name="text" onFocus={this.handleFocus} onCopy={this.handleCopy}/>
                    <button type="submit">Sumbit</button>
                </label>
            </form>
        );
    }
 }

const App = () => <><Counter title="Counter: "/> <Form /></>

export default App;