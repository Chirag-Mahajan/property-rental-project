import React from 'react'
import main2 from '../assets/img/main2.jpg'
import inner1 from '../assets/img/inner1.jpg'
import inner2 from '../assets/img/inner2.jpg'
import comm from '../assets/img/comm.jpg'
import resi from '../assets/img/resi.jpg'
import '../App.css'
import vacant from '../assets/img/vacant.jpg'
import video2 from '../assets/video/video2.mp4'
import p1 from '../assets/img/p1.jpg'
import p2 from '../assets/img/p2.jpg'
import p3 from '../assets/img/p3.jpg'
import p4 from '../assets/img/p4.jpg'
import p5 from '../assets/img/p5.jpg'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <main className="main">
           
    
      <section className="home" id="home">
        
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__data-subtitle">Rent Your Dream Home Now</span>
            <h1 className="home__data-title">Welcome to <br/> APNA GHAR : <br /> Your <b> Rental Sanctuary </b></h1>
            <Link to="/discover" className="button1">Explore</Link>
          </div>
          <div className="home__social">
            <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
              <i className="ri-facebook-box-fill"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" className="home__social-link">
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
          <div className="home__info">
            <div>
              <span className="home__info-title">Discover Top Rental Destinations with Apna Ghar</span>
              <Link to="/discover" className="button button--flex button--link home__info-button">
                View <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            <div className="home__info-overlay">
              <img src={main2} alt="" className="home__info-img" />
            </div>
          </div>
        </div>
      </section>

     
      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__data">
            <h2 className="section__title about__title">Discover Exquisite Locations for 

<br/> Your Next Home</h2>
            <p className="about__description">Embark on a journey to find your perfect abode amidst stunning landscapes and serene surroundings. With exclusive deals and personalized guidance, Apna Ghar ensures you secure the ideal rental at unbeatable prices. Your dream property awaits, reserve your spot now.</p>
            <Link to="/discover" className="button">Explore Properties Now</Link>
          </div>
          <div className="about__img">
            <div className="about__img-overlay">
              <img src={inner1} alt="" className="about__img-one" />
            </div>
            <div className="about__img-overlay">
              <img src={inner2} alt="" className="about__img-two" />
            </div>
          </div>
        </div>
      </section>

      

            
      
<section className="experience section">
  <h2 className="section__title">Experience You Can Trust<br/> With Over 20 Years of Expertise</h2>
  <div className="experience__container container grid">
    <div className="experience__content grid">
      <div className="experience__data">
        <h2 className="experience__number">20</h2>
        <span className="experience__description">Year <br/> Experience</span>
      </div>
      <div className="experience__data">
        <h2 className="experience__number">175</h2>
        <span className="experience__description">Properties  <br/> Successfully Rented</span>
      </div>
      <div className="experience__data">
        <h2 className="experience__number">650+</h2>
        <span className="experience__description">Offering Rentals in <br/> Desirable Locations</span>
      </div>
    </div>
    <div className="experience__img grid">
      <div className="experience__overlay">
        <img src={resi} alt="" className="experience__img-one" />
      </div>
      <div className="experience__overlay">
        <img src={vacant} alt="" className="experience__img-two" />
      </div>
    </div>
  </div>
</section>


<section className="video section">
  <h2 className="section__title">Video Preview</h2>
  <div className="video__container container">
    <p className="video__description">Explore stunning rental properties with our immersive video tours. Discover the perfect place for you and your family.</p>
    <div className="video__content">
      <video id="video-file" controls autoPlay loop muted>
        <source src={video2} type="video/mp4" />
      </video>
      
    </div>
  </div>
</section>

<section className="place section" id="place">
      <h2 className="section__title">Select Your Property</h2>

      <div className="place__container container grid">
      
        <div className="place__card">
          <img src={p1} alt="" className="place__img" />
          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,8</span>
            </span>
            <div className="place__data">
              <h3 className="place__title">Luxury Beachfront Villa(200sqm)</h3>
              <span className="place__subtitle">Mumbai</span>
              <span className="place__price">₹9499/-</span>
            </div>
          </div>
          <Link to='/discover'>
          <button className="button button--flex place__button">

            <i className="ri-arrow-right-line"></i>
          </button>
          </Link>
        </div>

       
        <div className="place__card">
          <img src={p2} alt="" className="place__img" />
          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">5,0</span>
            </span>
            <div className="place__data">
              <h3 className="place__title">Tea Estate Cottage(1200sqft)</h3>
              <span className="place__subtitle">Darjeeling, West Bengal, India</span>
              <span className="place__price"> ₹6,700/-</span>
            </div>
          </div>
          <Link to='/discover'>
          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
          </Link>
        </div>

        <div className="place__card">
          <img src={p3} alt="" className="place__img" />
          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,9</span>
            </span>
            <div className="place__data">
              <h3 className="place__title">City Center Apartment(400sqft)</h3>
              <span className="place__subtitle">Mumbai, Maharashtra, India</span>
              <span className="place__price">₹2,100/-</span>
            </div>
          </div>
          <Link to='/discover'>
          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
          </Link>
        </div>

     
        <div className="place__card">
          <img src={p4} alt="" className="place__img" />
          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,8</span>
            </span>
            <div className="place__data">
              <h3 className="place__title">Cozy Studio(800sqft)</h3>
              <span className="place__subtitle"> Noida Extension,Uttar Pradesh,India</span>
              <span className="place__price">₹2,700</span>
            </div>
          </div>
          <Link to='/discover'>
          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
          </Link>
        </div>

      
        <div className="place__card">
          <img src={p5} alt="" className="place__img" />
          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,8</span>
            </span>
            <div className="place__data">
              <h3 className="place__title">Family Home in Sector 75(400sqft)</h3>
              <span className="place__subtitle">Noida, Uttar Pradesh</span>
              <span className="place__price">₹5,400</span>
            </div>
          </div>
          <Link to='/discover'>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
          </Link>
        </div>
      </div>
    </section>


<section className="subscribe section">
  <div className="subscribe__bg">
    <div className="subscribe__container container">
      <h2 className="section__title subscribe__title">Subscribe Our <br/> Newsletter</h2>
      <p className="subscribe__description">Subscribe to our newsletter and get a special 30% discount.</p>
      <form action="" className="subscribe__form">
        <input type="text" placeholder="Enter email" className="subscribe__input" />
        <button className="button">Subscribe</button>
      </form>
    </div>
  </div>
</section>

            
            
<section className="sponsor section">
  <div className="sponsor__container container grid">
    <div className="sponsor__content">
      <img src="assets/img/sponsors1.png" alt="" className="sponsor__img" />
    </div>
    <div className="sponsor__content">
      <img src="assets/img/sponsors2.png" alt="" className="sponsor__img" />
    </div>
    <div className="sponsor__content">
      <img src="assets/img/sponsors3.png" alt="" className="sponsor__img" />
    </div>
    <div className="sponsor__content">
      <img src="assets/img/sponsors4.png" alt="" className="sponsor__img" />
    </div>
    <div className="sponsor__content">
      <img src="assets/img/sponsors5.png" alt="" className="sponsor__img" />
    </div>
  </div>
</section>

        </main>
      
    </>
  )
}

export default Landing
