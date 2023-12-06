"use client";

import React, { useState, useEffect } from 'react';
import SmallLogo from '../../../assets/logo.png'
import Image from 'next/image';
import Logo from '../../../assets/logo_completa.png'
import CollegeList from '@/app/collegeList/collegeList';
import { compareWithUniversities, classifyUniversities } from './calculateSimilarity';
import calculateUniversityVectors from './calculateUniversityVectors';
import { TiWeatherPartlySunny } from "react-icons/ti";
import '../../app/globals.css'

// get email from singin route and pass as an argument to this component. fetch firebase to see if user is in the list of buyers.

export default function Quiz({ questions, currentQuestion, setCurrentQuestion }) {
	// const questions = [
	// 	{
  //     index: 1,
	// 		questionText: 'Qual tipo de clima você prefere?',
	// 		answerOptions: [
	// 			{ answerText: 'Clima quente', value: 1 },
	// 			{ answerText: 'Clima ameno', value: 2 },
	// 			{ answerText: 'Clima frio', value: 3 },
	// 		],
  //     icon: <TiWeatherPartlySunny size={80}/>
	// 	},
  //   {
  //     index: 2,
	// 		questionText: 'Qual a importância do clima na sua decisão de escolha de universidade?',
	// 		answerOptions: [
	// 			{ answerText: 'Extremamente importante', value: 1 },
	// 			{ answerText: 'Importante', value: 0.75 },
	// 			{ answerText: 'Pouco importante', value: 0.5 },
	// 			{ answerText: 'Vou para qualquer clima', value: 0.25 },
	// 		],
  //     isImportanceQuestion: true,
	// 	},
	// 	{
  //     index: 3,
	// 		questionText: 'Como você avalia sua capacidade de financiar seus estudos nos EUA?',
	// 		answerOptions: [
	// 			{ answerText: 'Posso pagar integralmente sem ajuda financeira', value: 0 },
	// 			{ answerText: 'Preciso de ajuda financeira parcial', value: 0.5 },
	// 			{ answerText: 'Dependo principalmente de bolsas de estudo e ajuda financeira', value: 1 },
	// 		],
	// 	},
	// 	{
  //     index: 4,
	// 		questionText: 'Qual a importância de bolsas de estudo e ajuda financeira na sua decisão de escolha de universidade?',
	// 		answerOptions: [
	// 			{ answerText: 'Extremamente importante', value: 1 },
	// 			{ answerText: 'Importante', value: 0.75 },
	// 			{ answerText: 'Pouco importante', value: 0.5 },
	// 			{ answerText: 'Nao Preciso de ajuda financeira', value: 0.25 },
	// 		],
  //     isImportanceQuestion: true,
	// 	},
	// 	{
  //     index: 5,
	// 		questionText: 'Como você descreveria seu desempenho acadêmico?',
	// 		answerOptions: [
	// 			{ answerText: 'Acima da média, com notas excelentes(9-10)', value: 1 },
	// 			{ answerText: 'Um pouco acima da média, com bom desempenho acadêmico(7-8)', value: 0.75 },
	// 			{ answerText: 'Na média, com espaço para melhoria(6)', value: 0.5 },
	// 			{ answerText: 'Abaixo da média (<6)', value: 0.25 },
	// 		],
	// 	},
  //   {
  //     index: 6,
	// 		questionText: 'Você busca uma universidade com um ambiente acadêmico altamente competitivo?',
	// 		answerOptions: [
	// 			{ answerText: 'Sim, estou buscando o mais alto nível de desafio acadêmico', value: 1 },
	// 			{ answerText: 'Não, prefiro um ambiente acadêmico equilibrado', value: 0.5 },
	// 			{ answerText: 'Não, prefiro um ambiente acadêmico mais acolhedor e menos competitivo', value: 0.25 },
	// 		],
	// 	},
  //   {
  //     index: 7,
	// 		questionText: 'Qual tamanho de universidade você prefere?',
	// 		answerOptions: [
	// 			{ answerText: 'Pequena (menos de 5.000 alunos)', value: 1 },
	// 			{ answerText: 'Média (5.000 a 15.000 alunos)', value: 2 },
	// 			{ answerText: 'Grande (mais de 15.000 alunos)', value: 3 },
	// 		],
	// 	},
  //   {
  //     index: 8,
	// 		questionText: 'Qual a importância do tamanho da Universidade?',
	// 		answerOptions: [
	// 			{ answerText: 'Extremamente importante', value: 1 },
	// 			{ answerText: 'Importante', value: 0.75 },
	// 			{ answerText: 'Pouco importante', value: 0.5 },
	// 			{ answerText: 'Tanto faz o tamanho', value: 0.25 },
	// 		],
  //     isImportanceQuestion: true,
	// 	},
  //   {
  //     index: 9,
	// 		questionText: 'Qual região dos Estados Unidos você tem preferência?',
	// 		answerOptions: [
	// 			{ answerText: 'Northeast', value: 1 },
	// 			{ answerText: 'South', value: 2 },
	// 			{ answerText: 'Southwest', value: 3 },
  //       { answerText: 'Midwest', value: 4 },
  //       { answerText: 'West', value: 5 },
	// 		],
	// 	},
  //   {
  //     index: 10,
	// 		questionText: 'Qual a importância de estar nessa regiao?',
	// 		answerOptions: [
	// 			{ answerText: 'Extremamente importante', value: 1 },
	// 			{ answerText: 'Importante', value: 0.75 },
	// 			{ answerText: 'Pouco importante', value: 0.5 },
	// 			{ answerText: 'Tanto faz o local', value: 0.25 },
	// 		],
  //     isImportanceQuestion: true,
	// 	},
  //   {
  //     index: 11,
	// 		questionText: 'Qual seu objetivo principal após a graduação?',
	// 		answerOptions: [
	// 			{ answerText: 'Continuar estudos em pós-graduação', value: 0 },
	// 			{ answerText: 'Empreender ou trabalhar nos EUA', value: 0 },
	// 			{ answerText: 'Trabalho voluntário ou missões', value: 0 },
	// 			{ answerText: 'Ainda estou explorando opções', value: 0 },
	// 		],
	// 	},
	// ];

	// const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [responses, setResponses] = useState({})
  const [completed, setCompleted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [collegeList, setCollegeList] = useState({})

  useEffect(() => {
    console.log(responses); // This will log the current state of responses whenever it changes
  }, [responses]);

  const handleContinue = () => {
    setCompleted(!completed)
    setLoading(true)
    const universityVectors = calculateUniversityVectors()
    const similarityScores = compareWithUniversities(responses, universityVectors)
    console.log("Univ Vectors: ", universityVectors)
    console.log("Scores: ", similarityScores)
    const universities = classifyUniversities(similarityScores, 6, 6, 6)
    console.log("College List: ", universities)
    // universities.dream
    setCollegeList(universities)
    // if (collegeList) setLoading(false)
  }

  const handleAnswerOptionClick = (answerOption) => {
    setResponses(prevResponses => {
      let newResponses = { ...prevResponses };
    
      if (questions[currentQuestion].index != 12) {
          if (questions[currentQuestion].isImportanceQuestion) {
            // Multiplica o valor da última resposta pelo valor da resposta de importância
            newResponses[currentQuestion - 1] *= answerOption.value;
          } else {
            // Adiciona o valor da resposta atual ao objeto
            newResponses[currentQuestion] = answerOption.value;
          }
        }
        // Prossiga para a próxima pergunta
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setCurrentQuestion(nextQuestion);
          setShowScore(true);
        }
      
        return newResponses;
    });
    // chooseIcon(questions[currentQuestion].index)
  };

	return (
    <div className='flex flex-col items-center justify-center h-full font-custom'>
      {/* <div className='bg-[#F4F7FA] min-h-[200px] h-min rounded-[15px] p-[20px] flex justify-evenly relative '> */}
        <div className='h-full flex'>
        {showScore ? (
          <div className='h-full flex items-center justify-center w-full'>
            {completed ? 
              <div className='h-full flex flex-col items-center justify-center w-full mt-[70px] md:mt-[40px] pb-[40px] md:pb-[20px]'>
                <p className='text-[24px] mb-[20px]'>College List</p>
                <CollegeList collegeList={collegeList}/>
              </div>
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
          <div className='flex md:flex-col flex-col justify-center mt-[20px] items-center px-[30px]'>
            <div className='flex flex-col items-center justify-center w-full relative text-[#141414]'>
              <div className='mb-[20px]'>
                <span className='text-[26px] whitespace-nowrap'>Pergunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='w-full mb-[12px]'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='w-full flex flex-col justify-between'>
              {questions[currentQuestion].answerOptions.map((answerOption, key) => (
                <button key={key} className='focus:outline-none hover:bg-white w-full text-[16px] text-[#141414] bg-[#F4F7FA] rounded-[15px] flex py-[5px] px-[10px] justify-start items-center border-solid border-[3px] border-[#e9e9e9] mt-[8px] text-left' onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption.answerText}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
	);
}