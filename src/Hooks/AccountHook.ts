import { useAccountContext } from "@/Context/AccountContext"
import { Branches } from "@/Models/Branches";
import { Franchise } from "@/Models/Franchise";
import { generateRandomString } from 'ts-randomstring/lib';

export function useUserData() {
    const { handler } = useAccountContext();

    const handleFirstName = (value: string) => {
        handler((prev) => {
            return { ...prev, UserData: { ...prev?.UserData, FirstName: value } }
        })
    }

    const handleLastName = (value: string) => {
        handler((prev) => {
            return { ...prev, UserData: { ...prev?.UserData, LastName: value } }
        })
    }

    const handleEmail = (value: string) => {
        handler((prev) => {
            return { ...prev, UserData: { ...prev?.UserData, Email: value } }
        })
    }

    const handlePhone = (value: string) => {
        handler((prev) => {
            return { ...prev, UserData: { ...prev?.UserData, Phone: value } }
        })
    }

    const handlePassword = (value: string) => {
        handler((prev) => {
            return { ...prev, UserData: { ...prev?.UserData, Password: value } }
        })
    }

    const handleRepeat = (value: string) => {
        handler((prev) => {
            return { ...prev, UserData: { ...prev?.UserData, Repeat: value } }
        })
    }


    const handleUserName = (value: string) => {
        handler((prev) => {
            return { ...prev, UserData: { ...prev?.UserData, UserName: value } }
        })
    }

    return {
        handleFirstName,
        handleLastName,
        handleEmail,
        handlePhone,
        handlePassword,
        handleRepeat,
        handleUserName
    }
}

export function useFranchises() {
    const { handler, FranchiseDeleted } = useAccountContext();

    const Push = () => {
        const franchiseCode: string = generateRandomString({ length: 10 });
        handler(prev => {
            return {
                ...prev,
                Franchises: [...prev?.Franchises, new Franchise({ IdFranchise: 0, FranchiseCode: franchiseCode })]
            };
        });
    };

    const Remove = (index: number) => {
        handler(prev => {
            const franchises = [...prev.Franchises];
            if (franchises.length > 1) {
                FranchiseDeleted(prev => {
                    const deleted = [...prev];
                    deleted.push(franchises[index] as Franchise);
                    return deleted;
                })
                franchises.splice(index, 1);
            }
            return { ...prev, Franchises: franchises }
        });
    }

    const handleFantasyName = (index: number, value: string) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            franchises[index].FantasyName = value
            return { ...prev, Franchises: franchises }
        })
    }

    const handleCompanyName = (index: number, value: string) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            franchises[index].CompanyName = value
            return { ...prev, Franchises: franchises }
        })
    }

    const handleTaxId = (index: number, value: string) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            franchises[index].TaxId = value
            return { ...prev, Franchises: franchises }
        })
    }

    const handleTaxCategory = (index: number, value: string) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            franchises[index].TaxCategory = value
            return { ...prev, Franchises: franchises }
        })
    }

    return {
        Push,
        Remove,
        handleFantasyName,
        handleCompanyName,
        handleTaxId,
        handleTaxCategory
    }
}


export function useBranches() {
    const { handler, BranchesDeleted } = useAccountContext();

    const handleCountry = (findex: number, bindex: number, value: string) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            const branches = [...franchises[findex].Branches];
            branches[bindex].Country = value;
            franchises[findex].Branches = branches;

            return { ...prev, Franchises: franchises }
        })
    }

    const handleProvinceOrState = (findex: number, bindex: number, value: string) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            const branches = [...franchises[findex].Branches];
            branches[bindex].ProvinceOrState = value;
            franchises[findex].Branches = branches;

            return { ...prev, Franchises: franchises }
        })
    }

    const handleCity = (findex: number, bindex: number, value: string) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            const branches = [...franchises[findex].Branches];
            branches[bindex].City = value;
            franchises[findex].Branches = branches;

            return { ...prev, Franchises: franchises }
        })
    }

    const handleAddress = (findex: number, bindex: number, value: string) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            const branches = [...franchises[findex].Branches];
            branches[bindex].Address = value;
            franchises[findex].Branches = branches;

            return { ...prev, Franchises: franchises }
        })
    }

    const handlePostalCode = (findex: number, bindex: number, value: string) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            const branches = [...franchises[findex].Branches];
            branches[bindex].PostalCode = value;
            franchises[findex].Branches = branches;

            return { ...prev, Franchises: franchises }
        })
    }

    const handlePhoneNumber = (findex: number, bindex: number, value: string) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            const branches = [...franchises[findex].Branches];
            branches[bindex].PhoneNumber = value;
            franchises[findex].Branches = branches;

            return { ...prev, Franchises: franchises }
        })
    }

    const Push = (FKey: number) => {
        const branchCode: string = generateRandomString({ length: 10 });
        handler((prev) => {
            const franchises = [...prev.Franchises];
            franchises[FKey].Branches.push(new Branches({ IdBranch: 0, BranchCode: branchCode }));
            return { ...prev, Franchises: franchises }
        })
    }

    const Remove = (FKey: number, BKey: number) => {
        handler((prev) => {
            const franchises = [...prev.Franchises];
            if (franchises[FKey].Branches.length > 1) {
                BranchesDeleted(branch => {
                    const deleted = [...branch];
                    deleted.push(franchises[FKey].Branches[BKey]);
                    return deleted;
                })
                franchises[FKey].Branches.splice(BKey, 1);
            }
            return { ...prev, Franchises: franchises }
        })
    }

    return {
        handleCountry,
        handleProvinceOrState,
        handleCity,
        handleAddress,
        handlePostalCode,
        handlePhoneNumber,
        Push,
        Remove
    }
}