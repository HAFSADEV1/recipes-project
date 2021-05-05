import React, { Component } from 'react'

 class Compteur extends Component {

    //create constractor

    state={
        count:0
    };
    increment=()=>{
      this.setState({count:this.state.count+1});
    }
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate",prevProps,prevState);
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}
export default Compteur;