import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import Youtube from '../api/Youtube';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        //this.onTermSubmit("Arctic Monkeys");
    }

    onTermSubmit = async (term) => {
        const response = await Youtube.search({
            q: term
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
        console.log("Resultado da busca: ", this.state);
    }

    onVideoSelect = (video) => {
        console.log("Video selecionado", video);
        this.setState({ selectedVideo: video });
    }


    render() {
        if (this.state.videos.length > 0) return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">

                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>

                    </div>
                </div>

            </div>
        );
        else return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui segment fluid"><h3>Search for some video!</h3></div>
            </div>
        );
    }
}

export default App;