import MicOffIcon from '@mui/icons-material/MicOff';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const Card = ({ item: { id, name, imagePath, border, speak, muted, camera, owner} }) => {
    return (
        <>
            <div key={id}
                className={border ? 'border container__img' : 'container__img'}
                style={{backgroundImage: `url("${imagePath}")`}}
                >
                    {speak ? <GraphicEqIcon id="voice" className="svg"/> : ''}
                    {muted ? <MicOffIcon id="mute" className="svg"/> : ''}
                    <p className="container__text">{name}</p>
            </div>  
        </>
    )
}

export default Card