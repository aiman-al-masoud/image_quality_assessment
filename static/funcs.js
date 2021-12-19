/**
 * This file defines a few functions that will be run on the user's computer
 * while he's going through the form.
 */


/**
 * Displays/Updates the currently selected rating.
 */
function onRatingChanged(){
    v = getChosenRating()
    label = document.getElementById("chosen_rating")
    label.innerHTML = v
    console.log(`user modified rating value to: ${v}`)
}


/**
 * Get the currently selected rating.
 */
function getChosenRating(){

    try{
        v = document.querySelector('input[name="rating_score"]:checked').id
    }catch{return null}
    
    return v;
}


/**
 * Loads the next image to be rated.
 */
function onNextImageRequested(){
    
    im =  getCurrentImage()

    //save the chosen rating for the current image
    commitRating(im.src, getChosenRating())

    //switch to displaying the next image
    hideImageById(im.id)
    showImageById(parseInt(im.id)+1)

    //clear previous rating
    document.querySelector('input[name="rating_score"]:checked').checked=false
    document.getElementById("chosen_rating").innerHTML=""

}

/**
 * Insert a hidden element to store a key-value pair in a pre-existing form.
 * @param {string} image_id 
 * @param {number} rating 
 */
function commitRating(image_id, rating){
    e = document.createElement("input")

    e.setAttribute("type", "hidden")
    e.setAttribute("id", image_id)
    e.setAttribute("value", rating);
    
    document.getElementById("ratings_list").appendChild(e)
}




/**
 * Checks if an element is hidden.
 * @param {*} el 
 * @returns 
 */
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return ((style.display === 'none') || (style.visibility === 'hidden'))
}



/**
 * Get the currently displayed (not-hidden) image element
 */
function getCurrentImage(){
    images = document.getElementById("images_div").getElementsByTagName("img")
    for (let im of images){
        if(!isHidden(im)){ return im }
    }
}



function hideImageById(id){
    document.getElementById(id).style.display = 'none'
    document.getElementById("title_"+id).style.display = "none"
    document.getElementById("title_"+id).style.visibility = "hidden"

    title = document.getElementById(`title_${id}`)
    title.style.visibility="hidden"
    title.style.display="none"

}


function showImageById(id){
    im =document.getElementById(id)
    im.style.display="inline-block"
    im.style.visibility="visible"

    title = document.getElementById(`title_${id}`)
    title.style.display="inline-block"
    title.style.visibility="visible"

}


function onStart(id){
    showImageById("1")
}