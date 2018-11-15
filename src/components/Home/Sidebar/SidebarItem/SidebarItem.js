import React from 'react';
import  { sidebarItem, sidebarItemActive } from './SidebarItem.module.scss';

const SidebarItem = ({ onClick, active, label }) => {
    let classes = [sidebarItem];
    if (active) {
        classes.push(sidebarItemActive)
    }
    return (
        <div 
            className={classes.join(' ')}
            onClick={onClick}>
            <h3>{label}</h3>
        </div>
    );
};

export default SidebarItem;