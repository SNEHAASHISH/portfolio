const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/contact',(req,res)=>{
    let data = req.body

    if (data.name.length === 0 || data.email.length === 0 || data.phone.length === 0 || data.message.length === 0) {
        return res.json({msg: "Please fill all the fields"})
    }

    let smtpTransported = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth:{
            user: '2019ucp1900@mnit.ac.in',
            pass: '123456@Sneh$College'
        }
    })

    let mailOptions = {
        from: data.email,
        to: '2019ucp1900@mnit.ac.in',
        subject: `${data.name} messaged you from ur portfolio`,
        html: `
            <h3>Contact Information</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                <li>Phone: ${data.phone}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        `
    }

    smtpTransported.sendMail(mailOptions,(error)=>{
        try {
            if (error) 
                return res.status(400).json({msg: 'Please fill all the fields'})
            res.status(200).json({msg: 'Thanks for contacting me!'})
        } catch(error) {
            if (error) 
                return res.status(500).json({msg:"Server Error"})
        }
    })
})

module.exports=router;