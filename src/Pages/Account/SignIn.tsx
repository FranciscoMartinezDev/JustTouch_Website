import { Box, Button, Card, Heading, Image, Separator } from "@chakra-ui/react";
import { type FC } from "react";
import './Account.scss';
import { FormInput } from "@/components/local/FormInput";
import { BusinessSelector } from "./Components/BusinessSelector";

export const Signin: FC = () => {
    const select: boolean = true;

    return (
        <Box className="sign-in" colorPalette={'cyan'}>
            {!select ?
                <Card.Root className="sign-in-form">
                    <Card.Header alignItems={'center'}>
                        <Image src={import.meta.env.VITE_LOGO_URL} />
                        <Heading as={'h1'} fontSize={25}>¡Bienvenido!</Heading>
                    </Card.Header>
                    <Separator borderColor={'lightgray'}
                        w={"90%"}
                        margin={'10px auto auto auto'} />
                    <Card.Body gap={5}>
                        <FormInput label="Usuario" placeholder="E-mail..." />
                        <FormInput label="Contraseña" password={true} placeholder="E-mail..." />
                        <Button>Ingresar</Button>
                    </Card.Body>
                </Card.Root>
                : <BusinessSelector />}
        </Box>
    )
} 