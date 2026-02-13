import { FaArrowRightLong } from 'react-icons/fa6';
import './Categories.css'

const Categories = () => {
  return (
    <main className='card--div__dad'>
        <h1>Categories</h1>
        <main className='ForCards--1'>
        <div className='card--num__one'>
            <main className='ForText'>
                <h4>Smartphones</h4>
                <p>iPhone</p>
                <p>iPhone Accessories</p>
                <p>Postpaids Phones</p>
                <p>Sale off</p>
                <h3 className='NumOne'>All Smartphones <FaArrowRightLong /></h3>
            </main>
        </div>
        <div className='card--num__one'>
            <main className='ForText'>
                <h4>Camera</h4>
                <p>Professional</p>
                <p>Camera Accessories</p>
                <p>Cheap Camera</p>
                <p>Sale off</p>
                <h3 className='NumOne'>All Camera <FaArrowRightLong /></h3>
            </main>
        </div>
        <div className='card--num__one'>
            <main className='ForText'>
                <h4>Wristwatch</h4>
                <p>Sports Watch</p>
                <p>Fashion Watches</p>
                <p>Smart Watch</p>
                <p>Sale off</p>
                <h3 className='NumOne'>All Wristwatch</h3>
            </main>
        </div>
        </main>
        <main className='ForCards--2'>
        <div className='card--num__one'>
            <main className='ForText'>
                <h4>Headphones</h4>
                <p>iPhone</p>
                <p>iPhone Accessories</p>
                <p>Postpaids Phones</p>
                <p>Sale off</p>
                <h3 className='NumOne'>All Headphones <FaArrowRightLong /></h3>
            </main>
        </div>
        <div className='card--num__one'>
            <main className='ForText'>
                <h4>Tablets</h4>
                <p>iPad</p>
                <p>iPad Accessories</p>
                <p>Postpaids iPad</p>
                <p>Sale off</p>
                <h3 className='NumOne'>All Tablets</h3>
            </main>
        </div>
        <div className='card--num__one'>
            <main className='ForText'>
                <h4>Laptop</h4>
                <p>Gaming laptop</p>
                <p>Laptop Accessories</p>
                <p>Office Laptop</p>
                <p>Sale off</p>
                <h3 className='NumOne'>All Laptop <FaArrowRightLong /></h3>
            </main>
        </div>
        </main>
    </main>
  );
}

export default Categories;
