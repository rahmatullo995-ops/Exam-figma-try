import { FaApplePay, FaCcVisa, FaInstagram, FaPinterest, FaSquareFacebook } from "react-icons/fa6";
import footerImage from "../../assets/LOGO-HEADER.png";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { RiPaypalLine } from "react-icons/ri";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="FooterBottom">
            <div className="footerDiv--one">
                <div className="FooterHome">
                <img src={footerImage} />
                <p>
                    Lorem ipsum dolor sit amet consectetur. Ultricies <br />
                    viverra id egestas pharetra fermentum. Lorem ipsum dolor <br />
                    sit amet consectetur. Ultricies viverra id
                </p>
                <div className="ForInput">
                    <input type="text" placeholder="Your email" />
                    <button>Submit</button>
                </div>
                <div className="ForIcons">
                    <FaSquareFacebook />
                    <FaInstagram />
                    <FaPinterest />
                    <FaTwitterSquare />
                    <IoLogoTiktok />
                </div>
                </div>
                <nav className="FooterNavabr--Dad">
                    <div className="FooterNavbar">
                        <h4>Customer Service</h4>
                        <p>My Account</p>
                        <p>Payments</p>
                        <p>Term of Use</p>
                        <p>Deliveries & Returns</p>
                        <p>Gift Card</p>
                        <p>Refund & Returns Policy</p>
                        <p>FAQs</p>
                    </div>
                    <div className="FooterNavbar">
                        <h4>About Us</h4>
                        <p>Product</p>
                        <p>Our Story</p>
                        <p>Job Opportunities</p>
                        <p>Store Locator</p>
                        <p>Blog</p>
                        <p>Reviews</p>
                        <p>Trending Search</p>
                    </div>
                    <div className="FooterNavbar">
                        <h4>Contact Us</h4>
                        <p>600 N Washington Ave Suite C203</p>
                        <p>+008 0642 118</p>
                        <p>bestxtore@gmail.com</p>
                        <h4>Service Time</h4>
                        <p>24-hour Monday - Sunday</p>
                        <div className="icons">
                        <p><FaCcVisa /></p>
                        <p><RiPaypalLine /></p>
                        <p><FaApplePay /></p>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
