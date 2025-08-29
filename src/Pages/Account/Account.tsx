import { useEffect, type FC } from "react";
import { Page } from "@/Pages/Page";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { FaChevronLeft, FaRegFloppyDisk } from "react-icons/fa6";
import { UserData } from "./Components/UserData";
import './Account.scss';
import { FranchiseData } from "./Components/FranchiseData";
import { useAccountContext } from "@/Context/AccountContext";


export const Account: FC = () => {
    const { account, Initialize, SaveChange, LeaveAccount } = useAccountContext();

    useEffect(() => {
        Initialize()
    }, [account])

    return (
        <Page Title="Cuenta"
            Actions={
                <HStack>
                    <Button variant={'outline'} colorPalette={'blue'} borderWidth={2}
                        onClick={LeaveAccount}>
                        <FaChevronLeft />Volver
                    </Button>
                    <Button variant={'solid'} onClick={SaveChange}>
                        <FaRegFloppyDisk /> Guardar cambios
                    </Button>
                </HStack>
            }
            Body={
                <VStack spaceX={3}>
                    <UserData />
                    <FranchiseData />
                </VStack>
            }
        />
    )
}
