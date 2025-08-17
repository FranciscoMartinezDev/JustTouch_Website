import type { FC } from "react";
import { FormInput } from "@/components/local/FormInput";
import { SelectForm } from "@/components/local/SelectForm";
import { Countries } from "@/Models/Enums/Countries";
import type { Select } from "@/Models/Types/Select";
import { Button, Flex } from "@chakra-ui/react";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { Tooltip } from '@/components/ui/tooltip';
import type { Branches } from "@/Models/Branches";
import { useBranches } from "@/Hooks/AccountHook";

interface Props {
    Branch: Branches,
    BKey: number,
    FKey: number,
}

export const BranchItem: FC<Props> = ({ Branch, BKey, FKey }) => {
    const { handleCountry, handleProvinceOrState, handleCity, handleAddress, handlePostalCode, handlePhoneNumber, Remove } = useBranches();

    const countries: Select[] = Object.entries(Countries).map(([sig, desc]): Select => {
        return { value: sig, text: desc }
    });

    return (
        <Flex className="branch-item" align={'center'} borderTop={BKey === 0 ? '1px solid lightgray' : ''}>
            <SelectForm data={countries}
                placeholder="- Elija un pais -"
                change={e => handleCountry(FKey, BKey, e.target.value)}
                value={Branch.Country} />
            <FormInput placeholder="Provincia o estado..."
                change={e => handleProvinceOrState(FKey, BKey, e.target.value)}
                value={Branch.ProvinceOrState} />
            <FormInput placeholder="Ciudad..."
                change={e => handleCity(FKey, BKey, e.target.value)}
                value={Branch.City} />
            <FormInput placeholder="Direccion..."
                change={e => handleAddress(FKey, BKey, e.target.value)}
                value={Branch.Address} />
            <FormInput placeholder="Codigo Postal..."
                change={e => handlePostalCode(FKey, BKey, e.target.value)}
                value={Branch.PostalCode} />
            <FormInput placeholder="Cel. del local..."
                change={e => handlePhoneNumber(FKey, BKey, e.target.value)}
                value={Branch.PhoneNumber} />
            <Tooltip content="Quitar establecimiento">
                <Button colorPalette={'red'} onClick={() => Remove(FKey, BKey)}>
                    <FaRegRectangleXmark />
                </Button>
            </Tooltip>
        </Flex>
    )
}