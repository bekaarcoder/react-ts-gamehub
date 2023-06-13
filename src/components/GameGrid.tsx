import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <Text>{error?.message}</Text>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                spacing={5}
                padding={'10px'}
            >
                {isLoading
                    ? skeletons.map((skeleton) => (
                          <GameCardContainer key={skeleton}>
                              <GameCardSkeleton />
                          </GameCardContainer>
                      ))
                    : data?.pages.map((page, index) => (
                          <React.Fragment key={index}>
                              {page.results.map((game) => (
                                  <GameCardContainer key={game.id}>
                                      <GameCard game={game} />
                                  </GameCardContainer>
                              ))}
                          </React.Fragment>
                      ))}
            </SimpleGrid>
            {hasNextPage && (
                <Flex justify="center" align="center" marginY={5}>
                    <Button onClick={() => fetchNextPage()}>
                        {isFetchingNextPage ? 'Loading' : 'Load More'}
                    </Button>
                </Flex>
            )}
        </>
    );
};

export default GameGrid;
