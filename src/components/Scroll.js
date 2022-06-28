import React from "react";

const Scroll = (props) => {
    return (
        // inline styling with css properties 
        <div style={{overflowY: 'scroll',border:'1px solid black', height:'800px'}}>
            {/* Every wrapped component have props with children method */}
            {props.children}
        </div>
    )
}

export default Scroll;