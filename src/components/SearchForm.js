import React, { Component } from 'react';


export default class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newPilot: ""
        }

    }
    updatePilot = e => {
        this.setState({ newPilot: e.target.value });
    };
    searchPilot = e => {
        // call the parent's method
        let { newPilot } = this.state;

        this.props.setPilot(this.state.newPilot);
        this.setState({
            newPilot: ""
        })
    };

    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.label}</h3>
                    <input type="text" placeholder="Enter your name." name="pilot" value={this.state.newPilot} onChange={this.updatePilot} />
                    <button onClick={this.searchPilot}>Submit</button>
                    <h2>{this.props.pilot}</h2>

                </div>

            </div>
        )
    }
}
