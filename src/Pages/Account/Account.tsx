import type { FC } from "react";
import { Page } from "@/Pages/Page";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { FaChevronLeft, FaRegFloppyDisk } from "react-icons/fa6";
import { UserData } from "./Components/UserData";
import './Account.scss';


export const Account: FC = () => {
    return (
        <Page Title="Cuenta"
            Actions={
                <HStack>
                    <Button variant={'outline'} colorPalette={'blue'} borderWidth={2}>
                        <FaChevronLeft />Volver
                    </Button>
                    <Button variant={'solid'}>
                        <FaRegFloppyDisk /> Guardar cambios
                    </Button>
                </HStack>
            }
            Body={
                <VStack>
                    <UserData />
                </VStack>
            }
        />
    )
}