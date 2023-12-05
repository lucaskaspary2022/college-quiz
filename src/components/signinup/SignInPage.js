import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { auth } from './firebase-config'; // Import Firebase authentication
import Link from 'next/link';
import { StyledInput } from '../forms/StyledInput';

export function SignInFormComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [globalError, setGlobalError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await auth.signInWithEmailAndPassword(email, password);
      // Redirect after successful sign-in or handle authentication state change
    } catch (error) {
      // Set error message from Firebase
      setGlobalError(error.message);
    }
  };

  return (
    <>
      <p className='font-medium text-[36px]'>Sign In</p>
      <div className="flex flex-col items-center justify-center mt-8">
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
                message: "Invalid email address"
              } 
            }}
          />
          <StyledInput 
            type='password'
            placeholder='Password'
            error={errors.password}
            register={register}
            name={'password'}
          />
          <p className={`text-neg-b0 ${globalError ? 'opacity-100' : 'opacity-0'}`}>{globalError || 'Error'}</p>
          <button type="submit" className="bg-primary-blue-d1 rounded-lg w-[280px] h-[48px] uppercase text-center text-white mt-[5px] text-[21px]">Sign In</button>
          <Link href="/portal/auth/forgot-password" className="font-normal text-lg underline text-accent-blue-b0 mt-[10px]">Forgot your password?</Link>
        </form>
      </div>
    </>
  )
}