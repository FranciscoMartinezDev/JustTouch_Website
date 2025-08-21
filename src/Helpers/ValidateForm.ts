import type { Account } from "@/Models/Account";
import type { Franchise } from "@/Models/Franchise";
import type { Menu } from "@/Models/Menu";
import type { Users } from "@/Models/Users";
import { LocalToast } from '@/components/local/Toast';
const alert = LocalToast.getInstance();


export function ValidateMenuForm(menu: Menu): boolean {
    var isValid: boolean = true;
    const validCatalog = menu.Catalog !== '' && menu.Catalog !== undefined

    const validProducts: boolean = menu.Products.every(v => Object.entries(v).every(([key, value]) => {
        if (key.includes('Picture') || key.includes('PictureUrl')) return true;
        return value !== null && value !== undefined && value !== '';
    }))

    const validPictures: boolean = menu.Products.every(v => {
        if(v.Picture !== null && v.Picture !== undefined){
            const regex = /^[^¿?:*"<>|]+$/;
            return regex.test(v.Picture?.name!);
        }
        return true;
    })

    switch (isValid) {
        case (!validCatalog): {
            alert.Error('Debe completar con el nombre del catalogo');
            isValid = false;
            break;
        }
        case (!validProducts): {
            alert.Error('Debe completar todos los datos de cada producto');
            isValid = false;
            break;
        } case (!validPictures): {
            alert.Error('El nombre de la imagen no debe contener los siguientes caracteres: "¿ ? : * " < > |"');
            isValid = false;
            break;
        }
        default: break;
    }

    return isValid;
}

export function ValidateAccountForm(account: Account): boolean {
    var isValid: boolean = true;
    const userData: Users = account.UserData!;
    const franchises: Franchise[] = account.Franchises;

    const validUserData: boolean = Object.entries(userData).every(([_, value]) => {
        return value !== null && value !== undefined && value !== '';
    })
    const passWords: boolean = userData.Password === userData.Repeat;

    const validFranchises: boolean = franchises.every(x => {
        Object.entries(x).every(([key, value]) => {
            if (key.includes('Branches')) return true;
            return value !== null && value !== undefined && value !== '';
        })
    });
    const withBranches: boolean = franchises.every(x => x.Branches.length > 0);
    const validBranches: boolean = franchises.every(x => {
        x.Branches.every(x => {
            Object.entries(x).every(([key, value]) => {
                if (key.includes('OpenTime') && key.includes('CloseTime')) return true;
                return value !== null && value !== undefined && value !== '';
            })
        })
    });

    switch (isValid) {
        case (!validUserData):
            isValid = false;
            alert.Error('Debe completar todos los datos de usuario.')
            break;
        case (!passWords):
            isValid = false;
            alert.Error('Las contraseñas no coinciden.')
            break;
        case (!validFranchises):
            isValid = false;
            alert.Error('Debe completar todos los datos fiscales.')
            break;
        case (!withBranches):
            isValid = false;
            alert.Error('Debe cargar al menos un establecimiento por entidad fiscal.')
            break;
        case (!validBranches):
            isValid = false;
            alert.Error('Debe completar todos los datos de los establecimientos.')
            break;
        default: break;
    }

    return isValid;
}