import { Button, Tooltip } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
interface Props {
    color?: string
    onClick: () => void
}

const ButtonARemove = ({color="#ff0000",onClick}:Props) => {
    return (
        <Tooltip title="Eliminar">
            <Button onClick={onClick}>
                <HighlightOffIcon sx={{ color: color }} fontSize="large" />
            </Button>
        </Tooltip>
    );
}

export default ButtonARemove;