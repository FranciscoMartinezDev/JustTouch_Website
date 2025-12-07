import { useEffect, type FC } from "react";
import { useMenuContext } from "@/Context/MenuContext";
import { Box, Card } from "@chakra-ui/react";
import { PublicCatalog } from "@/Pages/Menu/Components/Public/PublicCatalog";
import { PublicMenuFooter } from "./Components/Public/PublicMenuFooter";
import { useParams } from "react-router";
import { OrderModal } from "./Components/Public/OrderModal";
import { PublicMenuHeader } from "./Components/Public/PublicMenuHeader";
import { PublicCatalogFilter } from "./Components/Public/PublicCatalogFilter";
import '@/Pages/Menu/Styles/Menu.scss';
import '@/Pages/Menu/Styles/Menu.Resize.scss';


export const PublicMenu: FC = () => {
    const { publicMenu, LoadPublicMenu } = useMenuContext();
    const { branchCode } = useParams();

    useEffect(() => {
        LoadPublicMenu(branchCode!);
    }, []);

    return (
        <>
            <OrderModal />
            <Box className="public-menu">
                <PublicMenuHeader />
                <Card.Root className="card-menu">
                    <Card.Body>
                        <PublicCatalogFilter />
                        {publicMenu?.Menu.map((item, index) => <PublicCatalog key={index} Catalog={item.Catalog} Products={item.Products} />)}
                    </Card.Body>
                </Card.Root>
                <PublicMenuFooter />
            </Box>
        </>
    )
}