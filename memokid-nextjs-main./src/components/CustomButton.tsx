import { Button, css, styled } from "@mui/material";

const CustomButton = styled(Button)`
  ${(props) => css`
    &.MuiButton-outlinedPrimary {
      border-radius: 50px;
      border: 1px solid #1A1F36;
      color: ${props.theme.palette.primary.dark};
      padding: 8px 24px;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export default CustomButton;
