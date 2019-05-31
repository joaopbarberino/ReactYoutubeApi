import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (evt) => {
        this.setState({term: evt.target.value});
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label><h3>Video Search</h3></label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar;