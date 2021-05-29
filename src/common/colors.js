const min = (arr) => {
  return Math.min.apply(Math, arr)
}

const max = (arr) => {
  return Math.max.apply(Math, arr)
}

const randomColor = (mixColor) => {
  let max = 200;
  let offset = 6;
  let color = [
    Math.floor(Math.random() * max) + offset,
    Math.floor(Math.random() * max) + offset,
    Math.floor(Math.random() * max) + offset,
  ]
  if (mixColor) {
    color[0] = Math.floor((color[0] + mixColor[0]) / 2);
    color[1] = Math.floor((color[1] + mixColor[1]) / 2);
    color[2] = Math.floor((color[2] + mixColor[2]) / 2);
  } 
  return color
}

const genColors = () => {
  let initColor = randomColor()

  let colors = [
    randomColor(initColor),//initColor),
    randomColor(initColor),//initColor),
    randomColor(initColor),//initColor),
  ];

  colors[3] = [
    min([colors[0][0], colors[1][0], colors[2][0]]),
    min([colors[0][1], colors[1][1], colors[2][1]]),
    min([colors[0][2], colors[1][2], colors[2][2]]),
  ];

  colors[4] = [
    max([colors[0][0], colors[1][0], colors[2][0]]),
    max([colors[0][1], colors[1][1], colors[2][1]]),
    max([colors[0][2], colors[1][2], colors[2][2]]),
  ];


  // set the CSS variables for links
  let root = document.documentElement;
  root.style.setProperty('--link', `rgba(${colors[4].join(',')}, 1)`);
  root.style.setProperty('--link-hover', `rgba(${colors[3].join(',')}, 1)`);

  
  return colors
}

export default genColors;

