import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import type { MenuContextType } from '@/Models/Contexts/MenuContextType';
import { Menu } from '@/Models/Menu';
import { MenuService } from '@/Services/MenuService';
import { createContext, useContext, useState, type FC } from 'react'
import { MenuToFormData } from '@/Helpers/FormMapper';
import { ValidateMenuForm } from '@/Helpers/ValidateForm';
import { useParams } from 'react-router';
import { Product } from '@/Models/Product';
import { LocalToast } from '@/components/local/Toast';

const MenuContext = createContext<MenuContextType | undefined>(undefined);


export const useMenuContext = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) throw new Error('MenuContext not provided!');
    return context;
}

export const MenuProvider: FC<ContextChildren> = ({ children }) => {
    const [menu, setMenu] = useState<Menu>(new Menu({
        IdBranch: 0, IdMenu: 0, Products:
            [new Product({ IdProduct: 0, IdMenu: 0, IsAvailable: true })]
    }));
    const service = MenuService.getInstance();
    const toast = LocalToast.getInstance();
    const { catalogKey } = useParams();

    const Initialize = () => {
        if (!catalogKey) {
        }
    }

    const handler = (callback: (prev: Menu) => Menu) => {
        setMenu(callback);
    }

    const LeaveAccount =()=>{
        var validate = ValidateMenuForm(menu);
        if(validate){
            window.location.href = '/';
        }
    }


    const SaveChange = async () => {
        var validate = ValidateMenuForm(menu);
        if (validate) {
            toast.Loading('Añadiendo Catalogo...');
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
        <MenuContext.Provider value={{ menu, handler, SaveChange, LeaveAccount, Initialize }}>
            {children}
        </MenuContext.Provider>
    )
}