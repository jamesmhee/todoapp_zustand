import { FormEvent, useState } from "react"
import { usePersonStore } from "../utils/store" 
import { Box, Button } from "@mui/material"
import TextField from '@mui/material/TextField';

const FirstCome = () => {
    const [ name, setName ] = useState<string>('')    
    const updateName = usePersonStore((state)=>state.updateName)
    const [reqName, setReqName] = useState<boolean>(false)

    const handleSubmit = (event: FormEvent) =>{        
        event.preventDefault()
        name === '' ? setReqName(true) : setReqName(false); updateName(name);
    }

    return (
        <>
            <Box sx={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Box
                    onSubmit={(event)=>handleSubmit(event)}
                    component="form"                    
                    sx={{ width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: 1 }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField required={true}  focused={reqName} color="info" onChange={(e)=>setName(e?.target.value)} id="standard-basic" label="Your name" variant="standard" margin="normal"/>
                    <Button sx={{borderRadius: '10px'}} variant="contained" type="submit" color="info">Enter</Button>
                </Box>
            </Box>
        </>
        // <div>
        // </div>
    )
}

export default FirstCome