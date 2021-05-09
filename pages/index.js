import { useEffect, useState } from 'react';
import ResultButton from '../components/ResultButton';

export default function Home() {
    const [buttonCount, setButtonCount] = useState(5);
    // const [sumText, setSumText] = useState('4 + 5');
    // const [sumRes, setSumRes] = useState(0);

    const [sumData, setSumData] = useState({
        sumText: '',
        sumRes: 0,
    });

    const [score, setScore] = useState([0, 0]);

    useEffect(() => {
        const n1 = Math.floor(Math.random() * 100 + 1);
        const n2 = Math.floor(Math.random() * 100 + 1);
        const res = n1 + n2;
        setSumData({
            sumText: `${n1} + ${n2}`,
            sumRes: res,
        });
    }, [score]);

    const verifyAnswerOld = (n) => {
        if (n === sumRes) {
            setScore((x) => {
                return [x[0] + 1, x[1] + 1];
            });
        } else {
            setScore((x) => {
                return [x[0], x[1] + 1];
            });
        }
    };

    const verifyAnswer = (correct) => {
        if (correct) {
            setScore((x) => {
                return [x[0] + 1, x[1] + 1];
            });
        } else {
            setScore((x) => {
                return [x[0], x[1] + 1];
            });
        }
    };

    const generateButtons = () => {
        const correctIndex = Math.floor(Math.random() * buttonCount);
        return [...Array(buttonCount)].map((x, i) => {
            if (i == correctIndex) {
                return (
                    <ResultButton
                        num={sumData.sumRes}
                        verifyAnswer={() => verifyAnswer(true)}
                    />
                );
            } else {
                const num = Math.floor(Math.random() * 199 + 2);
                return (
                    <ResultButton
                        num={num}
                        verifyAnswer={() => verifyAnswer(false)}
                    />
                );
            }
        });
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-7xl mb-8">{sumData.sumText}</h1>
            <div className="">{generateButtons()}</div>
            <p className="fixed top-6 right-8 text-3xl">{`${score[0]} / ${score[1]}`}</p>
        </div>
    );
}
