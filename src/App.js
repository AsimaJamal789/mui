import { Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Add from "./components/Add";
function App() {
  const [mode, setmode] = useState("light");
   const darkTheme=createTheme({
    palette:{
      mode:mode
    }
   })
  return (

    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar mode={mode} setmode={setmode} />
        <Feed />
        <RightBar />
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
