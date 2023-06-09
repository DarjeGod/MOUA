import { Box, Container, Stack, Typography, Button } from "@mui/material";

const Layout4 = () => {
  return (
    <Container>
      <Stack bgcolor="white" direction={{ md: "row", xs: "column" }} flex={1}>
        <Stack>
          <Box>
            <img src="/memok.png" alt="" />
          </Box>

          <Typography>
            Хаяг: ХУД, 15-р хороо, Зайсан гудамж, Гэгээнтэн цогцолбор,6-603
            /120-ийн тэмээтэй хөшөөний зүүн урд талд
          </Typography>

          <Typography>Утас: 7000-2266 И-мэйл: support@mastermind.mn</Typography>
        </Stack>
        <Stack></Stack>
        <Stack>
          <Box>
            <img src="/facebook.png" alt="" />
            <img src="/instagram.png" alt="" />
            <img src="/youtube.png" alt="" />
            <img src="/twitter.png" alt="" />
          </Box>

          <Box>
            <Button variant="outlined">Contact us</Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Layout4;
