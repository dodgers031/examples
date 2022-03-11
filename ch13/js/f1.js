const h = document.head;
const b = document.body;

console.log(h);
console.log(b);

console.log((b.nodeType === document.ELEMENT_NODE) ? "Element Node" : "text node");
(b.nodeType === document.ELEMENT_NODE) ? console.log("Element Node") : console.log("text node");

//Body child nodes
console.log(document.body.childNodes);

//Body parent node
console.log(document.body.parentNode);