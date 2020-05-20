import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            gifs: [],
        }
    }

    onSubmit = (userInput) => {
        console.log(userInput);
        this.fetchGifs(userInput);
    }

    render(){
        return (
            <div>
                <GifSearch onSubmit={this.onSubmit}/>
                <br />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    fetchGifs(userInput) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=yEuRbdfB8URn2qcfawAZ2wjHOzxtaCmr&rating=g`)
        .then(response => response.json())
        .then(jsonObject => {
            this.setState({
                gifs: jsonObject.data.map(gif => gif.images.original.url).slice(0, 3)
            })
        })
    }

    componentDidMount() {
        this.fetchGifs();
    }

}

export default GifListContainer