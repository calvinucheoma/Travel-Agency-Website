import React from 'react';
import styled from 'styled-components';
import homeImage from '../../assets/hero.png';


const Hero = () => {

  return (

    <>

        <Section id='hero'>

            <div className="hero__background">
                <img src={homeImage} alt="hero pic" />
            </div>

            <div className="hero__content">

                <div className="hero__title">

                    <h1>TRAVEL TO EXPLORE</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>

                <div className="hero__search">

                    <div className="hero__container">
                        <label htmlFor="location">
                            Where do you want to go?
                        </label>
                        <input type="text" placeholder='Search your loxation' />                 
                    </div>

                    <div className="hero__container">
                        <label htmlFor="location">
                            Check-in
                        </label>
                        <input type="date"/>                 
                    </div>

                    <div className="hero__container">
                        <label htmlFor="location">
                           Check-out
                        </label>
                        <input type="date" />                 
                    </div>

                    <button>Explore Now</button>

                </div>

            </div>

        </Section>

    </>

  )

};

const Section = styled.section`
    position: relative;
    margin-top: 2rem;
    width: 100%;
    height: 100%;

    .hero__background {
        height: 100%;

        img {
            width: 100%;
            filter: brightness(60%);
        }
    }

    .hero__content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 3;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .hero__title {
            color: white;
            h1 {
                font-size: 3rem;
                letter-spacing: 0.2rem;
            }
            p {
                text-align: center;
                padding: 0 30vw;
                margin-top: 0.5rem;
                font-size: 1.2rem;
            }
        }

        .hero__search {
            display: flex;
            background-color: #ffffffce;
            padding: 0.5rem;
            border-radius: 0.5rem;

            .hero__container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 0 1.5rem;

                label {
                    font-size: 1.1rem;
                    color: #03045e;
                }

                input {
                    background-color: transparent;
                    border: none;
                    text-align: center;
                    color: black;
                    &[type="date"] {
                        padding-left: 3rem;
                    }
                    &::placeholder {
                        color: black;
                    }
                    &:focus {
                        outline: none;
                    }
                }
            }

            button {
                padding: 1rem;
                cursor: pointer;
                border-radius: 0.3rem;
                border: none;
                color: white;
                background-color: #4361ee;
                font-size: 1.1rem;
                text-transform: uppercase;
                transition: 0.3s ease-in-out;
                &:hover {
                    background-color: #023e8a;
                }
            }
        }
    }

    @media screen and (min-width:279px) and (max-width:980px) {
        height: 25rem;

        .hero__background {
            /* background-color: palegreen; */

            img {
                height: 100%;
            }
        }

        .hero__content {
            .hero__title {
                h1 {
                    font-size: 1rem;
                }

                p {
                    font-size: 0.8rem;
                    padding: 1vw;
                }
            }

            .hero__search {
                flex-direction: column;
                padding: 0.8rem;
                gap: 0.8rem;

                .hero__container {
                    padding: 0 0.8rem;

                    input[type="text"] {
                        &::placeholder{
                            font-weight: 100;
                            color: gray;
                            font-size: 0.8rem;
                        }
                    }

                    input[type="date"] {
                        padding-left: 1rem;
                    }

                    label {
                        font-size: 0.9rem;
                    }

                button {
                    padding: 1rem;
                    font-size: 0.8rem;
                }
            }
        }
    }

`;

export default Hero;