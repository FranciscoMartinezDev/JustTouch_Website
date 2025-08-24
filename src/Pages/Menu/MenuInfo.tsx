import { useEffect, type FC } from "react";
import { Page } from "@/Pages/Page";
import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { FaChevronLeft, FaRegFloppyDisk } from "react-icons/fa6";
import { ProductItem } from "@/Pages/Menu/Components/ProductItem";
import { FormInput } from "@/components/local/FormInput";
import useMenu from "@/Hooks/MenuHook";
import { useMenuContext } from "@/Context/MenuContext";
import './Menu.scss';

export const MenuInfo: FC = () => {
    const { handleCatalog, PushProduct } = useMenu();
    const { menu, SaveChange, Initialize } = useMenuContext();

    useEffect(() => {
        Initialize();
    }, [])
    
    return (
        <Page Title="Cargar productos"
            Actions={<HStack>
                <Button variant={'outline'} colorPalette={'blue'} borderWidth={2}>
                    <FaChevronLeft />Volver
                </Button>
                <Button variant={'solid'} onClick={SaveChange}>
                    <FaRegFloppyDisk /> Guardar cambios
                </Button>
            </HStack>}
            Body={
                <Flex padding={'20px'} direction={'column'}>
                    <Flex className="catalog">
                        <FormInput className="catalog-title"
                            label="Catalogo"
                            placeholder=". . ."
                            change={e => handleCatalog(e.target.value)}
                            value={menu.Catalog} />
                        <Button colorPalette={'teal'} onClick={PushProduct}>Cargar productos</Button>
                    </Flex>
                    <Box className="product-list">
                        {menu.Products.filter(x => x.IdProduct !== undefined).map((item, index) => {
                            return <ProductItem Product={item} PKey={index} key={index} />
                        })}
                    </Box>
                </Flex>
            } />
    )
}


