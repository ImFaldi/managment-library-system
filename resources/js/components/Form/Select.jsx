import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function Select({ className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                'mt-2 select w-full max-w-xs' +
                className
            }
            ref={input}
        >
            <option disabled selected value> -- select an option -- </option>
            <option value="1">Option 1</option>
        </select>
    );
})