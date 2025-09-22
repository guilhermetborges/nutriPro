export function Footer(){
    return (
        <footer className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 mt-8"> 
            <p className="text-center text-gray-600 md:text-base"> Developer by <a href="https://github.com/guilhermetborges" className="underline text-purple-600 hover:text-black ">guilhermetborges</a>  {new Date().getFullYear()} NutriPro. © Todos os direitos reservados.</p>
        </footer>
    )
}