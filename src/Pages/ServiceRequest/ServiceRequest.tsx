import { FormInput } from "@/components/local/FormInput";
import { Box, Button, Card, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { useServiceRequestContext } from "@/Context/ServiceRequestContext";
import { FaRegCircleCheck } from "react-icons/fa6";
import './ServiceRequest.scss';
import { ClipLoader } from 'react-spinners';

export const ServiceRequest: FC = () => {
    const { user, requesting, requested, handleEmail, HandleUserName, newAccount } = useServiceRequestContext();

    return (
        <Box className="service-request">
            <Card.Root className="request" colorPalette={'cyan'}>
                <Card.Body gap={5}>
                    <FormInput label="Email"
                        placeholder="Escriba su email personal..."
                        change={e => handleEmail(e.target.value)}
                        value={user.Email} />

                    <FormInput label="Nombre de usuario"
                        placeholder="Escriba un nombre para su usuario..."
                        change={e => HandleUserName(e.target.value)}
                        value={user.UserName} />
                    <Button colorPalette={requested ? 'green' : ''}
                        loading={requesting}
                        spinner={<ClipLoader size={25} color="white" />}
                        onClick={newAccount}>
                        {!requested ? <Text>Solicitar</Text> :
                            <Text display={'flex'} gap={5} justifyContent={'start'}><FaRegCircleCheck />¡Esta hecho!</Text>
                        }
                    </Button>
                </Card.Body>
            </Card.Root>
        </Box>
    )
}