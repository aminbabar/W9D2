
const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
    let p = document.createElement("p");
    p.innerText = string;
    // debugger;
    if (htmlElement.children.length > 0) {
        htmlElement.removeChild(htmlElement.children[0]);
    }
    htmlElement.appendChild(p);
};

module.exports = htmlGenerator;


htmlGenerator('Party Time.', partyHeader);