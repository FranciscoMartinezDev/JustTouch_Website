import type { Product } from "@/Models/Product";
import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
    Product?: Product;
}

export const PublicProduct: FC<Props> = ({ Product }) => {

    return (
        <Card.Root>
            <Card.Body padding={2}>
                <Flex className="public-product">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s"/>
                    <Flex className="public-product-data" paddingInline={2} direction={'column'}>
                        <Text>Producto 1</Text>
                        <Text>Descripcion 1</Text>
                        <Button bg={'#A05631'} _hover={{backgroundColor: '#934d2aff' }}>
                            Añadir al carrito
                        </Button>
                    </Flex>
                </Flex>
            </Card.Body>
        </Card.Root>
    )
}