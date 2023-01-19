import React from 'react'
import { useState } from 'react'
import '../styles/Education.css';
import { v4 as uuidv4 } from 'uuid';

function Experience() {
    const [position, setPosition] = useState('');
    const [city, setCity] = useState('');
    const [company, setCompany] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [items, setItems] = useState([]);
    const [edit, setEdit] = useState(false)
    const [showButton, setShowButton] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setItems([...items, { id: uuidv4(), position, city, company, start, end }]);
        setPosition('');
        setCity('');
        setCompany('');
        setStart('');
        setEnd('');
        setEdit(!edit)
    }
    function handleEdit() {
        setEdit(!edit)
    }
    function handleDelete(id) {
        setItems(items.filter(item => item.id !== id))
    }
    return (
        <div className='Education' onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}>
            {showButton && <button id='addEducationBtn' onClick={handleEdit}>Add</button>}
            {edit &&
                <form className="inputFormEducation" onSubmit={handleSubmit}>
                    <label>Position</label>
                    <input
                        type="text"
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                    />

                    <label>City</label>
                    <input
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <label>Company</label>
                    <input
                        type="text"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                    />
                    <label>From</label>
                    <input
                        type="text"
                        value={start}
                        onChange={e => setStart(e.target.value)}
                    />
                    <label>To</label>
                    <input
                        type="text"
                        value={end}
                        onChange={e => setEnd(e.target.value)}
                    />
                    <div className='AddCloseBtn'>
                        <button type="submit">Add</button>
                        <button onClick={handleEdit}>Close</button>
                    </div>
                </form>}
            <div>
                <h2 className='EducationTitle'> Experience</h2>
                {items.map(edu => {
                    return (
                        <div className='edu' onClick={() => handleDelete(edu.id)}>
                            <div className='left'>
                                <div className='fromTo'>
                                    <p>{edu.start}  </p><p>  -  </p><p>  {edu.end}</p>
                                </div>

                            </div>
                            <div className='right'>
                                <p>{edu.position}</p>
                                <p>{edu.company}, {edu.city}</p>

                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Experience