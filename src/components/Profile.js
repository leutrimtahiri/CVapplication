import React from 'react'
import { useState } from 'react'
import '../styles/Profile.css';

function Profile() {
    const [profile, setProfile] = useState('');
    const [edit, setEdit] = useState(false)
    const [showButton, setShowButton] = useState(false);
    function handleSubmit(e) {
        setEdit(!edit)
    }
    function handleEdit() {
        setEdit(!edit)
    }
    return (
        <div className='profile' onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}>
            <h2 className='profileTitle'> Profile</h2>
            {showButton && <button id='editProfileBtn' onClick={handleEdit}>Edit</button>}
            {edit &&
                <form className="inputFormProfile" onSubmit={handleSubmit}>
                    <label>Description</label>
                    <textarea
                        rows={5}
                        value={profile}
                        onChange={e => setProfile(e.target.value)}
                    />
                    <button type="submit">Close Edit</button>
                </form>}
            <div>
                <p>{profile ? profile : "Description..."}</p>
            </div>

        </div>
    )
}

export default Profile