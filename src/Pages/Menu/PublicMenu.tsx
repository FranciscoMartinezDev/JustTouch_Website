import { useMenuContext } from "@/Context/MenuContext";
import { Box, Card, Flex, Heading, Image, Input } from "@chakra-ui/react";
import type { FC } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

import './Menu.scss';

export const PublicMenu: FC = () => {
    const { } = useMenuContext();

    return (
        <Box className="public-menu">
            <Box className="front-page">
                <Image className="front-photo" src="https://foodandpleasure.com/wp-content/uploads/2018/06/restaurantes-bonitos-cdmx-aromas-.jpg"/>
                <Box className="data-header">
                    <Flex className="data" gap={5} align={'end'}>
                        <Box className="menu-logo">
                            <Image src='https://dvvlhkouasxqzmaxkvll.supabase.co/storage/v1/object/public/footages/JustTouchLogo.png' />
                        </Box>
                        <Heading as={"h1"}>Negocio</Heading>
                        <Flex marginLeft={'auto'} gap={5} align={'center'} h={'auto'}>
                            <Box className="social">
                                <FaFacebook />
                            </Box>
                            <Box className="social">
                                <FaInstagram />
                            </Box>
                            <Box className="social">
                                <FaWhatsapp />
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
            <Card.Root className="card-menu">
                <Card.Body>
                    <Flex className="filter" borderBottom={'1px solid lightgray'} paddingBottom={5}>
                        <Input placeholder="Buscar..." />
                    </Flex>

                </Card.Body>
            </Card.Root>

        </Box>
    )
}