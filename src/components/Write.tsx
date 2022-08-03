import { memo } from 'react';

import { useSetAtom } from 'jotai';

import { counterAtom } from '../atoms/counterAtom';

function Write() {
    const setCount = useSetAtom(counterAtom);
    return (
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    );
}

const WriteMemo = memo(Write);

export { WriteMemo as Write };
