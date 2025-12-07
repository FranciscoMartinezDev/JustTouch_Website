import { Box, Heading } from "@chakra-ui/react";
import type { FC } from "react";
import { PublicProduct } from "./PublicProduct";
import type { Product } from "@/Models/Product";

interface Props {
    Catalog?: string | undefined;
    Products: Product[];
}

export const PublicCatalog: FC<Props> = ({ Catalog, Products }) => {

    return (
        <section id={Catalog}>
            <Box className="public-catalog">
                <Heading as={"h1"}>{Catalog}</Heading>
                <Box className="public-product-list">
                    {Products.map((prod, index) => <PublicProduct key={index} Product={prod} />)}
                </Box>
            </Box>
        </section>
    )
}