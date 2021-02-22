
import './App.css';
import { Component } from 'react';
import {CardList} from './component/card-list/card-list.component'
import { SearchBox } from "./component/card-list/search-box/search-box.component";
class App extends Component{
  constructor(){
    super();


    this.state = {
     monsters:[],
     searchFiled:''
     
    };
    // this.handleChange = this.handleChange.bind(this);
  }
//arwo function bind automatically 
  handleChange = (e)=>{
    this.setState({searchFiled:e.target.value});
  }
  // handleChange(e){
  //   this.setState({searchFiled:e.target.value});
  // }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json())
    .then(users => this.setState({monsters:users}));
    
  }

  render(){
    const {monsters, searchFiled} = this.state;//= const monsters = this.state.monsters;
    //const searchFiled = this.state.searchFiled;
    const filteredMonsters = monsters.filter(monster =>monster.name.toLowerCase().includes(searchFiled.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" 
        handleChange = {this.handleChange}
        // handleChange={e=>this.setState({searchFiled:e.target.value})}
        
        
        />
        
        <CardList monsters={filteredMonsters}/>
        
      </div>
    );
  }
}

export default App;
