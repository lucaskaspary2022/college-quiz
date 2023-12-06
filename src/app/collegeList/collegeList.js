import React, { useState, useEffect } from 'react'
import '../globals.css'

const CollegeList = ({ collegeList }) => {

    // const [colleges, setColleges] = useState([
    //     "University of South Florida",
    //     "New York University",
    //     "Columbia University",
    //     "Princeton University",
    //     "University of South Carolina",
    //     "University of Miami",
    //     "University of Kentucky",
    //     "Iowa State University",
    //     "Arizona State University",
    //     "Ohio State University"
    // ])
    
    useEffect(() => {
        console.log(collegeList.dream)
    }, [])
    

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
                    <h2 className='text-[20px] font-semi-bold mb-[10px]'>{category == 'dream'? 'Dream' : <>{category == 'match' ? 'Match' : 'Safety' }</> }</h2>
                    <ul className='flex flex-col items-start justify-start w-full'>
                    {Object.entries(collegeList[category]).map(([school, number], index) => (
                        <li key={school} className='flex flex-row items-center justify-start w-full mb-[10px] rounded-l-lg rounded-r-lg'>
                            <div className={`flex items-center justify-center text-white text-[20px] h-full py-[10px] px-[20px] rounded-l-lg ${getColor(category)}`}>
                                {index + 1}
                            </div>
                            <div key={school} className='flex items-center h-full w-full justify-start bg-[#eaeaea] text-[18px] rounded-r-lg px-[10px] py-[10px]'>
                                {school}
                            </div>
                            <div className='flex items-center justify-center text-[18px] font-bold bg-blue-100 h-full rounded-lg py-[5px] px-[10px] ml-[8px]'>
                                {(number * 100).toFixed(1)}%
                            </div>                             
                        </li>
                    ))}
                    </ul>
                </div>
            ))}                
        </div>
    //   </div>
        // <ol className='flex flex-col justify-start items-center w-full overflow-y-scroll h-full'>
        //     {collegeList ? collegeList.dream.map((college, index) => (
        //         // <ol className='flex items-start justify-start w-full'>
        //             <li key={index} className='flex flex-row items-center justify-start bg-[#eaeaea] w-full mb-[10px] rounded-l-lg rounded-r-lg'>
        //                 <div className={`flex items-center justify-center text-white text-[20px] h-full py-[10px] px-[20px] rounded-l-lg ${getColor(index)}`}>
        //                     {index + 1}
        //                 </div>
        //                 <div className='flex items-center justify-start text-[20px] rounded-r-lg px-[10px]'>
        //                     {college}
        //                 </div>                        
        //             </li>
        //         // </ol>
        //     )) : <div></div>}
        // </ol>
    )
}

export default CollegeList