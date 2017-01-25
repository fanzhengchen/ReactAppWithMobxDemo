import React, {Component} from 'react';
import {observable, observer} from 'mobx-react';
// import DevTools from 'mobx-react-devtools';
class Root extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {rootState} = this.props;
        console.log(rootState);
        return (
            <div>
                <span>Time of click: {rootState.timer}</span>

                <div>
                    <button onClick={() => rootState.increase()}>click to increase</button>
                </div>

                <div>
                    <button onClick={() => rootState.decrease()}>click to decrease</button>
                </div>
            </div>
        );
    }
}

export default observer(Root);
