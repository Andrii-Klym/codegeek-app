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

import './Modal.css'

const Modal = () => {
    return (
        <>
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
        </>
    )
}

export default Modal