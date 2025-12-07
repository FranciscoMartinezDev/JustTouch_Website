import type { Product } from "@/Models/Product";
import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
    Product?: Product;
}

export const PublicProduct: FC<Props> = ({ Product }) => {

    return (
        <Card.Root border={'1px solid lightgray'} className="public-product">
            <Card.Body padding={2}>
                <Flex className="product-data">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s" />
                    <Box>
                        <Text fontWeight={'bold'}>{Product?.Name}</Text>
                        <Text>{Product?.Description}</Text>
                    </Box>
                </Flex>

                <Flex marginTop={3} align={'end'} justifyContent={'space-between'}>
                    <Text color={'#A05631'} fontWeight={'bold'}>$ 500.50</Text>
                    <Button bg={'#A05631'} _hover={{ backgroundColor: '#934d2aff' }}>
                        Pedir
                    </Button>
                </Flex>
            </Card.Body>
        </Card.Root>
    )
}