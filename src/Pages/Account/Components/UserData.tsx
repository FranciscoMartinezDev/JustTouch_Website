import { FormInput } from "@/components/local/FormInput"
import { Box } from "@chakra-ui/react"


export const UserData = () => {
    return (
        <Box className="user-data">

            <FormInput className="user" label="Usuario" placeholder="Nombre de usuario..." />
            <FormInput className="name" label="Nombre" placeholder="Escriba su/s nombre/s..." />
            <FormInput className="last" label="Apellido" placeholder="Escriba su/s apellido/s" />
            <FormInput className="email" label="E-mail" placeholder="Email personal..." />
            <FormInput className="phone" label="Celular" placeholder="Celular personal..." />
            <FormInput className="pass" label="Contraseña" password={true} placeholder="Escriba su contraseña..." />
            <FormInput className="conf" label="Repetir contraseña" password={true} placeholder="Vuelva a escribir su contraseña" />
        </Box>
    )
}