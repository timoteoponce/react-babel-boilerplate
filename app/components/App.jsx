import React from 'react';
import 'whatwg-fetch';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      name: "Timoteo Ponce",
      remotePosts: null 
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
        <hr/>
        {this.renderAjaxCall()}
      </div>    
    );
  }

  renderAjaxCall(){
    return(
      <div>
        <input type="button" value="Get Posts" onClick={this.onGetPosts.bind(this)}/>
        <br/>
        <textarea rows="10" cols="30" value={this.state.remotePosts} />
      </div>
    );
  }

  onSayHello(){
    console.log('saying hello');
    this.setState({
      name: "Timo says hello!! at " + new Date().getTime()
    });
  }

  onGetPosts(){
    let self = this;
    fetch('http://jsonplaceholder.typicode.com/posts/1')
      .then( (response) => response.json() )
      .then( (json) => {
        self.setState({
          remotePosts: json
        });
      });
  }
}

export default App;
