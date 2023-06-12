import { Button, css, styled } from "@mui/material";

const CustomImg = styled("img")`
  ${(props) => css`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  `}
`;

export default CustomImg;
