import "./Finish.css";

import React from 'react'

interface Props {
    name: string;
    points: number;
    max_points: number;
    onGoBack: () => void;
}

function Finish({name, points, max_points, onGoBack}: Props) {
    return (
        <div className="container-finish">
            <h1>{ "Thank you, " + name }</h1>
            { points == max_points && <p>You answered all of the questions correctly.</p>}
            { points != max_points && <p>You answered { points } out of { max_points } correctly.</p>}

            <button onClick={ onGoBack } className="bruno-btn">Go back</button>
        </div>
    )
}

export default Finish;