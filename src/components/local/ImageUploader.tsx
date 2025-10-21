import { useRef, type FC } from "react";
import { Box, Card, Circle, Float, Image, Input, Text } from "@chakra-ui/react";
import { FaImage, FaXmark } from "react-icons/fa6";
import { Tooltip } from '@/components/ui/tooltip';

interface Props {
    className?: string | '';
    change?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    remove?: () => void;
    preview?: string | undefined;
    placeholder?: string | undefined;
}

export const ImageUploader: FC<Props> = ({ className, change, remove, preview, placeholder }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const clickUpdate = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }

    return (
        <Card.Root className={`image-uploader ${className}`}>
            {preview ?
                <Box className="image-file" position={'relative'}>
                    <Float placement={'top-end'} >
                        <Circle bg={'red.700'}
                            className="float"
                            color={'white'}
                            onClick={remove}>
                            <FaXmark />
                        </Circle>
                    </Float>
                    <Image src={preview} />
                </Box>
                :
                <Tooltip content='El tamaño de imagen debe ser de 90x90' openDelay={0}>
                    <Box className="image-placeholder" onClick={clickUpdate}>
                        <FaImage />
                        <Text>{placeholder || 'Seleccione una imagen'}</Text>
                        <Input ref={inputRef}
                            type={'file'}
                            accept="image/*"
                            onChange={change} hidden />
                    </Box>
                </Tooltip>
            }
        </Card.Root>
    )
}