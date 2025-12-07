import { Flex, Input } from "@chakra-ui/react";
import type { FC } from "react";
import { PublicCategoryItem } from "./PublicCategoryItem";
import { useMenuContext } from "@/Context/MenuContext";

export const PublicCatalogFilter: FC = () => {
    const { publicMenu } = useMenuContext();

    return (
        <Flex className="filter" marginBottom={10} direction={'column'} gap={5} borderBottom={'1px solid lightgray'} paddingBottom={5}>
            <Input placeholder="Buscar..." />
            <Flex className="category">
                {publicMenu?.Menu.map((item, index) => <PublicCategoryItem key={index} Catalog={item.Catalog} />)}
            </Flex>
        </Flex>
    )
}