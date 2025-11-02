import { useEffect, type FC } from "react";
import { Page } from "@/Pages/Page";
import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { FaChevronLeft, FaRegFloppyDisk } from "react-icons/fa6";
import { ProductItem } from "@/Pages/Menu/Components/ProductItem";
import { FormInput } from "@/components/local/FormInput";
import useMenu from "@/Hooks/MenuHook";
import { useMenuContext } from "@/Context/MenuContext";
import './Styles/Menu.scss';
import { useParams } from "react-router";

export const MenuInfo: FC = () => {
    const { handleCatalog, PushProduct } = useMenu();
    const { catalog, SaveChanges, Initialize } = useMenuContext();
    const { catalogKey } = useParams();

    const GoMenu = () => {
        location.href = '/profile/menu';
    }

    useEffect(() => {
        Initialize(catalogKey);
    }, [])

    return (
        <Page Title={catalogKey != undefined ? 'Editar catalogo' : 'Cargar productos'}
            Actions={<HStack>
                <Button onClick={GoMenu}
                    variant={'outline'}
                    colorPalette={'blue'}
                    borderWidth={2}>
                    <FaChevronLeft />Volver
                </Button>
                <Button variant={'solid'} onClick={() => SaveChanges(catalogKey) }>
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
                            defaultValue={catalog.Catalog} />
                        <Button colorPalette={'teal'} onClick={PushProduct}>Cargar productos</Button>
                    </Flex>
                    <Box className="product-list">
                        {catalog.Products.map((item, index) => {
                            return <ProductItem Product={item} PKey={index} key={index} />
                        })}
                    </Box>
                </Flex>
            } />
    )
}


