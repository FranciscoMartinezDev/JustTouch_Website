import { type Select } from "@/Models/Types/Select";
import { Field, NativeSelect } from "@chakra-ui/react";
import { type ChangeEventHandler, type FC } from "react";

interface Props {
    className?: string,
    data?: Select[],
    label?: string,
    placeholder?: string,
    value?: string | number | readonly string[] | undefined,
    change?: ChangeEventHandler<HTMLSelectElement>
}

export const SelectForm: FC<Props> = ({ className, data, placeholder, value, label, change }) => {

    return (
        <Field.Root>
            {label ? <Field.Label>{label}</Field.Label> : null}
            <NativeSelect.Root className={className}>
                <NativeSelect.Field placeholder={placeholder} value={value} onChange={change}>
                    {data != undefined ?
                        data.map((x, key) => {
                            return <option key={key} value={x.value}>{x.text}</option>
                        })
                        : null
                    }
                </NativeSelect.Field>
                <NativeSelect.Indicator />
            </NativeSelect.Root>
        </Field.Root>
    )
}