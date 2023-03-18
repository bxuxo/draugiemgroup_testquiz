import "./App.css";
import FrontPage from "./components/FrontPage.tsx";
import QuestionTile from "./components/QuestionTile.tsx";
import Finish from "./components/Finish.tsx";

import { useEffect, useState } from "react";

function App( ) {
    // test stuff
    const [ t_points, setPoints ] = useState(0);
    const [ t_maxpoints, setMaxPoints ] = useState(0);
    const [ nameValue, setNameValue ] = useState("");
    const [ themeValue, setThemeValue ] = useState("");
    const [ themeList, setThemeList ] = useState([]);
    const [ counterText, setCounterText ] = useState("0/14");

    const [ statusValue, setStatusValue ] = useState("Input your name");
    const [ displayState, setDisplayState ] = useState(0);
    const [ currentQuizData, setCurrentQuizData ] = useState([]);

    // currentQuestionIdx ir atbildigs par to, kurs jautajums pasliek tiek radits
    const [ currentQuestionIdx, setCurrentQuestionIdx ] = useState(0);

    // currentAnswerIdx ir atbildigs par to, kura no atbildem paslaik ir izveleta
    // to Idx mes ieliekam answerArr katru reizi kad tiek uzspiests "next", un tad aizsutam uz api lai vins parbauda vai atbildes ir pareizas vai ne
    const [ currentAnswerIdx, setCurrentAnswerIdx ] = useState(null);
    const [ answerArr, setAnswerArr ] = useState([]);
    
    // ieladet sakuma visus themes un tad pec id loadot vajadziigo quiz
    useEffect(() => {
        // php file ir uz localhost kas ir uz 80 porta
        // react ir uz 3000 porta
        fetch("http://localhost/draugiem_group/quiz/api.php?action=get_themes")
          .then(res => res.json())
          .then(
            (result) => {
                setThemeList(result);
            },
            (error) => {
                console.log("error: ", error);
            }
        )
    }, []);

    const onClickPlay = () => {
        if (nameValue == "") {
            setStatusValue("A name needs to be given!");
            return;
        }
        if (themeValue == 0) {
            setStatusValue("Choose a quiz!");
            return;
        }
        fetch("http://localhost/draugiem_group/quiz/api.php?action=get_quiz&id=" + themeValue)
          .then(res => res.json())
          .then(
            (result) => {
                setCurrentQuizData(JSON.parse(result[0].answers_data));
                setDisplayState(1);
                setStatusValue("");
            },
            (error) => {
                console.log("error:", error);
            }
        )
    }
    const onChangeTheme = (e) => {
        setThemeValue(e.target.value);
    }
    const onChangeName = (e) => {
        setNameValue(e.target.value);
        setCounterText(e.target.value.length + "/14");
    }
    const nextClick = () => {
        if (currentAnswerIdx == null) {
            setStatusValue("Please answer the question.");
            return;
        }

        setAnswerArr(answerArr.concat(currentAnswerIdx));
        
        if (currentQuestionIdx + 1 != currentQuizData.length) {
            setCurrentQuestionIdx(currentQuestionIdx + 1);
        } else {
            // tests ir pabeigts
            // sutam uz api lai parbauditu cik atbildes bija pareizas
            fetch("http://localhost/draugiem_group/quiz/api.php?action=finish&name=" + nameValue + "&ans=" + JSON.stringify([...answerArr, currentAnswerIdx]) + "&id=" + themeValue)
            .then(res => res.json( ))
            .then(
                (result) => {
                    console.log(result);
                    setPoints(result.points);
                    setMaxPoints(result.max_points);
                    setDisplayState(2);
                },
                (error) => {
                    console.log("error:", error);
                }
            )
        } setCurrentAnswerIdx(null);
    }
    const answerClick = (idx) => {
        setCurrentAnswerIdx(idx);
    }
    const onGoBack = () => {
        setCurrentQuizData([]);
        setDisplayState(0);
        setAnswerArr([]);
        setCurrentQuestionIdx(0);
    }

    return (
        <>
            { displayState == 0 && 
            <FrontPage 
                nameValue={ nameValue }
                onChangeName={ onChangeName }
                onClickPlay={ onClickPlay }
                onChangeTheme={ onChangeTheme }
                listOfThemes={ themeList }
                counterText={ counterText }
                statusText={ statusValue }
            /> }

            { displayState == 1 && 
            currentQuizData.map((q, idx) => currentQuestionIdx == idx && 
            <QuestionTile 
                key={ idx }
                questionText={ q.question }
                answersArr={ q.answers }
                nextClick={ nextClick }
                answerClick={ answerClick }
                currentAnswerIdx={ currentAnswerIdx }
                currentQuizData={ currentQuizData }
                currentQuizIdx={ idx + 1 }
                statusText={ statusValue }
            /> )}

            { displayState == 2 && 
            <Finish 
                name={ nameValue }
                points={ t_points }
                max_points={ t_maxpoints }
                onGoBack={ onGoBack }
            /> }
        </>
    );
}

export default App;