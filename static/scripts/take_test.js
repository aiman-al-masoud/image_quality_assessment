/**
 * This file defines a few functions that will be run on the user's computer
 * while he's going through the form.
 */



/**
 * Checks if the email field is properly filled. 
 * @returns 
 */
function isEmailEntered(){
    email = document.getElementById("email_input").value
    console.log(email)
    return !!email
}



/**
 * Displays/Updates the currently selected rating.
 */
function onRatingChanged(){
    v = getChosenRating()
    label = document.getElementById("chosen_rating")
    label.innerHTML = v
    //console.log(`user modified rating value to: ${v}`)
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


   // keep on showing the email field and halting, until it's filled out with an email.
   if(!isEmailEntered()){
       showEmailSection()
       return 
   }else{
       hideEmailSection()
   }


    // get the image that's currently on the user's display
    im =  getCurrentImage()

    //if there's no image yet, show the first (id="1") and halt.
    if(im==undefined || im ==null){
        showImageById("1")
        showRadioSection()
        return
    }

    //save the chosen rating for the current image
    commitRating(im.src, getChosenRating())


    //clear previous rating
    document.querySelector('input[name="rating_score"]:checked').checked=false
    document.getElementById("chosen_rating").innerHTML=""


    //switch to displaying the next image
    hideImageById(im.id)

    try{
        showImageById(parseInt(im.id)+1)
    }catch{
        showById("button_submit")
        hideById("button_next")
        hideRadioSection()
    }    

}

/**
 * Insert a hidden element to store a key-value pair in a pre-existing form.
 * @param {string} image_id 
 * @param {number} rating 
 */
function commitRating(image_id, rating){
 
    parts = image_id.split("/")
    id = "/"+parts.at(-3)+"/"+parts.at(-2)+"/"+parts.at(-1)
    e = document.getElementById(id  )
    e.value = rating

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
    hideElement(document.getElementById(id))
    hideElement(document.getElementById(`title_${id}`))
}


function showImageById(id){
    im =document.getElementById(id)
    showElement(im)
    title = document.getElementById(`title_${id}`)
    showElement(title)
}


function showEmailSection(){
    id="email_section"
    showElement(document.getElementById(id))
}


function hideEmailSection(){
    id="email_section"
    hideElement( document.getElementById(id))
}


function showRadioSection(){
    e = document.getElementById("radio_buttons_section")
    showElement(e)
}

function hideRadioSection(){
    e = document.getElementById("radio_buttons_section")
    hideElement(e)
}



function hideById(id){
    hideElement(document.getElementById(id))
}

function showById(id){
    showElement(document.getElementById(id))
}




function hideElement(element){
    element.style.display="none"
    element.style.visibility="hidden"
}

function showElement(element){
    element.style.visibility="visible"
    element.style.display="inline-block"
}



function onStart(id){
    showEmailSection()
    hideRadioSection()
    hideById("button_submit")
}






