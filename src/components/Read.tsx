import { useAtomValue } from 'jotai';

import { counterAtom } from '../atoms/counterAtom';

function Read() {
    const count = useAtomValue(counterAtom);
    return <h1>{count}</h1>;
}

export { Read };
