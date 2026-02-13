import "./Header.css";
import {CiSearch} from "react-icons/ci";
import Image from "../../assets/LOGO-HEADER.png";
import {MdCompareArrows, MdOutlineFavoriteBorder} from "react-icons/md";
import {IoCartOutline} from "react-icons/io5";
import {FiUser} from "react-icons/fi";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <header className="header--div">
                <Link to='/'>
                <img src={Image} />
                </Link>
                <div className="save--inputs">
                    <input type="text" placeholder="Search..." />
                    <button>
                        <CiSearch />
                    </button>
                </div>
                <div className="icon--div">
                    <MdOutlineFavoriteBorder />
                    <MdCompareArrows />
                    <IoCartOutline />
                    <FiUser />
                </div>
            </header>
            <nav className="header-nav">
                <button className="btn--nav">All Categories</button>
                <p>
                    <Link>Product</Link>
                </p>
                <p>
                    <Link to={'/shop'}>Flash Sale</Link>
                </p>
                <p>
                    <Link>Best Sellers</Link>
                </p>
                <p>
                    <Link>Specials Offers</Link>
                </p>
                <p>
                    <Link>Blog</Link>
                </p>
                <p>
                    <Link>About Us</Link>
                </p>
                <p>
                    <Link>Contact Us</Link>
                </p>
            </nav>
        </div>
    );
};

export default Header;
