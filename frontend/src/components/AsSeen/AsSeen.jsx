import React from 'react'

import BGCURVE from '../../assets/curvebg.png'

const AsSeen = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-10 px-6 sm:px-8 lg:px-12" >
                <div className="relative w-full max-w-screen-2xl p-8 text-center rounded-lg 
               overflow-hidden"
                    style={{
                        backgroundImage: `url(${BGCURVE})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">As Seen On</h2>
                    <p className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 italic mb-6">
                        "The place with its constant excellence, soul, and style"
                    </p>
                    <button className="px-4 py-2 font-semibold text-gray-800 border 
               rounded-full hover:bg-[#ffe9e4] hover:text-gray-900 transition duration-300 ease-in-out">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AsSeen