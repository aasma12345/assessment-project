

"use client";
import React, { useState, useEffect } from "react";
import './style.css';
import Headerpage from './assessment_header';
import Footer from './Footer';
import Content from './assesment_content'
export default function Page() {
    const [questions, setQuestions] = useState([]);
    useEffect(function () {
        fetch(
            `https://the-trivia-api.com/api/questions?limit=40`
        )
            .then((response) => response.json())
            .then((data) => {
                questionsdata(data);
                console.log(data)
            });

    }, []);


    function questionsdata(data) {
        let questionList = data.map(function (question) {
            let questionslist = {
                question: question.question,
                correctAnswer: question.correctAnswer,
                difficulty: question.difficulty,
                incorrectAnswers: question.incorrectAnswers.map
                    (function (incorrectAnswer) {
                        return incorrectAnswer;
                    })
            };
            return questionslist;
        });
        setQuestions(questionList)
    }


    return (
        <>
            <Headerpage />
            <Content questions={questions} />
            <Footer />
        </>
    )
}