import { Accordion } from "../../../atoms/Accordion/Accordion";
import { IAccordionItemProps } from "../../../atoms/Accordion/_Item/AccordionItem";
import React from "react";

export const AboutMeProjectList = () => {
    const projectItems: IAccordionItemProps[] = [
        {
            id: 'centra',
            title: 'Centra',
            externalLink: {
                href: 'https://centra.ai',
            },
            children: <>
                <p>Desc 0</p>
                <p>Desc 1</p>
                <p className="mt-3">Desc 3 Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3</p>
            </>
        },
        {
            id: 'devision2',
            title: 'Devision',
            externalLink: {
                href: 'https://devision.io',
            },
            children: <>
                <p>Desc 0</p>
                <p>Desc 1</p>
                <p className="mt-3">Desc 3 Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3</p>
            </>
        }
    ];
    return (
        <div className={'bg-zinc-900 text-site pt-16 sm:p-20'}>
            <div className="px-8 sm:px-0 max-w-4xl mx-auto">
                <h1 className="uppercase font-bold text-white text-4xl sm:text-7xl text-center sm:text-left">Проекты</h1>
                <Accordion items={projectItems}/>
            </div>
        </div>
    )
}