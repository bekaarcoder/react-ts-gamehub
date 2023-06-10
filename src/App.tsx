import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: '1fr',
                lg: '235px 1fr',
            }}
        >
            <GridItem area={'nav'}>
                <Navbar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                />
            </GridItem>
            <Show above="lg">
                <GridItem
                    area={'aside'}
                    paddingX={5}
                    paddingY="5px"
                    paddingTop={5}
                >
                    <GenreList
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genreId: genre.id })
                        }
                        selectedGenreId={gameQuery.genreId}
                    />
                </GridItem>
            </Show>
            <GridItem area={'main'} paddingTop={5}>
                <GameHeading
                    selectedGenreId={gameQuery.genreId}
                    selectedPlatformId={gameQuery.platformId}
                />
                <HStack spacing={5} paddingX="10px" paddingBottom={5}>
                    <PlatformSelector
                        selectedPlatformId={gameQuery.platformId}
                        onSelectedPlatform={(platform) =>
                            setGameQuery({
                                ...gameQuery,
                                platformId: platform.id,
                            })
                        }
                    />
                    <SortSelector
                        onSelectSortOrder={(sortOrder) =>
                            setGameQuery({ ...gameQuery, sortOrder })
                        }
                        selectedSortOrder={gameQuery.sortOrder}
                    />
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
