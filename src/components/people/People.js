import data from '../data/data.json'
import Card from './Card'

import "./People.css"

const People = () => {

    return (
        <div className="container">
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        {item.camera ? <div className="camera"><Card item={item} /></div> 
                        : <Card item={item} />}
                    </div> 
                )
            })}
        </div>
    )
}

export default People