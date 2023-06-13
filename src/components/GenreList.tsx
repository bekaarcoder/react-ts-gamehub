import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
    const { data, isLoading } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6];
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setGenreId = useGameQueryStore((s) => s.setGenreId);

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GenreListSkeleton key={skeleton} />
                    ))}
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                                objectFit="cover"
                            />
                            <Button
                                onClick={() => setGenreId(genre.id)}
                                variant="link"
                                fontWeight={
                                    selectedGenreId === genre.id
                                        ? 'bold'
                                        : 'normal'
                                }
                                textAlign="left"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
