import { Box, Flex, Heading, Separator, Text, Image, Button } from "@chakra-ui/react";
import type { FC } from "react";
import './ServiceRequest.scss';
import { useServiceRequestContext } from "@/Context/ServiceRequestContext";
import { useParams } from "react-router";
import { ClipLoader } from 'react-spinners';
import { FaRegCircleCheck } from "react-icons/fa6";

export const ConfirmAccount: FC = () => {
    const { email } = useParams();
    const { confirmed, confirming, confirmEmail } = useServiceRequestContext();

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
                <Button w={200}
                    colorPalette={!confirmed ? 'cyan' : 'green'}
                    marginTop={5}
                    loading={confirming}
                    spinner={<ClipLoader size={25} color="white" />}
                    onClick={() => confirmEmail(email)}>
                    {confirmed ?
                        <Text display={'flex'} gap={5} justifyContent={'start'}><FaRegCircleCheck />¡Listo!</Text>
                        : <Text>Acceder</Text>}
                </Button>
            </Flex>
        </Box>
    )
}