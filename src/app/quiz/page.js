"use client"

import React, { useState, useEffect } from 'react';
// import Logo from '../../assets/logo_completa.png';
import SmallLogo from '../../../assets/logo.png'
import Image from 'next/image';
import Quiz from '../../components/quiz/quiz';
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoCashOutline } from "react-icons/io5";
import { FaSchool } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaFlagUsa } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { useAuth } from '@/context/authContext';

function QuizPage() {

  const [icon, setIcon] = useState(false)
  // const { user } = useAuth();
  
  	const questions = [
		{
      index: 1,
			questionText: 'Qual tipo de clima você prefere?',
			answerOptions: [
				{ answerText: 'Clima quente', value: 1 },
				{ answerText: 'Clima ameno', value: 2 },
				{ answerText: 'Clima frio', value: 3 },
			],
      icon: <IoPartlySunnyOutline size={150} color='white'/>,
      smallicon:  <IoPartlySunnyOutline size={60} color='black'/>
		},
    {
      index: 2,
			questionText: 'Qual a importância do clima na sua decisão de escolha de universidade?',
			answerOptions: [
				{ answerText: 'Extremamente importante', value: 1 },
				{ answerText: 'Importante', value: 0.75 },
				{ answerText: 'Pouco importante', value: 0.5 },
				{ answerText: 'Vou para qualquer clima', value: 0 },
			],
      isImportanceQuestion: true,
      icon: <IoPartlySunnyOutline size={150} color='white'/>,
      smallicon:  <IoPartlySunnyOutline size={60} color='black'/>
		},
		{
      index: 3,
			questionText: 'Como você avalia sua capacidade de financiar seus estudos nos EUA?',
			answerOptions: [
				{ answerText: 'Posso pagar integralmente sem ajuda financeira', value: 0 },
				{ answerText: 'Preciso de ajuda financeira parcial', value: 1 },
				{ answerText: 'Dependo principalmente de bolsas de estudo e ajuda financeira', value: 2 },
			],
      icon: <IoCashOutline size={150} color='white'/>,
      smallicon:  <IoCashOutline size={60} color='black'/>
		},
		{
      index: 4,
			questionText: 'Qual a importância de bolsas de estudo e ajuda financeira na sua decisão de escolha de universidade?',
			answerOptions: [
				{ answerText: 'Extremamente importante', value: 1 },
				{ answerText: 'Importante', value: 0.75 },
				{ answerText: 'Pouco importante', value: 0.5 },
				{ answerText: 'Nao Preciso de ajuda financeira', value: 0 },
			],
      isImportanceQuestion: true,
      icon: <IoCashOutline size={150} color='white'/>,
      smallicon:  <IoCashOutline size={60} color='black'/>
		},
		{
      index: 5,
			questionText: 'Como você descreveria seu desempenho acadêmico?',
			answerOptions: [
				{ answerText: 'Acima da média, com notas excelentes (9-10)', value: 1 },
				{ answerText: 'Um pouco acima da média, com bom desempenho acadêmico (7-8)', value: 1.5 },
				{ answerText: 'Na média, com espaço para melhoria (6)', value: 2 },
				{ answerText: 'Abaixo da média (<6)', value: 3 },
			],
      icon: <FaBookOpenReader size={150} color='white'/>,
      smallicon:  <FaBookOpenReader size={60} color='black'/>
		},
    {
      index: 6,
			questionText: 'Você busca uma universidade com um ambiente acadêmico altamente competitivo?',
			answerOptions: [
				{ answerText: 'Sim, estou buscando o mais alto nível de desafio acadêmico', value: 1 },
				{ answerText: 'Não, prefiro um ambiente acadêmico equilibrado', value: 2 },
				{ answerText: 'Não, prefiro um ambiente acadêmico mais acolhedor e menos competitivo', value: 3 },
			],
      icon: <IoSchoolSharp size={150} color='white'/>,
      smallicon:  <IoSchoolSharp size={60} color='black'/>
		},
    {
      index: 7,
      questionText: 'Qual a importância da competitividade da Universidade para você?',
      answerOptions: [
        { answerText: 'Extremamente importante', value: 1 },
        { answerText: 'Importante', value: 0.75 },
        { answerText: 'Pouco importante', value: 0.5 },
        { answerText: 'Não é importante', value: 0 },
      ],
      isImportanceQuestion: true,
      icon: <IoSchoolSharp size={150} color='white'/>,
      smallicon:  <IoSchoolSharp size={60} color='black'/>
    },
    {
      index: 8,
			questionText: 'Qual tamanho de universidade você prefere?',
			answerOptions: [
				{ answerText: 'Pequena (menos de 5.000 alunos)', value: 1 },
				{ answerText: 'Média (5.000 a 15.000 alunos)', value: 2 },
				{ answerText: 'Grande (mais de 15.000 alunos)', value: 3 },
			],
      icon: <FaSchool size={150} color='white'/>,
      smallicon:  <FaSchool size={60} color='black'/>
		},
    {
      index: 9,
			questionText: 'Qual a importância do tamanho da Universidade?',
			answerOptions: [
				{ answerText: 'Extremamente importante', value: 1 },
				{ answerText: 'Importante', value: 0.75 },
				{ answerText: 'Pouco importante', value: 0.5 },
				{ answerText: 'Tanto faz o tamanho', value: 0 },
			],
      isImportanceQuestion: true,
      icon: <FaSchool size={150} color='white'/>,
      smallicon:  <FaSchool size={60} color='black'/>
		},
    {
      index: 10,
			questionText: 'Qual cidades/região dos Estados Unidos você tem preferência?',
			answerOptions: [
				{ answerText: 'Nova York, NY', value: 1 },
				{ answerText: 'Miami, Florida', value: 2 },
				{ answerText: 'Phoenix, Arizona', value: 3 },
        { answerText: 'Chicago, Illinois', value: 4 },
        { answerText: 'Portland, Oregon', value: 5 },
			],
      icon: <FaFlagUsa size={150} color='white'/>,
      smallicon:  <FaFlagUsa size={60} color='black'/>
		},
    {
      index: 11,
			questionText: 'Qual a importância de estar nessa regiao?',
			answerOptions: [
				{ answerText: 'Extremamente importante', value: 1 },
				{ answerText: 'Importante', value: 0.75 },
				{ answerText: 'Pouco importante', value: 0.5 },
				{ answerText: 'Tanto faz o local', value: 0 },
			],
      isImportanceQuestion: true,
      icon: <FaFlagUsa size={150} color='white'/>,
      smallicon:  <FaFlagUsa size={60} color='black'/>
		},
    {
      index: 12,
			questionText: 'Qual seu objetivo principal após a graduação?',
			answerOptions: [
				{ answerText: 'Continuar estudos em pós-graduação', value: 0 },
				{ answerText: 'Empreender ou trabalhar nos EUA', value: 0 },
				{ answerText: 'Trabalho voluntário ou missões', value: 0 },
				{ answerText: 'Ainda estou explorando opções', value: 0 },
			],
      icon: <GoGoal size={150} color='white'/>,
      smallicon:  <GoGoal size={60} color='black'/>
		},
	];

  const adjustSpacing = () => {
    if (currentQuestion > 11) return 'top-[-52px]'
    return 'top-[-40px] p-[20px]'
  }

	const [currentQuestion, setCurrentQuestion] = useState(0);
  const [start, setStart] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center h-screen py-[100px] bg-[#0e1532]'>
      <div className="flex flex-col md:flex-row h-full items-center justify-center bg-[#0e1532] pt-[100px] font-custom">
        {/* <PortalBG /> */}
        {/* <div className="md:hidden flex-1" /> */}
        <div className="shadow-xl overflow-visible w-[90vw] sm:w-[70vw] min-h-[360px] md:h-[464px] md:w-[928px] flex flex-col md:flex-row items-center justify-center relative mx-[15px]">
          <div className={`md:hidden bg-[#F4F7FA] rounded-full w-fit absolute ${adjustSpacing()}`}>
            {/* <Image alt='small-logo' src={SmallLogo} height={100} width={100}/>
            */}
            {/* <FaBookOpenReader size={50}/> */}
            { start ?
              <>{currentQuestion > 11 ? <Image alt='big-logo' src={SmallLogo} height={100} width={100}/> : questions[currentQuestion].smallicon}</>
              : <Image alt='big-logo' src={SmallLogo}  width={50}/>
              }
          </div>
          <div className="bg-[#F4F7FA] rounded-xl md:rounded-r-none flex flex-col h-full w-full md:w-1/2 md:p-8 p-8 items-center justify-center">
            {start ? <Quiz questions={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/> : 
            <div className='flex flex-col justify-between items-center text-center p-[20px] text-[26px]'>
              <h1>Faça o teste de perfil e descubra quais faculdades mais combinam com você.</h1>
              <button className='focus:outline-none hover:bg-red-400 w-[50%] text-[16px] bg-red-500 rounded-[15px] flex py-[10px] px-[10px] justify-center text-white items-center border-solid border-[3px] border-red-400 mt-[50px]' onClick={() => setStart(!start)}>START</button>
            </div>
            }
          </div>
          <div className="hidden rounded-r-xl md:flex flex-col items-center justify-center h-full w-1/2 bg-red-500">
            <div className="flex text-white flex-col items-center justify-center">
              { start ?
                <>{currentQuestion > 11 ? <Image alt='big-logo' src={SmallLogo} height={280} width={280}/> : questions[currentQuestion].icon}</>
                : <Image alt='big-logo' src={SmallLogo} height={280} width={280}/>
              }
            </div>
          </div>
        </div>
      </div>
     <div className='mt-[20px] md:mt-[40px]'>
         <Image src={SmallLogo} alt='bottom-logo' width={120}/>
       </div>
    </div>

  )
}

export default QuizPage;
