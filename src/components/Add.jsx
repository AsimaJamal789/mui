import { Box, Fab, Modal, Tooltip,styled, Typography, Avatar, TextField, ButtonGroup, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import React,{useState} from 'react'
import { Stack } from '@mui/system';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const Add = () => {
    const [open, setOpen] = useState(false);
    const StyledModal = styled(Modal)({
        display:"flex",
        alignItems:"center",
        justifyContent:"center",


    })
    const StyledUserBox = styled(Box)({
        display:"flex",
        alignItems:"center",
      gap:"10px",
      marginBottom:"20px",


    })
  return (
    <>
      <Tooltip title="Post" sx={{position:"fixed",bottom:20,left:{xs:"calc(50% - 25px)",md:30},}} onClick={(e)=>setOpen(true)}>
      <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
    </Tooltip>
    <StyledModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} borderRadius={5} p={3}   bgcolor={"background.default"} color={"text.primary"}>
          
        <Typography variant="h6" textAlign="center" color="grey"> Create Post</Typography>
        <StyledUserBox>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <Typography fontWeight={500} variant="span">Sayed Shah </Typography>
        </StyledUserBox>
        <TextField
          id="standard-multiline-static"
       
          multiline
          rows={3}
          placeholder="What's on your mind"
          variant="standard"
         sx={{width:"100%"}}
        />

        <Stack gap={1} direction="row" mt={2} mb={3}>
           <EmojiEmotions color="primary"/>
           <Image color="success" />
           <VideoCameraBack color="secondary"/>
           <PersonAdd color="error"/>

        </Stack>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
      <Button textAlign="center">POST</Button>
      <Button sx={{width:"100px"}}><DateRange/></Button>
     
    </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
