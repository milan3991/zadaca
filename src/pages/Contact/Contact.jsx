import logo from "../../assets/logo.svg";
import contactpageimg from "../../assets/contactpageimg.png";
import "./contact.style.css"
import GlobalButton from "../../components/GlobalButton/GlobalButton";

const Contact = () => {
    return (
        <div className='contact_wrapper'>
            <div className="contact_content">
                <div className="left_side">
                    <img className="contactimg" src={contactpageimg} alt="contactpageimg" />
                </div>
                <div className="right_side">
                    <h1 className="contactheading">We can’t wait to see you grow!</h1>
                    <h5 className="contactsubheading">For any questions about the program, please reach out to</h5>
                    <GlobalButton text="hello@tropic.ba" className='contact_button' />
                    <div className="logo">
                        <img className="logoimg" src={logo} alt="Logo" />
                        <h1 className="logoheading">TROPIC SOLUTION</h1>
                    </div>

                </div>
            </div>
        </div>
    )

};

export default Contact;