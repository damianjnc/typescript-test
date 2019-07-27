import * as React from 'react';
import CounterOutput from './CounterOutput';

class App extends React.Component {
    public render() {
        return (
            <div style={{textAlign: 'center'}}>
                <CounterOutput counter={5}/>;
                <button>Increment</button>
                <button>Decrement</button>
            </div>)

    }
}

export default App;
