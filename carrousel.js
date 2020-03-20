import React, {useState} from "react";
import ManageForm from "./manageForm"


function Carousel(props){

    const [index, setIndex]=useState(0);

    const handleClickNext=()=>{
            props.children.length!=index+1?setIndex(index+1):setIndex(0);
        }
    
    const handleClickBack=()=>{
            index!=0?setIndex(index-1):setIndex(props.children.length-1);
    }

    return(
        <div align="center">
            <h4>Carousel challenge</h4>
            {props.children[index]}  
                <div>
                    <button onClick={handleClickBack}>Back</button>
                    <button onClick={handleClickNext}>Next</button>
            </div>
        </div>
    )
}

export default Carousel;