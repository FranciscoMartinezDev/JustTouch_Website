import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import type { MenuContextType } from '@/Models/Contexts/MenuContextType';
import { Menu } from '@/Models/Menu';
import { MenuService } from '@/Services/MenuService';
import { createContext, useContext, useState, type FC } from 'react'
import { MenuToFormData } from '@/Helpers/FormMapper';
import { ValidateMenuForm } from '@/Helpers/ValidateForm';

const MenuContext = createContext<MenuContextType | undefined>(undefined);


export const useMenuContext = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) throw new Error('MenuContext not provided!');
    return context;
}

export const MenuProvider: FC<ContextChildren> = ({ children }) => {
    const [menu, setMenu] = useState<Menu>(new Menu());
    const service = MenuService.getInstance();

    const handler = (callback: (prev: Menu) => Menu) => {
        setMenu(callback);
    }

    const SaveChange = async () => {
        var validate = ValidateMenuForm(menu);
        if (validate) {
            const formMenu = MenuToFormData(menu);
            const result = await service.AddCatalog(formMenu);
            if (result) {
                //completar con otra logica
                setTimeout(() => {
                    window.location.href = ''
                }, 2000);
            }
        }
    }

    return (
        <MenuContext.Provider value={{ menu, handler, SaveChange }}>
            {children}
        </MenuContext.Provider>
    )
}