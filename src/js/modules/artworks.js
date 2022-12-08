import likeIcon from '../../img/like.svg';
import unLikeIcon from '../../img/unlike.svg';
import img25838 from '../../img/demo_img/25838.jpg';
import img27103 from '../../img/demo_img/27103.jpg';
import img27281 from '../../img/demo_img/27281.jpg';
import img27954 from '../../img/demo_img/27954.jpg';
import img28560 from '../../img/demo_img/28560.jpg';
import img34145 from '../../img/demo_img/34145.jpg';
import img41236 from '../../img/demo_img/41236.jpg';
import img45240 from '../../img/demo_img/45240.jpg';
import img61878 from '../../img/demo_img/61878.jpg';
import img62371 from '../../img/demo_img/62371.jpg';

const pageMain = document.querySelector('.main');

const data = [
  {
    id: 27103,
    title: 'Beside the Sea #34',
    date_display: '1962',
    artist_display: 'Robert Motherwell\nAmerican, 1915-1991',
    place_of_origin: 'United States',
    credit_line: 'Barbara Neff Smith and Solomon Byron Smith Purchase Fund',
    term_titles: [
      'oil paintings (visual works)',
      'paper (fiber product)',
      'organic material',
      'drawings (visual works)',
      'prints and drawing',
    ],
    image_id: img27103,
  },
  {
    id: 25838,
    title: 'Pistachio Tree at Ch\u00e2teau Noir',
    date_display: 'c. 1900',
    artist_display: 'Paul C\u00e9zanne\nFrench, 1839-1906',
    place_of_origin: 'France',
    credit_line: 'Mr. and Mrs. Martin A. Ryerson Collection',
    term_titles: [
      'watercolor',
      'Century of Progress',
      'paper (fiber product)',
      'watercolor',
      'water-base paint',
      'paint',
      'graphite',
      'drawings (visual works)',
      'prints and drawing',
      "world's fairs",
      "Chicago World's Fairs",
    ],
    image_id: img25838,
  },
  {
    id: 27281,
    title: 'Madam Pompadour',
    date_display: '1915',
    artist_display: 'Amedeo Modigliani\nItalian, 1884\u20131920',
    place_of_origin: 'Italy',
    credit_line: 'Joseph Winterbotham Collection',
    term_titles: [
      'oil on canvas',
      'women',
      'painting',
      'modern and contemporary art',
      'interiors',
      'portraits',
      'fashion',
      'hats',
      'Joseph Winterbotham Collection',
    ],
    image_id: img27281,
  },
  {
    id: 28560,
    title: 'The Bedroom',
    date_display: '1889',
    artist_display: 'Vincent van Gogh\nDutch, 1853-1890',
    place_of_origin: 'Saint-R\u00e9my-de-Provence',
    credit_line: 'Helen Birch Bartlett Memorial Collection',
    term_titles: [
      'oil on canvas',
      'oil painting',
      'Post-Impressionism',
      'interiors',
      'oil paint (paint)',
      'painting (image making)',
      'painting',
      'european painting',
      'domestic scenes',
      'Century of Progress',
      "world's fairs",
      "Chicago World's Fairs",
      'beds',
      'bedrooms',
    ],
    image_id: img28560,
  },
  {
    id: 27954,
    title: 'Terrace and Observation Deck at the Moulin de Blute-Fin, Montmartre',
    date_display: 'early 1887',
    artist_display: 'Vincent van Gogh\nDutch, 1853-1890',
    place_of_origin: 'Paris',
    credit_line: 'Helen Birch Bartlett Memorial Collection',
    term_titles: [
      'oil on canvas',
      'Post-Impressionism',
      'oil paint (paint)',
      'Century of Progress',
      'painting',
      'european painting',
      'weather/seasons',
      'leisure',
      'landscapes',
      "world's fairs",
      "Chicago World's Fairs",
    ],
    image_id: img27954,
  },
  {
    id: 34145,
    title: 'Vincent and Tony',
    date_display: '1969',
    artist_display: 'Alex Katz\nAmerican, born 1927',
    place_of_origin: 'United States',
    credit_line: 'Gift of Society for Contemporary Art',
    term_titles: [
      'painting',
      'youth',
      'modern and contemporary art',
      'hairstyles',
      'portraits',
      'fashion',
      'boys',
    ],
    image_id: img34145,
  },
  {
    id: 45240,
    title: 'The Bathers',
    date_display: '1899-1904',
    artist_display: 'Paul Cezanne\nFrench, 1839-1906',
    place_of_origin: 'France',
    credit_line: 'Amy McCormick Memorial Collection',
    term_titles: [
      'oil on canvas',
      'Post-Impressionism',
      'oil paint (paint)',
      'Century of Progress',
      'painting',
      'european painting',
      'leisure',
      'weather/seasons',
      'women',
      'landscapes',
      "world's fairs",
      "Chicago World's Fairs",
    ],
    image_id: img45240,
  },
  {
    id: 41236,
    title: 'Dobeckmun Metallic Stripe (Curtain Fabric)',
    date_display: '1948',
    artist_display: 'Designed by Dorothy Liebes (American, 1897\u20131972)\nUnited States',
    place_of_origin: 'United States',
    credit_line: 'Gift of Dorothy Liebes Design, Inc.',
    term_titles: [
      'weaving',
      'wool (textile)',
      'Modernism',
      'twill weaving',
      'stripes',
      'textile',
      'cellulose acetate film',
      'cotton (fiber)',
      'foil',
      'metal',
      'rayon',
      'silk (fiber)',
      'weaving',
      '20th Century',
    ],
    image_id: img41236,
  },
  {
    id: 61878,
    title: 'Still Life',
    date_display: '1914',
    artist_display: 'Georges Braque\nFrench, 1882-1963',
    place_of_origin: 'France',
    credit_line: 'Given in memory of Charles Barnett Goodspeed by Mrs. Charles B. Goodspeed',
    term_titles: [
      'collage',
      'collage (technique)',
      'paper (fiber product)',
      'watercolor',
      'water-base paint',
      'paint',
      'organic material',
      'graphite',
      'charcoal',
      'drawings (visual works)',
      'prints and drawing',
    ],
    image_id: img61878,
  },
  {
    id: 62371,
    title: 'Madame Cezanne in a Yellow Chair',
    date_display: '1888-90',
    artist_display: 'Paul Cezanne\nFrench, 1839-1906',
    place_of_origin: 'France',
    credit_line: 'Wilson L. Mead Fund',
    term_titles: [
      'oil on canvas',
      'Post-Impressionism',
      'portraits',
      'oil paint (paint)',
      'painting',
      'european painting',
      'emotions',
      'women',
      'families',
    ],
    image_id: img62371,
  },
];

const artworks = () => {
  const artworksHtmlContent = data.map((artwork) => `
      <figure class="artworks__item" id="${artwork.id}">
        <img class="artworks__item-img" src="${artwork.image_id}" alt="${artwork.title}">
        <figcaption class="artworks__item-caption">
          <h2 class="artworks__item-title">${artwork.title}</h2>
          <p>${artwork.artist_display}</p>
          <div class="artworks__item-interact">
            <button class="artworks__item-btn like-btn">
              <img class="like-img hidden" src="${likeIcon}" alt="like">
              <img class="like-img" src="${unLikeIcon}" alt="like">
            </button>
            <button class="artworks__item-btn comment">Comment</button>
          </div>
        </figcaption>
     </figure>
    `);
  pageMain.insertAdjacentHTML('afterbegin', `<div class="artworks">${artworksHtmlContent.join('')}</div>`);
};

export default artworks;
