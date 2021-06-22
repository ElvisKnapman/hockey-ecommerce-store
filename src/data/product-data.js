import bauerSupereme3S from '../images/product-images/sticks/BAUER-SUPREME-3S.jpg';
import bauerNexus from '../images/product-images/sticks/Bauer-Nexus-Geo.jpg';
import ccmJetspeedFT3 from '../images/product-images/sticks/CCM-Jetspeed-FT3-Pro.jpg';
import ccmRibcorTrigger from '../images/product-images/sticks/CCM-Ribcor-Trigger-5.jpg';
import ccmSuperTacksAS3 from '../images/product-images/sticks/CCM-Super-Tacks-AS3-Pro.jpg';
import trueAX9 from '../images/product-images/sticks/True-AX9.jpg';
import trueProjectX from '../images/product-images/sticks/True-Project-X-Hockey-Stick-Front_1024x1024.jpg';

const data = {
  sticks: [
    { id: 1, name: 'True Project X', price: 399.99, image: trueProjectX },
    {
      id: 2,
      name: 'CCM Ribcor Trigger Pro',
      price: 359.99,
      image: ccmRibcorTrigger,
    },

    {
      id: 3,
      name: 'CCM Super Tacks AS3 Pro',
      price: 359.99,
      image: ccmSuperTacksAS3,
    },
    {
      id: 4,
      name: 'CCM Jetspeed FT3 Pro',
      price: 359.99,
      image: ccmJetspeedFT3,
    },

    { id: 4, name: 'Bauer Nexus Geo', price: 349.99, image: bauerNexus },
    { id: 5, name: 'True AX9', price: 329.99, image: trueAX9 },
    { id: 6, name: 'Bauer Supreme 3S', price: 299.99, image: bauerSupereme3S },
  ],
  skates: [
    { id: 5, name: 'Bauer Skates', price: 699.99 },
    { id: 6, name: 'CCM Skates', price: 679.99 },
  ],
  helmets: [
    { id: 7, name: 'Bauer Helmet', price: 199.99 },
    { id: 8, name: 'CCM Helmet', price: 179.99 },
  ],
  gloves: [
    { id: 9, name: 'Bauer Gloves', price: 139.99 },
    { id: 10, name: 'CCM Gloves', price: 119.99 },
  ],
};

export default data;
