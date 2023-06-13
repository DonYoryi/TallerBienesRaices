import { Button, Tooltip } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface Props {
    color?: string
    onClick: () => void
    text?: string
}

const ButtonAdd = ({color="#fff",text,onClick}:Props) => {
    return (
        <Tooltip title="agregar">
            <Button onClick={onClick}>
                <AddCircleOutlineOutlinedIcon sx={{ color: color }} fontSize="large" />
                {text}
            </Button>
        </Tooltip>
    );
}

export default ButtonAdd;