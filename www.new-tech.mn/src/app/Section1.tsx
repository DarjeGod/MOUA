import React from "react";
import { Box, Typography, Container, Hidden, Stack } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Tooltip } from '@material-ui/core';

const Layout1 = () => {
  SwiperCore.use([Navigation]);
  
  return (
    <>

<Stack position="fixed" top="40%" zIndex={2}>
  <Tooltip title="Facebook" placement="right">
    <FacebookIcon color="secondary" />
  </Tooltip>
  <Tooltip title="Instagram" placement="right">
    <InstagramIcon color="secondary" />
  </Tooltip>
  <Tooltip title="YouTube" placement="right">
    <YoutubeIcon color="secondary" />
  </Tooltip>
</Stack>

      <Stack width="100vw" height="100vh" bgcolor="white" >
        <Stack
          className="mauto"
          direction="row"
          color="black"
          spacing={8.5}
          mt={1.5}
          mb={1.5}
        >
          <Stack
            direction="row"
            spacing={2}
            textAlign="center"
            justifyContent="center"
            fontSize={1}
          >
            <Typography>БҮТЭЭГДЭХҮҮНИЙ АНГИЛАЛ</Typography>
            <Typography>КОМПЬЮТЕР УГСРАХ</Typography>
            <Typography>ПРОЦЕССОР УГСРАХ</Typography>
            <Typography>ФАЙЛ ТАТАХ</Typography>
            <Typography color="#ff5a00">UPGRADE NOW!!!</Typography>
            <Typography>ХОЛБОО БАРИХ</Typography>
            <Typography>САЛБАРУУД</Typography>
          </Stack>

          <Stack direction="row" spacing={0.2}>
            <FavoriteBorderIcon fontSize="medium" />
            <SwapCallsIcon fontSize="medium" />
            <PermIdentityIcon fontSize="medium" />
            <Typography>Login/Register</Typography>
          </Stack>
        </Stack>

        <Swiper navigation={true} className="mySwiper">
          <SwiperSlide>
            <img src="/image1.png" alt="Image 1" />
            <Stack position="absolute" top= "35%" left="18%" height={100} width={500} color="white" textAlign="start">
            <h1>Intel 13th GEN Processors 
              <br />
                More Performance at Your Fingertips
            </h1>
            <Typography>Дэлгэрэнгүй</Typography>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image2.webp" alt="Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image3.webp" alt="Image 3" />
          </SwiperSlide>
        </Swiper>
      </Stack>
    </>
  );
};

export default Layout1;
