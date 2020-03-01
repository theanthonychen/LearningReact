import React, { Component }  from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <Stopwatch />
      </div>
    );
  }
}
class Stopwatch extends Component{
  state = {
    status: false,
    runningTime:0,
    runningTime2:0
  };
  handleClick = () => {
    this.setState( state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() =>{
          this.setState({runningTime: Date.now() - startTime});
        });
      }
      return {status:!state.status};
    });
  }
  handleReset = () => {
    clearInterval(this.timer); // new
    this.setState({ runningTime: 0, status: false });
  };

  componentDidMount() {
    const startTime = Date.now() - this.state.runningTime;
    this.timer2 = setInterval(() =>{
      this.setState({runningTime2: Date.now() - startTime});
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.timer2);
  }
  render(){
    const{status,runningTime,runningTime2} = this.state;
    return(
      <div>
        <p>{runningTime}ms</p>
        {console.log(runningTime2)}
        <button onClick={this.handleClick}>{status ? 'Stop':'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
        
      </div>
    )
  }
}




export default App;
