import { FormInput } from "@/components/local/FormInput";
import { Box, Button, Card } from "@chakra-ui/react";
import type { FC } from "react";
import './ServiceRequest.scss';

export const ServiceRequest: FC = () => {
    return (
        <Box className="service-request">
            <Card.Root className="request" colorPalette={'cyan'}>
                <Card.Body gap={5}>
                    <FormInput label="Email" placeholder="Escriba su email personal..." />
                    <FormInput label="Nombre de usuario" placeholder="Escriba un nombre para su usuario..." />
                    <Button>Solicitar</Button>
                </Card.Body>
            </Card.Root>
        </Box>
    )
}