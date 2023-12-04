"use client";

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';
import { StyledInput } from '../forms/StyledInput';

function SignUpFormPartOne({onSubmit, useSignUpForm}) {
  const { watch, register, handleSubmit, formState: { errors } } = useSignUpForm;
  return (
    <form onSubmit={handleSubmit(async data => {
        await onSubmit(data)
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
      <StyledInput 
        type='password'
        placeholder='Confirm Password'
        error={errors.confirmPassword}
        register={register}
        name={'confirmPassword'}
        registerOptions={{
          validate: (val) => {
            if (watch('password') != val) {
              return "Your passwords do no match";
            }
          }
        }}
      />
      {/* <Input label="Email" {...register("email", {
        required: 'Email is required', 
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: "Invalid email address"
        }})}/>
      {errors.email && <p className="text-neg-b0">{errors.email.message}</p>}
      <Input label="Password" type="password" {...register("password", { required: 'Password is required'})}/>
      {errors.password && <p className="text-neg-b0">{errors.password.message}</p>}
      <Input label="Confirm Password" type="password" {...register("confirmPassword", { required: 'Confirm password is required', 
        validate: (val) => {
          if (watch('password') != val) {
            return "Your passwords do no match";
          }
          }
        })}
      />
      {errors.confirmPassword && <p className="text-neg-b0">{errors.confirmPassword.message}</p>}*/}
      <button type="submit" className="px-4 bg-primary-blue-d1 rounded-lg w-[280px] h-[48px] uppercase text-center text-white mt-6 text-[21px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-1"></div>
          <p className='text-black'>Next</p>
          <div className="flex flex-1 justify-end text-black">
            <HiChevronRight size={32}/>
          </div>
        </div>
      </button>
    </form>
  )
}

export default function SignUpFormComponent({onSubmit}) {
  const form1 = useForm({
    mode: 'all',
  });
  const form2 = useForm({
    mode: 'all',
  });
  const [toSubmitStep, setToSubmitStep] = React.useState(false);
  return (
    <>
      <div className="w-full flex-row flex items-center justify-center">
        {toSubmitStep && (<button className="flex-1" onClick={() => setToSubmitStep(false)}>
          <HiChevronLeft size={32} className="hover:fill-accent-blue-b0"/>
          </button>)
        }
        <p className='font-medium text-[36px]'>Sign Up</p>
        {toSubmitStep && <div className="flex-1"></div>}
      </div>
      <div className="flex flex-col items-center justify-center mt-2">
        {!toSubmitStep ? (
          <SignUpFormPartOne useSignUpForm={form1} onSubmit={async (data) => {
            setToSubmitStep(data);
          }}/>
        ) : (
          <SignUpFormPartTwo useSignUpForm={form2} onSubmit={
            async (data, setGlobalError) => {
              form1.handleSubmit(async form1Data => {
              await onSubmit({...form1Data, ...data}, setGlobalError);
            })();
          }}/>
        )}
      </div>
    </>
  )
}