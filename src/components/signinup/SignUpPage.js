"use client";

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';
import { StyledInput } from '../forms/StyledInput';
import { initializeApp } from "firebase/app";

function SignUpFormPartOne({onSubmit, useSignUpForm}) {
  const { watch, register, handleSubmit, formState: { errors } } = useSignUpForm;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center text-white">
      <StyledInput 
        type='text'
        placeholder='Email'
        error={errors.email}
        register={register}
        name={'email'}
        registerOptions={{
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email Invalido"
          } 
        }}
      />
      <StyledInput 
        type='password'
        placeholder='Senha'
        error={errors.password}
        register={register}
        name={'password'}
      />
      <StyledInput 
        type='password'
        placeholder='Confirmar Senha'
        error={errors.confirmPassword}
        register={register}
        name={'confirmPassword'}
        registerOptions={{
          validate: (val) => {
            if (watch('password') != val) {
              return "Senhas incompatíveis";
            }
          }
        }}
      />
      <button type="submit" className="px-4 bg-[#ef4444] rounded-lg w-[280px] h-[48px] uppercase text-center text-white mt-6 text-[21px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-1"></div>
          <p className='text-white'>Continuar</p>
          <div className="flex flex-1 justify-end text-white">
            <HiChevronRight size={32}/>
          </div>
        </div>
      </button>
    </form>
  )
}

export default function SignUpFormComponent() {
  const form1 = useForm({
    mode: 'all',
  });
  const [globalError, setGlobalError] = useState('');

  const handleFinalSubmit = async (data) => {
    try {
      const firebaseConfig = {
        apiKey: "AIzaSyDtFWQUJjprGLOAZiAKYBZDdTmYzi914pY",
        authDomain: "plataforma-conquistando-f33bb.firebaseapp.com",
        databaseURL: "https://plataforma-conquistando-f33bb-default-rtdb.firebaseio.com",
        projectId: "plataforma-conquistando-f33bb",
        storageBucket: "plataforma-conquistando-f33bb.appspot.com",
        messagingSenderId: "590905535773",
        appId: "1:590905535773:web:28510442a4591b548845f4",
        measurementId: "G-652N3GZJY1"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      // const auth = getAuth(app);
      // const { email, password } = data; // Assuming these fields are named 'email' and 'password'
      // await createUserWithEmailAndPassword(auth, email, password);
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          if (user) {
            router.push('/quiz');
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      // Handle successful registration (e.g., redirecting to a dashboard)
    } catch (error) {
      // Handle Firebase errors
      setGlobalError(error.message);
    }
  };

  return (
    <>
      <div className="w-full flex-row flex items-center justify-center">
        <p className='font-medium text-[36px]'>Registrar</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-2">
        <SignUpFormPartOne useSignUpForm={form1} onSubmit={handleFinalSubmit}/>
        {globalError && <p className="text-red-500">{globalError}</p>}
      </div>
    </>
  )
}