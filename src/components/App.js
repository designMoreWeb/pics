//Third party imports
import React from 'react';
//User file imports
import SearchBar from './SearchBar';
import Unsplash from'../api/Unsplash';
import ImageList from './ImageList';
import './App.css';

class App extends React.Component{
    state = {images: []};

    onSearchSubmit = async (term) => {
      const response = await Unsplash.get('/search/photos',{
        params:{query: term}
        
        });
       this.setState({images: response.data.results});
    }
   
   
    render(){
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
        <h2 className="page-title">Image Finder</h2>
        <p className="page-instructions">Find images from unsplash.io by searching in the search bar</p>
        <SearchBar onSearch={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
    </div>
    );
}
}
export default App;