//Browser object model lesson316_2
// 5 properties of Browser object modal

window.someFunction = function(){
    console.log("Hello World");
}

someFunction();
/*Locationn propert*/
console.log(window.location);
console.log(window.location.toString());
console.log(window.location.pathname);
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.hostname);

/*screen*/
console.log("Available width of screen ",window.screen.availHeight);
console.log("Actual Height of screen ",window.screen.height);
console.log("Inner height that takes into account user\n interface when calculating height\n ",window.document.innAHeight);

/*History property*/
console.log(window.history);
console.log(window.history.go(-1));//back and more
console.log(window.history.forward(1));//forward and more
console.log(window.history.pushState(null,"www.youtube.com"));

/*Navigator -information pertaining to the actual browser*/
//useragent
//clipboard
//languages
console.log("language used with code ",window.navigator.language);
console.log(window.navigator.storage)

/*Document */
window.document.appendChild;
window.document.createElement;
window.document.getElementById;
window.document.getElementsByClass;
window.document.getElementsByClassName;
window.document.getElementsByName;
window.document.getElementByTagName;