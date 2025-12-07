import { useEffect, type FC } from "react";
import { useMenuContext } from "@/Context/MenuContext";
import { Box, Card, Flex, Input, Text, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { PublicCatalog } from "@/Pages/Menu/Components/Public/PublicCatalog";
import { Tooltip } from '@/components/ui/tooltip';
import { FaBowlFood } from "react-icons/fa6";
import { PublicMenuFooter } from "./Components/Public/PublicMenuFooter";
import { useParams } from "react-router";
import { OrderModal } from "./Components/Public/OrderModal";
import '@/Pages/Menu/Styles/Menu.scss';
import '@/Pages/Menu/Styles/Menu.Resize.scss';

const CategoryItem: FC = () => {
    return (
        <Box className="category-item">
            <Link>
                <FaBowlFood />
            </Link>
            <Text>Catalogo 1</Text>
        </Box>
    )
}

export const PublicMenu: FC = () => {
    const { publicMenu, LoadPublicMenu } = useMenuContext();
    const { branchCode } = useParams();

    useEffect(() => {
        LoadPublicMenu(branchCode!);
    }, []);

    return (
        <>
            <OrderModal />
            <Box className="public-menu">
                <Box className="menu-header"
                    bgImage={'url("https://foodandpleasure.com/wp-content/uploads/2018/06/restaurantes-bonitos-cdmx-aromas-.jpg")'}>
                    <Box className="header-data">
                        <Flex className="data" align={'center'}>
                            <Box className="menu-logo"
                                bgImage={'url("https://img.freepik.com/vector-premium/logotipo-restaurante-bistec-tenedor-cuchillo_1240970-33805.jpg?semt=ais_hybrid&w=740&q=80")'} />
                            <Text>Mi Negocio</Text>
                            <Flex className="social-container">
                                <Tooltip content="Facebook">
                                    <Box className="social">
                                        <FaFacebook />
                                    </Box>
                                </Tooltip>
                                <Tooltip content="Instagram">
                                    <Box className="social">
                                        <FaInstagram />
                                    </Box>
                                </Tooltip>
                                <Tooltip content="WhatsApp">
                                    <Box className="social">
                                        <FaWhatsapp />
                                    </Box>
                                </Tooltip>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>

                <Card.Root className="card-menu">
                    <Card.Body>
                        <Flex className="filter"
                            marginBottom={10}
                            direction={'column'}
                            gap={5}
                            borderBottom={'1px solid lightgray'}
                            paddingBottom={5}>
                            <Input placeholder="Buscar..." />
                            <Flex className="category">
                                <CategoryItem />
                                <CategoryItem />
                                <CategoryItem />
                                <CategoryItem />
                                <CategoryItem />
                            </Flex>
                        </Flex>
                        <PublicCatalog />
                    </Card.Body>
                </Card.Root>
                <PublicMenuFooter />
            </Box>
        </>
    )
}