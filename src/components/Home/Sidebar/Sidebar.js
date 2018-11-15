import React, { useState } from 'react';
import { sidebar, open, close } from './Sidebar.module.scss';
import SidebarItem from './SidebarItem/SidebarItem';
import SidebarItemsGrouper from './SidebarItemsGrouper/SidebarItemsGrouper';

const Sidebar = ({ sidebarExpanded }) => {
    let sidebarClasses = [sidebar];
    const [selectedItemKey, setSelectedItemKey] = useState(null);
    const sidebarItems = [
        {
            grouped: false,
            header: '',
            name: 'home',
            label: 'Inicio'
        },
        {
            grouped: true,
            header: 'Perfiles',
            name: 'profilesGrouper',
            items: [
                {
                    name: 'unknown',
                    label: 'Desconocidos'
                },
                {
                    name: 'known',
                    label: 'Identificados'
                }
            ]
        }
    ];

    const onItemClick = (key) => {
        if (key !== selectedItemKey) {
            setSelectedItemKey(key);
            
        }
    }

    if (sidebarExpanded) {
        sidebarClasses.push(open);
    } else {
        sidebarClasses.push(close)
    }

    return (
        <aside className={sidebarClasses.join(' ')}>
            <nav>
                {
                    sidebarItems.map(item => 
                        item.grouped ?
                        <SidebarItemsGrouper label={item.header} key={item.name}>
                            {
                                item.items.map(subItem =>
                                    <SidebarItem 
                                        onClick={() => onItemClick(subItem.name)} 
                                        active={selectedItemKey === subItem.name}
                                        label={subItem.label}
                                        key={subItem.name} />
                                )
                            }
                        </SidebarItemsGrouper> :
                        <SidebarItem 
                            key={item.name}
                            onClick={() => onItemClick(item.name)} 
                            active={selectedItemKey === item.name}
                            label={item.label} />
                    )
                }
            </nav>
        </aside>
    )
};

export default Sidebar;