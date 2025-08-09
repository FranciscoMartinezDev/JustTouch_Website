import { Box, Flex, Heading } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

interface Props {
    Title: string,
    Actions: ReactNode,
    Body: ReactNode
}

export const Page: FC<Props> = ({ Title, Actions, Body }) => {
    return (
        <Box className="page" colorPalette={'cyan'} color={'gray'}>
            <Flex className="page-header">
                <Heading as={"h1"} marginRight={'auto'}>{Title}</Heading>
                {Actions}
            </Flex>
            <Box className="page-body">
                {Body}
            </Box>
        </Box>
    )
}