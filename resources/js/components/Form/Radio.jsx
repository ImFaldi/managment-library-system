import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function Radio({ className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type="radio"
            className={
                'radio ' +
                className
            }
            ref={input}
        />
    );
})