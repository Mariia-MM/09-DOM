const box = document.createElement("div");
box.style.width = `250px`;
box.style.height = `250px`;
box.style.display = "flex";
box.style.flexWrap = "wrap";

const wrapper = document.getElementById("wrapper");
wrapper.append(box);

const createBlocks = () => {
  for (let i = 0; i < 25; i++) {
    const b = document.createElement(`div`);

    b.style.width = `50px`;
    b.style.height = `50px`;
    b.style.backgroundColor =
      `#` + Math.floor(Math.random() * Math.pow(255, 3)).toString(16);
    box.append(b);
  }
};
createBlocks();
