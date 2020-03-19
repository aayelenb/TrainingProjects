import React, { Children } from "react";


const Form =({inputName,inputTwiter,inputCheck,handleChange,
    handleChangeName,handleChangeTwiter})=>(
        
            <div hidden={false}>
                <h4>Form</h4>
                <form>
                    <p><label>Name</label></p>
                    <input onChange={handleChangeName} value={inputName}></input>
                    <p><label>Twiter</label></p>
                    <input onChange={handleChangeTwiter} value={inputTwiter} ></input>

                    <button>Send</button>
                    <p>
                    <label>Accept terms
                        <input checked={inputCheck} onChange={handleChange} type="checkbox" ></input>
                    </label>
                </p>
                </form>

            </div>
        
    )
    export default Form;