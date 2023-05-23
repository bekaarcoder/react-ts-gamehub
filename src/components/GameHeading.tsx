import { Text } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';

interface Props {
    selectedPlatform: Platform | null;
    selectedGenre: Genre | null;
}

const GameHeading = ({ selectedPlatform, selectedGenre }: Props) => {
    const platformText = selectedPlatform ? selectedPlatform.name : '';
    const genreText = selectedGenre ? selectedGenre.name : '';

    return (
        <Text fontSize="4xl" paddingX="10px" paddingBottom={5}>
            {`${platformText} ${genreText} Games`}
        </Text>
    );
};

export default GameHeading;
