import {useState} from 'react';
import data from '../../data.json'


import MicOffIcon from '@mui/icons-material/MicOff';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

import "./People.css"

const People = () => {
    const [items, setItems] = useState(data)

    return (
        <div className="container">
            {items.map((item) => {
                return (
                    <div style={{backgroundImage: `url(${item.itemPath})`}}>
                        {item.speak ? <GraphicEqIcon /> : ''}
                        {item.muted ? <MicOffIcon /> : ''}
                        <img src={item.itemPath} className={item.border ? 'border' : ''} alt='' />
                        <p>{item.name}</p>
                    </div>   
                )
            })}
        </div>
    )
}

export default People