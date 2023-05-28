import React from 'react'
import edyoda from '../images/EDYODA.png'
import search from '../icons/Vector.png'
function Header() {
    return (
        <nav className='md:w-full md:flex  md:justify-between bg-white items-center md:gap-8 md:py-2 md:px-20 shadow-lg'>
            <div className='flex flex-col md:flex-row md:gap-4 items-center'>
                <img src={edyoda} alt="edyoda.png" />
                <>
                    <h1 className='ml-6 font-relway font-semibold'>Courses</h1>
                    <select className='outline-none w-4 '>
                        <option value="1"  >React JS</option>
                        <option value="1" >Full Stack Developer</option>
                        <option value="2" >Data Scientist</option>
                    </select>
                </>

                <h1 className='ml-6 font-relway font-semibold'>Programs</h1>
                <select className='outline-none w-4 '>
                    <option value="1"  >React JS</option>
                    <option value="1" >Full Stack Developer</option>
                    <option value="2" >Data Scientist</option>
                </select>
            </div>
            <div className='flex gap-10 items-center'>
                <input type="text" className='outline-none px-2 hover:border-b' ></input>
                <button>
                    <img src={search} alt="search" />
                </button>


                <button className='bg-none border-none font-relway font-semibold'>Log in</button>
                <button className='bg-gradient-to-br from-blue-600 to-blue-300 py-[7px] rounded-[52px] text-white  px-8 font-relway font-semibold'>Join now</button>
            </div>
        </nav>
    )
}

export default Header
