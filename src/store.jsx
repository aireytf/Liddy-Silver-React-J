// ColorContext.js
import { createContext, useContext, useState } from 'react';

// Create a new context object
const ColorContext = createContext();

// Create a provider component
export const ColorProvider = ({ children }) => {
    const color1 = "#dfe2db";
    const color2 = "#edd3cc";
    const [bgColor, setBGColor] = useState(color1);

    const handleSlideChange = () => {
        setBGColor(prevColor => (prevColor === color1 ? color2 : color1));
    };



    return (
        <ColorContext.Provider value={{ bgColor, handleSlideChange, setBGColor, color1, color2 }}>
            {children}
        </ColorContext.Provider>
    );
};

// Custom hook to use the color context
export const useColor = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return context;
};
