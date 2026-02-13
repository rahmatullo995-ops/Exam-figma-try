import './Arriwals.css'
import {FaApple} from "react-icons/fa6";

const Arriwals = () => {
    return (
        <div className="card--div__nav">
            <h1>
                New <span>Arrivals</span>
            </h1>
            <main className="TextMain--main">
                <p>New Collection 2023</p>
                <h2 className='Two'>
                    Apple Watch Series 8 <FaApple />
                </h2>
                <p className='One'>
                    Fine workmanship is waterproof and dustproof. The <br />
                    watch is improved with many features to ensure accuracy when <br />
                    monitoring users' health.
                </p>
                <div className="CardDiv--one">
                    <div className="card--1">
                        <p>Sale up to</p>
                        <h2>60%</h2>
                    </div>
                    <div className="card--2">
                        <p>$305.00</p>
                        <h2>$259.00</h2>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Arriwals;
