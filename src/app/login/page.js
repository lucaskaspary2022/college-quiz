"use client"
import React from 'react';
import Logo from '../../../assets/logo_completa.png';
import SmallLogo from '../../../assets/logo.png'
import Image from 'next/image';
import SignUpFormComponent from '../../components/signinup/SignUpPage'
import { useRouter } from 'next/navigation';
// import { SignInRightComponentText, SignInFormComponent } from './SignInPage';
// import { SignUpRightComponentText, SignUpFormComponent } from './SignUpPage';
// import PortalBG from '../backgrounds/PortalBg';

function SignInUpPage() {
  // const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center h-screen py-[100px] bg-[#0e1532]'>
      <div className="flex flex-col md:flex-row h-full items-center justify-center bg-[#0e1532] pt-[100px] font-custom">
      {/* <PortalBG /> */}
      <div className="md:hidden flex-1" />
      <div className="shadow-xl overflow-visible min-h-[360px] md:h-[464px] md:w-[928px] flex flex-col md:flex-row items-center relative">
        <div className="md:hidden bg-[#F4F7FA] rounded-full w-fit absolute top-[-52px]">
          <Image src={SmallLogo} height={100} width={100}/>
        </div>
        <div className="bg-[#F4F7FA] rounded-xl md:rounded-r-none flex flex-col h-full w-full md:w-1/2 md:p-8 p-8 items-center justify-center">
            {/* <SignUpFormComponent router={router}/> */}
            <SignUpFormComponent/>
          {/* {signUp ? <SignUpFormComponent onSubmit={onSubmit}/> : <SignInFormComponent onSubmit={onSubmit}/>} */}
        </div>
        <div className="hidden rounded-r-xl md:flex flex-col items-center justify-center h-full w-1/2 bg-red-500">
          <div className="flex text-white flex-col items-center justify-center">
            <Image src={SmallLogo} height={280} width={280}/>
          </div>
          <div>
            {/* {signUp ? <SignUpRightComponentText /> : <SignInRightComponentText />} */}
          </div>
        </div>
      </div>
      <div className="md:hidden flex-1">
        {/* {signUp ? <SignUpRightComponentText /> : <SignInRightComponentText />} */}
      </div>
    </div>
      <div className='mt-[20px] md:mt-[40px]'>
        <Image src={SmallLogo} alt='bottom-logo' width={120}/>
      </div>
    </div>
  )
}

export default SignInUpPage;
