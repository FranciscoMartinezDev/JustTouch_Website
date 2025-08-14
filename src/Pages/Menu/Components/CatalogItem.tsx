import { Button, Card, Checkbox, Collapsible, Flex, Heading, List, Text } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { FaAngleUp, FaRegRectangleXmark, FaPenToSquare } from "react-icons/fa6";
import type { FC } from "react";
import '../Menu.scss'

export const CatalogItem: FC = () => {
    return (
        <Collapsible.Root>
            <Card.Root className="catalog-card">
                <Card.Header padding={0}>
                    <Flex className="catalog-header">
                        <Heading as={"h1"} color={'gray'}>Catalogo</Heading>
                        <Flex spaceX={1} className="catalog-actions">
                            <Tooltip content='Quitar grupo'>
                                <Button colorPalette={'red'}>
                                    <FaRegRectangleXmark />
                                </Button>
                            </Tooltip>
                            <Tooltip content='Editar grupo'>
                                <Button bg={'orange.400'}>
                                    <FaPenToSquare />
                                </Button>
                            </Tooltip>
                            <Collapsible.Trigger>
                                <Button bg={'white'} color={'gray'}>
                                    <FaAngleUp />
                                </Button>
                            </Collapsible.Trigger>
                        </Flex>
                    </Flex>
                </Card.Header>
                <Collapsible.Content>
                    <Card.Body className="catalog-body">
                        <List.Root>
                            <List.Item>
                                <Text>Producto</Text>
                                <Flex className="product-actions">
                                    <Text>$455</Text>
                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control />
                                        <Checkbox.Label>Disponible</Checkbox.Label>
                                    </Checkbox.Root>
                                </Flex>
                            </List.Item>
                        </List.Root>

                    </Card.Body>
                </Collapsible.Content>
            </Card.Root>
        </Collapsible.Root >
    )
}