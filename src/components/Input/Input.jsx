import React from 'react';
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
                fullWidth
            />
        </div>
    );
};

export default MyInput;