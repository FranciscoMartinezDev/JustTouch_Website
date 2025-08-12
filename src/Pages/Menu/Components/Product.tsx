import { Button, Flex, Input, Textarea } from "@chakra-ui/react";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { Tooltip } from '@/components/ui/tooltip';
import { ImgUploader } from "./ImgUploader";
import type { FC } from "react";


export const ProductItem: FC = () => {
    return (

        <Flex className="product-item">
            <ImgUploader />
            <Flex className="product-data" direction={'column'}>
                <Flex className="first-data">
                    <Input placeholder="Acticulo..." />
                    <Input placeholder="Precio..." />
                    <Tooltip content='Quitar articulo'>
                        <Button colorPalette={'red'}>
                            <FaRegRectangleXmark />
                        </Button>
                    </Tooltip>
                </Flex>
                <Flex>
                    <Textarea placeholder="Descripcion..." resize={'none'} />
                </Flex>
            </Flex>
        </Flex>
    )
}