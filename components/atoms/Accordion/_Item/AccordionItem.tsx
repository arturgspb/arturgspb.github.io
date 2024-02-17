"use client"

import React, { FC } from 'react';
import { IChildrenProps } from "../../../common/props";
import { Button, IButtonProps } from "../../Button/Button";
import { useOpen } from "../../../common/hooks/useOpen";
import ArrowDown from './_assets/arrow-down.svg'
import { Text } from "../../Text/Text";

interface IButtonOptionalExceptSalary extends Partial<IButtonProps> {
    href: string;
}

export interface IAccordionItemProps extends IChildrenProps {
    id: string;
    title: string;
    subtitle: string;
    externalLink?: IButtonOptionalExceptSalary
}

export const AccordionItem: FC<IAccordionItemProps> = (({ title, subtitle, children, externalLink }) => {
    const { isOpen, handleToggleClick } = useOpen();

    const link: IButtonOptionalExceptSalary | undefined = externalLink
        ? { children: 'Перейти на сайт', target: '_blank', ...externalLink }
        : undefined;

    return (
        <div
            className="group/event flex border-b last:border-0 hover:border-purple-500 gap-4 sm:gap-8 flex-col sm:flex-row py-4 sm:py-0 transition-colors duration-300">
            <div
                className="flex flex-1 sm:items-center gap-4 sm:gap-4 md:gap-8 flex-col sm:flex-row sm:py-3">
                <div className="grow flex flex-col hover:text-purple-500">
                    <button className="text-left text-white w-full h-full group/button text-2xl text-left"
                            onClick={handleToggleClick}
                    >
                        {title}
                        {children &&
                        <ArrowDown className="w-4 h-4 inline ml-3 opacity-0 group-hover/button:opacity-100 "/>}
                    </button>
                    <div>
                        <Text color={'white'} size={'base'}>{subtitle}</Text>
                    </div>
                    {children && <div
                        className={(isOpen ? 'opacity-100 h-auto py-3' : 'opacity-0 h-0') + " text-sm text-white text-site transition-all ease-in pointer-events-none"}>
                        {children}
                    </div>}
                </div>
            </div>

            {link &&
            <Button target={link.target} href={link.href} view={link.view}>{link.children}</Button>}
        </div>
    )
});

AccordionItem.displayName = 'AccordionItem';
