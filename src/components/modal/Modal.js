import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import {NotificationManager} from 'react-notifications';

import './Modal.css'
import 'react-notifications/lib/notifications.css';

const Modal = () => {
    const createNotification = (target) => NotificationManager.info(target.innerText, '', 3000);
    
    return (
        <>
        <div>
            <div className="icon__conrainer">
                <ModeOutlinedIcon/>
                <div>
                    <p onClick={(e) => createNotification(e.target)}> 
                        Дошка для конференцій
                    </p>
                    <p id='small_text' onClick={(e) => createNotification(e.target)}>Відкрити файл Jam</p>
                </div>
            </div>
            <div className="icon__conrainer">
                <RadioButtonCheckedOutlinedIcon/>
                <p onClick={(e) => createNotification(e.target)}>Записувати зустріч</p>    
            </div>
        </div>
        <hr />
        <div className="icon__conrainer">
            <DashboardOutlinedIcon />
            <p onClick={(e) => createNotification(e.target)}>Змінити макет</p>
        </div>
        <div className="icon__conrainer">
            <CropFreeOutlinedIcon />
            <p onClick={(e) => createNotification(e.target)}>Повноекранний режим</p>
        </div>
        <div className="icon__conrainer">
            <AutoAwesomeIcon />
            <p onClick={(e) => createNotification(e.target)}>Застосувати візуальні ефекти</p>
        </div>
        <div className="icon__conrainer">
            <ClosedCaptionOffOutlinedIcon />
            <p onClick={(e) => createNotification(e.target)}>Увімкнути субтитри</p>
        </div>
        <div className="icon__conrainer">
            <PhoneForwardedIcon />
            <p onClick={(e) => createNotification(e.target)}>Використовувати телефон для передачі звуку</p>
        </div>
        <hr />
        <div className="icon__conrainer">
            <FeedbackOutlinedIcon />
            <p onClick={(e) => createNotification(e.target)}>Повідомити про проблему</p>
        </div>
        <div className="icon__conrainer">
            <ReportGmailerrorredOutlinedIcon />
            <p onClick={(e) => createNotification(e.target)}>Повідомити про порушення</p>
        </div>
        <div className="icon__conrainer">
            <SearchOffOutlinedIcon />
            <p onClick={(e) => createNotification(e.target)}>Вирішення проблем і довідка</p>
        </div>
        <div className="icon__conrainer">
            <SettingsOutlinedIcon />
            <p onClick={(e) => createNotification(e.target)}>Налаштуваня</p>
        </div>
        <NotificationContainer/>
        </>
    )
}

export default Modal
