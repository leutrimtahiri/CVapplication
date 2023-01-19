import React from 'react'
import { useState } from 'react'
import '../styles/PersonalDetails.css';
import profilePicture from "../components/profilePicture.png"



function PersonalDetails() {
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [edit, setEdit] = useState(false)
    const [photo, setPhoto] = useState(null);
    const [showButton, setShowButton] = useState(false);


    function handleSubmit(e) {
        setEdit(!edit)
    }
    function handleEdit() {
        setEdit(!edit)
    }
    function handlePhotoChange(e) {
        setPhoto(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className='personalDetails' onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}>
            {showButton && <button id='editPersonalBtn' onClick={handleEdit}>Edit</button>}
            {edit &&
                <form className="inputForm" onSubmit={handleSubmit}>
                    <label>Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />

                    <label>Phone number</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Upload photo</label>
                    <input type="file" onChange={handlePhotoChange} />
                    <button type="submit">Close Edit</button>
                </form>}
            <div>
                {photo ? <img src={photo} width="200px" /> : <img src={profilePicture} width="200px" />}
                <h3>Personal Details</h3>
                <h5>Address</h5>
                {address}
                <h5>Email</h5>
                {email}
                <h5>Phone Number</h5>
                {phone}
            </div>

        </div>
    )
}

export default PersonalDetails