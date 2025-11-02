import { Flex, Text, Image, Button, Float, Circle } from "@chakra-ui/react";
import type { FC } from "react";
import { FaXmark } from "react-icons/fa6";

export const PublicFooterOrder: FC = () => (
    <Flex className="public-footer-order" align={'center'}>
        <Flex align={'center'} gap={10}>
            <Flex align={'center'} className="article">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s" />
                <Text>Articulo 1</Text>
                <Float placement={'top-end'} >
                    <Circle bg={'red.700'}
                        className="float"
                        color={'white'}>
                        <FaXmark />
                    </Circle>
                </Float>
            </Flex>
            <Flex align={'center'} className="article">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s" />
                <Text>Articulo 2</Text>
                <Float placement={'top-end'} >
                    <Circle bg={'red.700'}
                        className="float"
                        color={'white'}>
                        <FaXmark />
                    </Circle>
                </Float>
            </Flex>
            <Flex align={'center'} className="article">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s" />
                <Text>Articulo 3</Text>
                <Float placement={'top-end'} >
                    <Circle bg={'red.700'}
                        className="float"
                        color={'white'}>
                        <FaXmark />
                    </Circle>
                </Float>
            </Flex>
        </Flex>
        <Button _hover={{ backgroundColor: '#934d2aff' }}>Listo</Button>
    </Flex>
)