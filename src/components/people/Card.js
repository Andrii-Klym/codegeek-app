import React, { useState } from 'react';
import axios from 'axios';

import MicOffIcon from '@mui/icons-material/MicOff';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import CircularProgress from '@mui/material/CircularProgress';

const Card = ({ item: { id, name, imagePath, border, speak, muted} }) => {
    const [source, setSource] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setLoading] = useState(false);

    function getRandomImage() {
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
                setSource(`data:;base64,${base64}`);
                setIsActive(prev => !prev);
                setLoading(false)
            }).catch((e) => {
                console.error(e);
            })
    }

    const handleClick = () => {
        setLoading(true)
        getRandomImage()
    };

    return (
        <>
            <div key={id} 
                className={border ? 'border container__img' : 'container__img'}
                style={{backgroundImage: !isActive ? `url("${imagePath}")` : `url("${source}")`}}
                onClick={handleClick}
                >
                    {isLoading && <CircularProgress />}
                    {speak ? <GraphicEqIcon id="voice" className="svg"/> : ''}
                    {muted ? <MicOffIcon id="mute" className="svg"/> : ''}
                    <p className="container__text">{name}</p>
            </div>  
        </>
    )
}

export default Card