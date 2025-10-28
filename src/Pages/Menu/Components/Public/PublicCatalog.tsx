import type { Menu } from "@/Models/Menu";
import { Box, Heading } from "@chakra-ui/react";
import type { FC } from "react";
import { PublicProduct } from "./PublicProduct";

interface Props {
    Catalog?: Menu;
}

export const PublicCatalog: FC<Props> = ({ Catalog }) => {

    return (
        <section id="catalog">
            <Box className="public-catalog">
                <Heading as={"h1"}>Catalogo 1</Heading>
                <Box className="public-product-list">
                    <PublicProduct />
                    <PublicProduct />
                    <PublicProduct />
                </Box>
            </Box>
        </section>
    )
}