import { useState } from "react";

type CounterProps = { value: number };

const Counter = ({ value = 0 }: CounterProps) => {
  const [count, setCount] = useState(value);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="mx-auto rounded-xl bg-white p-6 shadow-lg outline outline-black/5">
      <div>Count: {count}</div>
      <div className="flex items-center gap-x-2">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
