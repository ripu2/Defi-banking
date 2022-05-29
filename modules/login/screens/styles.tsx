import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    display: 'flex',
    height: '100vh'
}));

export const LeftChild = styled(Box)(({}) => ({
    width: '70%',
    borderRight: '1px solid black'
}));

export const RightChild = styled(Box)(({}) => ({
    width: '30%',
    backgroundColor: '#2A2550'
}));

export const ImageContainer = styled('img')(({}) => ({
    height: '100%',
    width: '100%',
    objectFit: 'contain'
}));

export const RightHeaderContainer = styled(Box)(({}) => ({
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto'
}));

export const HeaderTypo = styled(Typography)(({}) => ({
    fontSize: 30,
    fontFamily: 'Barlow Semi Condensed',
    textAllign: 'center',
    color: '#FAD4D4',
    // opacity: 0.6
}));

export const RighBottomContainer= styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

export const ConnectContainer = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'center'
}));

export const ConnectButton = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marging: '0 auto',
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    marginBottom: 20,
    cursor: 'pointer'
}));

export const ConnectTypo = styled(Typography)(({}) => ({
    margin: '0 auto',
    color: '#42C2FF'
}));
