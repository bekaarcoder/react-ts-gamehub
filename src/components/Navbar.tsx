import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const Navbar = () => {
    return (
        <HStack paddingX={'10px'} spacing={10}>
            <Flex align="center">
                <Image src={logo} boxSize="60px" />
                <Text>GameHub</Text>
            </Flex>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default Navbar;
