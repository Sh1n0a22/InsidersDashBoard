import { TextField } from "@mui/material"




const CustomInput = ({...props}) => {
    return(
         <TextField  required 
         {...props}
         
         margin="normal"
                    sx={{
                    input:{color:'white'},
                    label: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                    borderColor: 'blueviolet',
                },}
                    }}/>
    )
}
export default CustomInput