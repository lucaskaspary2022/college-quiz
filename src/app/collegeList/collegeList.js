import React, { useState, useEffect } from 'react'
import '../globals.css'
import { useRouter } from 'next/navigation'

const CollegeList = ({ collegeList }) => {
    
    useEffect(() => {
        console.log(collegeList.dream)
    }, [])

    const router = useRouter()

    const handleButton = () => {
        router.push('http://conquistandomundo.com.br/');
    }

    const getColor = (category) => {

        console.log("Length: ", collegeList.length)

        if (category == 'dream') return 'bg-green-400';
        // Last 3 indices
        if (category == 'safety') return 'bg-red-400';
        // All other indices
        return 'bg-orange-400';            
        // Top 3 indices
    };

    const sortedCategories = ['dream', 'match', 'safety'];

    return (
        <div className='flex flex-col justify-start items-center w-full overflow-y-scroll h-full'>
            {sortedCategories.map((category) => (
                <div key={category} className='flex flex-col w-full'>
                    <h2 className='text-[20px] text-[#2d2d2d] font-semi-bold mb-[10px]'>{category == 'dream'? 'Dream' : <>{category == 'match' ? 'Match' : 'Safety' }</> }</h2>
                    <ul className='flex flex-col items-start justify-start w-full h-full'>
                    {Object.entries(collegeList[category]).map(([school, number], index) => (
                        <li key={school} className='flex flex-row items-center justify-start w-full mb-[10px] rounded-l-lg rounded-r-lg h-full'>
                            <div className={`flex items-center justify-center text-white text-[20px] h-full py-[10px] px-[20px] rounded-l-lg ${getColor(category)}`}>
                                <p className='h-full'>{index + 1}</p>
                            </div>
                            <div key={school} className='flex items-center text-[#2d2d2d] h-full w-full justify-start bg-[#eaeaea] text-[18px] rounded-r-lg px-[10px] py-[10px]'>
                                <p className='h-full'>{school}</p>
                            </div>
                            <div className='flex items-center justify-center text-[#2d2d2d] text-[18px] font-bold bg-blue-100 h-full rounded-lg py-[5px] px-[10px] ml-[8px]'>
                                <p className='h-full'>{(number * 100).toFixed(1)}%</p>
                            </div>                             
                        </li>
                    ))}
                    </ul>
                </div>
            ))}  
            <button className='focus:outline-none w-full hover:bg-red-400  text-[16px] bg-red-500 rounded-[15px] flex py-[10px] px-[10px] justify-center text-white items-center border-solid border-[3px] border-red-400 mt-[20px]' onClick={handleButton}>Quero Estudar nos EUA</button>
        </div>
    )
}

export default CollegeList