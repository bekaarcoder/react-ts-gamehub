import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
    const sortOrder = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Released date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ];

    const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrder.find(
        (order) => order.value === selectedSortOrder
    );

    const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrder.map((order) => (
                    <MenuItem
                        onClick={() => setSelectedSortOrder(order.value)}
                        key={order.value}
                    >
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
