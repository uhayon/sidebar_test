import React, { useState, useContext } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Home = () => {
    const [sidebarExpanded, setSidebarExpanded] = useState(true);

    return (
        <>
            <Header 
                toggleSidebar={() => setSidebarExpanded(!sidebarExpanded)} 
                sidebarExpanded={sidebarExpanded} />
            <Sidebar sidebarExpanded={sidebarExpanded} />
            <Content/>
        </>
    );
};

export default Home;