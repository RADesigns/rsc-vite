import { FC, useState,useEffect, ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void,
    children: ReactNode
}

const Button: FC<ButtonProps> = ({children, onClick}) => {
    

    /* function toggleShow() {
        const newShowToggle = !showToggle;
        setShowToggle(newShowToggle)
    } */
    

    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
}

export default Button