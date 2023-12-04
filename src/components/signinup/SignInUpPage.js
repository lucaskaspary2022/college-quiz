import React from 'react';
import Logo from '../logo/Logo';
import { SignInRightComponentText, SignInFormComponent } from './SignInPage';
import { SignUpRightComponentText, SignUpFormComponent } from './SignUpPage';
import PortalBG from '../backgrounds/PortalBg';

function SignInUpPage({signUp = false, onSubmit}) {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center">
      <PortalBG />
      <div className="md:hidden flex-1" />
      <div className="shadow-xl overflow-visible min-h-[360px] md:h-[464px] md:w-[928px] flex flex-col md:flex-row items-center relative">
        <div className="md:hidden bg-[#F4F7FA] p-[20px] rounded-full w-fit absolute top-[-52px]">
          <Logo height={60} width={60}/>
        </div>
        <div className="bg-[#F4F7FA] rounded-xl md:rounded-r-none flex flex-col h-full w-full md:w-1/2 md:p-8 p-8 items-center justify-center">
          {signUp ? <SignUpFormComponent onSubmit={onSubmit}/> : <SignInFormComponent onSubmit={onSubmit}/>}
        </div>
        <div className="hidden rounded-r-xl md:flex flex-col bg-gradient-to-t items-center justify-center from-primary-blue-d4 to-primary-blue-d2 h-full w-1/2">
          <div className="flex text-white flex-col items-center justify-center">
            <Logo height={180} width={180}/>
            <h1 className='font-bold text-6xl'>BRASA</h1>
            <h2 className="italic font-light tracking-widest text-4xl uppercase">CONNECT</h2>
          </div>
          <div>
            {signUp ? <SignUpRightComponentText /> : <SignInRightComponentText />}
          </div>
        </div>
      </div>
      <div className="md:hidden flex-1">
        {signUp ? <SignUpRightComponentText /> : <SignInRightComponentText />}
      </div>
    </div>
  )
}

export default SignInUpPage;
