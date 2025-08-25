import logo from "../../assets/logo.svg";
import homepageimg from "../../assets/homepageimg.png";
import "./home.style.css"
import GlobalButton from "../../components/GlobalButton/GlobalButton";

const Home = () => {
    return (
        <div className='home_wrapper'>
            <div className="home_content">
            <div className="home_left_side">
                <div className="logo">
                    <img className="logoimg" src={logo} alt="Logo" />
                    <h1 className="logoheading">TROPIC SOLUTION</h1>
                </div>
                <h1 className="homeheading">Employee Training Hub</h1>
                <h5 className="homesubheading">Elevating tech talents into visionary leaders through innovative training and real-world experience.</h5>
                <GlobalButton text="Start learning" className='home_button' />
            </div>
            <div className="home_right_side">
                <img className="homeimg" src={homepageimg} alt="homepageimg" />
            </div>
            </div>
        </div>
    )

};

export default Home;