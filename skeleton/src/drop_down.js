
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator () {
  const keys = Object.keys(dogs);
  const liArray = []
  keys.forEach((key) => {
    let a = document.createElement('a');
    a.innerHTML = key;
    a.href = dogs[key];
    let li = document.createElement('li');
    li.appendChild(a);
    liArray.push(li);
  })
}

function attachDogLinks () {
  // debugger;
  let dogLinks = dogLinkCreator();
  let dogUl = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach ((dog) =>{
    dogUl.appendChild(doglink);
  })
}
// debugger;
attachDogLinks();

module.exports = attachDogLinks; 