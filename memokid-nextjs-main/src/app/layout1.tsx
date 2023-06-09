import { CustomButton } from "@/components";
import DarkButton from "@/components/DarkButton";
import { Box, Stack, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

const Layout1 = () => {
  return ( <Container>
<Stack bgcolor="#EAF5F5">
      <Stack height={102}>
        <Stack flex={1} direction="row">
          <Box flex={1} display="flex" alignItems="center">
            <img src="/memok.png" alt="" />
          </Box>
          <Stack direction="row" spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Link href="#">
                <Typography>Home</Typography>
              </Link>
              <Link href="#">
                {" "}
                <Typography>MemoKid Math</Typography>{" "}
              </Link>
              <Link href="#">
                {" "}
                <Typography>MemoKid Memory</Typography>{" "}
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
        <Stack alignItems="center" justifyContent="center">
          <Typography variant="h1" textAlign="center" component="div">
            Mongolian Intellectual <br />
            Academy{" "}
          </Typography>
          <Typography variant="body1">
          The best way to learn and practice your brain powerful.
          </Typography>
<Stack direction="row" spacing={2} mt={1} mb={2}>
<CustomButton variant="contained" color="info">Download</CustomButton>
<CustomButton variant="outlined" color="primary">Contact Seller</CustomButton>
</Stack>
        </Stack>
        </Stack>
        </Container>
  );
};

export default Layout1;
