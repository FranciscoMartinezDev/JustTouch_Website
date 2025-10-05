import { MenuRequest } from "@/Models/Request/MenuRequest";
import { Menu } from "@/Models/Menu";


export function MenuToFormData(menu: Menu): FormData {
  const formData = new FormData();
  formData.append("Catalog", menu.Catalog!)
  formData.append("BranchCode", menu.BranchCode!);

  menu.Products.map((prod, index) => {
    formData.append(`Products[${index}].Name`, prod.Name!);
    formData.append(`Products[${index}].Description`, prod.Description!);
    formData.append(`Products[${index}].Price`, prod.Price!);
    formData.append(`Products[${index}].IsAvailable`, prod.IsAvailable.toString());
    if (prod.Picture) {
      formData.append(`Products[${index}].Picture`, prod.Picture);
    }
  })
  return formData;
}

export function MenuRequestToFormData(req: MenuRequest): FormData {
  const formData = new FormData();

  formData.append(`Menu.Catalog`, req.Menu.Catalog!);
  formData.append('Menu.CatalogCode', req.Menu.CatalogCode!);
  req.Menu.Products.forEach((product, index) => {
    formData.append(`Menu.Products[${index}].IdProduct`, product.IdProduct.toString());
    formData.append(`Menu.Products[${index}].ProductCode`, product.ProductCode ?? '');
    formData.append(`Menu.Products[${index}].Name`, product.Name!);
    formData.append(`Menu.Products[${index}].Description`, product.Description!);
    formData.append(`Menu.Products[${index}].Price`, product.Price!);
    formData.append(`Menu.Products[${index}].PictureUrl`, product.PictureUrl!);
    formData.append(`Menu.Products[${index}].IsAvailable`, product.IsAvailable.toString());

    if (product.Picture) {
      formData.append(`Menu.Products[${index}].Picture`, product.Picture);
    }
  });

  req.DeletedProducts.forEach((product, index) => {
    formData.append(`DeleteProducts[${index}].ProductCode`, product.ProductCode ?? '');
    formData.append(`DeleteProducts[${index}].Name`, product.Name!);
    formData.append(`DeleteProducts[${index}].Description`, product.Description!);
    formData.append(`DeleteProducts[${index}].Price`, product.Price!);
    formData.append(`DeleteProducts[${index}].IsAvailable`, product.IsAvailable.toString());
    if (product.PictureUrl !== undefined && product.PictureUrl !== '') {
      formData.append(`DeleteProducts[${index}].PictureUrl`, product.PictureUrl);
    }
  });
  // for (const pair of formData.entries()) {
  //   console.log(pair[0], pair[1]);
  // }
  // formData.append("Menu", JSON.stringify(req.Menu));
  // formData.append("DeletedProducts", JSON.stringify(req.DeletedProducts));
  return formData;
}