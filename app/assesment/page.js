"use client";
import React, { useState, useEffect } from "react";
import './style.css';
import Headerpage from './assessment_header';
import Footer from './Footer';
import Content from './assesment_content'
export default function Page() {
    const [question, setQuestion] = useState([]);
    useEffect(()=>{
        fetch(
            `https://the-trivia-api.com/api/questions?limit=40`
        )
            .then((response) => response.json())
            .then((data) => {
                displaydata(data);
                console.log("data", data);
            });
        function displaydata(data) {
            let questionData = data.map((question) =>{
                let options = [...question.incorrectAnswers, question.correctAnswer];
                let questionList = {
                    question: question.question,
                    difficulty: question.difficulty,
                    options: options,
                };
                return questionList;
            });
            setQuestion(questionData);
        };
    }, []);
    return (
        <>
            <Headerpage />
            <Content questions={question} />
            <Footer />
        </>
    )
}



