/* Document Object Model */

//01/14/2025

/** Accessing Elements */
const blogPost = document.getElementById('blog-post');

/*** HTMLCollection (Will update live!) */
const articleParagraphs = document.getElementsByClassName("article-para");
// Adding new paragraphs with the 'article-para' class will
// cause this 'articleParagraphs' variable to update!

const allParagraphs = document.getElementsByTagName('p');
// Adding new paragraphs will cause this 'allParagraphs' variable to update!

console.log("Getting Elements by Class Name:", articleParagraphs);
console.log("Getting Elements by Tag Name:", allParagraphs);

/*** NodeList (Will NOT update live!) */
const specializedParagraphs = document.getElementsByName('specialized-para');
console.log("Getting Elements by Name:", specializedParagraphs);

/**** Query Selector - Access elements in the DOM that match the provided CSS Query
 * querySelector - Returns the first matching element.
 * querySelectorAll - Returns all matching elements.
 */
const blogPostQuery = document.querySelector("#blog-post");
console.log("Getting Blog Post (Query Selector): ", blogPostQuery);

const blogPostArticle = document.querySelector("article");
console.log("Getting Article (Query Selector): ", blogPostArticle);

const articleParagraphsQuery = document.querySelectorAll(".article-para");
console.log("Getting Article Paragraphs (Query Selector): ", articleParagraphsQuery);

const allParagraphsQuery = document.querySelectorAll("p");
console.log("Getting All Paragraphs (Query Selector): ", allParagraphsQuery);

const specializedParagraphsQuery = document.querySelectorAll("div#blog-post>article>p[name='specialized-para']");
console.log("Getting Specialized Paragraphs (Query Selector): ", specializedParagraphsQuery);
console.log("# Specialized Paragraphs: ", specializedParagraphs.length);


// Adding new paragraphs with the 'specialized-para' name attribute value will NOT
// cause this specializedParagraphs variable to update!
//accessing properties within elements

/** Parent-to-Child Relationships */

/*** parentNode vs Parent Element - good to know -stick with parent element*/
console.log("Blog Post parent Element ",blogPostArticle.parentElement);
/*console.log("Blog Post parent Node ",blogPostArticle.parentNode);*/

/**Children vs child Nodes */
console.log("Blog Post article chiildren ",blogPostArticle.children);//will return the next node which could be text or the \n newline escape sequence and stored as a text node and return the new line
/*console.log("Blog Post child Node ",blogPostArticle.childNode);*/

/*** firstChild v. firstElementChild */
console.log("Blog Post First Child ",blogPostArticle.firstChild);//new line symbol added at the end of the article tag indicating that first child is seen by code-will return first node after newline
//console.log("Blog Post First Element child ",blogPostArticle.firstElementChild);//will return first element

/*** lastChild v. lastElementChild */
console.log("Blog Post article children ",blogPostArticle.lastChild);//will return the next node which could be text or the \n newline escape sequence and stored as a text node and return the new line
//console.log("Blog Post child Node ",blogPostArticle.lastElementChild);

const firstParagraph = document.qu4erySelector("p");
/*** nextSibling v. nextSiblingElement */
console.log("Blog Post article chiildren ",blogPostArticle.nextSibling);//will return the next node which could be text or the \n newline escape sequence and stored as a text node and return the new line
console.log("Blog Post child Node ",blogPostArticle.nextElementSibling);

/*** previousSibling v. previousSiblingElement *///will return the next node which could be text or the \n newline escape sequence and stored as a text node and return the new line
console.log("Blog Post article chiildren ",blogPostArticle.previousSibling);//will return the next node which could be text or the \n newline escape sequence and stored as a text node and return the new line
console.log("Blog Post child Node ",blogPostArticle.previousElementSibling);


//01/2025
/** Creating & Adding Elements */

/*** CreateElement */

/*** AppendChild */

/*** Prepend */

/*** InsertBefore */
/** Removing Elements */

/** RemoveChild */


/** Replacing Elements */

/*** ReplaceChild */


/** Attributes */

/*** GetAttribute */

/*** SetAttribute */


/** Styling */


/** className and classList */


/** DOM Templating */

/*** Document Fragment */

/*** Template Node & cloneNode */

/*** Template Literals */
