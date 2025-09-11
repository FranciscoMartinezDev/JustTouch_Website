import { SelectForm } from "@/components/local/SelectForm";
import { useAuthenticationContext } from "@/Context/AuthenticationContext";
import type { Branches } from "@/Models/Branches";
import type { Franchise } from "@/Models/Franchise";
import type { Select } from "@/Models/Types/Select";
import { Storage } from "@/Store/Storage";
import { Button, Card, Heading } from "@chakra-ui/react";
import { useState, type FC } from "react";
const store = Storage.getInstance();


export const BusinessSelector: FC = () => {
    const { SelectBusiness } = useAuthenticationContext();
    const franchise: Franchise[] = store.Get('Franchises');

    const [selectBranch, setSelectBranch] = useState<Select[]>(() => {
        const branches: Select[] = Object.entries(franchise[0].Branches).map(([_, value]): Select => {
            return { value: value.BranchCode, text: value.Address }
        })
        return branches;
    })
    const selectFranchises: Select[] = Object.entries(franchise).map(([_, value]): Select => {
        return { value: value.FranchiseCode, text: value.FantasyName };
    })

    const [branch, setBranch] = useState<string>(selectBranch[0].value as string);

    const handleFranchise = (value: string) => {
        const branches: Branches[] = franchise.filter(x => x.FranchiseCode === value)[0].Branches;
        setSelectBranch(() => {
            const listBranches: Select[] = Object.entries(branches).map(([_, value]): Select => {
                return { value: value.BranchCode, text: value.Address }
            });
            return listBranches
        })
    }

    const handleBranch = (value: string) => {
        setBranch(value)
    }

    return (
        <Card.Root className="business-selector">
            <Card.Header>
                <Heading as={"h1"}>Seleccione un negocio</Heading>
            </Card.Header>
            <Card.Body gap={5}>
                <SelectForm label="Negocio"
                    data={selectFranchises}
                    change={e => handleFranchise(e.target.value)} />
                <SelectForm label="Sucursal"
                    data={selectBranch}
                    change={e => handleBranch(e.target.value)} />
                <Button onClick={() => SelectBusiness(branch)}>Seleccionar</Button>
            </Card.Body>
        </Card.Root>
    )
}