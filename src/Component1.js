
import "./Component1.css"

import React, { Component } from 'react'


export default class Component1 extends Component {
    constructor(props){
        super(props)
        this.state={
            endresult:0,
            txt:"",
            disabled1:true,
            disabled2:true,
            disabled3:true,
            disabled4:true

        }
    }
    result=()=>{
        var n = eval(this.state.txt);
        this.setState({txt:n})       
    }
  
    str=(event)=>{ 
         
        this.setState({txt:this.state.txt + event.target.innerText})
        this.setState({disabled1:false})
        this.setState({disabled2:false})
        this.setState({disabled3:false})
     
        if(event.target.innerText==="+" || event.target.innerText==="-" || event.target.innerText==="*" || event.target.innerText==="/"){
            this.setState({disabled2:true})
            this.setState({disabled4:false})
          
        }
        if(event.target.innerText==="."){
            this.setState({disabled4:true})
            this.setState({disabled2:true})
        }
     
    }
    check=()=>{
      
      
         this.setState({txt:this.state.txt.slice(0,-1)})
     
        if(this.state.txt.charAt(this.state.txt.length - 1)!=="+" || this.state.txt.charAt(this.state.txt.length - 1)!=="-" || this.state.txt.charAt(this.state.txt.length - 1)!=="/" || this.state.txt.charAt(this.state.txt.length - 1)!=="*"){
            this.setState({disabled2:false})
           
            if(this.state.txt.length===1){
                this.setState({disabled2:true})
            }
        }
        if(this.state.txt.charAt(this.state.txt.length - 2)==="+" || this.state.txt.charAt(this.state.txt.length - 2)==="-" || this.state.txt.charAt(this.state.txt.length - 2)==="/" || this.state.txt.charAt(this.state.txt.length - 2)==="*"){
            this.setState({disabled4:false})
            this.setState({disabled2:true})
        }
    
    }
    clear=()=>{       
        this.setState({txt:""})
        this.setState({disabled1:true})
        this.setState({disabled2:true})
        this.setState({disabled3:true})
    }
  render() {
    return (
        <div id="main">
        <table>
            <tr><td colSpan={4}><input type="text" value={this.state.txt} readOnly></input></td></tr>
            <tr><td colSpan={2}><button onClick={this.clear} disabled={this.state.disabled1}>AC</button></td><td><button onClick={this.check}>DEL</button></td><td><button onClick={this.str} disabled={this.state.disabled2}>/</button></td></tr>
            <tr><td><button onClick={this.str} >1</button></td><td><button onClick={this.str}>2</button></td><td><button onClick={this.str}>3</button></td><td><button onClick={this.str} disabled={this.state.disabled2}>*</button></td></tr>
            <tr><td><button onClick={this.str}>4</button></td><td><button onClick={this.str}>5</button></td><td><button onClick={this.str}>6</button></td><td><button onClick={this.str} disabled={this.state.disabled2}>+</button></td></tr>
            <tr><td><button onClick={this.str}>7</button></td><td><button onClick={this.str}>8</button></td><td><button onClick={this.str}>9</button></td><td><button onClick={this.str} disabled={this.state.disabled2}>-</button></td></tr>
            <tr><td><button onClick={this.str} disabled={this.state.disabled4}>.</button></td><td><button onClick={this.str} disabled={this.state.disabled3}>0</button></td><td colSpan={2}><button onClick={this.result}>=</button></td></tr>
        </table>
    </div>
    )
  }
}
