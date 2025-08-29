import { Box, Flex, Heading, Separator, Text, Image, Button } from "@chakra-ui/react";
import type { FC } from "react";
import './ServiceRequest.scss';

export const ConfirmAccount: FC = () => {
    
    return (
        <Box className="confirm-account">
            <Heading as={"h1"} size={'6xl'}>¡Bienvenid@ a la familia!</Heading>
            <Separator />
            <Flex direction={'column'} gap={2} marginTop={10}>
                <Text fontSize={20}>Ya preparamos todo para que empieces sin complicaciones.</Text>
                <Text fontSize={20}>A continuación valida tu mail y completa con tus datos para terminar el proceso.</Text>
                <Text fontSize={20}>Gracias por sumar tu energía a este proyecto 💪.</Text>
            </Flex>
            <Image src="https://dvvlhkouasxqzmaxkvll.supabase.co/storage/v1/object/public/footages/JustTouchLogo.png" />
            <Flex justify={'center'} marginTop={10}>
                <Button colorPalette={'blue'} marginTop={5}>Acceder</Button>
            </Flex>
        </Box>
    )
}