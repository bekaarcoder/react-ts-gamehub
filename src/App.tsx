import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import './App.css';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: '1fr',
                lg: '235px 1fr',
            }}
        >
            <Show above="lg">
                <GridItem
                    area={'aside'}
                    paddingX={5}
                    paddingY="5px"
                    paddingTop={5}
                >
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area={'main'} paddingTop={5}>
                <GameHeading />
                <HStack spacing={5} paddingX="10px" paddingBottom={5}>
                    <PlatformSelector />
                    <SortSelector />
                </HStack>
                <GameGrid />
            </GridItem>
        </Grid>
    );
}

export default App;
