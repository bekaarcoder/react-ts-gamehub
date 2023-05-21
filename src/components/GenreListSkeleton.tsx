import { Box, Skeleton } from '@chakra-ui/react';

const GenreListSkeleton = () => {
    return (
        <Box paddingY="5px">
            <Skeleton height="32px" />
        </Box>
    );
};

export default GenreListSkeleton;
