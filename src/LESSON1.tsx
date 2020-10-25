import React from 'react';

type TitleProps = {
    title: string,
    test?: string,
}

// 1) React.fc не обязателен
// 2) Пропсы по умолчанию
// 3) test - не обязательный пропс, ошибки не будет
const Title = ({ title, test = 'test' }: TitleProps) => <h1>{title}{test}</h1>;

const App = () => <Title title='props' />

export default App;