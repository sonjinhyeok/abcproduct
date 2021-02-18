import React from 'react';
import '../App.css';

type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};

function Counter({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
} : CounterProps) {
    return (
        <div>
            <h1 className="count-number">{ count }</h1>
            <button className="count-button increase" onClick={onIncrease}> +1 </button>
            <button className="count-button decrease" onClick={onDecrease}> -1 </button>
            <button className="count-button increaseBy" onClick={() => onIncreaseBy(5) }> +5 </button>
        </div>
    );
}

export default Counter;