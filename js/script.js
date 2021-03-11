let title = document.getElementsByClassName('work-title')[0];
let picture = document.getElementsByClassName('work-picture')[0];
let works = Array.from(picture.getElementsByTagName('img'));
let btns = Array.from(document.getElementsByClassName('btnNum'));
let collectionName = title.getAttribute('data-name');

function changeTitle (name, index) {
  if (name === 'poor') {
    switch(index) {
      case 0:
        title.innerHTML = "THE DANCE OF FAMILY RELATIONS";
        break;
      case 1:
        title.innerHTML = "THE POUT";
        break;
      case 2:
        title.innerHTML = "RAVEN HAIRED BEAUTY WITH WHITE FLOWER";
        break;
      case 3:
        title.innerHTML = "PINK WOMAN ASCENDING";
        break;
      case 4:
        title.innerHTML = "THE ROSE CEREMONY";
        break;
      case 5:
        title.innerHTML = "MORNING GEISHA";
        break;
      case 6:
        title.innerHTML = "LUCY IN THE SKY WITH FLOWERS";
        break;
      default:
        title.innerHTML = "POOR TRAITS";
        break;
    }
  } else if (name === 'nood') {
    switch(index) {
      case 0:
        title.innerHTML = "SILICONE CLOUDS";
        break;
      case 1:
        title.innerHTML = "QUEEN OF HEARTS";
        break;
      case 2:
        title.innerHTML = "MRS.SPOCK";
        break;
      case 3:
        title.innerHTML = "JAMES THE MALE MODERL";
        break;
      case 4:
        title.innerHTML = "CHIQUITA";
        break;
      case 5:
        title.innerHTML = "AMAZONS AT PLAY";
        break;
      case 6:
        title.innerHTML = "THE BETTER TO SEE YOU MY DEAR";
        break;
      default:
        title.innerHTML = "IN THE NOOD";
        break;
    }
  } else if (name === 'zoo') {
    switch(index) {
      case 0:
        title.innerHTML = "PALS";
        break;
      case 1:
        title.innerHTML = "NON-SEEING EYE DOG";
        break;
      case 2:
        title.innerHTML = "FERRET IN A BROTHERL";
        break;
      case 3:
        title.innerHTML = "BLUE TANGO";
        break;
      case 4:
        title.innerHTML = "UN POISSON MORT";
        break;
      case 5:
        title.innerHTML = "HE WAS A FRIEND OF MINE";
        break;
      case 6:
        title.innerHTML = "PETER THE KITTY";
        break;
      default:
        title.innerHTML = "THE MOBA ZOO";
        break;
    }
  }
}

function displayWork (e) {
  let index = e.target.innerHTML - 1;
  works.forEach(img => {
    let classList = Array.from(img.classList);
    if (classList.indexOf('active') === -1) return;
    img.classList.remove('active');
  })
  works[index].classList.add('active');
  changeTitle(collectionName, index);
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('mouseover', displayWork);
}