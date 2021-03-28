const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.onclick = function (e) {
  const inptext = input.value;
  const li = document.createElement("li");
  li.id = "items";
  li.innerText = inptext;

  const icon = document.createElement("i");
  const icon1 = document.createElement("i");
  icon.id = "icon";
  icon1.id = "icon1";

  icon.classList = "fas fa-trash ";
  icon1.classList = "far fa-edit";

  li.appendChild(icon);
  li.appendChild(icon1);

  list.appendChild(li);

  // li.onclick = function (e) {
  //   // console.log(inptext);
  //   if (li.style.textDecoration == "line-through") {
  //     // console.log("unstrike");
  //     li.style.textDecoration = "none";
  //   } else {
  //     li.style.textDecoration = "line-through";
  //     // console.log("strike");
  //   }
  // };

  icon.onclick = function (e) {
    // console.log(e.target);
    li.remove();
  };

  icon1.onclick = function () {
    const p = prompt("Edit Your ToDo", inptext);

    li.textContent = p;
    li.appendChild(icon);
    li.appendChild(icon1);
  };

  input.value = "";
  console.log(inptext);
};
