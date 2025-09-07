import { FormInput } from "@/components/local/FormInput";
import { SelectForm } from "@/components/local/SelectForm";
import { TaxCategory } from "@/Models/Enums/TaxCategory";
import type { Select } from "@/Models/Types/Select";
import { Button, Card, Collapsible, Flex } from "@chakra-ui/react";
import { useState, type FC } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaAngleDown, FaRegRectangleXmark } from "react-icons/fa6";
import { BranchItem } from "@/Pages/Account/Components/BranchItem";
import { Tooltip } from '@/components/ui/tooltip';
import type { Franchise } from "@/Models/Franchise";
import { useBranches, useFranchises } from "@/Hooks/AccountHook";
import { useAccountContext } from "@/Context/AccountContext";

interface Props {
    Franchise: Franchise,
    FKey: number
}

export const FranchiseItem: FC<Props> = ({ Franchise, FKey }) => {
    const { account } = useAccountContext();
    const { handleCompanyName, handleFantasyName, handleTaxCategory, handleTaxId, Remove } = useFranchises();
    const { Push } = useBranches();
    const [collapsed, setCollapsed] = useState<boolean>(() => { return account!.Franchises.length === 1 });

    const taxCategories: Select[] = Object.entries(TaxCategory).map(([sig, desc]): Select => {
        return { value: sig, text: desc }
    })

    const collapse = () => {
        if (!collapsed && account!.Franchises[FKey].Branches.length > 0) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    }

    const AddBranch = () => {
        setCollapsed(true);
        Push(FKey);
    }

    return (
        <Card.Root className="franchise-item">
            <Collapsible.Root unmountOnExit open={collapsed}>
                <Flex className="franchise-data">
                    <FormInput className="franch-input"
                        placeholder="Nombre del negocio..."
                        change={e => handleFantasyName(FKey, e.target.value)}
                        value={Franchise.FantasyName} />
                    <FormInput className="franch-input"
                        placeholder="Razon social..."
                        change={e => handleCompanyName(FKey, e.target.value)}
                        value={Franchise.CompanyName} />
                    <FormInput className="franch-input"
                        placeholder="CUIT..."
                        change={e => handleTaxId(FKey, e.target.value)}
                        value={Franchise.TaxId} />
                    <SelectForm className="franch-select"
                        placeholder="- Categoria -" data={taxCategories}
                        change={e => handleTaxCategory(FKey, e.target.value)}
                        value={Franchise.TaxCategory} />
                    <Tooltip content="Agregar establecimiento">
                        <Button colorPalette={'teal'} onClick={AddBranch}>
                            <FaRegPlusSquare />
                        </Button>
                    </Tooltip>
                    <Tooltip content="Quitar establecimiento">
                        <Button colorPalette={'red'} onClick={() => Remove(FKey)}>
                            <FaRegRectangleXmark />
                        </Button>
                    </Tooltip>
                    <Collapsible.Trigger paddingY="3" color={'gray'} onClick={collapse}>
                        <FaAngleDown className={`angle ${collapsed ? 'collapsed' : ''}`} />
                    </Collapsible.Trigger>
                </Flex>
                <Collapsible.Content>
                    {Franchise.Branches.map((item, index) => {
                        return <BranchItem key={index} Branch={item} BKey={index} FKey={FKey} />
                    })}
                </Collapsible.Content>
            </Collapsible.Root>
        </Card.Root>
    )
}