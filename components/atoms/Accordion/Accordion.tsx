import React, { FC } from 'react';
import { AccordionItem, IAccordionItemProps } from "./_Item/AccordionItem";

interface IAccordionProps {
    items: IAccordionItemProps[];
}

export const Accordion: FC<IAccordionProps> = (({ items }) => {
    return (
        <div className="py-10">
            {items.map((item) => {
                return <AccordionItem key={item.id} {...item} />
            })}
        </div>
    )
});

Accordion.displayName = 'Button';
