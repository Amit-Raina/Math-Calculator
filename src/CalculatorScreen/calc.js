import { Component, Fragment } from "react"
import Cbutton from "../CalculatorButton/Cbutton"
import CalculatorInstruction from "../CalculatorInstruction/CalculatorInstruction"
import "./calc.css"


class Calc extends Component{
    state={
        data:""
    }
    removeOne = () =>{
        this.setState({data :this.state.data.slice(0, this.state.data.length - 1)});
    }

    evaluateValue = () => {
        if(this.state.data.length > 2 ){
        try{
        // eslint-disable-next-line no-eval
        let calcValue = eval(this.state.data);
        this.setState({data:calcValue.toString()});
        }
        catch(e){
            alert("invalid input !!");
            this.setState({data:""});
        }
    }
    else{
        alert("enter an expression !!");
        this.setState({data:""});
    }
    }
   render(){
    return (
        <Fragment>
           <h1 className="title"> <i className='fas fa-calculator'></i> Calculator</h1>
        <div className="calc-inteface">
            <div className="display-screen" onClick={() => this.setState({data:""}) }>
                <h3>{this.state.data}</h3>	
            </div>
            <div className="digit-operations">
                <div className = "digit">
                    <div style={{display:"flex"}}><Cbutton onTouched={()=>{this.setState({data :this.state.data + 1})}}>1</Cbutton><Cbutton onTouched={()=>{this.setState({data :this.state.data + 2})}}>2</Cbutton><Cbutton onTouched={()=>{this.setState({data :this.state.data + 3})}}>3</Cbutton></div>
                    <div style={{display:"flex"}}><Cbutton onTouched={()=>{this.setState({data :this.state.data + 4})}}>4</Cbutton><Cbutton onTouched={()=>{this.setState({data :this.state.data + 5})}}>5</Cbutton><Cbutton onTouched={()=>{this.setState({data :this.state.data + 6})}}>6</Cbutton></div>
                    <div style={{display:"flex"}}><Cbutton onTouched={()=>{this.setState({data :this.state.data + 7})}}>7</Cbutton><Cbutton onTouched={()=>{this.setState({data :this.state.data + 8})}}>8</Cbutton><Cbutton onTouched={()=>{this.setState({data :this.state.data + 9})}}>9</Cbutton></div>
                    <div style={{display:"flex"}}><Cbutton onTouched={this.removeOne}><i className='fas fa-reply'></i></Cbutton><Cbutton onTouched={()=>{this.setState({data :this.state.data + 0})}}>0</Cbutton><Cbutton onTouched={()=>{this.evaluateValue()}}><i className='fas fa-equals'></i></Cbutton></div>

                </div>
                <div className = "operations">
                <Cbutton onTouched={()=>{this.setState({data :this.state.data + "+"})}}><i className='fas fa-plus'></i></Cbutton><br/>
                <Cbutton onTouched={()=>{this.setState({data :this.state.data + "-"})}}><i className='fas fa-minus'></i></Cbutton><br/>
                <Cbutton onTouched={()=>{this.setState({data :this.state.data + "*"})}}><i className='fas fa-times'></i></Cbutton><br/>
                <Cbutton onTouched={()=>{this.setState({data :this.state.data + "/"})}}><i className='fas fa-divide'></i></Cbutton><br/>
                </div>
            </div>
        </div>

        <div className="help-box">
            <CalculatorInstruction/>
        </div>
        
        </Fragment>
    )
   }
}
export default Calc;