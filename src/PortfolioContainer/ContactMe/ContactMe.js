import React, { useEffect, useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import loading from "../../../../client/src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMsg] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);  

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        phone,
        message,
      };
      setBool(true);
      //console.log(data);
      //const res = ''
      
      axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(res => {
        console.log(res); 
        console.log(res.status)
        console.log('data' + res.data)
        setBanner(res.data.msg)
        toast.success(res.data.msg)
        setBool(false)
        //
        console.log(data);
        setName("");
        setEmail("");
        setPhone("");
        setMsg("");
      })
      .catch(err => console.log(err));

      const res = await axios.post(`/contact`, data);
      if (
        name.length === 0 ||
        email.length === 0 ||
        phone.length === 0 ||
        message.length === 0
      ) {
        setBanner(res.data.msg)
        toast.error(res.data.msg)
        setBool(false)
      } else if (res.status === 200) {
        setBanner(res.data.msg)
        toast.success(res.data.msg)
        setBool(false)
        //
        console.log(data);
        setName("");
        setEmail("");
        setPhone("");
        setMsg("");
      }
    } catch (error) {
      console.log(error);

      setName("");
      setEmail("");
      setPhone("");
      setMsg("");
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's keep in touch!"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                `Get in Touch... 🤝`,
                1000,
                `Let's Connect by Mail... 📨`,
                1000,
                `Hire Me... 💼`,
                1000,
              ]}
            />
          </h2>
          <a rel="noopener noreferrer" href="https://github.com/SNEHAASHISH" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a rel="noopener noreferrer" href="https://twitter.com/sneh_aashish" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a rel="noopener noreferrer" href="https://www.linkedin.com/in/sneh-aashish-gupta-b33259199/" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Let's Connect!</h4>
            <img src={imgBack} alt="Image Not Found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>

            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="phone">Phone</label>
            <input type="text" onChange={handlePhone} value={phone} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMsg} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send&nbsp;
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <br/>
                    <img src={loading} alt="Image Unresponsive" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
