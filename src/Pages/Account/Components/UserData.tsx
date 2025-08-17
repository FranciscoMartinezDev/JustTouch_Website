import { FormInput } from "@/components/local/FormInput"
import { useAccountContext } from "@/Context/AccountContext";
import { useFranchises, useUserData } from "@/Hooks/AccountHook"
import { Box, Button, Flex } from "@chakra-ui/react"


export const UserData = () => {
    const { handleUserName, handleFirstName, handleLastName, handleEmail, handlePhone, handlePassword, handleRepeat } = useUserData();
    const { Push } = useFranchises();
    const { account } = useAccountContext();

    return (
        <Box className="user-data">
            <FormInput className="user"
                label="Usuario"
                placeholder="Nombre de usuario..."
                change={e => handleUserName(e.target.value)}
                value={account.UserData?.UserName}
            />
            <FormInput className="name"
                label="Nombre"
                placeholder="Escriba su/s nombre/s..."
                change={e => handleFirstName(e.target.value)}
                value={account.UserData?.FirstName}
            />
            <FormInput className="last"
                label="Apellido"
                placeholder="Escriba su/s apellido/s"
                change={e => handleLastName(e.target.value)}
                value={account.UserData?.LastName}
            />
            <FormInput className="email"
                label="E-mail"
                placeholder="Email personal..."
                change={e => handleEmail(e.target.value)}
                value={account.UserData?.Email}
            />
            <FormInput className="phone"
                label="Celular"
                placeholder="Celular personal..."
                change={e => handlePhone(e.target.value)}
                value={account.UserData?.Phone}
            />
            <FormInput className="pass"
                label="Contraseña"
                password={true}
                placeholder="Escriba su contraseña..."
                change={e => handlePassword(e.target.value)}
                value={account.UserData?.Password}
            />
            <FormInput className="conf"
                label="Repetir contraseña"
                password={true}
                placeholder="Vuelva a escribir su contraseña"
                change={e => handleRepeat(e.target.value)}
                value={account.UserData?.Repeat}
            />
            <Flex className="add">
                <Button onClick={Push}>Agregar franquicia</Button>
            </Flex>
        </Box>
    )
}