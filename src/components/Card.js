import React from "react";

const Card = ({email,name , id}) => {

    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots_image" src={`https://robohash.org/${id+256}?size=220x220`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )

}

export default Card;