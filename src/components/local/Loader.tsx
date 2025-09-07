import { Box } from "@chakra-ui/react";
import type { FC } from "react";

export const Loader: FC = () => {
    return (
        <Box className="loader-container">
            <Box className="loader">
                <span></span>
                <span></span>
                <span></span>
            </Box>
        </Box>
    )
}