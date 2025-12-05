export default function Footer(){
    return(
        <footer className="bg-white border-t border-sky-100 py-8 mt-16">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-xl font-semibold text-sky-700">Sujal Taneja</h3>
                <p className="text-gray-500 text-sm mt-1">Frontend Developer • React • JavaScript</p>
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://github.com/mniSujalTaneja" target="_blank" className="text-gray-600 hover:text-sky-600 transition text-2xl">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="" target="_blank" className=" text-gray-600 hover:text-sky-600 transition text-2xl">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="mailto:mnisujaltaneja@gmail.com" className="text-gray-600 hover:text-sky transition text-2xl [&>*]:hover:text-sky-600 ">
                        <i className="bi bi-envelope-fill"></i>
                    </a>
                </div>
                <p className="text-gray-400 text-xs mt-6">
                    © {new Date().getFullYear()} Sujal. All rights reserved
                </p>
            </div>
        </footer>
    )
}