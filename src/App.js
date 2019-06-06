import React, { Component, Fragment } from 'react';
import './App.css';
import service from './api/service';
import Search from './components/Search/Search';
import Header from './components/Header/Header'

class App extends Component{
  constructor(){
      super();
      this.state = {
          pokemonList: [],
          searchList: ''
      }
      this.getSearchList = this.getSearchList.bind(this);
  }
  componentDidMount(){
      service.getPokemons()
      .then((result) => {
          this.setState({
              pokemonList: result.results,
          })  
      })
      .catch((erro) => {
          throw new Error(erro);
      });
  }

  getSearchList = (pokemon) => {
    this.setState({
      searchList: pokemon
    })
  }

  render(){
    if(this.state.searchList){
      return (
          <Fragment>
            <Header />
            <div className="contain">
                <div className="title">Pokemon List</div>
                <Search getSearchList={this.getSearchList} pokelist={this.state.pokemonList} />
            </div>
          </Fragment>
      );
    } else {  
      return (
          <Fragment>
            <Header />
            <div className="contain">
                <div className="title">Pokemon List</div>
                <Search getSearchList={this.getSearchList} pokelist={this.state.pokemonList} newPokeList={this.newPokeList}/>
                <div className="list">
                  {this.state.pokemonList.map((e,i) => (
                    <div key={i}> 
                      <div className="card">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} alt={e.name} />
                        <strong>{e.name}</strong>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </Fragment>
      );
    }
  }
}

export default App;
