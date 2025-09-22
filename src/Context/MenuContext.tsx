import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import type { MenuContextType } from '@/Models/Contexts/MenuContextType';
import { Menu } from '@/Models/Menu';
import { MenuService } from '@/Services/MenuService';
import { createContext, useContext, useState, type FC } from 'react'
import { MenuRequestToFormData, MenuToFormData } from '@/Helpers/FormMapper';
import { ValidateMenuForm } from '@/Helpers/ValidateForm';
import { Product } from '@/Models/Product';
import { LocalToast } from '@/components/local/Toast';
import { MenuRequest } from '@/Models/Request/MenuRequest';
import { Storage } from '@/Store/Storage';

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) throw new Error('MenuContext not provided!');
    return context;
}

export const MenuProvider: FC<ContextChildren> = ({ children }) => {
    const [catalog, setCatalog] = useState<Menu>(new Menu(
        {
            Products: [new Product({ IsAvailable: true })]
        }));
    const [menu, setMenu] = useState<Menu[]>([]);
    const [deletedProducts, setDeletedProducts] = useState<Product[]>([]);

    const service = MenuService.getInstance();
    const toast = LocalToast.getInstance();
    const store = Storage.getInstance();

    const LoadMenu = async () => {
        var data = await service.GetMenu();
        setMenu(data || []);
    }

    const Initialize = async (catalogKey: string | undefined) => {
        if (catalogKey !== undefined) {
            var catalog = await service.GetCatalog(catalogKey);
            if (catalog != undefined) {
                setCatalog(catalog);
            }
        } else {
            const branch = store.Get<string>('branch_code');
            setCatalog(prev => {
                return { ...prev, BranchCode: branch };
            })
        }
    }

    const handler = (callback: (prev: Menu) => Menu) => {
        setCatalog(callback);
    }

    const DeletedProducts = (callback: (prev: Product[]) => Product[]) => {
        setDeletedProducts(callback);
    }


    const SaveChanges = async (catalogKey: string | undefined) => {
        var validate = ValidateMenuForm(catalog);
        if (validate) {
            if (!catalogKey) {

                const formData = MenuToFormData(catalog);

                var result = await service.AddCatalog(formData);
                if (result) {
                    toast.Success('¡Se guardaron los cambios!');
                }
            }
            // else {
            //     var request = new MenuRequest({ Menu: catalog, DeletedProducts: deletedProducts });
            //     const formData = MenuRequestToFormData(request);
            //     var result = await service.UpdateCatalog(formData);
            //     if (request) {
            //         toast.Success('¡Se guardaron los cambios!');
            //     }
            // }
        }
    }

    return (
        <MenuContext.Provider value={{ menu, catalog, deletedProducts, SaveChanges, handler, DeletedProducts, LoadMenu, Initialize }}>
            {children}
        </MenuContext.Provider>
    )
}