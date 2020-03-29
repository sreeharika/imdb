import React from 'react';
import cover1 from '../../images/cover1.jpg'
import cover2 from '../../images/cover2.jpg'
import cover3 from '../../images/cover3.jpg'

export default function Movielist() {
    return (
        <div>
            <h1> I am Movie List</h1>
            <a href="/movie">
                <img src={cover1} alt=""/>
            </a>
            <a href="/movie">
                <img src={cover2} alt=""/>
            </a>
            <a href="/movie">
                <img src={cover3} alt=""/>
            </a>
            <a href="/">HOME</a>
        </div>
    )
}
