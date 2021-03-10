window.onload = function () {
  let title = document.getElementsByClassName('work-title')[0];
  let picture = document.getElementsByClassName('work-picture')[0];
  let btns = Array.from(document.querySelectorAll('.footer>.footer-btns>li>a'));
  let workInfo1 = [
    {
      title: "THE DANCE OF FAMILY RELATIONS",
      id: 1,
      src: "Poor traits/THE DANCE OF FAMILY RELATIONS.png"
    },
    {
      title: "THE POUT",
      id: 2,
      src: "Poor traits/THE POUT.png"
    },
    {
      title: "RAVEN HAIRED BEAUTY WITH WHITE FLOWER",
      id: 3,
      src: "Poor traits/RAVEN HAIRED BEAUTY WITH WHITE FLOWER.png"
    },
    {
      title: "PINK WOMAN ASCENDING",
      id: 4,
      src: "Poor traits/PINK WOMAN ASCENDING.png"
    },
    {
      title: "THE ROSE CEREMONY",
      id: 5,
      src: "Poor traits/THE ROSE CEREMONY.png"
    },
    {
      title: "MORNING GEISHA",
      id: 6,
      src: "Poor traits/MORNING GEISHA.png"
    },
    {
      title: "LUCY IN THE SKY WITH FLOWERS",
      id: 7,
      src: "Poor traits/LUCY IN THE SKY WITH FLOWERS.png"
    },
  ]
  let workInfo2 = [
    {
      title: "SILICONE CLOUDS",
      id: 1,
      src: "in the nood/SILICONE CLOUDS.png"
    },
    {
      title: "QUEEN OF HEARTS",
      id: 2,
      src: "in the nood/QUEEN OF HEARTS.png"
    },
    {
      title: "MRS.SPOCK",
      id: 3,
      src: "in the nood/MRS.SPOCK.png"
    },
    {
      title: "JAMES THE MALE MODERL",
      id: 4,
      src: "in the nood/JAMES THE MALE MODERL.png"
    },
    {
      title: "CHIQUITA",
      id: 5,
      src: "in the nood/CHIQUITA.png"
    },
    {
      title: "AMAZONS AT PLAY",
      id: 6,
      src: "in the nood/AMAZONS AT PLAY.png"
    },
    {
      title: "THE BETTER TO SEE YOU MY DEAR",
      id: 7,
      src: "in the nood/THE BETTER TO SEE YOU MY DEAR.png"
    },
  ]
  let workInfo3 = [
    {
      title: "PALS",
      id: 1,
      src: "the moba zoo/PALS.png"
    },
    {
      title: "NON-SEEING EYE DOG",
      id: 2,
      src: "the moba zoo/NON-SEEING EYE DOG.png"
    },
    {
      title: "FERRET IN A BROTHERL",
      id: 3,
      src: "the moba zoo/FERRET IN A BROTHERL.png"
    },
    {
      title: "BLUE TANGO",
      id: 4,
      src: "the moba zoo/BLUE TANGO.png"
    },
    {
      title: "UN POISSON MORT",
      id: 5,
      src: "the moba zoo/UN POISSON MORT.png"
    },
    {
      title: "HE WAS A FRIEND OF MINE",
      id: 6,
      src: "the moba zoo/HE WAS A FRIEND OF MINE.png"
    },
    {
      title: "PETER THE KITTY",
      id: 7,
      src: "the moba zoo/PETER THE KITTY.png"
    },
  ]
  function getCollectionName (dom) {
    return dom.getAttribute("data-name");
  }
  let collectionName = getCollectionName(title);

  (function initialDraw() {
    if (collectionName === "poor") {
      title.innerHTML = "POOR TRAITS";
    } else if (collectionName === "nood") {
      title.innerHTML = "IN THE NOOD";
    } else {
      title.innerHTML = "THE MOBA ZOO";
    }
  }());

  function draw (id) {
    if (picture.children.length > 0) {
      picture.removeChild(picture.children[0]);
    }
    let img = document.createElement('img');
    let target = [];
    if (collectionName === "poor") {
      target = workInfo1.filter(e => {
        return e.id == id;
      })
    } else if (collectionName === "nood") {
      target = workInfo2.filter(e => {
        return e.id == id;
      })
    } else {
      target = workInfo3.filter(e => {
        return e.id == id;
      })
    }
    
    img.src = `/img/${target[0].src}`;
    picture.appendChild(img);
    title.innerHTML = target[0].title;
  }

  btns.forEach(a => {
    a.addEventListener('click', function(e) {
      var id = e.target.innerHTML;
      draw(id);
    })
  })
}
