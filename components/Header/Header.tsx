"use client"

import { useCallback, useState } from "react";
import { HeaderMenuBtn } from "./_MenuBtn/HeaderMenuBtn";
import { HeaderMenuContainer } from "./_MenuContainer/HeaderMenuContainer";

export const Header = () => {
    const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

    const handleToggleNav = useCallback(() => {
        setIsOpenNav(prev => !prev);
    }, [])

    return (
        <header className="h-header z-40 w-full py-1" data-testid="page.header">
            <div className="flex px-6 sm:px-14 h-header items-center gap-4 sm:gap-8">
                <h2 className="flex-1 font-semibold"><a href="/">Артур Геращенко</a></h2>
                <div>
                    <HeaderMenuBtn isOpen={isOpenNav} toggleNavCb={handleToggleNav}/>
                    <HeaderMenuContainer isOpen={isOpenNav}/>
                </div>
            </div>
        </header>
    )
}