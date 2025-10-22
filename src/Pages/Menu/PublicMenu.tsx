import { useMenuContext } from "@/Context/MenuContext";
import { Box, Card } from "@chakra-ui/react";
import type { FC } from "react";
import './Menu.scss';

export const PublicMenu: FC = () => {
    const { } = useMenuContext();

    return (
        <Box className="public-menu">
            <Box className="front-page">
                
            </Box>
            <Card.Root className="card-menu">
                <Card.Body>

                </Card.Body>
            </Card.Root>

        </Box>
    )
}