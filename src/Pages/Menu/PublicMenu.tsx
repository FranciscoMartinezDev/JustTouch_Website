import type { FC } from "react";
import { useMenuContext } from "@/Context/MenuContext";
import { Box, Card, Flex, Heading, Image, Input, Text, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { PublicCatalog } from "@/Pages/Menu/Components/Public/PublicCatalog";
import { Tooltip } from '@/components/ui/tooltip';
import { FaBowlFood } from "react-icons/fa6";
import './Menu.scss';

export const PublicMenu: FC = () => {
    const { } = useMenuContext();

    return (
        <Box className="public-menu">
            <Box className="menu-header">
                <Image
                    src="https://foodandpleasure.com/wp-content/uploads/2018/06/restaurantes-bonitos-cdmx-aromas-.jpg" />
                <Box className="box-data">
                    <Flex className="data" align={'end'}>
                        <Box className="menu-logo">
                            <Image src='https://dvvlhkouasxqzmaxkvll.supabase.co/storage/v1/object/public/footages/JustTouchLogo.png' />
                        </Box>
                        <Heading as={"h1"}>Mi Negocio</Heading>
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
                        <Flex className="category" gap={10}>
                            <Flex direction={'column'} align={'center'}>
                                <Link>
                                    <FaBowlFood />
                                </Link>
                                <Text>Catalogo 1</Text>
                            </Flex>
                               <Flex direction={'column'} align={'center'}>
                                <Link>
                                    <FaBowlFood />
                                </Link>
                                <Text>Catalogo 1</Text>
                            </Flex>
                                <Flex direction={'column'} align={'center'}>
                                <Link>
                                    <FaBowlFood />
                                </Link>
                                <Text>Catalogo 1</Text>
                            </Flex>
                                <Flex direction={'column'} align={'center'}>
                                <Link>
                                    <FaBowlFood />
                                </Link>
                                <Text>Catalogo 1</Text>
                            </Flex>
                                <Flex direction={'column'} align={'center'}>
                                <Link>
                                    <FaBowlFood />
                                </Link>
                                <Text>Catalogo 1</Text>
                            </Flex>
                                <Flex direction={'column'} align={'center'}>
                                <Link>
                                    <FaBowlFood />
                                </Link>
                                <Text>Catalogo 1</Text>
                            </Flex>
                                <Flex direction={'column'} align={'center'}>
                                <Link>
                                    <FaBowlFood />
                                </Link>
                                <Text>Catalogo 1</Text>
                            </Flex>
                                <Flex direction={'column'} align={'center'}>
                                <Link>
                                    <FaBowlFood />
                                </Link>
                                <Text>Catalogo 1</Text>
                            </Flex>
                                <Flex direction={'column'} align={'center'}>
                                <Link>
                                    <FaBowlFood />
                                </Link>
                                <Text>Catalogo 1</Text>
                            </Flex>
                                <Flex direction={'column'} align={'center'}>
                                <Link>
                                    <FaBowlFood />
                                </Link>
                                <Text>Catalogo 1</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <PublicCatalog />
                </Card.Body>
            </Card.Root>
        </Box>
    )
}