import React, {Component} from "react";

export default class ConditionalSection extends Component{
    constructor(){
        super()
        this.state={
            mostrarA:false
        }
    }
    //si estuviese adentro
    //evaluateParam=(a)=>{return (a)?<ComponenteA/>:<ComponenteB/>};
    //{this.evaluateParam(this.state.mostrarA)}
    //afuera
    //{evaluateParam(this.state.mostrarA)}
    
    render(){
       //example comentado const result=evaluateParam(this.state.mostrarA);  {result}

       const result=(this.state.mostrarA)? <ComponenteA/>: <ComponenteB/>;
        return(<div>
            <h1>Conditionals</h1>
            
            {result}
            
        </div>);
    }

}

const evaluateParam=(a)=>{return (a)?<ComponenteA/>:<ComponenteB/>};


/*
    function evaluateParam(value){
    if(value){
    return <ComponenteA/>
    }else{
    return <ComponenteB/>
    }
    }
*/
class ComponenteA extends Component{
 render(){
     return(<p>ComponenteA</p>);
 }
}

class ComponenteB extends Component{
    render(){
        return(<p>ComponenteB</p>);
    }
    
}