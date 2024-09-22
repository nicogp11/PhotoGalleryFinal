/*Name this external file gallery.js*/

function upDate(previewPic) {
  /* In this function you should 
     1) change the url for the background image of the div with the id = "image" 
     to the source file of the preview image
     
     */
  let image = document.getElementById("image")

  image.style.backgroundImage = 'url(' + previewPic.src + ')';
  image.style.lineHeight = '800px';
  /*
  2) Change the text  of the div with the id = "image" 
  to the alt text of the preview image 
  */
  image.innerHTML = previewPic.alt


}

function unDo() {
  /* In this function you should 
 1) Update the url for the background image of the div with the id = "image" 
 back to the orginal-image.  You can use the css code to see what that original URL was
  */
  let image = document.getElementById("image")

  image.style.backgroundImage = 'url()';
  image.style.lineHeight = '415px';
  /*
     2) Change the text  of the div with the id = "image" 
     back to the original text.  You can use the html code to see what that original text was
     */

  image.innerHTML = 'Hover over an image below to display here.'
}


document.addEventListener("DOMContentLoaded",function focus(){
const images = document.getElementsByTagName("img");
// Recorre el grupo de imágenes y agrega el event listener a cada una
for (let i = 0; i < images.length; i++) {
  images[i].setAttribute("tabindex","0")
  images[i].addEventListener("focus", function () {
    upDate(images[i])
  });
  images[i].addEventListener("blur", function () {
    unDo(images[i])
  });
}}
)
