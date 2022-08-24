import { useState } from "react"
import Modal from "../modal/Modal"

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
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';

import "./Footer.css"

const Footer = () => {
    const [checked, setChecked] = useState(false);

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
                <div className="footer__svg" checked={checked} onClick={handleChange}>
                    <MoreVertIcon />
                </div>
                    <div className="footer__svg svg__end">
                        <CallEndIcon size="large"/>
                    </div>
                </div>
                <div className="footer__container container__svg">
                    <div><InfoOutlinedIcon /></div>
                    <div><PeopleAltOutlinedIcon /></div>
                    <div> <ChatOutlinedIcon /></div>
                    <div><CategoryOutlinedIcon /></div>
                </div>
                <Slide className={!checked ? 'none' : 'icon'} direction="up" in={checked}>
                    <Paper elevation={4}>
                        <Modal />
                    </Paper>
                </Slide>

        </footer> 
    ) 
}

export default Footer