import { ImageUploader } from "@/components/local/ImageUploader";
import { useMenuContext } from "@/Context/MenuContext";
import { Button, Dialog, Flex, Heading, Input, Clipboard, InputGroup, IconButton } from "@chakra-ui/react";
import { type FC } from "react";

export const ModalMenu: FC = () => {
    const { showModal, OpenModal } = useMenuContext();

    return (
        <Dialog.Root open={showModal}>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content colorPalette={'cyan'} paddingInline={5}>
                    <Dialog.CloseTrigger />
                    <Dialog.Header borderBottom={'1px solid lightgray'} paddingInline={0}>
                        <Heading as={"h1"} fontSize={30} color={'gray'}>Menu</Heading>
                    </Dialog.Header>
                    <Dialog.Body paddingInline={0}>
                        <ImageUploader className="portada" placeholder="Seleccione una portada" />
                        <Flex gap={5} borderBottom={'1px solid lightgray'} paddingBottom={3}>
                            <ImageUploader className="logo" placeholder="Seleccione un logo" />
                            <Flex w="67%" minW={'120px'} direction={'column'} gap={2}>
                                <Input w="100%" placeholder="Instagram..." />
                                <Input w="100%" placeholder="Facebook..." />
                                <Input w="100%" placeholder="Whatsapp..." />
                            </Flex>
                        </Flex>
                        <Clipboard.Root w={'100%'} marginTop={3} value="https://chakra-ui.com">
                            <InputGroup endElement={
                                <Clipboard.Trigger asChild>
                                    <IconButton me="-3" borderTopStartRadius={0} borderBottomStartRadius={0}>
                                        <Clipboard.Indicator />
                                    </IconButton>
                                </Clipboard.Trigger>}>
                                <Clipboard.Input asChild>
                                    <Input disabled _disabled={{opacity: 1}}/>
                                </Clipboard.Input>
                            </InputGroup>
                        </Clipboard.Root>
                    </Dialog.Body>
                    <Dialog.Footer paddingInline={0}>
                        <Button onClick={OpenModal} margin={'auto'} w={'100%'}>Hecho</Button>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    )
}