import React from "react";
import Card from './Card';

const CardList = ({robots}) => {

    return(
    <div className="mt3 ph3 hrs">
         {robots.map((user, i) =>  {
             return (
            <Card key={i}
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            />
        );
        
     })}
    
    </div>  
    );
}

export default CardList;