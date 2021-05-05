import React, { Component } from 'react'
import { FaEllo } from "react-icons/fa";
export default class List extends Component {

    state={
        item:'',
        items:["PHP/MYSQL","C#/SQLSERVER","JAVA/ORACLE","NodeJs/MongoDB"]
    }
    
    getValue=(e)=>{
        e.preventDefault();
        this.setState({item:e.target.innerText});
        console.log(e.target.innerText);
       // this.setState({items:this.state.items.filter(el=> el!==this.state.item)});
    }
    // removeItem=(e)=>{
    //     e.preventDefault();
    //     this.setState({items:this.state.items.filter(el=> el!==this.state.item)});
    //     alert("test");
    // }
    handelDdelet(itemToDelete,e){
        e.preventDefault();
        this.setState({items:this.state.items.filter(el=> el!==itemToDelete)});
       
    }
    render() {
        return (
            <div>
                <form>
        
                <ul>
                {
                        this.state.items.map((item,index)=>{return <li key={index}>{item} <button onClick={this.handelDdelet.bind(this,item)} ><FaEllo/></button> </li>;})
                }
                </ul>
                <button>Remove</button>
                </form>
            </div>
        )
    }
}
