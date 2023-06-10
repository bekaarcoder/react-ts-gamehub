import { Text } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
    selectedPlatformId?: number;
    selectedGenreId?: number;
}

const GameHeading = ({ selectedPlatformId, selectedGenreId }: Props) => {
    const genre = useGenre(selectedGenreId);
    const platform = usePlatform(selectedPlatformId);

    return (
        <Text fontSize="4xl" paddingX="10px" paddingBottom={5}>
            {`${platform?.name || ''} ${genre?.name || ''} Games`}
        </Text>
    );
};

export default GameHeading;
