import React, { Component } from "react";
import { hot } from "react-hot-loader";

export class App extends Component {
    state = {
        count: 1
    };

    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.setState(prevState => ({
                            count: prevState.count + 1
                        }));
                    }}
                >
                    +
                </button>
                <div>
                    Count: <strong>{this.state.count}</strong>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
