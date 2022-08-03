import { Fragment, useState } from 'react';

import { Provider } from 'jotai';

import { Read } from './components/Read';
import { ReadAndWrite } from './components/ReadAndWrite';
import { Write } from './components/Write';

import './App.css';

function App() {
    const [usingSameProvider, setUsingSameProvider] = useState(true);
    const Wrapper = usingSameProvider ? Fragment : Provider;

    return (
        <main>
            <div className="card">
                <Wrapper>
                    <ReadAndWrite />
                </Wrapper>
                <button
                    className="toggle-visibility"
                    onClick={() => setUsingSameProvider((prev) => !prev)}
                >
                    Use same provider? {usingSameProvider ? '👍' : '👎'}
                </button>
            </div>
            <div className="card">
                <Read />
            </div>
            <div className="card">
                <Write />
            </div>
        </main>
    );
}

export default App;
