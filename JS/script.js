

//add the v transistion from the first picture into the about me section
//////////////////has a glitch effect at the bottom
const right = document.getElementById('skewedRight');
const left = document.getElementById('skewedLeft');
window.addEventListener('scroll', function(){
  const value1 = -15 + window.scrollY/45;
  const value2 = 15 + window.scrollY/-45;
  skewedRight.style.transform = "skewY(" + value1 + "deg)";
  skewedLeft.style.transform = "skewY(" + value2 + "deg)";
})

const showRequiredCategory = event => {
  const getId = event.id;
  const links = document.querySelectorAll('.work-category button');
  for(let i = 0; i < links.length; i++){
    if(links[i].hasAttribute('class')){
      links[i].classList.remove('active');
    }
  }

  event.classList.add('active');
  const getCategory = document.querySelector(`.category-${getId}`);
  const categories = document.querySelectorAll('div[class^="category-"]');
  for(let i = 0; i < categories.length; i++){
    if(categories[i].hasAttribute('class')){
      categories[i].classList.remove('showCategory');
      categories[i].classList.add('hideCategory');
  }
}

getCategory.classList.remove('hideCategory');
getCategory.classList.add('showCategory');

}
