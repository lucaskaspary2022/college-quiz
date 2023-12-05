"use client";

import React, { useState, useEffect } from 'react';
import SmallLogo from '../../../assets/logo.png'
import Image from 'next/image';
import Logo from '../../../assets/logo_completa.png'
import CollegeList from '@/app/collegeList/collegeList';

// get email from singin route and pass as an argument to this component. fetch firebase to see if user is in the list of buyers.

export default function Quiz() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'What is the capital of France?', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [responses, setResponses] = useState({})
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    console.log(responses); // This will log the current state of responses whenever it changes
  }, [responses]);

  const handleContinue = () => {
    setCompleted(!completed)
  }

	const handleAnswerOptionClick = (answerOption) => {
    // Update the score if the answer is correct
    if (answerOption.isCorrect) {
      setScore(score + 1);
    }

    // Save the user's response and then check if it's the last question
    setResponses(prevResponses => {
        const updatedResponses = {
            ...prevResponses,
            [currentQuestion]: answerOption.answerText
        };

        // Check if it's the last question after updating responses
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion >= questions.length) {
            setShowScore(true);
        } else {
            setCurrentQuestion(nextQuestion);
        }

        return updatedResponses;
    });
	};

	return (
    // <div className='bg-[#0e1532] flex items-center justify-center min-h-[100vh]'>
    // <div>
    //   <Image src={Logo} height={280} width={280}/>

      <div className='flex flex-col items-center justify-center h-full'>
        {/* <div className='bg-[#F4F7FA] min-h-[200px] h-min rounded-[15px] p-[20px] flex justify-evenly relative '> */}
          <div className='h-full'>
          {showScore ? (
            <div className='h-full'>
              {completed ? 
                <CollegeList/>
              :
              <div className='flex items-center flex-col justify-center'>
                <div className='flex items-center flex-col justify-center text-[#141414] text-center mb-[10px]'>
                  <p className='text-[24px] mb-[10px]'>College List montada!</p>
                  <p className='text-[16px]'>Clique no botão para ver</p>
                </div>
                {/* configure button to check if user is client or not */}
                <button className='focus:outline-none hover:bg-red-400 w-[50%] text-[16px] bg-red-500 rounded-[15px] flex py-[10px] px-[10px] justify-center text-white items-center border-solid border-[3px] border-red-400 mt-[8px]' onClick={handleContinue}>Continuar</button>
              </div>
            }       
            </div>
          ) : (
            <div className='flex md:flex-row flex-col justify-between'>
              <div className='w-full relative text-[#141414] mr-[30px]'>
                <div className='mb-[20px]'>
                  <span className='text-[26px] whitespace-nowrap'>Pergunta {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='mb-[12px]'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='w-full flex flex-col justify-between'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button className='focus:outline-none hover:bg-white w-full text-[16px] text-[#141414] bg-[#F4F7FA] rounded-[15px] flex py-[5px] px-[10px] justify-start items-center border-solid border-[3px] border-[#e9e9e9] mt-[8px] text-left' onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption.answerText}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    // </div>
	);
}