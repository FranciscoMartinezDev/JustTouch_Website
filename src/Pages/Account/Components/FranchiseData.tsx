import { type FC } from "react";
import { Flex } from "@chakra-ui/react";
import { FranchiseItem } from "./FranchiseItem";
import { useAccountContext } from "@/Context/AccountContext";

export const FranchiseData: FC = () => {
    const { account } = useAccountContext();

    return (
        <Flex className="franchise-container" gap={5} direction={'column'}>
            {account.Franchises.filter(x => x.Deleted === false).map((item, index) => {
                return <FranchiseItem key={index} Franchise={item} FKey={index} />
            })}
        </Flex>
    )
}



