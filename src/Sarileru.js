import React from 'react'
import Sarileru1 from './images/Sarileru1.jpeg'
import { Rate } from 'antd';
function Sarileru() {
    return (
        <div>
            <h2>Movie Rating:-</h2>
            <img src={Sarileru1} alt='Logo' />
            <div>
        <Rate disabled defaultValue={4.5} />
        <h3>Sarileru neekevvar</h3>
        <p>Director:- Anil Ravipudi</p>
        <p>Cast:Mahesh babu,Rashmika mandanna</p>
        </div>
            </div>
    
    )
}

export default Sarileru