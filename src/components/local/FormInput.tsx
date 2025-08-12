import { Field, Input } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input"
import type { ChangeEventHandler, FC } from "react";

interface Props {
    className?: string,
    label?: string,
    placeholder: string,
    helper?: string,
    password?: boolean,
    error?: string,
    value?: string | number | readonly string[] | undefined,
    change?: ChangeEventHandler<HTMLInputElement>
}

export const FormInput: FC<Props> = ({ className, label, placeholder, password = false, helper, error, value, change }) => {
    return (
        <Field.Root w={'auto'}>
            {label &&
                <Field.Label>
                    {label}
                    {error && <Field.RequiredIndicator />}
                </Field.Label>
            }
            {!password ?
                <Input borderColor={'lightgray'}
                    className={className}
                    placeholder={placeholder}
                    value={value}
                    onChange={change}
                /> :
                <PasswordInput borderColor={'lightgray'}
                    className={className}
                    placeholder={placeholder}
                    value={value}
                    onChange={change} />
            }
            {helper && <Field.HelperText>{helper}</Field.HelperText>}
            {error && <Field.ErrorText>{error}</Field.ErrorText>}
        </Field.Root>
    )
}

