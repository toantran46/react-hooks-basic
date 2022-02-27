import React, { useState } from 'react';

function getRandomColor (){
    const LIST_COLOR = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const getIndexColor = Math.trunc(Math.random() * 5);
    return LIST_COLOR[getIndexColor];
}

function ColorBox() {
    const [color,setColor] = useState(() =>{
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    console.log(initColor);
    return initColor;
    });
    function handleGetColor(){
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }

    return (
        <div 
        className='box-color'
        style={{backgroundColor: color}}
        onClick={handleGetColor}
        >
        COLOR BOX
        </div>
    );
}

export default ColorBox;