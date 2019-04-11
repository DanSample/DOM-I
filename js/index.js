const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav items for top nav bar

const services = document.getElementsByTagName('a')[0];
services.innerText = siteContent['nav']['nav-item-1']

const product = document.getElementsByTagName('a')[1];
product.innerText = siteContent['nav']['nav-item-2']

const vision = document.getElementsByTagName('a')[2];
vision.innerText = siteContent['nav']['nav-item-3']

const features = document.getElementsByTagName('a')[3];
features.innerText = siteContent['nav']['nav-item-4']

const about = document.getElementsByTagName('a')[4];
about.innerText = siteContent['nav']['nav-item-5']

const contact = document.getElementsByTagName('a')[5];
contact.innerText = siteContent['nav']['nav-item-6']

// CTA section

const catchPhrase = document.querySelector('h1');
catchPhrase.innerText = siteContent['cta']['h1']

const btn = document.querySelector('button');
btn.innerText = siteContent['cta']['button']

const midImg = document.querySelector('#cta-img');
midImg.setAttribute('src', siteContent['cta']['img-src'])

// Main content section

const featuresH4 = document.querySelectorAll('h4')[0];
featuresH4.textContent = siteContent['main-content']['features-h4']

const featuresP = document.querySelectorAll('p')[0];
featuresP.textContent = siteContent['main-content']['features-content']

const aboutH4 = document.querySelectorAll('h4')[1];
aboutH4.textContent = siteContent['main-content']['about-h4']

const aboutP = document.querySelectorAll('p')[1];
aboutP.textContent = siteContent['main-content']['about-content']
