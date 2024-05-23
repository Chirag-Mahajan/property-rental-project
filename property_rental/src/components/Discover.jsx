
import React, { useState, useEffect, useRef } from 'react';
import '../Discover.css';
import { Link } from 'react-router-dom';
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

function Discover() {
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [ratingFilter, setRatingFilter] = useState(0);
    const [areaFilter, setAreaFilter] = useState('');
    const areaFilterRef = useRef(null);

    
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

    
    const uniqueAreas = Array.from(new Set(properties.map(property => property.place)));

    useEffect(() => {
       
        let filtered = properties.filter(property =>
            property.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        filtered = ratingFilter === 0 ? filtered : filtered.filter(property => property.ratings >= ratingFilter);

       
        if (areaFilter) {
            filtered = filtered.filter(property => property.place === areaFilter);
        }

        setFilteredProperties(filtered);
    }, [searchTerm, ratingFilter, areaFilter]);

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleRatingFilterChange = () => {
        setRatingFilter(areaFilterRef.current.value);
    };

    const handleAreaFilterChange = event => {
        setAreaFilter(event.target.value);
    };

    return (
        <>
            <div className="hero-image">
                <div className="jumbotron">
                    <div className="container text">
                        <h1 className='discoverh1'>OUR LISTINGS</h1>
                        <h2>Discover Your Perfect Rental!!</h2>
                        <p>Find the perfect property for your next stay...</p>
                    </div>
                </div>
            </div>

            <div className="search-filter">
                <input type="text" placeholder="Search by property name" value={searchTerm} onChange={handleSearchChange} />
                <select ref={areaFilterRef} onChange={handleRatingFilterChange}>
                    <option value="0">Filter by rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select onChange={handleAreaFilterChange}>
                    <option value="">Filter by area</option>
                    {uniqueAreas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                    ))}
                </select>
            </div>

            <section id="property-listings" className="section-p1">
                <div className="pro-container">
                    {filteredProperties.map((property, index) => (
                        <div className="pro" key={index}>
                            <Link to={`/perproduct/${property.id}`}>
                                <img src={property.img} className="property-img" alt={property.name} />
                                <div className="des">
                                    <span>{property.place}</span>
                                    <h5>{property.name}</h5>
                                    <div className="star">
                                        {[...Array(property.ratings)].map((_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                    </div>
                                    <h4>₹{property.price}</h4>
                                </div>
                                
                                <button className="cart">Book Now</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section id="pagination" className="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#"><i className="fas fa-long-arrow-alt-right"></i></a>
            </section>
        </>
    );
}

export default Discover;
