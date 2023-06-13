import { Text } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const GameHeading = () => {
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const genre = useGenre(selectedGenreId);

    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const platform = usePlatform(selectedPlatformId);

    return (
        <Text fontSize="4xl" paddingX="10px" paddingBottom={5}>
            {`${platform?.name || ''} ${genre?.name || ''} Games`}
        </Text>
    );
};

export default GameHeading;
