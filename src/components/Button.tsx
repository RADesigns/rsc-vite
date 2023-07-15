import { FC, useState,useEffect } from 'react';

interface ButtonProps {
    show: boolean
}

const Button: FC<ButtonProps> = ({show}) => {
    const [showToggle, setShowToggle] = useState(show);

    function toggleShow() {
        const newShowToggle = !showToggle;
        setShowToggle(newShowToggle)
    }
    

    return (
        <>
            <button onClick={toggleShow}>Button</button>
        </>
    )
}

export default Button