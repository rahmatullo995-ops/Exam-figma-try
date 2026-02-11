import React from 'react';
import { CiBatteryCharging } from 'react-icons/ci';
import { FaBluetoothB } from 'react-icons/fa';
import './Hero.css'

const Hero = () => {
  return (

    <main className='main--hero'>
        <div className="text--main">
            <p>Bluetooth headphone</p>
            <h2>AirPods Pro <br />2023</h2>
            <p>Delivers vivid sound quality with outstanding 3-D <br />sound reproduction</p>
        </div>
        <div className="icons--div">
            <p><CiBatteryCharging />Battery capacity 6 hours - charging box 30 hours</p>
            <br /><p><FaBluetoothB /> Bluetooth 5.3</p>
        </div>
    </main>

  );
}

export default Hero;
