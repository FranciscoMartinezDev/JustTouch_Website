import { Button, Flex, Text } from "@chakra-ui/react";
import type { FC } from "react";

export const PublicMenuFooter: FC = () => {
    return (
        <Flex className="public-menu-footer" gap={2} align={'center'}>
            <Text>Pedidos: 5</Text>
            <Button _hover={{ backgroundColor: '#934d2aff' }}>Ordenar</Button>
        </Flex>
    )
}