import React, { FC } from 'react';
import { IChildrenProps } from "../../common/props";

type TTextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
type TTextColor = 'white' | 'black';
type TTextAlign = 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
type TTextWrap = 'wrap' | 'nowrap' | 'balance' | 'pretty';
type TLineClamp = 'none' | '1' | '2' | '3' | '4' | '5' | '6';

/** https://tailwindcss.com/docs/text-transform */
type TTextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
/** https://tailwindcss.com/docs/text-overflow */
type TTextOverflow = 'truncate' | 'text-ellipsis' | 'text-clip';

/**
 * https://tailwindcss.com/docs/text-overflow
 */
export interface ITextProps extends IChildrenProps {
    size?: TTextSize;
    color?: TTextColor;
    align?: TTextAlign;
    wrap?: TTextWrap;
    lineClamp?: TLineClamp;
    textTransform?: TTextTransform;
    textOverflow?: TTextOverflow;
    className?: string;
}

export const Text: FC<ITextProps> = ({
                                         size = 'lg',
                                         color = 'black',
                                         lineClamp,
                                         textOverflow,
                                         textTransform,
                                         align,
                                         wrap,
                                         className,
                                         children
                                     }) => {
    const cssClasses = [
        `text-${size}`,
        `text-${color}`,
        align ? `text-${align}` : '',
        wrap ? `text-${wrap}` : '',
        lineClamp ? `line-clamp-${lineClamp}` : '',
        textTransform ? `${textTransform}` : '',
        textOverflow ? `${textOverflow}` : '',
        className ? className : '',
    ].join(' ');

    return (
        <p className={`${cssClasses}`}>{children}</p>
    )
};

Text.displayName = 'Text';
