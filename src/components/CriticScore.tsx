import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    const color = score < 70 ? 'red' : score < 85 ? 'yellow' : 'green';
    return (
        <Badge paddingX={'5px'} colorScheme={color}>
            {score}
        </Badge>
    );
};

export default CriticScore;
