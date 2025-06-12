import { TextField, type TextFieldProps } from "@mui/material"

const CustomInput = (props: TextFieldProps) => {
    return (
        <TextField required
            {...props}
            margin="normal"
            sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'blueviolet',
                    },
                }
            }} />
    )
}
export default CustomInput