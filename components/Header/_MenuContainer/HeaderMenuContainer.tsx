import { FC } from "react";

interface IHeaderMenuContainerProps {
    isOpen: boolean
}

export const HeaderMenuContainer: FC<IHeaderMenuContainerProps> = ({ isOpen }) => {
    const openClass = isOpen ? 'w-full opacity-100' : 'w-0 opacity-1'
    return (
        <nav
            className={openClass + " transition-all duration-500 ease-in-out block overflow-hidden fixed animate-sideways-once h-screen bg-black text-white pt-8 z-40 top-0 right-0"}>
            <div className="relative flex flex-col-reverse sm:flex-col gap-2">
                <div className="h-[180px] w-[140px] overflow-hidden sm:h-auto sm:w-auto mx-auto">

                </div>
                <h2 className="text-center text-2xl sm:text-[120px] z-20 sm:mt-[-150px]">Артур Геращенко</h2>
            </div>
            <ul className="flex flex-col items-center gap-4 justify-end mt-4 sm:mt-[140px]">
                <li className="relative"><a className="text-lg text-purple-300" href="/">Обо мне</a></li>
                <li className="relative"><a className="text-lg text-gray-400" href="/lets_goto_it">Уйти в IT!</a></li>

                <div className="flex text-white gap-4 mt-4">

                </div>
                {/*<li className="relative"><a className="text-xs hover:text-gray-400"*/}
                {/*                            href="/terms">TERMS &amp; CONDITIONS</a></li>*/}
                {/*<li className="relative"><a className="text-xs hover:text-gray-400"*/}
                {/*                            href="/shipping">SHIPPING &amp; RETURNS</a></li>*/}
                {/*<li className="relative"><a className="text-xs hover:text-gray-400" href="/faq">FAQ</a></li>*/}
            </ul>
        </nav>
    )
}