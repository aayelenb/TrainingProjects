import React, {Component} from "react";
import ComponenTest from "./compTest"
/*
import Carrousel from "./carrousel";
import ManageForm from "./manageForm"
import Paragraph from "./paragraph";
import Image from "./image";
*/

class App extends Component{

    render(){
        return(        
        <div className="App">
        <ComponenTest/>

        </div>);

    }

/*

 state={
        component:"form"
    }

    render(){
        return(        
        <div className="App">
            <Carrousel>
               <ManageForm />
               <Image/>
              <Paragraph text=" This paragraph contains a lot of lines in the source code,but the browser ignores it."/>
            </Carrousel>
        </div>);

    }
    */
}
export default App;
