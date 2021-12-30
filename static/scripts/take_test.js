/**
 * These functions run on the client's computer while he's going through the form in take_test.html.
 */



/**
 * Get the currently selected rating.
 */
function getChosenRating(){

    var v;
    try{
        v = document.querySelector('input[name="rating_score"]:checked').id
    }catch{return null}
    return v;
}

/**
 * Implements the behavior of the 'Start/Next/Done' button.
 */
function onNextPressed(){

    // get the image that's currently on the user's display
    var im =  getCurrentImage()
    
    //if there's no image yet, show the first (id="1") and halt.
    if(im==undefined || im ==null){
        showImageById("1")
        showById("radio_buttons_section")
        document.getElementById("button_next").innerHTML = "Next"
        hideById("live-session-description")
        return
    }

    //save the chosen rating for the current image
    commitRating(im.getAttribute("data-pic"), getChosenRating())

    //clear previous rating
    document.querySelector('input[name="rating_score"]:checked').checked=false
    document.getElementById("chosen_rating").innerHTML=""


    //switch to displaying the next image
    hideImageById(im.id)
    console.log(`current image's id: ${im.id}}`)

    // 'img_responsive' is the class that includes only the test images (no icons). 
    var num_imgs = document.getElementsByClassName("img_responsive").length 

    // Show 'Done' instead of 'Next' when displaying the last image.
    // -1 Beacuse 'im.id' starts from zero. 
    if (im.id == num_imgs-1) {
        document.getElementById("button_next").innerHTML = "Done";
    }

    try{
        showImageById(parseInt(im.id)+1)
    }catch{
        // submit form when Done.
        document.forms["rating_form"].submit()
    }    

}

/**
 * Insert a hidden element to store a key-value pair in a pre-existing form.
 * @param {string} image_id 
 * @param {number} rating 
 */
function commitRating(image_id, rating){
    var e = document.getElementById(image_id)
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
 * Get the currently displayed image.
 * (The first image (from above) that isn't hidden).
 */
function getCurrentImage(){
    var images = document.getElementById("images_div").getElementsByTagName("img")
    for (let im of images){
        if(!isHidden(im)){ return im }
    }
}

function hideImageById(id){
    hideById(id)
    hideById(`title_${id}`)
}

function showImageById(id){
    showById(id)
    showById(`title_${id}`)
}

function hideById(id){
    var element = document.getElementById(id)
    element.style.display="none"
    element.style.visibility="hidden"
}

function showById(id){
    var element = document.getElementById(id)
    element.style.visibility="visible"
    element.style.display="inline-block"
}

