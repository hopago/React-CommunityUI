import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { useState } from 'react';


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: '10px',
    marginBottom: '10px',
});

const Add = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { md: 20 },
          right: { xs: 20 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon onClick={() => setOpen(true)} />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
          bgcolor={"background.default"} 
          color={"text.primary"}
          width={400} 
          height={400} 
          p={3} 
          borderRadius={5}
        >
          <Typography id="modal-modal-title" variant="h6" color="gray" textAlign="center" component="h2">
            Create post
          </Typography>
          <UserBox>
            <Avatar
                src='https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant='span'>
                Hopago
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id='standard-multiline-static'
            multiline
            rows={5}
            placeholder='Textfield...'
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={3} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup variant='contained' aria-label="outlined primary button group" fullWidth>
            <Button>Date</Button>
            <Button sx={{ width: "100px" }}><DateRange /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add
