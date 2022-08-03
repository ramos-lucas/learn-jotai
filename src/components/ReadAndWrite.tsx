import { useAtom } from 'jotai';

import { counterAtom } from '../atoms/counterAtom';

function ReadAndWrite() {
    const [count, setCount] = useAtom(counterAtom);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>
                Increment
            </button>
        </>
    );
}

export { ReadAndWrite };
