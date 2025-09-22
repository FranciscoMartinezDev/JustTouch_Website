import { useEffect, type FC } from "react";
import { Page } from "@/Pages/Page";
import { Button, Flex, Heading, HStack } from "@chakra-ui/react";
import { CatalogItem } from "@/Pages/Menu/Components/CatalogItem";
import { useMenuContext } from "@/Context/MenuContext";


export const Menu: FC = () => {
    const { menu, LoadMenu } = useMenuContext();

    const GoInfo = () => {
        location.href = '/profile/new-product-group';
    }

    useEffect(() => {
        LoadMenu();
    }, [])

    return (
        <Page Title="Menu"
            Actions={<HStack>
                <Button colorPalette={'teal'} onClick={GoInfo}>Cargar productos</Button>
                <Button>Menu</Button>
            </HStack>}
            Body={
                <Flex className="catalog-container">
                    {menu.length > 0 ?
                        menu.map((item, index) => {
                            return <CatalogItem Catalog={item} key={index} />
                        })
                        :
                        <Heading margin={'auto'}>No hay productos para mostrar</Heading>
                    }
                </Flex>
            } />
    )
}