import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";

const Layout2 = () => {
  return ( <Container>
      <Stack
      bgcolor="white"
      direction={{ md: 'row', xs: 'column-reverse'}} 
      flex={1}>
      
        <Box flex={1} >
          <Stack>
            <Stack spacing={2}>
            <img src="/memorykid.png" />
            <Typography variant="h3" color="#583F99" >
            Дасглын программ 
            </Typography>
            </Stack>

<Stack>
  <Typography variant="body1">
  Монголын Оюун Ухааны Академ Та бүхэнд ой тогтоолтын хөтөлбөрт зориулсан дасгалын MemoKid Math програмаа хүргэж байна. 
Амжилт хүсье!
  </Typography>

  <Stack direction="row" spacing={2} mt={1} mb={2}>
<Button variant="contained">Windows хувилбар татах</Button>
<Link href="#">
  <Typography>Мас хувилбар татах</Typography>
</Link>
</Stack>
<Typography>
Программын хувилбар 3.0.8
</Typography>

<Typography variant="h6">
Системийн шаардлага
</Typography>
<Typography variant="body1">
Super Memory програм нь Mac болон Windows үйлдлийн системд зориулагдан бүтээгдсэн ба хамгийн багадаа дараах үзүүлэлт бүхий систем дээр ажиллана.
Windows: Windows 8 болон түүнээс дээш хувилбар
Windows 7(64bit)-ийн сүүлийн үеийн хувилбар дээр ажиллана.
Mac: Mac OS 10.13 болон түүнээс дээш хувилбар
Програмаа суулгахаас өмнө үйлдлийн системээ сайтар шалгаарай.
</Typography>
</Stack>

            
          </Stack>

        </Box>


        <Box flex={1} >
          <img src="/image1.png" />
        </Box>
      </Stack>
      </Container>
  );
};

export default Layout2;
