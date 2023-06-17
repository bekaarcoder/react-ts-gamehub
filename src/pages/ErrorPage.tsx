import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <Navbar />
            <Box padding={5}>
                <Heading>Oops!</Heading>
                <Text>
                    {isRouteErrorResponse(error)
                        ? 'This page does not exist.'
                        : 'Sorry, an unexpected error has occurred.'}
                </Text>
            </Box>
        </>
    );
};

export default ErrorPage;
