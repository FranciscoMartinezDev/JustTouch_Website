import { Box, Button, Card, Heading, Image, Separator } from "@chakra-ui/react";
import { type FC } from "react";
import './Account.scss';
import { FormInput } from "@/components/local/FormInput";
import { BusinessSelector } from "./Components/BusinessSelector";
import { Storage } from "@/Store/Storage";
import { useAuthenticationContext } from "@/Context/AuthenticationContext";
const store = Storage.getInstance();

export const Signin: FC = () => {
    const { user, handleEmail, handlePassword, SignIn } = useAuthenticationContext();
    const branch = store.Get<string>('branch_code');

    return (
        <Box className="sign-in" colorPalette={'cyan'}>
            {!branch ?
                <Card.Root className="sign-in-form">
                    <Card.Header alignItems={'center'}>
                        <Image src={import.meta.env.VITE_LOGO_URL} />
                        <Heading as={'h1'} fontSize={25}>¡Bienvenido!</Heading>
                    </Card.Header>
                    <Separator borderColor={'lightgray'}
                        w={"90%"}
                        margin={'10px auto auto auto'} />
                    <Card.Body gap={5}>
                        <FormInput label="Usuario"
                            placeholder="E-mail..."
                            change={e => handleEmail(e.target.value)}
                            value={user.Email} />
                        <FormInput label="Contraseña"
                            password={true}
                            placeholder="E-mail..."
                            change={e => handlePassword(e.target.value)}
                            value={user.Password} />
                        <Button onClick={SignIn}>Ingresar</Button>
                    </Card.Body>
                </Card.Root>
                : <BusinessSelector />}
        </Box>
    )
} 