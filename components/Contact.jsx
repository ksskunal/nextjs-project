import React from 'react'
import style from "../styles/Contact.module.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import SendIcon from '@mui/icons-material/Send';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';




const Contact = () => {
    return (
        <div>
            <div className={style.feature}>
                <span className={style.featureHeading}>WE ARE HERE FOR YOU</span>
                <h1>Contact Us</h1>
            </div>
            <div className={style.mainContainer}>
                <div className={style.rightContainer}>
                    <h2>Feel Free To Contact</h2>
                    <p>Hello Everyone! Have a great day :) I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You.</p>
                    <div className={style.common1}>
                        <span><HomeIcon /></span><span>Jaipur , Rajasthan</span>
                    </div>
                    <div className={style.common1}>
                        <span><MarkEmailReadIcon /></span><span>info@marktine.com</span>
                    </div>
                    <div className={style.common1}>
                        <span><AddIcCallIcon /></span><span>919828107200</span>
                    </div>

                </div>
                <div className={style.leftContainer}>
                    <TextField className={style.textfiled} id="filled-basic" label="Name" variant="filled" placeholder="Enter Your Name" />

                    <TextField className={style.textfiled} id="filled-basic" label="Email" variant="filled" placeholder="Enter Your Email" />

                    <TextField className={style.textfiled} id="filled-basic" label="Mobile" variant="filled" placeholder="Mobile" />

                    <TextField className={style.textfiled}
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                    <div>
                        <Button className={style.mybtn} variant="contained">Submit</Button >
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact