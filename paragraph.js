import React from "react";



function Paragraph({text}){
    
        return(
        <>
        <h4>Paragraph</h4>
        <p>
            This paragraph
            contains a lot of lines
            in the source code,
            but the browser
            ignores it.
            </p>
            
            <p>
            {text}
            </p>
            </>)

}

Paragraph.defaultProps={
    
    text:"This paragraph contains a lot of lines in the source code, but the browser ignores it."
}

export default Paragraph;