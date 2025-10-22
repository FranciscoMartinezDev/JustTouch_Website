import { ImageUploader } from "@/components/local/ImageUploader";
import { useMenuContext } from "@/Context/MenuContext";
import { Button, Dialog, Flex, Heading, Input, Clipboard, InputGroup, IconButton } from "@chakra-ui/react";
import { type FC } from "react";

export const ModalMenu: FC = () => {
    const { menuUrl, showModal, OpenModal } = useMenuContext();

    return (
        <Dialog.Root open={showModal} size={'lg'}>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content colorPalette={'cyan'} paddingInline={5}>
                    <Dialog.CloseTrigger />
                    <Dialog.Header borderBottom={'1px solid lightgray'} paddingInline={0}>
                        <Heading as={"h1"} fontSize={30} color={'gray'}>Menu</Heading>
                    </Dialog.Header>
                    <Dialog.Body paddingInline={0}>
                        <ImageUploader className="portada" placeholder="Seleccione una portada" />
                        <Flex align={'center'} gap={5} borderBottom={'1px solid lightgray'} paddingBottom={3}>
                            <ImageUploader className="logo" placeholder="Seleccione un logo" />
                            <Flex gap={2} w={'calc(100% - 100px)'} direction={'column'}>
                                <Input placeholder="Instagram..." />
                                <Flex minW={'120px'} gap={2}>
                                    <Input placeholder="Facebook..." />
                                    <Input placeholder="Whatsapp..." />
                                </Flex>
                            </Flex>
                        </Flex>
                        <Clipboard.Root w={'100%'} marginTop={3} value={menuUrl}>
                            <InputGroup endElement={
                                <Clipboard.Trigger asChild>
                                    <IconButton onClick={() => window.open(menuUrl)}
                                        me="-3"
                                        borderTopStartRadius={0}
                                        borderBottomStartRadius={0}>
                                        <Clipboard.Indicator />
                                    </IconButton>
                                </Clipboard.Trigger>}>
                                <Clipboard.Input asChild>
                                    <Input disabled _disabled={{ opacity: 1 }} />
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