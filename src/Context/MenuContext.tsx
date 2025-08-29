import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import type { MenuContextType } from '@/Models/Contexts/MenuContextType';
import { Menu } from '@/Models/Menu';
import { MenuService } from '@/Services/MenuService';
import { createContext, useContext, useState, type FC } from 'react'
import { MenuToFormData } from '@/Helpers/FormMapper';
import { ValidateMenuForm } from '@/Helpers/ValidateForm';
import { Product } from '@/Models/Product';
import { LocalToast } from '@/components/local/Toast';
import { generateRandomString } from 'ts-randomstring/lib';

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) throw new Error('MenuContext not provided!');
    return context;
}

export const MenuProvider: FC<ContextChildren> = ({ children }) => {
    const catalogCode = generateRandomString({ length: 10 });
    const productCode = generateRandomString({ length: 10 });

    const [menu, setMenu] = useState<Menu>(new Menu(
        {
            CatalogCode: catalogCode,
            Products: [new Product({ IdProduct: 0, ProductCode: productCode, IsAvailable: true })]
        }));
    const service = MenuService.getInstance();
    const toast = LocalToast.getInstance();

    const Initialize = async (catalogKey: string | undefined) => {
        if (catalogKey !== undefined) {
            var catalog = await service.GetCatalog(catalogKey);
            if (catalog != undefined) {
                setMenu(catalog);
            }
        }
    }

    const handler = (callback: (prev: Menu) => Menu) => {
        setMenu(callback);
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
        <MenuContext.Provider value={{ menu, handler, SaveChange, Initialize }}>
            {children}
        </MenuContext.Provider>
    )
}