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
      border: none solid #1a1f36;
      color: ${props.theme.palette.primary.dark};
      color:white;
      background: #000;
      padding: 8px 24px;
    }

    &.MuiButton-containedPrimary {
      border-radius: 8px;
      border: none solid;
      background-color: ${props.theme.palette.secondary.main};
      color:white;
      padding: 8px 16px 10px;
    }
    &.MuiButton-containedSecondary {
      border-radius: 8px;
      border: none solid;
      background-color: ${props.theme.palette.secondary.light};
      color:white;
      padding: 8px 16px 10px;
    }

    &.MuiButton-textPrimary {
      color: #1A1F36;
      text-decoration: none;
    }

  `}
`;

export default CustomButton;
