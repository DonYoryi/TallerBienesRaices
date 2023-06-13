import React from 'react';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import { IconButton, Tooltip } from '@mui/material';
interface Props {
    color?: string;
    onClick: () => void;
}

const ExportButton = ({color="#fff", onClick }: Props) => {
    return (
        <Tooltip title="Exportar">
            <IconButton sx={{ color: color }}  aria-label="upload picture" component="label">
                <button hidden onClick={onClick} />
                <SimCardDownloadOutlinedIcon fontSize="large" />
            </IconButton>
        </Tooltip>
    );
}

export default ExportButton;