import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Discover.css';


import l1 from '../assets/img/l1.jpg';
import l2 from '../assets/img/l2.jpg';
import l3 from '../assets/img/l3.jpg';
import l4 from '../assets/img/l4.jpg';
import l5 from '../assets/img/l5.jpg';
import l6 from '../assets/img/l6.jpg';
import l7 from '../assets/img/l7.jpg';
import l8 from '../assets/img/l8.jpg';
import l9 from '../assets/img/l9.jpg';
import l10 from '../assets/img/l10.jpg';
import l11 from '../assets/img/l11.jpg';
import l12 from '../assets/img/l12.jpg';
import l13 from '../assets/img/l13.jpg';
import l14 from '../assets/img/l14.jpg';
import l15 from '../assets/img/l15.jpg';
import l16 from '../assets/img/l16.jpg';

function Perproduct() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [numNights, setNumNights] = useState(1);

    useEffect(() => {
        const properties = [
            { id: 1, img: l1, place: 'Noida', name: 'Modern Apartment', price: 2000, ratings: 4 },
            { id: 2, img: l2, place: 'Delhi', name: 'Luxury Villa', price: 3500, ratings: 5 },
            { id: 3, img: l3, place: 'Gurgaon', name: 'Cozy Studio', price: 1500, ratings: 4 },
            { id: 4, img: l4, place: 'Mumbai', name: 'Spacious Loft', price: 2800, ratings: 4 },
            { id: 5, img: l5, place: 'Bangalore', name: 'Rustic Cottage', price: 1800, ratings: 3 },
    { id: 6, img: l6, place: 'Chennai', name: 'Seaside Bungalow', price: 3200, ratings: 5 },
    { id: 7, img: l7, place: 'Hyderabad', name: 'Mountain Retreat', price: 2500, ratings: 4 },
    { id: 8, img: l8, place: 'Pune', name: 'Urban Penthouse', price: 3800, ratings: 5 },
    { id: 9, img: l9, place: 'Kolkata', name: 'Lakefront Cabin', price: 2200, ratings: 4 },
    { id: 10, img: l10, place: 'Jaipur', name: 'Historic Mansion', price: 4500, ratings: 5 },
    { id: 11, img: l11, place: 'Ahmedabad', name: 'Scenic Villa', price: 3100, ratings: 4 },
    { id: 12, img: l12, place: 'Chandigarh', name: 'Garden Cottage', price: 1900, ratings: 3 },
    { id: 13, img: l13, place: 'Lucknow', name: 'Urban Oasis', price: 2700, ratings: 4 },
    { id: 14, img: l14, place: 'Indore', name: 'Riverside Retreat', price: 3400, ratings: 5 },
    { id: 15, img: l15, place: 'Surat', name: 'Forest Hideaway', price: 2000, ratings: 4 },
    { id: 16, img: l16, place: 'Vadodara', name: 'Desert Villa', price: 3600, ratings: 5 },
        ];

       
        const selectedProperty = properties.find(prop => prop.id === parseInt(id));
        setProperty(selectedProperty);
    }, [id]);

    const handleNumNightsChange = (e) => {
        setNumNights(parseInt(e.target.value));
    };
    const similarProperties = [
        { id: 2, img: l2, place: 'Delhi', name: 'Luxury Villa', price: 3500, ratings: 5 },
        { id: 3, img: l3, place: 'Gurgaon', name: 'Cozy Studio', price: 1500, ratings: 4 },
        { id: 15, img: l15, place: 'Surat', name: 'Forest Hideaway', price: 2000, ratings: 4 },

        { id: 4, img: l4, place: 'Mumbai', name: 'Spacious Loft', price: 2800, ratings: 4 }
    ];

    return (
        <>
            <div className="perproduct-container">
            {property ? (
                <div className="property-details-container">
                    <div className="property-image">
                        <img src={property.img} alt="Property" />
                    </div>
                    <div className="property-details">
                        <h2>{property.name}</h2>
                        <p>Location: {property.place}</p>
                        <div className="property-rating">
                            {Array.from({ length: property.ratings }, (_, index) => (
                                <i key={index} className="fas fa-star"></i>
                            ))}
                        </div>
                        <p>₹{property.price * numNights} / {numNights} Month</p>
                        <div className="booking-controls">
                            <label htmlFor="numNights">Months:</label>
                            <input type="number" id="numNights" value={numNights} onChange={handleNumNightsChange} />
                            <Link to='/payment'>

                            <button>Book Now</button>
                            </Link>
                        </div>
                        <p className="property-description">
                            This modern apartment offers a comfortable stay with all the amenities you need.
                            Located in {property.place}, it provides easy access to nearby attractions and facilities.
                            Book your stay today!
                        </p>
                    </div>
                </div>
            ) : (
                <p className="error-message">Property not found</p>
            )}

            
            <section id="similar-properties">
    <h2>Similar Properties</h2>
    <div className="similar-properties-container">
        {similarProperties.map((property, index) => (
            <Link to={`/perproduct/${property.id}`} key={index}>
                <div className="similar-property">
                    <img src={property.img} alt="Similar Property" />
                    <div className="similar-property-details">
                        <h3>{property.name}</h3>
                        <p>{property.place}</p>
                        <div className="property-rating">
                            {[...Array(property.ratings)].map((_, index) => (
                                <i key={index} className="fas fa-star"></i>
                            ))}
                        </div>
                        <p>${property.price} / night</p>
                        
                        <button>View Details</button>
                    </div>
                </div>
            </Link>
        ))}
    </div>
</section>
        </div>
        </>
    );
}

export default Perproduct;
