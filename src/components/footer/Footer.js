import { useState, useRef } from "react"

import MicIcon from '@mui/icons-material/Mic';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';

import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import "./Footer.css"

const icon = (
    <Paper className="icon" elevation={4}>
        <div>
            <div className="icon__conrainer">
                <ModeOutlinedIcon/>
                <div>
                    <p> Дошка для конференцій
                        <br />
                        Відкрити файл Jam
                    </p>
                </div>
            </div>
            <div className="icon__conrainer">
                <RadioButtonCheckedOutlinedIcon/>
                <p>Записувати зустріч</p>    
            </div>
        </div>
        <hr />
        <div className="icon__conrainer">
            <DashboardOutlinedIcon />
            <p>Змінити макет</p>
        </div>
        <div className="icon__conrainer">
            <CropFreeOutlinedIcon />
            <p>Повноекранний режим</p>
        </div>
        <div className="icon__conrainer">
            <AutoAwesomeIcon />
            <p>Застосувати візуальні ефекти</p>
        </div>
        <div className="icon__conrainer">
            <ClosedCaptionOffOutlinedIcon />
            <p>Увімкнути субтитри</p>
        </div>
        <div className="icon__conrainer">
            <PhoneForwardedIcon />
            <p>Використовувати телефон для передачі звуку</p>
        </div>
        <hr />
        <div className="icon__conrainer">
            <FeedbackOutlinedIcon />
            <p>Повідомити про проблему</p>
        </div>
        <div className="icon__conrainer">
            <ReportGmailerrorredOutlinedIcon />
            <p>Повідомити про порушення</p>
        </div>
        <div className="icon__conrainer">
            <SearchOffOutlinedIcon />
            <p>Вирішення проблем і довідка</p>
        </div>
        <div className="icon__conrainer">
            <SettingsOutlinedIcon />
            <p>Налаштуваня</p>
        </div>
    </Paper>
);

const Footer = () => {
    const [checked, setChecked] = useState(false);
    const containerRef = useRef(null);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return( 
        <footer>
            <p>Team meeting</p>
            <div className="footer__container">
                <div className="footer__svg">
                    <MicIcon/>
                </div>
                <div className="footer__svg">
                    <VideocamOutlinedIcon/>
                </div>
                <div className="footer__svg">
                    <ClosedCaptionOffOutlinedIcon/>
                </div>
                <div className="footer__svg svg_hand">
                    <PanToolOutlinedIcon/>
                </div>
                <div className="footer__svg">
                    <PresentToAllIcon/>
                </div>
                <div className="footer__svg">
                    <MoreVertIcon checked={checked} onClick={handleChange}>
                    </MoreVertIcon>
                    <Slide direction="up" in={checked} container={containerRef.current}>
                        {icon}
                    </Slide>
                </div>
                <div className="footer__svg svg__end">
                    <CallEndIcon/>
                </div>
            </div>
            <div className="footer__container container__svg">
                <div><InfoOutlinedIcon /></div>
                <div><PeopleAltOutlinedIcon /></div>
                <div> <ChatOutlinedIcon /></div>
                <div><CategoryOutlinedIcon /></div>
            </div>
        </footer> 
    ) 
}

export default Footer