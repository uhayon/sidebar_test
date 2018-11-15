import React from 'react';
import CollapseMenuButton from '../../CollapseMenuButton/CollapseMenuButton';
import { header } from './Header.module.scss';

const Header = ({ toggleSidebar, sidebarExpanded }) => {
    return (
        <header className={header}>
            <CollapseMenuButton sidebarExpanded={sidebarExpanded} onClick={toggleSidebar} strokeColor='rgb(255, 255, 255)' height='25' width='40' />
        </header>
    );
};

export default Header;