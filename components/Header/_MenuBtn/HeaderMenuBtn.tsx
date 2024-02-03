import { FC } from "react";

interface IHeaderMenuBtnProps {
    isOpen: boolean;

    toggleNavCb(): void;
}

const CLS = 'block h-[4px] w-8 transform transition duration-500 ease-in-out '

export const HeaderMenuBtn: FC<IHeaderMenuBtnProps> = ({ isOpen, toggleNavCb }) => {
    return (
        <button className="relative z-50 mt-2" onClick={toggleNavCb}>
            <div className="space-y-2">
                <span className={CLS + (isOpen ? 'rotate-45 translate-y-[13px] bg-white' : 'bg-gray-600')}/>
                <span className={CLS + (isOpen ? 'opacity-0 h-0' : 'bg-gray-600')}/>
                <span className={CLS + (isOpen ? '-rotate-45 translate-y-[-13px] bg-white' : 'bg-gray-600')}/>
            </div>
        </button>
    )
}