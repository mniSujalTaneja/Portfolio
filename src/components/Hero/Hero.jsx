import React from 'react'

const Hero = () => {
    return (
        <section id='home' className='w-full min-h-screen flex items-center bg-gradient-to-r from-white to-[#E0F2FF] pt-24'>
            <div className='max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10'>
                <div className='flex flex-col justify-center'>
                    <h1 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight">
                        Hi, I'm Sujal.
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#0F172A] mt-2">
                        I build clean, responsive and modern websites.
                    </h2>

                    <p className='mt-4 text-[#475569] text-lg'>
                        I turn ideas into real working projects using HTML, CSS, JavaScript, and React.
                    </p>
                    <div className='mt-6 flex space-x-4'>
                        <a href="#projects" className='bg-[#3B82F6] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition'>
                            See My Projects
                        </a>
                        <a href="mailto:mnisujaltaneja@gmail.com" className='border-2 border-[#3B82F6] px-6 py-3 rounded-md font-medium hover:bg-[#3B82F6] hover:text-white transition'>
                            Hire Me
                        </a>
                    </div>
                </div>
                <div className='flex mt-10 items-center justify-center md:mt-0'>
                    <div className='w-40 h-40 md:w-64 md:h-64 bg-white shadow-md rounded-xl border border-[#E2E8F0]'></div>
                </div>
            </div>

        </section>
    )
}

export default Hero