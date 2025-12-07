import { useMenuContext } from "@/Context/MenuContext";
import { Order } from "@/Models/Order";
import { OrderItem } from "@/Models/OrderItem";
import { Product } from "@/Models/Product";
import type { ChangeEvent } from "react";

export function useMenu() {
    const { handler, DeletedProducts } = useMenuContext();

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
                            return { ...prd, Price: value.replace('.', ',') };
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

    const handleAvailable = (value: boolean, index: number) => {
        handler((prev) => {
            const productList = [...prev.Products];
            productList[index].IsAvailable = value;
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
                        return prd;
                    }
                    return prd;
                })
            }
        })
    }

    const PushProduct = () => {
        handler((prev) => {
            return { ...prev, Products: [...prev.Products, new Product({ IdProduct: 0, IsAvailable: true })] }
        })
    }

    const RemoveProduct = (index: number) => {
        handler((prev) => {
            const productList = [...prev.Products];
            DeletedProducts(prod => {
                prod.push(productList[index]);
                return prod;
            })
            productList.splice(index, 1);
            return { ...prev, Products: productList };
        })
    }

    return {
        handleCatalog,
        handleProductName,
        handleProductPrice,
        handleProductDescription,
        handleAvailable,
        handlePicture,
        PushProduct,
        RemovePicture,
        RemoveProduct
    }
}

export function usePublicMenu() {
    const { handlerOrders } = useMenuContext();

    const NewOrder = () => {
        handlerOrders(prev => {
            const listOrders = [...prev];
            var newOrder = new Order();
            
            if (listOrders[listOrders.length].Id > 0) {
                newOrder.Id = newOrder.Id + 1;
                listOrders.push(newOrder);
                return listOrders;
            }

            return [...prev, new Order()];
        })
    }

    const TakeProduct = (prod: Product, quantity: number, index: number) => {
        handlerOrders(prev => {
            const listOrders = [...prev];
            var newOrderItem = new OrderItem({
                Quantity: quantity,
                ProductCode: prod.ProductCode,
                ProductName: prod.Name
            });
            listOrders[index].Items.push(newOrderItem);
            return listOrders;
        })
    }

    const handleDescription = (description: string, index: number) => {
        handlerOrders(prev => {
            const listOrders = [...prev];
            listOrders[index].Description = description;
            return listOrders;
        })
    }

    return {
        NewOrder,
        TakeProduct,
        handleDescription
    }
}