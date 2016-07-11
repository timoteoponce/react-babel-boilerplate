import React from 'react';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      name: "Timoteo Ponce"
    };
  }

  componentDidMount(){
    console.log("Mounting component");
  }

  componentWillUnmount(){
    console.log("Unmounting component")
  }

  render(){
    return (
      <div>
        <h2>{this.state.name}</h2>  
        <input type="button" value="Say hello!" onClick={this.onSayHello.bind(this)}/>
      </div>    
    );
  }

  onSayHello(){
    console.log('saying hello');
    this.setState({
      name: "Timo says hello!! at " + new Date().getTime()
    });
  }
}

export default App;
