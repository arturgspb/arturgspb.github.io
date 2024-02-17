import { Accordion } from "../../../atoms/Accordion/Accordion";
import { IAccordionItemProps } from "../../../atoms/Accordion/_Item/AccordionItem";
import React from "react";

export const AboutMeProjectList = () => {

    const projectItems: IAccordionItemProps[] = [
        {
            id: 'centra',
            title: 'Centra',
            subtitle: 'Маркетплейс рекламных площадок, сервисов и услуг',
            externalLink: {
                href: 'https://centra.ai',
            },
        },
        {
            id: 'meta',
            title: 'META',
            subtitle: 'Технологическая платформа для построения корпоративных приложений нового уровня',
            externalLink: {
                href: 'https://devision.io/meta',
            },
        },
        {
            id: 'garpun_feeds',
            title: 'Garpun Feeds',
            subtitle: 'ETL cервис по типу "откуда угодно куда угодно"',
            externalLink: {
                href: 'https://garpun.com',
            },
        },
        {
            id: 'garpun_generator',
            title: 'Garpun Generator',
            subtitle: 'Генератор рекламных компаний для Яндекс Директ и Google Ads из xml/json фидов',
            externalLink: {
                href: 'https://garpun.com/generator',
            },
        }
    ];
    return (
        <>
            <Accordion items={projectItems}/>
        </>
    )
}