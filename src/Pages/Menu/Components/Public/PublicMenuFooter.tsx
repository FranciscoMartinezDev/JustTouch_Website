import { Button, Flex, Text } from "@chakra-ui/react";
import type { FC } from "react";

export const PublicMenuFooter: FC = () => {

    return (
        <Flex className="public-menu-footer" gap={2} align={'center'}>
            <Flex className="order-carrousel" gap={2}>
                <Flex className="order">
                    <Text>Pedido #1</Text>
                    <Button>Ver</Button>
                </Flex>
                <Flex className="order">
                    <Text>Pedido #2</Text>
                    <Button>Ver</Button>
                </Flex>
                <Flex className="order">
                    <Text>Pedido #3</Text>
                    <Button>Ver</Button>
                </Flex>
            </Flex>
            <Button>Pagar</Button>
        </Flex>
    )
}