import { Box, Link, Text } from "@chakra-ui/react"
import type { FC } from "react"
import { FaBowlFood } from "react-icons/fa6"

interface CatagoryProps {
    Catalog: string | undefined
}

export const PublicCategoryItem: FC<CatagoryProps> = ({ Catalog }) => {
    return (
        <Box className="category-item">
            <Link><FaBowlFood /></Link>
            <Text>{Catalog}</Text>
        </Box>
    )
}