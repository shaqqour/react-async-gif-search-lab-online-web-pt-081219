import React from 'react';

class GifList extends React.Component {

    render() {
        return (
            <ul>
                {
                    this.props.gifs.map(gif => {
                        return <li><img src={gif} alt="GIF"/></li>
                    })
                }
            </ul>
        )
    }

}

export default GifList;