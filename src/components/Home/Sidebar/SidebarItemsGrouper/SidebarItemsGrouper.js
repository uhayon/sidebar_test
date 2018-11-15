import React from 'react';
import { sidebarItemsGrouper, header } from './SidebarItemsGrouper.module.scss';

const SidebarItemsGrouper = ({ label, children }) => (
    <div className={sidebarItemsGrouper}>
        <h4 className={header}>{label}</h4>
        <hr />
        {children}
    </div>
);

export default SidebarItemsGrouper;