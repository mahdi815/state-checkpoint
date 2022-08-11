import { Component } from "react";

class Block extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
      }
    componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 0.5,
        };
      });
    }, 1000);
  }
    render() {
      return (
        <div>
          <button className="block"> last mounting <div className="counter">{this.state.count}</div> seconds</button>
        </div>
      );
    }
  }
  export default Block;