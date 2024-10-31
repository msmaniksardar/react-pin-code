import React, { useRef } from 'react';

const PinCode = ({ length = 4, value = [], onChange = () => {} , inputStyle }) => {
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const text = e.currentTarget.value;

        // Allow only numeric input
        if (!/^\d*$/.test(text) && text !== '') return;

        const newValue = [...value];
        newValue[index] = text;
        onChange(newValue);

        // Move to the next input if text is entered
        if (text && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Move to the previous input if backspace is pressed
        if (e.key === 'Backspace' && !value[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div>
            {Array.from({ length }).map((_, index) => (
                <input
                    style={{ ...inputStyle}}
                    type="text"
                    key={index}
                    maxLength={1}
                    value={value[index] || ''}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)} // Store input reference
                />
            ))}
        </div>
    );
};

export default PinCode;
