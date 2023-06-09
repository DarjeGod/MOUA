import { Button, css, styled } from "@mui/material";

const CustomButton = styled(Button)`
  ${(props) => css`
    &.MuiButton-outlinedPrimary {
      border-radius: 50px;
      border: 1px solid #1a1f36;
      color: ${props.theme.palette.primary.dark};
      padding: 8px 24px;
    }
    &.MuiButton-containedInfo {
      border-radius: 50px;
      border: 1px solid #1a1f36;
      color: ${props.theme.palette.primary.dark};
      color:white;
      background: #000;
      padding: 8px 24px;
    }
  `}
`;

export default CustomButton;
