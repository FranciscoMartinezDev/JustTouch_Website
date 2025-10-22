import { useMenuContext } from "@/Context/MenuContext";
import { Box, Card, Flex, Heading } from "@chakra-ui/react";
import type { FC } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

import './Menu.scss';

export const PublicMenu: FC = () => {
    const { } = useMenuContext();

    return (
        <Box className="public-menu">
            <Box className="front-page">
                <Box className="business-data">
                    <Flex className="data" align={'end'} gap={5}>
                        <Box className="logo-container">

                        </Box>
                        <Heading as={"h1"} fontSize={30}>Negocio</Heading>

                        <Flex marginLeft={'auto'} gap={5}>
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

                </Card.Body>
            </Card.Root>

        </Box>
    )
}