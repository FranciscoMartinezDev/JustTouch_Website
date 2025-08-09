import { useState, type FC } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { Button, Card, Collapsible, Flex } from "@chakra-ui/react";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaAngleDown, FaRegRectangleXmark } from "react-icons/fa6";
import { type Select } from '@/Models/Types/Select'
import { TaxCategory } from "@/Models/Enums/TaxCategory";
import { SelectForm } from "@/components/local/SelectForm";
import { FormInput } from "@/components/local/FormInput";
import { Countries } from "@/Models/Enums/Countries";

export const FranchiseData: FC = () => {
    return (
        <Flex className="franchise-container" direction={'column'}>
            <FranchiseItem />
        </Flex>
    )
}

const FranchiseItem: FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const taxCategories: Select[] = Object.entries(TaxCategory).map(([sig, desc]): Select => {
        return { value: sig, text: desc }
    })

    const collapse = () => {
        if (!collapsed) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    }
    return (
        <Card.Root className="franchise-item">
            <Collapsible.Root unmountOnExit>
                <Flex className="franchise-data" borderBottom={collapsed ? '1px solid lightgray' : ''}>
                    <FormInput placeholder="Nombre del negocio..." />
                    <FormInput placeholder="Razon social..." />
                    <FormInput placeholder="CUIT..." />
                    <SelectForm placeholder="- Categoria -" data={taxCategories} />
                    <Tooltip content="Agregar establecimiento">
                        <Button colorPalette={'teal'}>
                            <FaRegPlusSquare />
                        </Button>
                    </Tooltip>
                    <Tooltip content="Quitar establecimiento">
                        <Button colorPalette={'red'}>
                            <FaRegRectangleXmark />
                        </Button>
                    </Tooltip>
                    <Collapsible.Trigger paddingY="3" color={'gray'} onClick={collapse}>
                        <FaAngleDown className={`angle ${collapsed ? 'collapsed' : ''}`} />
                    </Collapsible.Trigger>
                </Flex>
                <Collapsible.Content>
                    <Branch />
                </Collapsible.Content>
            </Collapsible.Root>
        </Card.Root>
    )
}


const Branch: FC = () => {
    const countries: Select[] = Object.entries(Countries).map(([sig, desc]): Select => {
        return { value: sig, text: desc }
    });

    return (
        <Flex className="branch-item" align={'center'}>
            <SelectForm data={countries}
                placeholder="- Elija un pais -" />
            <FormInput placeholder="Provincia o estado..." />
            <FormInput placeholder="Ciudad..." />
            <FormInput placeholder="Direccion..." />
            <FormInput placeholder="Codigo Postal..." />
            <FormInput placeholder="Cel. del local..." />
            <Tooltip content="Quitar establecimiento">
                <Button colorPalette={'red'}>
                    <FaRegRectangleXmark />
                </Button>
            </Tooltip>
        </Flex>
    )
}