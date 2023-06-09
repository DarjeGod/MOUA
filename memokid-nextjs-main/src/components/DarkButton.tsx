import { Button, css, styled } from "@mui/material";

const DarkButton = styled(Button)`
  ${(props) => css`
    &.MuiButton-outlined {
      border-radius: 50px;
      border: 1px solid #1A1F36;
      color: ${props.theme.palette.primary.dark};
      backgroundColor: #1A1F36;
      padding: 8px 24px;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export default DarkButton;
