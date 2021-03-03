import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const MyInput = ({id, label, variant, value, setValue}) => {
    return (
        <div>
            <TextField
                onChange={(e)=>setValue(e.target.value)}
                value={value}
                id={id}
                label={label}
                variant={variant}
            />
        </div>
    );
};

export default MyInput;