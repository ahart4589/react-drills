import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      filterString: "",
      foods: [
       "kale",
       "nutritional yeast",
       "strawberries",
       "bread",
       "almonds" 
      ]
    }
  }

  handleChange = (filter) => {
    this.setState({
        filterString : filter})
  }

  render() {
    let filteredFoods = this.state.foods.filter((element,index)=>{
      return element.includes(this.state.filterString)
    })
    let foodsToDisplay = filteredFoods.map((element,index)=>{
      return <h2 key={index}>{element}</h2>
    })
  
    // let foodsToDisplay = this.state.foods.filter((element,index) => {
    //   return element.includes(this.state.filterString)
    //   }).map((element, index) => {
    //     return <h2 key={index}>{element}</h2>
    //   })
       
    return (
      <div className="App">
      <input 
      onChange={(event)=>this.handleChange(event.target.value)}type='text'/>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
