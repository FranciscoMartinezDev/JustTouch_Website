import { useMenuContext } from "@/Context/MenuContext";
import { Product } from "@/Models/Product";
import type { ChangeEvent } from "react";

export default function useMenu() {
    const { handler } = useMenuContext();

    const handleCatalog = (value: string) => {
        handler((prev) => {
            return { ...prev, Catalog: value }
        })
    }

    const handleProductName = (value: string, index: number) => {
        handler((prev) => {
            const productList = [...prev.Products];
            productList[index].Name = value;
            return { ...prev, Products: productList }
        })
    }
    
    const handleProductPrice = (value: string, index: number) => {
        handler((prev) => {
            return {
                ...prev, Products: prev.Products.map((prd, i) => {
                    if (i === index) {
                        const regex = /^\d*([.,]\d*)?$/;
                        if (regex.test(value.toString())) {
                            return { ...prd, Price: value };
                        }
                    }
                    return prd;
                })
            }
        })
    }

    const handleProductDescription = (value: string, index: number) => {
        handler((prev) => {
            const productList = [...prev.Products];
            productList[index].Description = value;
            return { ...prev, Products: productList }
        })
    }

    const handlePicture = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handler((prev) => {
                    return {
                        ...prev, Products: prev.Products.map((prd, i) => {
                            if (i === index) {
                                return { ...prd, Picture: file, PictureUrl: reader.result as string };
                            }
                            return prd;
                        })
                    }
                })
            }
            reader.readAsDataURL(file);
        }
    }

    const RemovePicture = (index: number) => {
        handler(prev => {
            return {
                ...prev, Products: prev.Products.map((prd, i) => {
                    if (i === index) {
                        prd.Picture = undefined;
                        prd.PictureUrl = undefined;
                        console.log(prd)
                        return prd;
                    }
                    return prd;
                })
            }
        })
    }

    const PushProduct = () => {
        handler((prev) => {
            return { ...prev, Products: [...prev.Products, new Product()] }
        })
    }

    const RemoveProduct = (index: number) => {
        handler((prev) => {
            const productList = [...prev.Products];
            if (productList.length > 1) {
                productList.splice(index, 1);
            }
            return { ...prev, Products: productList };
        })
    }

    return {
        handleCatalog,
        handleProductName,
        handleProductPrice,
        handleProductDescription,
        handlePicture,
        PushProduct,
        RemovePicture,
        RemoveProduct
    }
}