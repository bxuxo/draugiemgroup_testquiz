import "./FrontPage.css";

import React from "react";
import { useState } from "react";

interface Props {
    // name input
    nameValue: string;
    onChangeName: () => void;

    // button
    onClickPlay: () => void;

    // select
    onChangeTheme: () => void;

    // theme list
    listOfThemes;

    // random
    counterText: string;
    statusText: string;
}

function FrontPage({ nameValue, onChangeName, onClickPlay, onChangeTheme, listOfThemes, counterText, statusText }: Props) {
    return (
        <>
            <div className="container-FrontPage">
                <p>{ statusText }</p>

                <span className="container-input-with-counter">
                    <input type="text" maxLength={ 14 } placeholder="Input your name" value={ nameValue } onChange={ onChangeName } className="bruno-input" />
                    <label>{ counterText }</label>
                </span>

                <select defaultValue={ 0 }onChange={ onChangeTheme } className="bruno-btn">
                    <option value="0" disabled>Choose a test</option>
                    { listOfThemes.map(row => <option value={ row.id } key={ row.id }>{ row.quiz_name }</option>) }
                </select>
                <button onClick={ onClickPlay } className="bruno-btn">Begin</button>
            </div>
        </>
    );
}

export default FrontPage;