import { Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
    selectedPlatformId?: number;
    selectedGenreId?: number;
}

const GameHeading = ({ selectedPlatformId, selectedGenreId }: Props) => {
    const { data: genres } = useGenres();
    const { data: platforms } = usePlatforms();

    const genre = genres.results.find((genre) => genre.id === selectedGenreId);
    const platform = platforms.results.find(
        (platform) => platform.id === selectedPlatformId
    );

    return (
        <Text fontSize="4xl" paddingX="10px" paddingBottom={5}>
            {`${platform?.name || ''} ${genre?.name || ''} Games`}
        </Text>
    );
};

export default GameHeading;
