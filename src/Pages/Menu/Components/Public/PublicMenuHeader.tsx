import { Tooltip } from "@/components/ui/tooltip";
import { useMenuContext } from "@/Context/MenuContext";
import { StringFormat } from "@/Helpers/StringFormat";
import { Box, Flex, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export const PublicMenuHeader: FC = () => {
    const { publicMenu } = useMenuContext();

    return (
        <Box className="menu-header"
            bgImage={'url("https://foodandpleasure.com/wp-content/uploads/2018/06/restaurantes-bonitos-cdmx-aromas-.jpg")'}>
            <Box className="header-data">
                <Flex className="data" align={'center'}>
                    <Box className="menu-logo"
                        bgImage={'url("https://img.freepik.com/vector-premium/logotipo-restaurante-bistec-tenedor-cuchillo_1240970-33805.jpg?semt=ais_hybrid&w=740&q=80")'} />
                    <Text>{publicMenu?.Business}</Text>
                    <Flex className="social-container">
                        {!StringFormat.IsNullOrEmpty(publicMenu?.FacebookUrl) ?
                            <Tooltip content="Facebook">
                                <Box className="social" onClick={() => window.open(publicMenu?.FacebookUrl)}>
                                    <FaFacebook />
                                </Box>
                            </Tooltip> : null}
                        {!StringFormat.IsNullOrEmpty(publicMenu?.InstagramUrl) ?
                            <Tooltip content="Instagram">
                                <Box className="social" onClick={() => window.open(publicMenu?.InstagramUrl)}>
                                    <FaInstagram />
                                </Box>
                            </Tooltip> : null}
                        {!StringFormat.IsNullOrEmpty(publicMenu?.WhatsappUrl) ?
                            <Tooltip content="WhatsApp">
                                <Box className="social" onClick={() => window.open(publicMenu?.WhatsappUrl)}>
                                    <FaWhatsapp />
                                </Box>
                            </Tooltip> : null}
                    </Flex>
                </Flex>
            </Box>
        </Box>

    )
}