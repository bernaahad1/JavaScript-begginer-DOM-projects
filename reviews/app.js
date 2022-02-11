const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let currInd = 0;
const btns = document.querySelectorAll("button");
let person = document.querySelector("#autor");
let job = document.querySelector("#job");
let info = document.querySelector("#info");
let imgp = document.querySelector("#person-img");

btns.forEach((element) => {
  element.addEventListener("click", function () {
    const btnStyle = element.className;
    if (btnStyle == "surprise") {
      currInd = Math.floor(Math.random() * reviews.length);
    } else if (btnStyle === "next-btn") {
      currInd = currInd < 3 ? currInd + 1 : 0;
    } else if (btnStyle === "prev-btn") {
      currInd = currInd > 0 ? currInd - 1 : 3;
    }
    person.textContent = reviews[currInd].name;
    job.textContent = reviews[currInd].job;
    info.textContent = reviews[currInd].text;
    imgp.src = reviews[currInd].img;
  });
});
