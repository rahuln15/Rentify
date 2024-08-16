


import './Chairs.css'
import chair1 from '../page7/chair1.png'
import chair2 from '../page7/chair2.png'
import chair3 from '../page7/chair3.png'
import chair4 from '../page7/chair4.png'
const Chairs = () => {

    const cards = [
        {
          id: 1,
          name: 'Sakarias Armchair',
          price: '392 / Month',
          rating: 5,
          imgSrc: `${chair2}`, // Replace with the correct path
        },
        {
          id: 2,
          name: 'Baltsar Chair',
          price: '299 / Month',
          rating: 5,
          imgSrc: `${chair2}`, // Replace with the correct path
        },
        {
          id: 3,
          name: 'Anjay Chair',
          price: '519 / Month',
          rating: 5,
          imgSrc: `${chair3}`, // Replace with the correct path
        },
        {
          id: 4,
          name: 'Nyantuy Chair',
          price: '921 / Month',
          rating: 5,
          imgSrc: `${chair4}`, // Replace with the correct path
        },
      ];

  return (
    <div className='chair-container'>
        <div className='chairs-heading'>
            <h1>Our New Products</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
        </div>
       
    <div className="card-grid">
      {cards.map(card => (
        <div className="card" key={card.id}>
        <div className='card-img'>

          <img  src={card.imgSrc} alt={card.name} />
        </div>
        <div className='cardddd'>

          <div className='card-sqr'></div>
          <div className="card-details">
            <span className="card-category">Chair</span>
            <h3 className="card-name">{card.name}</h3>
            <div className="card-rating">
              {'★'.repeat(card.rating)}
            </div>
            <div className='price-cont'>

            <p className="card-price"><span>₹</span>{card.price}</p>
            <button className="card-add-button">+</button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Chairs