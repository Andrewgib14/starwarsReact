import React, { Component } from 'react';

export default class SearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }
    // searchPilot = () => {
    //     let { newShoe } = this.state;
    //     if (!newShoe.brand || !newShoe.type) {
    //       return;
    //     }

    //     this.props.SearchPilot(this.state.newShoe);
    //     this.setState({
    //       newShoe: {
    //         brand: "",
    //         type: "",
    //         size: 0,
    //         color: ""
    //       }
    //     });
    //   };

    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.label}</h3>
                    <input type="text" placeholder="Enter your name." />
                    <button type="submit">Submit</button>
                    <h2>{this.state.name}</h2>

                </div>

            </div>
        )
    }
}
