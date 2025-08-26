import { FormInput } from "@/components/local/FormInput";
import { Box, Button, Card } from "@chakra-ui/react";
import type { FC } from "react";
import './ServiceRequest.scss';
import { useServiceRequestContext } from "@/Context/ServiceRequestContext";

export const ServiceRequest: FC = () => {
    const { user, handleEmail, HandleUserName, newAccount } = useServiceRequestContext();

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
                    <Button onClick={newAccount}>Solicitar</Button>
                </Card.Body>
            </Card.Root>
        </Box>
    )
}