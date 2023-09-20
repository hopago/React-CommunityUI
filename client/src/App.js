import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";


function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row">
        <Sidebar mode={mode} setMode={setMode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
