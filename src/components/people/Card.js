import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Card = () => {
//     const [source, setSource] = useState(null)

//     useEffect(() => {
//         axios
//         .get(
//             'https://codegeek-server.herokuapp.com/api/randomimage',
//             { responseType: 'arraybuffer' },
//         )
//         .then(response => {
//             const base64 = btoa(
//             new Uint8Array(response.data).reduce(
//                 (data, byte) => data + String.fromCharCode(byte),
//                 '',
//             ),
//             );
//             setSource("data:;base64," + base64);
//         });
//     }, []);

//         return <img src={source} alt='/'/>;
// }

import axios from 'axios';

import MicOffIcon from '@mui/icons-material/MicOff';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';


const Card = ({ item: { id, name, imagePath, border, speak, muted, camera, owner} }) => {
    const [source, setSource] = useState(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        axios
        .get(
            'https://codegeek-server.herokuapp.com/api/randomimage',
            { responseType: 'arraybuffer' },
        )
        .then(response => {
            const base64 = btoa(
            new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
            ),
            );
            setSource("data:;base64," + base64);
        });
    }, []);

    const handleClick = () => {
        setIsActive(current => !current);
    };

    return (
        <>
            <div key={id} 
                className={border ? 'border container__img' : 'container__img'}
                style={{backgroundImage: !isActive ? `url("${imagePath}")` : `url("${source}")`}}
                onClick={handleClick}
                >
                    {speak ? <GraphicEqIcon id="voice" className="svg"/> : ''}
                    {muted ? <MicOffIcon id="mute" className="svg"/> : ''}
                    <p className="container__text">{name}</p>
            </div>  
        </>
    )
}

export default Card