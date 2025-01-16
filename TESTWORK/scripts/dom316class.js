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
//console.log("Blog Post parent Element ",blogPostArticle.parentElement);
/*console.log("Blog Post parent Node ",blogPostArticle.parentNode);*/

/**Children vs child Nodes */
//console.log("Blog Post article chiildren ",blogPostArticle.children);//will return the next node which could be text or the \n newline escape sequence and stored as a text node and return the new line
/*console.log("Blog Post child Node ",blogPostArticle.childNode);*/

/*** firstChild v. firstElementChild */
//console.log("Blog Post First Child ",blogPostArticle.firstChild);//new line symbol added at the end of the article tag indicating that first child is seen by code-will return first node after newline
//console.log("Blog Post First Element child ",blogPostArticle.firstElementChild);//will return first element

/*** lastChild v. lastElementChild */
//console.log("Blog Post article children ",blogPostArticle.lastChild);//will return the next node which could be text or the \n newline escape sequence and stored as a text node and return the new line
//console.log("Blog Post child Node ",blogPostArticle.lastElementChild);

const firstParagraph = document.querySelector("p");
/*** nextSibling v. nextSiblingElement */
// console.log("Blog Post article chiildren ",blogPostArticle.nextSibling);//will return the next node which could be text or the \n newline escape sequence and stored as a text node and return the new line
// console.log("Blog Post child Node ",blogPostArticle.nextElementSibling);

/*** previousSibling v. previousSiblingElement *///will return the next node which could be text or the \n newline escape sequence and stored as a text node and return the new line
// console.log("Blog Post article chiildren ",blogPostArticle.previousSibling);//will return the next node which could be text or the \n newline escape sequence and stored as a text node and return the new line
// console.log("Blog Post child Node ",blogPostArticle.previousElementSibling);


//01/2025
/** Creating & Adding Elements */

/*** CreateElement */
const newParagraph = document.createElement('p');
// newParagraph.innerHTML= ` ANTS sit amet <button>Some Button</button>consectetur adipisicing elit. Qui sit sint in ea odit rerum voluptate officiis`;
//newParagraph.textContent = `ad Lorem<button>Some Button</button>consectetur adipisicing elit. Qui sit sint in ea odit rerum voluptate officiis`;


/*** AppendChild */
//@@need to add other code from pictures on phone for this function -01/15/2025
//document.appendChild(newParagraph);//only 1 element can exist at this level.  the HtML level.  This will not work and you will get an Uncaught HierarchyRquestError: Failed to execute 'appendChild' on Node
const textNode = document.createTextNode("rem ipsum, ANTS sit amet consectetur adipisicing elit. Qui sit s");
newParagraph.appendChild(textNode);

document.body.appendChild(newParagraph);

function createNewBlogPost(title, subTitle, contents) {
    const blogPostDiv = document.createElement('div');
    const blogPostArticle = document.createElement('article');
    /* Title and Sub-Title Elements */
    const titleH1 = document.createElement('h1');
    titleH1.textContent = title;
    const subTitleH2 = document.createElement('h3');
    subTitleH2.textContent = subTitle;
    blogPostArticle.appendChild(titleH1);
    blogPostArticle.appendChild(subTitleH2);
    for (let i = 0; i < contents.length; i++) {
      const paragraphContent = contents[i];
      const articleParagraph = document.createElement('p');
      articleParagraph.textContent = paragraphContent;
      blogPostArticle.appendChild(articleParagraph);
      if (i < contents.length - 1) {
        blogPostArticle.appendChild(document.createElement('br'));
      }
    }
    blogPostDiv.appendChild(blogPostArticle);
    return blogPostDiv;
  }

const contents = [`Paragraph 0: rem ipsum, ANTS sit amet consectetur adipisicing elit. Qui sit s`
    `Paragraph 1: rem ipsum, ANTS sit amet consectetur adipisicing elit. Qui sit s`
    `Paragraph 2: rem ipsum, ANTS sit amet consectetur adipisicing elit. Qui sit s`
    `Paragraph 3: rem ipsum, ANTS sit amet consectetur adipisicing elit. Qui sit s`
    `Paragraph 4: rem ipsum, ANTS sit amet consectetur adipisicing elit. Qui sit s`
]

//const newBlogPost = createNewBlogPost("A programatticallly created blogppost
// document.body.appendChild(newBlogPost);

/*** Prepend */
const p0 = document.createElement('p');
p0.textContent = "Paragraph 0";
const p0 = document.createElement('p');
p0.textContent = "Paragraph 0";
const p0 = document.createElement('p');
p0.textContent = "Paragraph 0";

/*Adds to the end of an element*/
document.body.appendChild(p0);
document.body.appendChild(p1);
document.body.appendChild(p2);
/*Adds to the beginning of an element*/
document.body.prepend(p0);
document.body.prepend(p1);
document.body.prepend(p2);



/*** InsertBefore */
//insert an element between paragraph 0 and 1
const blogPostArticle2 = document.querySelector('#blog-post>article');
const insertedParagrap0h = document.createElement('p');
insertedParagraph.textContent = " Here is the new blog";
blogPostArticle2.insertBefore(insertedParagraph,blogPostArticle.children[1]);

/** Removing Elements */

/** RemoveChild */
const blogPostArticle3 = document.querySelector(blog-post>article);
while(blogPostArticle3.firstChild){
    blogPostArticle3.removeChild(blogPostArticle3.firstChild);
}

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
