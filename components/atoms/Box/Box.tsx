import React, { forwardRef } from 'react';
import { IChildrenProps, IRefProps } from "../../common/props";
import styled from './Box.module.scss'
import { buildCssClasses } from "../../common/classesUtils";

type IFlexDirection = 'row' | 'column';
type TAlignItems = 'start' | 'center' | 'end';
type TJustifyContent = 'start' | 'center' | 'end' | 'spaceBetween' | 'spaceAround';

interface IBoxProps extends IRefProps, IChildrenProps {

    /**
     * Выстраивает боксы например горизонтально.
     * По умолчанию вертикально
     */
    flexDirection?: IFlexDirection;

    /**
     * Ориентация по вертикали
     */
    alignItems?: TAlignItems;

    /**
     * Ориентация по горизонтали
     */
    justifyContent?: TJustifyContent;
}


export const Box = forwardRef<HTMLDivElement, IBoxProps>(({
                                                              flexDirection = 'column',
                                                              alignItems,
                                                              justifyContent,
                                                              ref,
                                                              children
                                                          }) => {
    const classNames = buildCssClasses(styled, {
        flexDirection,
        alignItems,
        justifyContent
    });

    return (
        <div ref={ref} className={classNames}>
            {children}
        </div>
    )
});

Box.displayName = 'Box';
