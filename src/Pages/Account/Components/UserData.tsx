import { FormInput } from "@/components/local/FormInput"
import { Box } from "@chakra-ui/react"


export const UserData = () => {
    return (
        <Box className="user-data">
            <FormInput label="Usuario" placeholder="Nombre de usuario..." />
            <FormInput label="Nombre" placeholder="Escriba su/s nombre/s..." />
            <FormInput label="Apellido" placeholder="Escriba su/s apellido/s" />
            <FormInput label="E-mail" placeholder="Email personal..." />
            <FormInput label="Celular" placeholder="Celular personal..." />
            <FormInput label="Contraseña" password={true} placeholder="Escriba su contraseña..." />
            <FormInput label="Repetir contraseña" password={true} placeholder="Vuelva a escribir su contraseña" />
        </Box>
    )
}