import React, { FC, HTMLAttributeAnchorTarget } from 'react';
import { IChildrenProps } from "../../common/props";
import Link from "next/link";
import styled from './Button.module.scss'
import { buildCssClasses } from "../../common/classesUtils";

type TButtonView = 'main';

export interface IButtonProps extends IChildrenProps {
    view?: TButtonView;
    href: string;
    target?: HTMLAttributeAnchorTarget | undefined;
}

export const Button: FC<IButtonProps> = (({
                                              view = 'main',
                                              href,
                                              target,
                                              children
                                          }) => {
    const stdClasses = 'my-2 sm:my-10 rounded-2xl w-full text-center sm:w-auto h-fit min-w-fit'
    const classNames = buildCssClasses(styled, {
        view
    }, stdClasses);

    return (
        <Link href={href} target={target} className={classNames}>
            {children}
        </Link>
    )
});

Button.displayName = 'Button';
