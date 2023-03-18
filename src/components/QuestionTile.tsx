import "./QuestionTile.css";

import React from 'react';

interface Props {
    questionText: string;
    answersArr;

    nextClick: () => void;
    answerClick: (a_idx) => void;

    currentAnswerIdx: number;
    currentQuizData;
    currentQuizIdx: number;
    statusText: string;
}

function QuestionTile({ questionText, answersArr, nextClick, answerClick, currentAnswerIdx, currentQuizData, currentQuizIdx, statusText }: Props) {
    return (
        <>
            <p>{ statusText }</p>
            <section className="container-QuestionTile">
                <h1>{ questionText }</h1>
                <div className="container-answers">
                    { answersArr.map((answer, a_idx) => 
                    <div 
                        key={ a_idx } 
                        className={ currentAnswerIdx == a_idx ? "answer-box answer-selected" : "answer-box" } 
                        onClick={ () => answerClick(a_idx) }>
                        { answer[0] }
                    </div>) }
                </div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: (currentQuizIdx / currentQuizData.length) * 100 + "%" }}></div>
                </div>
                <button className="bruno-btn" onClick={ nextClick }>Next</button>
            </section>
        </>
    );
}

export default QuestionTile;