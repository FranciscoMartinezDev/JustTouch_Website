import { Menu } from "@/Models/Menu";

export function MenuToFormData(menu: Menu): FormData {
  const formData = new FormData();

  formData.append("IdMenu", menu.IdMenu?.toString() ?? "0");
  formData.append("Catalog", menu.Catalog!);
  formData.append("IdBranch", menu.IdBranch?.toString() ?? "0");

  menu.Products.forEach((product, index) => {
    formData.append(`Products[${index}].IdProduct`, product.IdProduct?.toString() ?? "0");
    formData.append(`Products[${index}].Name`, product.Name!);
    formData.append(`Products[${index}].Description`, product.Description!);
    formData.append(`Products[${index}].Price`, product.Price ?? "");
    formData.append(`Products[${index}].IsAvailable`, product.IsAvailable.toString());

    if (product.Picture) {
      formData.append(`Products[${index}].Picture`, product.Picture);
    }
  });

  return formData;
}