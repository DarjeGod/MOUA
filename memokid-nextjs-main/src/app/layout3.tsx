import { CustomButton } from "@/components";
import CustomImg from "@/components/CustomImg";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";

const Layout3 = () => {
  return (
    <Stack bgcolor="#F1FEFF">
      <Container>
        <Stack bgcolor="#F1FEFF" 
        direction={{ md: "row", xs: "column-reverse" }}
        mt={7.5}
        mb={7.5}
        >
          <Box flex={1}
          sx={{ display: "flex", justifyContent: "center" }}>
            <CustomImg src="/image2.png" />
          </Box>
          <Box flex={1}>
            <img src="/mathkid.png" />
            <Typography variant="h3" color="#583F99" mt={2}>
              Дасгалын программ
            </Typography>
            <Box>
              <Typography variant="body1">
                Монголын Оюун Ухааны Академ Та бүхэнд ой тогтоолтын хөтөлбөрт зориулсан дасгалын MemoKid Math програмаа
                хүргэж байна. Амжилт хүсье!
              </Typography>

              <Stack direction="row" spacing={2} mt={3} mb={3}
              justifyContent={{xs: "space-evenly"}}>
                <CustomButton variant="contained" color="secondary">
                  Windows хувилбар татах
                </CustomButton>
                <Link href="#">
                  <CustomButton variant="text" color="primary">
                    Мас хувилбар татах
                  </CustomButton>
                </Link>
              </Stack>
              <Typography
              textAlign={{xs: "center"}}
              >Программын хувилбар 3.0.8</Typography>

              <Typography variant="h6" mt={{xs: 2}}>Системийн шаардлага</Typography>
              <Typography variant="body1">
                Super Memory програм нь Mac болон Windows үйлдлийн системд зориулагдан бүтээгдсэн ба хамгийн багадаа
                дараах үзүүлэлт бүхий систем дээр ажиллана. Windows: Windows 8 болон түүнээс дээш хувилбар Windows
                7(64bit)-ийн сүүлийн үеийн хувилбар дээр ажиллана. Mac: Mac OS 10.13 болон түүнээс дээш хувилбар
                Програмаа суулгахаас өмнө үйлдлийн системээ сайтар шалгаарай.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Layout3;
