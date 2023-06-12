import { CustomButton } from "@/components";
import { Box, Container, Stack, Typography, Button } from "@mui/material";

const Layout4 = () => {
  return (
    <Stack
      bgcolor="white"
      display="flex"
      justifyContent="space-between"
      direction={{ md: "row", xs: "column" }}
      flex={1}
    >
      <Container>
        <Stack
          mt={7.5}
          mb={7.5}
          direction={{md: "row", xs: "column" }}
          justifyContent={{md: "space-between", xs: "center"}}
          alignItems={{xs: "center"}}
          spacing={{xs: 2}}
        >
          <Stack spacing={1}>
            <Box>
              <img src="/memok.png" alt="" />
            </Box>

            <Box>
              <Typography>
                Хаяг: ХУД, 15-р хороо, Зайсан гудамж, Гэгээнтэн цогцолбор, <br />
                6-603 /120-ийн тэмээтэй хөшөөний зүүн урд талд
              </Typography>
            </Box>

            <Box>
              <Typography>Утас: 7000-2266</Typography>
              <Typography>И-мэйл: support@mastermind.mn</Typography>
            </Box>
          </Stack>

          <Stack spacing={1}>
            <Stack direction="row" spacing={1.7}>
              <img src="/facebook.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/youtube.png" alt="" />
              <img src="/twitter.png" alt="" />
            </Stack>

            <Box>
              <CustomButton variant="outlined" color="primary">
                Contact us
              </CustomButton>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Layout4;
