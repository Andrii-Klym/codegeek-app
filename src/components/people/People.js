import {useState} from 'react';
import data from '../../data.json'
import Card from './Card'

import "./People.css"

const People = () => {
    const [items, setItems] = useState(data)

    return (
        <div className="container">
            {items.map((item) => {
                return (
                    <>
                        {item.camera ? <div className="camera"><Card key={item.id} item={item} /></div> 
                        : <Card key={item.id} item={item} />}
                    </> 
                )
            })}
        </div>
    )
}

export default People