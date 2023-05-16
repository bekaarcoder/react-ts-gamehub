import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
    return (
        <Flex justify={'space-between'} paddingX={'10px'}>
            <HStack>
                <Image src={logo} boxSize="60px" />
                <Text>GameHub</Text>
            </HStack>
            <ColorModeSwitch />
        </Flex>
    );
};

export default Navbar;
