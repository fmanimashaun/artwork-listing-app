const counter = (targetItem, outputLocation) => {
  const target = document.querySelector(`.${targetItem}`);
  const output = document.querySelector(outputLocation);
  output.innerText = target.childElementCount;
};

export default counter;