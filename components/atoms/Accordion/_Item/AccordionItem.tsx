import React, { FC } from 'react';
import { IChildrenProps } from "../../../common/props";
import { Button, IButtonProps } from "../../Button/Button";

interface IButtonOptionalExceptSalary extends Partial<IButtonProps> {
    href: string;
}

export interface IAccordionItemProps extends IChildrenProps {
    id: string;
    title: string;
    externalLink?: IButtonOptionalExceptSalary
}

export const AccordionItem: FC<IAccordionItemProps> = (({ title, children, externalLink }) => {
    // const {isOpen, handleToggleClick} = useOpen();

    const isOpen = true;

    const link: IButtonOptionalExceptSalary | undefined = externalLink
        ? { children: 'Перейти на сайт', target: '_blank', ...externalLink }
        : undefined;

    return (
        <div
            className="group/event flex border-b last:border-0 hover:border-purple-500 gap-4 sm:gap-8 flex-col sm:flex-row py-4 sm:py-0 transition-colors duration-300">
            <div
                className="flex flex-1 sm:items-center gap-4 sm:gap-4 md:gap-8 flex-col sm:flex-row sm:py-3">
                {/*<div*/}
                {/*    className="sm:group-hover/event:overflow-hidden transition-all duration-300 ease-out w-full max-w-fit sm:group-hover/event:w-0">*/}
                {/*    <div*/}
                {/*        className="flex flex-col min-w-fit sm:flex-row overflow-hidden sm:gap-4 md:gap-8 relative">*/}
                {/*        <div*/}
                {/*            className="flex gap-4 items-center absolute bottom-2 left-2 sm:bottom-auto sm:left-auto sm:relative">*/}
                {/*            <span className="text-4xl text-white">05</span>*/}
                {/*            <div className="flex flex-col text-xs">*/}
                {/*                <span className="text-white sm:text-gray-600">Fri</span><span>Mar</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="grow flex flex-col hover:text-purple-500">
                    <button className="text-left text-white w-full h-full group/button text-2xl text-left"
                    >
                        {title}
                        <svg fill="none"
                             className="w-4 h-4 inline ml-3 opacity-0 group-hover/button:opacity-100 "
                             stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </button>
                    <div
                        className={(isOpen ? 'opacity-1' : 'opacity-0') + " text-sm text-white text-site transition-all ease-in pointer-events-none h-0"}>
                        {children}
                    </div>
                </div>
            </div>

            {link && <Button {...link} />}
        </div>
    )
});

AccordionItem.displayName = 'AccordionItem';
