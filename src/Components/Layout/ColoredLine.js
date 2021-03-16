import React from 'react';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            width: 200
        }}
    />
);

export default ColoredLine;
