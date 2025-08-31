import { Box, Flex, Heading, Separator, Text } from "@chakra-ui/react";
import type { FC } from "react";
import './ServiceRequest.scss';

export const MessageRequested: FC = () => {
    return (
        <Box className="message-requested">
            <Heading as={"h1"} size={'6xl'}>¡Ya casi!</Heading>
            <Separator />
            <Flex direction={'column'} gap={2} marginTop={10}>
                <Text fontSize={20}>Hemos enviado un mail a tu dirección de correo electronico</Text>
                <Text fontSize={20}>Para continuar tienes que validar tu direccion de Email.</Text>
                <Text fontSize={20}>Revisa tu casilla de correo para continuar.</Text>
            </Flex>
        </Box>
    )
}