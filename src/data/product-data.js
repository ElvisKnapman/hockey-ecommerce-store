import bauerSupereme3S from '../images/product-images/sticks/BAUER-SUPREME-3S.jpg';
import bauerNexus from '../images/product-images/sticks/Bauer-Nexus-Geo.jpg';
import ccmJetspeedFT3 from '../images/product-images/sticks/CCM-Jetspeed-FT3-Pro.jpg';
import ccmRibcorTrigger from '../images/product-images/sticks/CCM-Ribcor-Trigger-5.jpg';
import ccmSuperTacksAS3 from '../images/product-images/sticks/CCM-Super-Tacks-AS3-Pro.jpg';
import trueAX9 from '../images/product-images/sticks/True-AX9.jpg';
import trueProjectX from '../images/product-images/sticks/True-Project-X-Hockey-Stick-Front_1024x1024.jpg';

import bauerSupremeUltraSonic from '../images/product-images/skates/Bauer-Ultra-Sonic.jpg';
import ccmSuperTacksAS3Skates from '../images/product-images/skates/CCM-Super-Tacks-AS3-Pro.jpg';
import ccmRibcor80k from '../images/product-images/skates/CCM-Ribcor-80K.jpg';
import bauerVapor2XPro from '../images/product-images/skates/Bauer-Vapor-2X-Pro.jpg';
import ccmJetspeedSkates from '../images/product-images/skates/CCM-Jetspeed-FT490.jpg';

import ccm11KHelmet from '../images/product-images/helmets/CCM-11K.jpg';
import bauerReAkt75Helmet from '../images/product-images/helmets/bauer_2016_reakt_75.jpg';
import ccmTacks710Helmet from '../images/product-images/helmets/ht710_ccm_2017_st_helmet_710.jpg';
import bauerReAkt150Helmet from '../images/product-images/helmets/Bauer-Reakt-150.jpg';

import bauerVapor2XGloves from '../images/product-images/gloves/Bauer-Vapor-2X-Pro.jpg';
import warriorCovertGloves from '../images/product-images/gloves/Warrior-Covert-QRE10.jpg';
import ccmJetspeedGloves from '../images/product-images/gloves/CCM-Jetspeed-FT4-Pro.jpg';
import ccmSuperTacksGloves from '../images/product-images/gloves/CCM-Super-Tacks-AS1.jpg';

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

    { id: 5, name: 'Bauer Nexus Geo', price: 349.99, image: bauerNexus },
    { id: 6, name: 'True AX9', price: 329.99, image: trueAX9 },
    { id: 7, name: 'Bauer Supreme 3S', price: 299.99, image: bauerSupereme3S },
  ],
  skates: [
    {
      id: 8,
      name: 'Bauer Supreme Ultra Sonic',
      price: 1149.99,
      image: bauerSupremeUltraSonic,
    },
    {
      id: 9,
      name: 'CCM Super Tacks AS3',
      price: 1149.99,
      image: ccmSuperTacksAS3Skates,
    },
    { id: 10, name: 'CCM Ribcor 80K', price: 899.99, image: ccmRibcor80k },
    {
      id: 11,
      name: 'Bauer Vapor 2X Pro',
      price: 809.99,
      image: bauerVapor2XPro,
    },
    { id: 12, name: 'CCM Jetspeed', price: 729.99, image: ccmJetspeedSkates },
  ],
  helmets: [
    { id: 13, name: 'CCM 11K', price: 199.99, image: ccm11KHelmet },
    {
      id: 14,
      name: 'Bauer RE-AKT 75',
      price: 159.99,
      image: bauerReAkt75Helmet,
    },
    { id: 15, name: 'CCM Tacks 710', price: 199.99, image: ccmTacks710Helmet },
    {
      id: 16,
      name: 'Bauer RE-AKT 150',
      price: 259.99,
      image: bauerReAkt150Helmet,
    },
  ],
  gloves: [
    {
      id: 17,
      name: 'Bauer Vapor 2X Pro',
      price: 239.99,
      image: bauerVapor2XGloves,
    },
    {
      id: 18,
      name: 'Warrior Covert QRE 10',
      price: 239.99,
      image: warriorCovertGloves,
    },
    {
      id: 19,
      name: 'CCM Jetspeed FT4',
      price: 229.99,
      image: ccmJetspeedGloves,
    },
    {
      id: 20,
      name: 'CCM Super Tacks AS1',
      price: 229.99,
      image: ccmSuperTacksGloves,
    },
  ],
};

export default data;
