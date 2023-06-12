import React, { useState } from "react";
import { CustomButton } from "@/components";
import { Stack } from "@mui/material";
import { Box, Typography, Container, Select } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CustomImg from "@/components/CustomImg";

const Layout1 = () => {
  return (
    <Stack bgcolor="#EAF5F5" maxWidth="100vw" position="relative" pb={28.125}>
      <Container>
        <Stack height={102} mt={7.5} bgcolor="#EAF5F5">
          <Stack flex={1} direction="row">
            <Box flex={1} display="flex" alignItems="center">
              <img src="/memok.png" alt="" />
            </Box>
            <Stack direction="row" spacing={1}>
              <Stack direction="row" alignItems="center" spacing={4} marginRight={3}>
                <Link href="#">
                  <Typography>Home</Typography>
                </Link>
                <Link href="#">
                  {" "}
                  <Typography>About</Typography>{" "}
                </Link>
                <Link href="#">
                  {" "}
                  <Typography>Download</Typography>{" "}
                </Link>
                <Link href="#">
                  {" "}
                  <Typography>Contact</Typography>{" "}
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <img src="/facebook.png" alt="" />
                <img src="/instagram.png" alt="" />
                <img src="/youtube.png" alt="" />
                <img src="/twitter.png" alt="" />
                <img src="/English.png" alt="" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems="center" justifyContent="center" mt={7.5} mb={8}>
          <Typography variant="h1" textAlign="center" component="div">
            Mongolian Intellectual <br />
            Academy{" "}
          </Typography>
          <Typography variant="body1" mt={3}>
            The best way to learn and practice your brain powerful.
          </Typography>
          <Stack direction="row" spacing={2} mt={3}>
            <CustomButton variant="contained" color="info">
              Download
            </CustomButton>
            <CustomButton variant="outlined" color="primary">
              Contact Seller
            </CustomButton>
          </Stack>

          <Stack position="absolute" bottom={-225} height={450} sx={{ overflowX: "hidden" }} left={0} right={0}>
            <Stack direction="row" spacing={6} alignItems="center" justifyContent="center" position="relative">
              <CustomImg src="/ohin1.png" alt="" />
              <CustomImg src="/ohin2.png" alt="" />
              <CustomImg src="/ohin3.png" alt="" />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Layout1;
