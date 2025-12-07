import { Button, Dialog, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { FaXmark } from "react-icons/fa6";

export const OrderModal: FC = () => {

    return (
        <Dialog.Root open={true}>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content className="modal-order" colorPalette={'cyan'} paddingInline={5}>
                    <Dialog.CloseTrigger />
                    <Dialog.Header borderBottom={'1px solid lightgray'} paddingInline={0}>
                        <Heading as={"h1"}>Pedido #1</Heading>
                    </Dialog.Header>
                    <Dialog.Body paddingInline={0}>
                        <Flex className="order-list" divideY={'2px'} direction={'column'}>
                            <Flex className="order-item">
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s" />
                                <Flex direction={'column'}>
                                    <Text><b>Producto 1</b></Text>
                                    <Text marginTop={'auto'}>$ 50</Text>
                                </Flex>
                                <Flex direction={'column'} marginLeft={'auto'}>
                                    <IconButton aria-label="Cerrar"
                                        w={5} h={5}
                                        bg={'transparent'}
                                        marginLeft={'auto'}
                                        color={'gray'}>
                                        <FaXmark />
                                    </IconButton>
                                    <Button marginTop={'auto'}>Cambiar</Button>
                                </Flex>
                            </Flex>
                            <Flex className="order-item">
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s" />
                                <Flex direction={'column'}>
                                    <Text><b>Producto 1</b></Text>
                                    <Text marginTop={'auto'}>$ 50</Text>
                                </Flex>
                                <Flex direction={'column'} marginLeft={'auto'}>
                                    <IconButton aria-label="Cerrar"
                                        w={5} h={5}
                                        bg={'transparent'}
                                        marginLeft={'auto'}
                                        color={'gray'}>
                                        <FaXmark />
                                    </IconButton>
                                    <Button marginTop={'auto'}>Cambiar</Button>
                                </Flex>
                            </Flex>
                            <Flex className="order-item">
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s" />
                                <Flex direction={'column'}>
                                    <Text><b>Producto 1</b></Text>
                                    <Text marginTop={'auto'}>$ 50</Text>
                                </Flex>
                                <Flex direction={'column'} marginLeft={'auto'}>
                                    <IconButton aria-label="Cerrar"
                                        w={5} h={5}
                                        bg={'transparent'}
                                        marginLeft={'auto'}
                                        color={'gray'}>
                                        <FaXmark />
                                    </IconButton>
                                    <Button marginTop={'auto'}>Cambiar</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="content-footer" justify={'end'} borderTop={'1px solid lightgray'} marginTop={2}>
                            <Text>Total: $ 500</Text>
                        </Flex>
                    </Dialog.Body>
                    <Dialog.Footer paddingInline={0} className="modal-footer">
                        <Button>Cancelar pedido</Button>
                        <Button colorPalette={'teal'}>Listo</Button>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    )
}   