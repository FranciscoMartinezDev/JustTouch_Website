import type { FC } from "react";
import { Button, Flex, Input, Textarea } from "@chakra-ui/react";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { Tooltip } from '@/components/ui/tooltip';
import useMenu from "@/Hooks/MenuHook";
import type { Product } from "@/Models/Product";
import { ImageUploader } from "@/components/local/ImageUploader";

interface Props {
    Product: Product,
    PKey: number
}

export const ProductItem: FC<Props> = ({ Product, PKey }) => {
    const { handleProductName, handleProductPrice, handleProductDescription, handlePicture, RemovePicture, RemoveProduct } = useMenu();

    return (
        <Flex className="product-item">
            <ImageUploader className="img-uploader"
                preview={Product.PictureUrl ? Product.PictureUrl : undefined}
                change={e => handlePicture(e, PKey)}
                remove={() => RemovePicture(PKey)} />
            <Flex className="product-data" direction={'column'}>
                <Flex className="first-data">
                    <Input placeholder="Acticulo..."
                        onChange={e => handleProductName(e.target.value, PKey)}
                        value={Product.Name} />
                    <Input placeholder="Precio..."
                        onChange={e => handleProductPrice(e.target.value, PKey)}
                        value={Product.Price} />
                    <Tooltip content='Quitar articulo' openDelay={0}>
                        <Button colorPalette={'red'} onClick={() => RemoveProduct(PKey)}>
                            <FaRegRectangleXmark />
                        </Button>
                    </Tooltip>
                </Flex>
                <Flex>
                    <Textarea placeholder="Descripcion..."
                        resize={'none'}
                        onChange={e => handleProductDescription(e.target.value, PKey)}
                        value={Product.Description}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}