import { useState } from 'react';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
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
                            setGameQuery({ ...gameQuery, genre })
                        }
                        selectedGenre={gameQuery.genre}
                    />
                </GridItem>
            </Show>
            <GridItem area={'main'} paddingTop={5}>
                <GameHeading
                    selectedGenre={gameQuery.genre}
                    selectedPlatform={gameQuery.platform}
                />
                <HStack spacing={5} paddingX="10px" paddingBottom={5}>
                    <PlatformSelector
                        selectedPlatform={gameQuery.platform}
                        onSelectedPlatform={(platform) =>
                            setGameQuery({ ...gameQuery, platform })
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
