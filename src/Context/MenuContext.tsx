import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import type { MenuContextType } from '@/Models/Contexts/MenuContextType';
import { Menu } from '@/Models/Menu';
import { createContext, useContext, useState, type FC } from 'react'

const MenuContext = createContext<MenuContextType | undefined>(undefined);


export const useMenuContext = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) throw new Error('MenuContext not provided!');
    return context;
}

export const MenuProvider: FC<ContextChildren> = ({ children }) => {
    const [menu, setMenu] = useState<Menu>(new Menu());

    const handler = (callback: (prev: Menu) => Menu) => {
        setMenu(callback);
    }

    return (
        <MenuContext.Provider value={{ menu, handler }}>
            {children}
        </MenuContext.Provider>
    )
}