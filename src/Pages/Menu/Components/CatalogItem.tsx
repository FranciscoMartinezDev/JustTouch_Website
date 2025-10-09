import { Button, Card, Checkbox, Collapsible, Flex, Heading, List, Text } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { FaAngleUp, FaRegRectangleXmark, FaPenToSquare } from "react-icons/fa6";
import { useState, type CSSProperties, type FC } from "react";
import { Menu } from '@/Models/Menu';
import '../Menu.scss';
import { useMenuContext } from "@/Context/MenuContext";

interface Props {
    Catalog: Menu;
    Index: number;
}


export const CatalogItem: FC<Props> = ({ Catalog, Index }) => {
    const { DropCatalog } = useMenuContext();
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const collapse = () => {
        if (!collapsed) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    }

    const rotateButton: CSSProperties = {
        backgroundColor: 'white',
        width: 35,
        color: 'gray',
        transform: `rotateZ(${collapsed ? '180deg' : '0'})`,
        transition: '.2s ease-in ease-out'
    }

    const Edit = (catalogKey: string) => {
        location.href = `/profile/edit-product-group/${catalogKey}`
    }

    return (
        <Collapsible.Root>
            <Card.Root className="catalog-card">
                <Card.Header padding={0}>
                    <Flex className="catalog-header">
                        <Heading as={"h1"} color={'gray'}>{Catalog.Catalog}</Heading>
                        <Flex spaceX={1} className="catalog-actions">
                            <Tooltip content='Quitar grupo'>
                                <Button colorPalette={'red'} onClick={() => DropCatalog(Catalog.CatalogCode!, Index)}>
                                    <FaRegRectangleXmark />
                                </Button>
                            </Tooltip>
                            <Tooltip content='Editar grupo'>
                                <Button bg={'orange.400'} onClick={() => Edit(Catalog.CatalogCode!)}>
                                    <FaPenToSquare />
                                </Button>
                            </Tooltip>
                            <Collapsible.Trigger onClick={collapse}>
                                <FaAngleUp style={rotateButton} />
                            </Collapsible.Trigger>
                        </Flex>
                    </Flex>
                </Card.Header>
                <Collapsible.Content>
                    <Card.Body className="catalog-body">
                        <List.Root gap={7}>
                            {Catalog.Products.map((prod, index) => {
                                return (
                                    <List.Item key={index}>
                                        <Text>{prod.Name}</Text>
                                        <Flex className="product-actions">
                                            <Text>$ {prod.Price}</Text>
                                            <Checkbox.Root checked={prod.IsAvailable} w={120}>
                                                <Checkbox.HiddenInput />
                                                <Checkbox.Control />
                                                <Checkbox.Label>{prod.IsAvailable ? 'Disponible' : 'No disponible'}</Checkbox.Label>
                                            </Checkbox.Root>
                                        </Flex>
                                    </List.Item>
                                )
                            })}
                        </List.Root>
                    </Card.Body>
                </Collapsible.Content>
            </Card.Root>
        </Collapsible.Root >
    )
}