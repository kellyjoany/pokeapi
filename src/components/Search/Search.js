import React, { Component, Fragment } from "react";
import ResultSearch from '../ResultSearch/ResultSearch';

class Search extends Component {
 constructor(props) {
   super(props);
   this.state = {
     name: ''
   }
   this.searchInput = this.searchInput.bind(this);
 }
 
 searchInput (e) {
   this.setState({
     name: e.target.value
   });
   this.props.getSearchList(e.target.value);
}  
 
 render () {
    return (
        <Fragment>
        <input type="text" placeholder="Search a pokemon" name="name" value={this.state.name} onChange={(e) => this.searchInput(e)} />
        <ResultSearch nameList={this.state.name} pokeList={this.props.pokelist}/>
        </Fragment> 
      );     
    }
}

export default Search;