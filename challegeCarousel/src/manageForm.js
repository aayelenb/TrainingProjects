import React, {Component} from "react";
import Form from "./form2";



class ManageForm extends Component{

    constructor(){
        super()
        this.state={
            
            inputName:"",
            inputTwiter:"@",
            inputCheck:true,
            show:true

        }
    }

    handleChange=(event)=>{
        this.setState({inputCheck:event.target.checked})
    }

    handleChangeName=(event)=>{
        this.setState({inputName:event.target.value})
    }

    handleChangeTwiter=(event)=>{
    this.setState({inputTwiter:event.target.value})
    }
    
    render(){
        return(
            <Form handleChange={this.handleChange}
            handleChangeName={this.handleChangeName}
            handleChangeTwiter={this.handlefnChangeTwittr}
            inputName={this.state.inputName}
            inputTwiter={this.state.inputTwiter}
            inputCheck={this.state.inputCheck}/>
        )
    }

}
export default ManageForm;