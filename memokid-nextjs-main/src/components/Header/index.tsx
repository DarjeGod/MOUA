"use client";

import { Container, Stack } from "@mui/material";
import Link from "next/link";

const navs = [
  {
    link: "/",
    title: "Home",
  },
  { link: "/about", title: "About" },
  { link: "/download", title: "Download" },
  { link: "/contact", title: "Contact" },
];

const Header = () => {
  return (
    <Container>
      <Stack direction="row" alignItems="center">
        <img src="/memok.png" alt="" />

        <Stack direction="row" spacing={2}>
          {navs.map((item, index) => {
            return (
              <Link key={index} href={item.link}>
                {item.title}
              </Link>
            );
          })}
        </Stack>

        <img src="/facebook.png" alt="facebook" />
        <img src="./Instagram.png" alt="instagram" />
        <img src="./Youtube.png" alt="youtube" />
        <img src="./Twitter.png" alt="twitter" />
        <img src="../English.png" alt="English" />
      </Stack>
    </Container>
  );
};

export default Header;
