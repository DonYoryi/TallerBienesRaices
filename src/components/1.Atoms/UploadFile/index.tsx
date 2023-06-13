import { IconButton, Tooltip } from "@mui/material";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { ChangeEventHandler } from "react";

interface Props {
    color?: string;
    readUploadFile:ChangeEventHandler;
}
 
const UploadFile = ({color="#fff",readUploadFile}:Props) => {
    return ( 
        <Tooltip title="Importar Excel">
            <IconButton sx={{ color:color}} aria-label="upload picture" component="label">
                <input hidden onChange={readUploadFile} type="file" />
                <DriveFolderUploadIcon fontSize="large" />
            </IconButton>
        </Tooltip>
     );
}
 
export default UploadFile;