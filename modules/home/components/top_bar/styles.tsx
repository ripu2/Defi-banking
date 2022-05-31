import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    display: 'flex',
    padding: 10,
    backgroundColor: 'white'
}));

export const ChildCotainer = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexGro2: 1,
    width: '100%',
}));

export const ProfileCotainer = styled(Box)(({}) => ({
    display: 'flex'
}));

export const AccountAdressContainer = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}));


export const ProfileImage = styled("img")(({}) => ({
    height: 35,
    width: 35,
    borderRadius: 10,
    marginLeft: 15
}));
