import { IconButton, Typography } from '@mui/material';
import * as React from 'react';
import { AccountAdressContainer, ChildCotainer, ParentCotainer, ProfileCotainer, ProfileImage } from './styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { useWalletConnect } from '../../../login/hooks/Authentication';

const TopBar = () => {
    const [address, setAdress] = React.useState("")

    const { disconnetWallet } = useWalletConnect()

    React.useEffect(() => {
        const add = localStorage.getItem("@address")
        setAdress(add?.slice(0,5)+"....."+add?.slice(-4))
    }, [ address ])


  return (
   <ParentCotainer>
       <ChildCotainer>
           <Typography style={{fontSize: 20, color: '#8479E1'}}>
                Defi Solutions
           </Typography>
           <ProfileCotainer>
               <AccountAdressContainer>
               <Typography style={{cursor: 'pointer'}}>{address}</Typography>
               </AccountAdressContainer>
               <ProfileImage src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84NGVkMzFlNTYxMzc2MjZlZjk3NTQ3ZThkNWFmNDIxYz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.asg_aQwWpc4lkWm_PjrNTwvfzuCEnaEoRp7ZiU-bSHg" alt="blc" />
               <IconButton style={{marginLeft: 50}} onClick={() => disconnetWallet()}>
                   <LogoutIcon />
               </IconButton>
           </ProfileCotainer>
       </ChildCotainer>
   </ParentCotainer> 
  )
}

export default TopBar;
