let feature = document.getElementById("Feature_Container");

let featureData = [
  { img: "/images/feature1.png", heading: "BootStrap V5" },
  { img: "/images/feature2.png", heading: "JQuery 3+" },
  { img: "/images/feature3.png", heading: "100 Responsive" },
  { img: "/images/feature4.png", heading: "High Peroformance" },
  { img: "/images/feature5.png", heading: "Fully Customize" },
  { img: "/images/feature6.png", heading: "Easy To Use" },
  { img: "/images/feature7.png", heading: "Unlimited Option" },
  { img: "/images/feature8.png", heading: "Multiple Headers" },
  { img: "/images/feature9.png", heading: "W3C Validated" },
  { img: "/images/feature10.png", heading: "Touch Enabled" },
  { img: "/images/feature11.png", heading: "Multiple Colors" },
  { img: "/images/feature12.png", heading: "Use Saas" },
  { img: "/images/feature13.png", heading: "Mega Menu" },
  { img: "/images/feature14.png", heading: "Well Documented" },
  { img: "/images/feature15.png", heading: "Cross Browser" },
  { img: "/images/feature16.png", heading: "Moders Design" },
  { img: "/images/feature19.png", heading: "Catogery Style" },
  { img: "/images/feature20.png", heading: "Masonry" },
  { img: "/images/feature21.png", heading: "OWL Carousel" },
  { img: "/images/feature22.png", heading: "Lifetime Updates" },
  { img: "/images/feature23.png", heading: "Search Options" },
  { img: "/images/feature25.png", heading: "Google Fonts" },
  { img: "/images/feature26.png", heading: "FontAwesome Icons" },
  { img: "/images/feature27.png", heading: "Home Variation" },
];
featureData.map((ele) => {
  let division = document.createElement("div");
  let image = document.createElement("img");
  let headingOne = document.createElement("h4");
  headingOne.setAttribute("class", "heading_feature");

  image.src = ele.img;
  headingOne.innerText = ele.heading;

  division.append(image, headingOne);
  feature.append(division);
});
