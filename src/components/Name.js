import React from 'react'
import { useState } from 'react'
import '../styles/Name.css';



function Name() {
    const [firstName, setFirstName] = useState('');
    const [title, setTitle] = useState('');
    const [edit, setEdit] = useState(false)
    const [showButton, setShowButton] = useState(false);



    function handleSubmit(e) {
        setEdit(!edit)
    }
    function handleEdit() {
        setEdit(!edit)
    }
    return (
        <div className='name' onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}>
            {showButton && <button id='editNameBtn' onClick={handleEdit}>Edit</button>}
            {edit &&
                <form className="inputForm" onSubmit={handleSubmit}>
                    <label>Your Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />

                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <button type="submit">Close Edit</button>
                </form>}
            <div>
                <h1>{firstName ? firstName : "Your Name"}</h1>

                <h3> {title ? title : "Title"}</h3>
            </div>

        </div>
    )
}

export default Name