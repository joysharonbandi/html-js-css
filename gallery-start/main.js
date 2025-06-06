const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const images=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"]

const lt=document.getElementById("lt")
const gt=document.getElementById("gt")

let currentIndex=0;

function updateLtImage(){
    if (currentIndex-1 <0){
        return
    }
displayedImage.setAttribute("src",images[currentIndex-1])
currentIndex=currentIndex-1
}

function updateGtImage (){
    if (currentIndex+1 ===images.length){
        return
    }
    displayedImage.setAttribute("src",images[currentIndex+1])
    currentIndex=currentIndex+1
}

lt.addEventListener("click",updateLtImage)
gt.addEventListener("click",updateGtImage)

/* Declaring the array of image filenames */



/* Declaring the alternative text for each image file */

// for(i=0;i<images.length;i++){

// }


images.forEach((item,index)=>{
const newImage = document.createElement('img');
newImage.setAttribute('src', item);
newImage.setAttribute('alt',item );
newImage.addEventListener("click",(e)=>{
    
displayedImage.setAttribute("src",item)    
displayedImage.setAttribute("alt",item)
currentIndex=index
})
thumbBar.appendChild(newImage);

})

// const newImag1 = document.createElement('img');
// newImag1.setAttribute('src', images[0]);
// newImag1.setAttribute('alt',images[0] );
// thumbBar.appendChild(newImag1);
// const newImag2 = document.createElement('img');
// newImag2.setAttribute('src', images[1]);
// newImag2.setAttribute('alt',images[1] );
// thumbBar.appendChild(newImag2);
// const newImag3 = document.createElement('img');
// newImag3.setAttribute('src', images[2]);
// newImag3.setAttribute('alt',images[2] );
// thumbBar.appendChild(newImag3);
// const newImag4 = document.createElement('img');
// newImag4.setAttribute('src', images[3]);
// newImag4.setAttribute('alt',images[3] );
// thumbBar.appendChild(newImag4);
/* Looping through images */



/* Wiring up the Darken/Lighten button */
