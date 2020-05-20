import React from 'react';

class GifSearch extends React.Component {

    constructor() {
        super();
        this.state = {
            userInput: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.setState({
                    userInput: event.target.firstChild.value
                })
                event.target.firstChild.value = "";
                this.props.onSubmit(this.state.userInput)
            }}>
                <input onChange={this.handleChange} type="text" placeholder="Search"/>
                <input type="submit" />
            </form>
        )
    }

}

export default GifSearch;