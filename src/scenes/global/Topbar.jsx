import { Box, IconButton, useTheme} from "@mui/material";
import  InputBase from '@mui/material/InputBase';
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import  LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";
import  NotificationsModeOutlinedIcon  from "@mui/icons-material/NotificationAddOutlined";
import SettingsOutlinedIcon  from "@mui/icons-material/SettingsOutlined";
import PersonModeOutlinedIcon  from "@mui/icons-material/Person2Outlined";
import  SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (<Box display="flex" justifyContent="space-between" p={2}>
        <Box 
        display="flex"
        backgroundColor = {colors.primary[400]}
        borderRadius="3px"
        >
            <InputBase sx={{ml:2, flex: 1}} placeholder="Search" />
            <IconButton type="button" sx={{p:1}}></IconButton>
            <SearchIcon sx={{alignSelf: "center"}}/>

        </Box>
        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                { theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon/>) : (
                    <LightModeOutlinedIcon/>
                )}
            </IconButton>
            <IconButton>
                <NotificationsModeOutlinedIcon/>
            </IconButton>
            <IconButton>
                <PersonModeOutlinedIcon/>
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon/>
            </IconButton>
        </Box>
    </Box>)
}

export default Topbar;