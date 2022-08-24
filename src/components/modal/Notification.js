
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function App() {

const createNotification = (target) => NotificationManager.info(target.innerText, '', 3000);

    return (
        <div>
            <button
                className='btn btn-info'
                onClick={(e) => createNotification(e.target)}>
                Click Me
            </button>

            <NotificationContainer/>
        </div>
    );
}

export default App;