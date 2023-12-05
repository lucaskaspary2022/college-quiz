import React, { useState } from 'react'

const CollegeList = () => {

    const [colleges, setColleges] = useState([
        "University of South Florida",
        "New York University",
        "Columbia University",
        "Princeton University",
        "University of South Carolina",
        "University of Miami",
        "University of Kentucky",
        "Iowa State University",
        "Arizona State University",
        "Ohio State University"
    ])

    const getColor = (index) => {
        // Top 3 indices
        if (index < 3) return 'bg-green-500';
        // Last 3 indices
        if (index >= colleges.length - 3) return 'bg-red-500';
        // All other indices
        return 'bg-orange-500';
    };

    return (
        <ol className='flex flex-col justify-start items-center w-full overflow-y-scroll h-full'>
            {colleges.map((college, index) => (
                // <ol className='flex items-start justify-start w-full'>
                    <li className='flex flex-row items-center justify-start bg-blue-300 w-full mb-[10px] rounded-l-lg rounded-r-lg'>
                        <div className={`flex items-center justify-center text-white text-[20px] h-full py-[10px] px-[20px] rounded-l-lg ${getColor(index)}`}>
                            {index + 1}
                        </div>
                        <div className='flex items-center justify-start text-[20px] rounded-r-lg pl-[10px]'>
                            {college}
                        </div>                        
                    </li>
                // </ol>
            ))}
        </ol>
    )
}

export default CollegeList