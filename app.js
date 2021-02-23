// nagivate the DOM children

// childNodes
// children
// firstChild
// lastChild

const result = document.querySelector("#result");

// select the children, use the childNodes and childNotes return whitespace which is treated as text node
const allChildren = result.childNodes;
console.log(allChildren);

// children, take out the whitespace
const children = result.children;
console.log(children);

// firstChild - still will have the whitespace as text node
console.log(result.firstChild);
// lastChild - still will have the whitespace as text node
console.log(result.lastChild);
