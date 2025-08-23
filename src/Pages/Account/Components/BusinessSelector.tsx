import { SelectForm } from "@/components/local/SelectForm";
import { Button, Card, Heading } from "@chakra-ui/react";
import type { FC } from "react";

export const BusinessSelector: FC = () => {
    return (
        <Card.Root className="business-selector">
            <Card.Header>
                <Heading as={"h1"}>Seleccione un negocio</Heading>
            </Card.Header>
            <Card.Body gap={5}>
                <SelectForm label="Negocio" />
                <SelectForm label="Sucursal" />
                <Button>Seleccionar</Button>
            </Card.Body>
        </Card.Root>
    )
}