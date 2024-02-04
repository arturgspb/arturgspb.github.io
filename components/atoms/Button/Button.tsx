import React, { forwardRef } from 'react';
import { IChildrenProps, IRefProps } from "../../common/props";

interface IButtonProps extends IRefProps, IChildrenProps {

}

export const Button = forwardRef<HTMLDivElement, IButtonProps>(({
                                                              ref,
                                                              children
                                                          }) => {

    const classNames = ''

    return (
        <div ref={ref} className={classNames}>
            {children}
        </div>
    )
});

Button.displayName = 'Box';
