

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
