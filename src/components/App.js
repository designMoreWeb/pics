//Third party imports
import React from 'react';
import axios from 'axios';

//User file imports
import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term){
        const response= await axios
            .get('https://api.unpslash.com/search/photos',{
                params: { query:term },
                headers:{
                    Authorization: 'Client-ID 99d043cafac1caa8807a6312ba12ca7a70846b2c27e463f16360270565786993'
                }
            });
            console.log(response.data.results);
    }
    render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        );
    }
}

export default App;