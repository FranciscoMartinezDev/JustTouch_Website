import { Card } from "@chakra-ui/react";
import type { FC } from "react";
import { FaRegImage } from "react-icons/fa6";

export const ImgUploader: FC = () => {

    return (
        <Card.Root className="img-uploader">
            <FaRegImage />
        </Card.Root>
    )
}
