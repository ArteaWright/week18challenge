import Basic from './BasicInfo'
import React, {Component} from 'react';
import BasicInfo from './BasicInfo';

class App extends Component {
  constructor(props){
    super(props);

    state = {
      person: [{name:"Max", age:28, DOB:"02/09" }, {name:"Alex", age:27, DOB:"02/14"}, {name:"Dorthy", age:27, DOB:"02/23"}]
    }
  }

  render() {
    return (
      <div>
       <BasicInfo name={this.state.person[0].name} age={this.state.person[0].age} DOB={this.state.person[0].DOB}/>
       <BasicInfo name={this.state.person[1].name} age={this.state.person[1].age} DOB={this.state.person[1].DOB}/>
       <BasicInfo name={this.state.person[2].name} age={this.state.person[2].age} DOB={this.state.person[2].DOB}/>
      </div>
    );
  }
  }

export default App;
