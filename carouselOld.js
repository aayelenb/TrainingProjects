import React, {Component} from "react";
import ManageForm from "./manageForm"

class Carrousel extends Component{

    constructor(){
        super()
        this.state={
            index:0
        }
    }

    handleClickNext=()=>{

    const {index}=this.state;
    const {children}=this.props;
        children.length!=index+1?
        this.setState({
            index:index+1
        }):this.setState({
            index:0
        })


    }

    handleClickBack=()=>{
        
        const {index}=this.state;
        const {children}=this.props;

        index!=0?
        this.setState({
            index:index-1
        }):this.setState({
            index:children.length-1
        })

       // const value=index!=0?index-1:children.length-1;
       // this.setState=({index:value})
       

    }


    render(){
        const {children}=this.props
        //const {index}=this.state --> sin constructor afuera del render state={index:0}
        return(
            <div align="center"> 
                <h4>Carousel challenge</h4>
                <div id="carousel">
                {children[this.state.index]}
                </div>
                <div>
                    <button onClick={this.handleClickBack}>Back</button>
                    <button onClick={this.handleClickNext}>Next</button>
                    </div>
            </div>
        )
    }
}


export default Carousel;