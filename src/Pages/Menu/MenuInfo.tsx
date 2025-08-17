import type { FC } from "react";
import { Page } from "@/Pages/Page";
import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { FaChevronLeft, FaRegFloppyDisk } from "react-icons/fa6";
import { ProductItem } from "@/Pages/Menu/Components/ProductItem";
import { FormInput } from "@/components/local/FormInput";
import './Menu.scss';

export const MenuInfo: FC = () => {
    return (
        <Page Title="Cargar productos"
            Actions={<HStack>
                <Button variant={'outline'} colorPalette={'blue'} borderWidth={2}>
                    <FaChevronLeft />Volver
                </Button>
                <Button variant={'solid'}>
                    <FaRegFloppyDisk /> Guardar cambios
                </Button>
            </HStack>}
            Body={
                <Flex padding={'20px'} direction={'column'}>
                    <Flex className="catalog">
                        <FormInput className="catalog-title" label="Catalogo" placeholder=". . ." />
                        <Button colorPalette={'teal'}>Cargar productos</Button>
                    </Flex>
                    <Box  className="product-list">
                        <ProductItem />
                    </Box>
                </Flex>
            } />
    )
}


