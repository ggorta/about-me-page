var body = document.querySelector("body");
var div1 = document.createElement("div");
body.appendChild(div1);

var input1 = document.createElement("input");
div1.appendChild(input1);
input1.type = "text";
var label1= document.createElement("label");
div1.appendChild(label1);
label1.innerText = " Name";
var break1 = document.createElement("br");
div1.appendChild(break1);

var input2 = document.createElement("input");
div1.appendChild(input2);
input2.type = "text";
var label2= document.createElement("label");
div1.appendChild(label2);
label2.innerText = " Sign";
var break2 = document.createElement("br");
div1.appendChild(break2);

var input3 = document.createElement("input");
div1.appendChild(input3);
input3.type = "text";
var label3= document.createElement("label");
div1.appendChild(label3);
label3.innerText = " Hometown";
var break3 = document.createElement("br");
div1.appendChild(break3);

var input4 = document.createElement("input");
div1.appendChild(input4);
input4.type = "text";
var label4= document.createElement("label");
div1.appendChild(label4);
label4.innerText = " Fave CSS Color";
var break4 = document.createElement("br");
div1.appendChild(break4);

var button = document.createElement("button");
div1.appendChild(button);
button.innerHTML = "Submit";

button.addEventListener("click", function(transform) {
  body.style.backgroundColor = input4.value;

  var header = document.createElement("header");
  body.appendChild(header);
  var h1 = document.createElement("h1");
  header.appendChild(h1);
  h1.innerText = "All about " + input1.value;

  var div2 = document.createElement("div");
  body.appendChild(div2);
  div2.setAttribute("id", "div2");
  var div3 = document.createElement("div");
  div2.appendChild(div3);
  div3.setAttribute("id", "div3");
  var par1 = document.createElement("p");
  div3.appendChild(par1);
  par1.innerHTML = "My sign is: " + input2.value;
  var div4 = document.createElement("div");
  div2.appendChild(div4);
  div4.setAttribute("id", "div4");
  var par2 = document.createElement("p");
  div4.appendChild(par2);
  par2.innerHTML = "My hometown is: " + input3.value;

  body.removeChild(div1);
});
