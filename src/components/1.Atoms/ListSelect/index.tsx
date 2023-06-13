import  React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select, { SelectChangeEvent } from '@mui/material/Select'

interface Item{
    key: string,
    value: string
}
interface Props {
    list: Item[],
    initialValue?: string | undefined,
    onSelect:(value:string) =>void
}


const ListSelect = ({initialValue,list,onSelect}:Props) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string)
        onSelect(event.target.value as string);
    };

    return (<>
     
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={handleChange}>
                {list.map((item:Item)=>{
                    return (   <MenuItem value={item.value}>{item.key}</MenuItem>)
                })}
        </Select>
    </>
    );
}

export default ListSelect;