import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { StyledInput } from '../forms/StyledInput';

export function SignInRightComponentText() {
  return (
    <div className="flex flex-col items-center justify-center text-white md:mt-10 mt-5">
      <p className="font-normal text-lg">{`Don't have an account?`}</p>
      <Link href="/portal/auth/signup" className="font-normal text-lg underline text-accent-cyan-b0">Sign up now!</Link>
    </div>
  ) 
}

const Input = React.forwardRef(
  function Input(props, ref) {
    return (
      <div className="flex flex-col mt-4">
        {props.label && (<label className='text-black mb-1'>{props.label}</label>)}
        <input className={`text-primary-blue-d2 focus:border-2 border border-solid border-primary-blue-d2 rounded-lg w-[300px] h-[48px] px-4 ${props.className}`} {...props} ref={ref} />
      </div>
    )
  }
);

export function SignInFormComponent({onSubmit}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [globalError, setGlobalError] = useState(null);
  
  return (
    <>
      <p className='font-medium text-[36px]'>Sign In</p>
      <div className="flex flex-col items-center justify-center mt-8">
        <form onSubmit={handleSubmit(async data => {
            await onSubmit(data, setGlobalError)
        })}className="flex flex-col items-center justify-center text-white">
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
          {/* <Input label="Email" {...register("email", {
            required: 'Email is required', 
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address"
            }})}/>
          {errors.email && <p className="text-neg-b0 -mb-4">{errors.email.message}</p>}
          <Input label="Password" type="password" {...register("password", { required: 'Password is required'})}/>
          {errors.password && <p className="text-neg-b0 -mb-4">{errors.password.message}</p>} */}
          <p className={`text-neg-b0 ${globalError ? 'opacity-100' : 'opacity-0'}`}>{globalError || 'Error'}</p>
          <button type="submit" className="bg-primary-blue-d1 rounded-lg w-[280px] h-[48px] uppercase text-center text-white mt-[5px] text-[21px]">Sign In</button>
          <Link href="/portal/auth/forgot-password"className="font-normal text-lg underline text-accent-blue-b0 mt-[10px]">Forgot your password?</Link>
        </form>
      </div>
    </>
  )
}