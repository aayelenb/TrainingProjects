import React from "react";

const ANIMALIMAGE={
    name:"Mapache",
    route: 'https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg',
}    
    

function Image(props){
    return(
    <>
        <h4>{ANIMALIMAGE.name}</h4>
        <img src={ANIMALIMAGE.route} width='250'></img>
    </>)

}
export default Image;