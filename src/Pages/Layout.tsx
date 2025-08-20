import type { FC, ReactElement } from 'react';
import { Box, Button, Flex, Heading, Image, Menu, Portal, Separator, Text } from '@chakra-ui/react';
import { Toaster } from '@/components/ui/toaster';
import { FaRegCircleUser } from "react-icons/fa6";
import './Layout.scss';

const AccountButton: FC = () => {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button marginLeft={'auto'}
                    variant={'solid'} bg={'#00A8E8'}
                    _hover={{ backgroundColor: '#14b6f6' }}>
                    <FaRegCircleUser /> <Text>Cuenta</Text>
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content style={{ boxShadow: '0 0 5px 1px gray' }}>
                        <Menu.Item value="" style={{ color: 'gray' }}>
                            Cuenta
                        </Menu.Item>
                        <Separator bg={'gray'} />
                        <Menu.Item value="" style={{ color: 'gray' }}>
                            Cerrar Session
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>

    )
}

interface Props {
    children: ReactElement
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <Box className='layout'>
            <Toaster />
            <Flex className='nav-header'
                align={'center'}
                paddingInline={3}
                gap={3}>
                <Image src='https://dvvlhkouasxqzmaxkvll.supabase.co/storage/v1/object/public/footages/JustTouchLogo.png' />
                <Heading as={'h1'}>Just Touch</Heading>
                <AccountButton />
            </Flex>
            <Box className='body-content'>
                {children}
            </Box>
        </Box>
    )
}