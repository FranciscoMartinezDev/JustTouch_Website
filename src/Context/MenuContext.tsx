import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import type { MenuContextType } from '@/Models/Contexts/MenuContextType';
import { Menu } from '@/Models/Menu';
import { MenuService } from '@/Services/MenuService';
import { createContext, useContext, useState, type FC } from 'react'
import { MenuToFormData, MenuRequestToFormData } from '@/Helpers/FormMapper';
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
    const [loadingMenu, setLoadingMenu] = useState<boolean>(false);
    const [deletedProducts, setDeletedProducts] = useState<Product[]>([]);

    const service = MenuService.getInstance();
    const toast = LocalToast.getInstance();
    const store = Storage.getInstance();

    const LoadMenu = async () => {
        setLoadingMenu(true);
        var data = await service.GetMenu();
        setMenu(data || []);
        setLoadingMenu(false);
    }

    const Initialize = async (catalogKey: string | undefined) => {
        if (catalogKey !== undefined) {
            setLoadingMenu(true);
            var catalogData = await service.GetCatalog(catalogKey);
           
            if (catalogData != undefined) {
                catalogData.Products.map(x =>{
                    x.Price =  x.Price ? x.Price.toString().replace('.', ',') : x.Price;
                })
                setCatalog(catalogData);
            }
            setLoadingMenu(false);
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
        setLoadingMenu(true);
        var validate = ValidateMenuForm(catalog);
        if (validate) {
            if (catalogKey === undefined) {
                const formData = MenuToFormData(catalog);
                var result = await service.AddCatalog(formData);
                if (result) {
                    setLoadingMenu(false);
                    toast.Success('¡Se guardaron los cambios!');
                }
            }
            else {
                var request = new MenuRequest({ Menu: catalog, DeletedProducts: deletedProducts });
                console.log(deletedProducts)
                const formData = MenuRequestToFormData(request);
                for(const form of formData){
                    console.log(form[0] + form[1]);
                }
                var result = await service.UpdateCatalog(formData);
                if (result) {
                    setLoadingMenu(false);
                    toast.Success('¡Catalogo actualizado!');
                }
            }
        }
        setLoadingMenu(false);
    }

    const DropCatalog = async (catalogCode: string, index: number) => {
        setLoadingMenu(true);
        const data = await service.DropCatalog(catalogCode);
        if (data) {
            setMenu(prev => {
                const catalogs = [...prev];
                catalogs.splice(index, 1);
                return catalogs;
            })
        }
        setLoadingMenu(false);
    }

    return (
        <MenuContext.Provider value={{ menu, catalog, deletedProducts, loadingMenu, SaveChanges, DropCatalog, handler, DeletedProducts, LoadMenu, Initialize }}>
            {children}
        </MenuContext.Provider>
    )
}