import { Dialog, Flex, Heading, Text } from "@chakra-ui/react";
import type { FC } from "react";

const ProductToBuy: FC = () => {
    return (
        <Flex className="product-to-buy">
            <Text>
                Producto 1
            </Text>
            <Text>
                $50.60
            </Text>
        </Flex>
    )
}


export const PublicModalMenu: FC = () => {
    return (

        <Dialog.Root>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content>
                    <Dialog.Header>
                        <Heading as={"h6"}>Pedido</Heading>
                    </Dialog.Header>
                    <Dialog.Body>
                        <ProductToBuy />
                    </Dialog.Body>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    )
}