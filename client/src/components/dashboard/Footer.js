import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="#FFFFFF">
      {"Copyright © "}
      <Link color="#FFFFFF" href="https://willyu.netlify.com" target="#blank">
        BOT.IO
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#00bfa5",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Press Start 2P", "cursive"].join(","),
  },
});

export default function StickyFooter() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="footer"
          sx={{
            color: "white",

            py: 3,
            px: 4,
            mb: "auto",

            backgroundColor: "primary.main",
          }}
        >
          <Container maxWidth="large">
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
