import type { FC } from "react";
import { Page } from "@/Pages/Page";
import { Button, Flex, HStack } from "@chakra-ui/react";
import { CatalogItem } from "@/Pages/Menu/Components/CatalogItem";


export const Menu: FC = () => {
    return (
        <Page Title="Menu"
            Actions={<HStack>
                <Button colorPalette={'teal'}>Cargar productos</Button>
                <Button>Menu</Button>
            </HStack>}
            Body={
                <Flex className="catalog-container">
                    <CatalogItem />
                </Flex>
            } />
    )
}