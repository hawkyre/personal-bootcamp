import { useState } from 'react';
import ResultButton from '../components/ResultButton';

export default function Home() {
    const [buttonCount, setButtonCount] = useState(6);

    const generateButtons = () => {
        return [...Array(buttonCount)].map((x) => {
            return <ResultButton />;
        });
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-7xl mb-8">56987 + 4asdasdsdaasddswasa13</h1>
            <div className="">{generateButtons()}</div>
            <p>0/0</p>
        </div>
    );
}
