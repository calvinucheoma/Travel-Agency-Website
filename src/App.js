import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Recommend from './components/Recommend/Recommend';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import ScrollReveal from 'scrollreveal';


function App() {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance:"80px",
      duration:"2000",
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
      `, {
        opacity: 0,
        interval: 300
      }
    )
  }, []);

  return (

    <>

      <ScrollToTop/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Recommend/>
      <Testimonials/>
      <Footer/>

    </>

  );

};


export default App;
