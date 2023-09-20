import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React from "react";


const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={"25%"}>
        <Typography variant="h6" fontWeight={300} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar
            alt=""
            src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg"
          />
          <Avatar
            alt=""
            src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg"
          />
          <Avatar
            alt=""
            src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg"
          />
          <Avatar
            alt=""
            src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg"
          />
          <Avatar
            alt=""
            src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg"
          />
          <Avatar alt="" src="" />
          <Avatar alt="" src="" />
          <Avatar alt="" src="" />
          <Avatar alt="" src="" />
          <Avatar alt="" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={150} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={300} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: "100%", maxWidth: 360 }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar
