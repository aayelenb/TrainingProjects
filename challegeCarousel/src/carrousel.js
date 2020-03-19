import React, {Component} from "react";
import ManageForm from "./manageForm"


class Carrousel extends Component{


    handleClickNext=()=>{
     
        const listNodes= document.getElementById("carousel").childNodes;
        const foundChild = Array.from(listNodes).find(elem => elem.hidden === false);
        const index=Array.from(listNodes).indexOf(foundChild);
        

        if(listNodes.length!=index+1){
            listNodes[index].hidden=true;
            listNodes[index+1].hidden=false;
        }else{
            listNodes[index].hidden=true;
            listNodes[0].hidden=false;
        }

       


    }

    handleClickBack=()=>{

        const listNodes= document.getElementById("carousel").childNodes;
        const foundChild = Array.from(listNodes).find(elem => elem.hidden === false);
        const index=Array.from(listNodes).indexOf(foundChild);
        console.log(foundChild, index);
        if(index>0){
            listNodes[index].hidden=true;
            listNodes[index-1].hidden=false;
           
        }else{
            listNodes[index].hidden=true;
            listNodes[listNodes.length-1].hidden=false;
            
        }

       


    }


    render(){
        const {children}=this.props
        return(
            <div align="center"> 
                <h4>Carousel challenge</h4>
                <div id="carousel">
                {children}
                </div>
                <div>
                    <button onClick={this.handleClickBack}>Back</button>
                    <button onClick={this.handleClickNext}>Next</button>
                    </div>
            </div>
        )
    }
}
export default Carrousel;