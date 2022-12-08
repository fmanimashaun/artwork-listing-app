"use strict";(self.webpackChunkartwork_listing_app=self.webpackChunkartwork_listing_app||[]).push([[179],{123:(i,e,t)=>{const a=t.p+"img/logo.png",n=t.p+"img/menu.svg",r=t.p+"img/close.svg",s=document.querySelector(".header"),o=`\n      <div class="header__wrapper">\n        <h1 class='header__logo'><span>Art</span><img class='header__logo-img' src="${a}"\n            alt="art painting illustration"><span>ork</span></h1>\n        <nav class="header__nav">\n          <button class="header__nav-btn close">\n            <img class='btn-img btn-open' src="${n}" alt="menu button icon">\n            <img class='btn-img btn-close' src="${r}" alt="close button icon">\n          </button>\n          <ul class="header__nav-list close">\n            <li class="header__nav-item"><a class='header__nav-link active' href='#'>Artworks</a></li>\n            <li class="header__nav-item"><a class='header__nav-link' href='#'>Exhibitions</a></li>\n            <li class="header__nav-item"><a class='header__nav-link' href='#'>Shop</a></li>\n          </ul>\n        </nav>\n      </div>\n`,l=t.p+"img/like.svg",c=t.p+"img/unlike.svg",d=document.querySelector(".main"),p=[{id:27103,title:"Beside the Sea #34",date_display:"1962",artist_display:"Robert Motherwell\nAmerican, 1915-1991",place_of_origin:"United States",credit_line:"Barbara Neff Smith and Solomon Byron Smith Purchase Fund",term_titles:["oil paintings (visual works)","paper (fiber product)","organic material","drawings (visual works)","prints and drawing"],image_id:"27103"},{id:25838,title:"Pistachio Tree at Château Noir",date_display:"c. 1900",artist_display:"Paul Cézanne\nFrench, 1839-1906",place_of_origin:"France",credit_line:"Mr. and Mrs. Martin A. Ryerson Collection",term_titles:["watercolor","Century of Progress","paper (fiber product)","watercolor","water-base paint","paint","graphite","drawings (visual works)","prints and drawing","world's fairs","Chicago World's Fairs"],image_id:"25838"},{id:27281,title:"Madam Pompadour",date_display:"1915",artist_display:"Amedeo Modigliani\nItalian, 1884–1920",place_of_origin:"Italy",credit_line:"Joseph Winterbotham Collection",term_titles:["oil on canvas","women","painting","modern and contemporary art","interiors","portraits","fashion","hats","Joseph Winterbotham Collection"],image_id:"27281"},{id:28560,title:"The Bedroom",date_display:"1889",artist_display:"Vincent van Gogh\nDutch, 1853-1890",place_of_origin:"Saint-Rémy-de-Provence",credit_line:"Helen Birch Bartlett Memorial Collection",term_titles:["oil on canvas","oil painting","Post-Impressionism","interiors","oil paint (paint)","painting (image making)","painting","european painting","domestic scenes","Century of Progress","world's fairs","Chicago World's Fairs","beds","bedrooms"],image_id:"28560"},{id:27954,title:"Terrace and Observation Deck at the Moulin de Blute-Fin, Montmartre",date_display:"early 1887",artist_display:"Vincent van Gogh\nDutch, 1853-1890",place_of_origin:"Paris",credit_line:"Helen Birch Bartlett Memorial Collection",term_titles:["oil on canvas","Post-Impressionism","oil paint (paint)","Century of Progress","painting","european painting","weather/seasons","leisure","landscapes","world's fairs","Chicago World's Fairs"],image_id:"27954"},{id:34145,title:"Vincent and Tony",date_display:"1969",artist_display:"Alex Katz\nAmerican, born 1927",place_of_origin:"United States",credit_line:"Gift of Society for Contemporary Art",term_titles:["painting","youth","modern and contemporary art","hairstyles","portraits","fashion","boys"],image_id:"34145"},{id:45240,title:"The Bathers",date_display:"1899-1904",artist_display:"Paul Cezanne\nFrench, 1839-1906",place_of_origin:"France",credit_line:"Amy McCormick Memorial Collection",term_titles:["oil on canvas","Post-Impressionism","oil paint (paint)","Century of Progress","painting","european painting","leisure","weather/seasons","women","landscapes","world's fairs","Chicago World's Fairs"],image_id:"45240"},{id:41236,title:"Dobeckmun Metallic Stripe (Curtain Fabric)",date_display:"1948",artist_display:"Designed by Dorothy Liebes (American, 1897–1972)\nUnited States",place_of_origin:"United States",credit_line:"Gift of Dorothy Liebes Design, Inc.",term_titles:["weaving","wool (textile)","Modernism","twill weaving","stripes","textile","cellulose acetate film","cotton (fiber)","foil","metal","rayon","silk (fiber)","weaving","20th Century"],image_id:"41236"},{id:61878,title:"Still Life",date_display:"1914",artist_display:"Georges Braque\nFrench, 1882-1963",place_of_origin:"France",credit_line:"Given in memory of Charles Barnett Goodspeed by Mrs. Charles B. Goodspeed",term_titles:["collage","collage (technique)","paper (fiber product)","watercolor","water-base paint","paint","organic material","graphite","charcoal","drawings (visual works)","prints and drawing"],image_id:"61878"},{id:62371,title:"Madame Cezanne in a Yellow Chair",date_display:"1888-90",artist_display:"Paul Cezanne\nFrench, 1839-1906",place_of_origin:"France",credit_line:"Wilson L. Mead Fund",term_titles:["oil on canvas","Post-Impressionism","portraits","oil paint (paint)","painting","european painting","emotions","women","families"],image_id:"62371"}];s.insertAdjacentHTML("afterbegin",o);const _=document.querySelectorAll(".header__nav-link"),m=document.querySelector(".main");var g,h;h=i=>{i.forEach((i=>{i.classList.contains("active")&&i.classList.remove("active")}))},(g=_).forEach((i=>{i.addEventListener("click",(i=>{("Artworks"===i.target.textContent||"Exhibitions"===i.target.textContent||"Shop"===i.target.textContent)&&(h(g),i.target.classList.add("active"))}))})),((i,e,t="")=>{i.innerHTML="",""===t?e():e(t)})(m,(()=>{const i=p.map((i=>`\n      <figure class="artworks__item">\n        <img class="artworks__item-img" src="img/${i.image_id}.jpg" alt="${i.title}">\n        <figcaption class="artworks__item-caption">\n          <h2 class="artworks__item-title">${i.title}</h2>\n          <p>${i.artist_display}</p>\n          <div class="artworks__item-interact">\n            <button class="artworks__item-btn like">\n              <img src="${l}" alt="like">\n              <img src="${c}" alt="like">\n            </button>\n            <button class="artworks__item-btn comment">Comment</button>\n          </div>\n        </figcaption>\n     </figure>\n    `));d.insertAdjacentHTML("afterbegin",`<div class="artworks">${i.join("")}</div>`)}))}},i=>{i(i.s=123)}]);