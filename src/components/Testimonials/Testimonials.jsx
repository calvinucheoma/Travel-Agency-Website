import React from 'react';
import styled from 'styled-components';
import avatarImage from '../../assets/avatarImage.jpeg';
import man1 from '../../assets/man1.JPG';
import man2 from '../../assets/man2.JPG';



const Testimonial = () => {

  return (

    <Section id='testimonials'>

        <div className="testimonials__title">
            <h2>Happy Customers</h2>
        </div>

        <div className="testimonials">

            <div className="testimonials__testimonial">

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta recusandae eveniet a
                </p>

                <div className="testimonials__info">
                  <img src={avatarImage} alt="user avatar" />
                  <div className="testimonials__info__details">
                    <h4>Kishan Sheth</h4>
                    <span>CEO - Shashaan Web Solutions</span>
                  </div>
                </div>

            </div>

            <div className="testimonials__testimonial">

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta recusandae eveniet a
                </p>

                <div className="testimonials__info">
                  <img src={man1} alt="user avatar" />
                  <div className="testimonials__info__details">
                    <h4>Chukwuma Ucheoma</h4>
                    <span>FrontEnd Developer - Montana Enterprises</span>
                  </div>
                </div>

            </div>

            <div className="testimonials__testimonial">

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta recusandae eveniet a
                </p>

                <div className="testimonials__info">
                  <img src={man2} alt="user avatar" />
                  <div className="testimonials__info__details">
                    <h4>Calvin Ucheoma</h4>
                    <span>Fullstack Developer - Montana Enterprises</span>
                  </div>
                </div>

          </div>

        </div>

    </Section>

  )

};

const Section = styled.section`
    margin: 5rem 0;

    .testimonials__title {
      text-align: center;
      margin-bottom: 2rem;
    }

    .testimonials {
      display: flex;
      justify-content: center;
      margin: 0 2rem;

      .testimonials__testimonial{
        background-color: aliceblue;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          transform: translateX(0.4rem) translateY(-1rem);
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        .testimonials__info {
          display: flex;
          justify-content: center;
          gap: 1rem;
          align-items: center;
          margin-top: 1rem;

          img {
            height: 3rem;
            border-radius: 3rem;
          }

          .testimonials__info__details {
            span {
              font-size: 0.9rem;
            }
          }
        }
      }
    }

    @media screen and (min-width:279px) and (max-width:768px) {
      .testimonials {
        flex-direction: column;
        margin: 0;

        .testimonials__testimonial {
          justify-content: center;

          .testimonials__info {
            flex-direction: column;
            justify-content: center;
          }
        }
      }
    }

`;

export default Testimonial;