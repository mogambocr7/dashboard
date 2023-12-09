import { ColorModeContext, UseMode } from "./theme";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';

import Dashboard from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "./components/Register";
import Sidebar from './scenes/global/Sidebar';
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Bar from "./scenes/bar";
import ProfileForm from "./scenes/profileForm";
import Line from "./scenes/line";
import Faq from "./scenes/faq";
import LoginForm from "./components/Login";


function App() {
    const [theme, colorMode] = UseMode();
  const headBox = {position:"relative",left:"18%",width:"82%"}


    return ( 
    
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className = "app" >
            <Sidebar />
        <main className="content" style={headBox}>
            <Topbar/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                 <Route path="/team" element={<Team/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/invoices" element={<Invoices/>}/>
                <Route path="/form" element={<ProfileForm/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/bar" element={<Bar/>}/>
                <Route path="/line" element={<Line/>}/>
            </Routes>
        </main>
        </div>
        </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;