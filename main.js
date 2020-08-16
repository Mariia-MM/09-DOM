const box = document.createElement("div");
box.style.width = `250px`;
box.style.height = `250px`;
box.style.display = "flex";
box.style.flexWrap = "wrap";

const wrapper = document.getElementById("wrapper");
wrapper.append(box);

const randomColor = () => {
  return `#` + Math.floor(Math.random() * Math.pow(255, 3)).toString(16);
};

const generateBlocks = () => {
  for (let i = 0; i < 25; i++) {
    const b = document.createElement(`div`);
    b.style.width = `50px`;
    b.style.height = `50px`;
    b.style.backgroundColor = randomColor();
    box.append(b);
  }
};

const generateBlockInterval = () => {
  for (let i = 0; i < 25; i++) {
    const b = document.createElement(`div`);

    b.style.width = `50px`;
    b.style.height = `50px`;
    setInterval(() => {
      b.style.backgroundColor = randomColor();
    }, 1000);

    box.append(b);
  }
};
generateBlockInterval();
