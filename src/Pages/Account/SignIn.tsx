import { Box, Button, Card, Heading, Image, Separator, Text } from "@chakra-ui/react";
import { type FC } from "react";
import { FormInput } from "@/components/local/FormInput";
import { BusinessSelector } from "./Components/BusinessSelector";
import { Storage } from "@/Store/Storage";
import { useAuthenticationContext } from "@/Context/AuthenticationContext";
import { Franchise } from "@/Models/Franchise";
import './Account.scss';
import { Navigate } from "react-router";
import { FaRegCircleCheck } from "react-icons/fa6";

export const Signin: FC = () => {
    const { user, signing, signed, handleEmail, handlePassword, SignIn, hasToken, twinToken } = useAuthenticationContext();
    const store = Storage.getInstance();
    const branch = store.Get<string>('branch_code');
    const franchises: Franchise[] = store.Get('Franchises') || [];

    const token = hasToken();
    const twin = twinToken();


    if (token && twin && !branch && franchises.length === 0) {
        return <Navigate to={'/profile/account'} />
    } else if (token && twin && branch && franchises.length === 1 && franchises[0].Branches.length === 1) {
        return <Navigate to={'/profile/account'} />
    } else {
        return (
            <Box className="sign-in" colorPalette={'cyan'}>
                {!token ?
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
                            <Button onClick={SignIn} loading={signing} colorPalette={!signed ? 'cyan' : 'green'}>
                                {!signed ?
                                    <Text>Ingresar</Text>
                                    :
                                    <Text display={'flex'} gap={5} justifyContent={'start'}><FaRegCircleCheck />¡Listo!</Text>
                                }
                            </Button>
                        </Card.Body>
                    </Card.Root>
                    : <BusinessSelector />}
            </Box>
        )
    }
} 