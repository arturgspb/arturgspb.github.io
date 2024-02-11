import { Accordion } from "../../../atoms/Accordion/Accordion";
import { IAccordionItemProps } from "../../../atoms/Accordion/_Item/AccordionItem";
import React from "react";

export const AboutMeProjectList = () => {
    /**
     * b2b маркетплейс рекламных площадок
     * b2b ETL cервис по типу "откуда угодно куда угодно"
     * b2b генератор рекламных компаний для Яндекс Директ и Google Ads из xml/json фидов
     * внутренний портал для Realweb
     */
    const projectItems: IAccordionItemProps[] = [
        {
            id: 'centra',
            title: 'Centra',
            subtitle: 'b2b маркетплейс рекламных площадок',
            externalLink: {
                href: 'https://centra.ai',
            },
            // children: <>
            //     <p>Desc 0</p>
            //     <p>Desc 1</p>
            //     <p className="mt-3">Desc 3 Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc
            //         3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3</p>
            // </>
        },
        {
            id: 'garpun_feeds',
            title: 'Garpun Feeds',
            subtitle: 'ETL cервис по типу "откуда угодно куда угодно"',
            externalLink: {
                href: 'https://garpun.com',
            },
            // children: <>
            //     <p>Desc 0</p>
            //     <p>Desc 1</p>
            //     <p className="mt-3">Desc 3 Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc
            //         3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3</p>
            // </>
        },
        {
            id: 'garpun_generator',
            title: 'Garpun Generator',
            subtitle: 'Генератор рекламных компаний для Яндекс Директ и Google Ads из xml/json фидов',
            externalLink: {
                href: 'https://garpun.com/generator',
            },
            // children: <>
            //     <p>Desc 0</p>
            //     <p>Desc 1</p>
            //     <p className="mt-3">Desc 3 Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc
            //         3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3Desc 3</p>
            // </>
        }
    ];
    return (
        <>
            <Accordion items={projectItems}/>
        </>
    )
}