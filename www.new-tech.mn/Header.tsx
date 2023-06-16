import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';




const Header = () => {
  return (
    <Stack className="bgimg" height={100}>
      <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={5} height={100}>

        <Stack top={"10%"} width={100} height={55}>
        <img src="sun.png" />
        </Stack>

<Box className="search-container" height={50} alignItems="center" padding={1}>
<input type="text" className="search-input" width={900} />
<SearchIcon className="glass" fontSize="large" color="primary"  />
</Box>

        <Stack direction="row" spacing={2.5} display="flex" justifyContent="center" alignItems="center" >

      <img src="telegram.png" height={35} />
      <Stack>
      <Typography color="#FF5B00">Имэйл хаяг</Typography>
      <Typography color="white">Hi.shv@yahoo.com</Typography>
      </Stack>


          <img src="phone.png" height={35} />
          <Stack>
      <Typography color="#FF5B00">Утас</Typography>
      <Typography color="white">9112233</Typography>


      </Stack>

          <img src="/lightbox.svg" height={40}/>
        </Stack>
        <Stack height={60} width={"0.5px"} bgcolor="white"></Stack>


        </Stack>
        </Container>
    </Stack>
  );
};

export default Header;
