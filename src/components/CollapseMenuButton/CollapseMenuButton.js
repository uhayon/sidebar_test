import React from 'react';
import { container, expanded, line } from './CollapseMenuButton.module.scss';

const CollapseMenuButton = ({ sidebarExpanded, onClick, strokeColor, height, width }) => {
    let svgClasses = [container];
    if (sidebarExpanded)
        svgClasses.push(expanded);
    return (
        <svg 
        onClick={onClick} 
        width={width ? width : '80'} 
        height={height ? height : '50'} 
        viewBox='-5 0 90 50' 
        className={svgClasses.join(' ')}
        >
            <g>
                <line className={line} style={{stroke: strokeColor ? strokeColor : 'rgb(0, 0, 0)'}} x1="0" y1="5" x2="80" y2="5"></line>
                <line className={line} style={{stroke: strokeColor ? strokeColor : 'rgb(0, 0, 0)'}} x1="0" y1="25" x2="80" y2="25"></line>
                <line className={line} style={{stroke: strokeColor ? strokeColor : 'rgb(0, 0, 0)'}} x1="0" y1="45" x2="80" y2="45"></line>
            </g>
        </svg>
    );
};

export default CollapseMenuButton;