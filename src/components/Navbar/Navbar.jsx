import React, { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className='text-xl font-bold text-[#0F172A]'>
                    Sujal Taneja<span className='text-[#3B82F6]'>...</span>
                </h1>
                <div className='hidden md:flex space-x-8 text-[#0F172A] font-medium'>
                    <a href="#home" className='hover:text-[#3B82F6]'>Home</a>
                    <a href="#projects" className='hover:text-[#3B82F6]'>Projects</a>
                    <a href="#skills" className='hover:text-[#3B82F6]'>Skills</a>
                </div>
                <a href="mailto:mnisujaltaneja@gmail.com" className='hidden md:block bg-[#3B82F6] text-white px-5 py-2 rounded-md hover:opacity-90 transition'>
                    Hire Me
                </a>
                <button className='md:hidden text-[#0F172A] text-2xl focus:outline-none' onClick={() => setOpen(!open)}>
                    ☰
                </button>
            </div>
            {open && (<div className='md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-[#0F172A] font-medium'>
                <a href="#home" className='block hover:text-[#3B82F6] transition' onClick={() => setOpen(false)}>Home</a>
                <a href="#projects" className='block hover:text-[#3B82F6] transition' onClick={() => setOpen(false)}>Projects</a>
                <a href="#skills" className='block hover:text-[#3B82F6] transition' onClick={() => setOpen(false)}>Skills</a>
                <a href="mailto:mnisujaltaneja@gmail.com" className='block bg-[#3B82F6] text-white w-full text-center px-5 py-2 rounded-md hover:opacity-90 transition'>Hire Me</a>
            </div>)}
        </nav>
    )
}

export default Navbar