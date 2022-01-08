console.log('Hello Project.');

// Useful variables
var source = document.querySelector('#source')
console.log(source)
var video = document.querySelector('article video')


//%%%%%%%%%%%%%%% EXERCISE 4.0 %%%%%%%%%%%%%%%
// Point 4.a change URL         
var url_button = document.querySelector('#url_button')
var previous_src = source.getAttribute('src')
 

url_button.addEventListener('click', function() {
                                    var src = document.querySelector('#furl').value

                                    source.setAttribute('src', src);
                                    video.load()
                                    document.querySelector('#furl').value = ""
                                    } )

source.addEventListener('error', evt => {
    console.log('Error in loading the video');
    alert('Url not supported')

    source.setAttribute('src', previous_src);
    video.load()
    document.querySelector('#furl').value = ""
    });

// Point 4.b offset of the video
var offset_butt = document.querySelector('#offset_butt')

var listener = function(){
    var minute = document.querySelector('#fminute').value

    console.log(video.duration)
    if (isNaN(minute)){
        alert("It is not a valid number: " + minute);
        let error = new SyntaxError("value not valid " + minute )
        throw error
    } 

    if (minute > video.duration){
        alert(minute +">" + video.duration)
        let error = new SyntaxError("the value is to large compared to the maximum duration")
        throw error
    }
  
    video.currentTime = minute
    document.querySelector('#fminute').value = ""
    
}

offset_butt.addEventListener('click', function(){
    try{
        listener()
    }catch(error){
        console.error(error.message)
        document.querySelector('#fminute').value = ""
    }
} )


// Point 4.c Preview of the video
var preview_clicked = -1;
var preview_butt = document.querySelector('#preview')

function startPreview(video) {
    video.currentTime = 1;
    video.playbackRate = 0.9;
    video.muted = true;
    video.play();
}

function stopPreview(video) {
    video.currentTime = 0;
    video.playbackRate = 1;
    video.pause();
    alert('Click on Preview to remove it')
}

function clearPreview(){

    document.querySelector('#preview').remove()
    let div = document.querySelector('#video_div')
    div.removeAttribute('class')
}

preview_butt.addEventListener("click", () => {

    if (preview_clicked===-1){ //first time clicked
        preview_clicked = 0
        let div = document.querySelector('#video_div')
        let preview = video.cloneNode(true)
    
        preview.controls=false
        preview.setAttribute('id', 'preview')
    
        div.append(preview)
    
        div.setAttribute('class', 'preview')
    
        startPreview(preview)
        let previewTimeout = setTimeout(stopPreview, 4000, preview);
    }

    else{
        clearPreview()
        preview_clicked = -1
       
    }

    

});


// Point 4.d Rotate the video 
var rotate_button = document.querySelector('#rotate')
rotate = -1
rotate_button.addEventListener('click', function() {
                                        console.log("rotate"); 
                                        if (rotate === -1){
                                            video.setAttribute('class','rotate');
                                            rotate = 0;
                                        }
                                        else{
                                            video.removeAttribute('class');
                                            rotate=-1;
                                        }
                                        video.load();
                                        console.log(source)})


//%%%%%%%%%%%%%%% EXERCISE 5.0 %%%%%%%%%%%%%%%

// point 5.a Remove Controls
var control = document.querySelector('#control')
var no_control = document.querySelector('#no_control')

var control_list = function (){
    console.log('Clicked')
    var video = document.querySelector('article video')
    video.setAttribute('controls', 'controls')
}
control.addEventListener('click', control_list)

var no_control_list = function (){
    console.log('Clicked')

    video.removeAttribute('controls')
}
no_control.addEventListener('click', no_control_list)


// point 5.b mirror the video 
var mirror_button = document.querySelector('#mirror')
mirror = -1
mirror_button.addEventListener('click', function() {
                                        console.log("mirror"); 
                                        if (mirror === -1){
                                            video.setAttribute('class','mirror');
                                            mirror = 0;
                                        }
                                        else{
                                            video.removeAttribute('class');
                                            mirror=-1;
                                        }
                                        video.load();
                                        console.log(source)});

// Point 5.c Sponsored video bubble
var sponsored_video =  document.querySelector('.side_navigation video')
sponsored_video.controls = false

sponsored_video.addEventListener("mouseenter", () => {sponsored_video.play()})
sponsored_video.addEventListener("mouseleave", () => {sponsored_video.pause()})



// Point 6 Log-in 
var user_logged=-1
var comment_button= document.querySelector("#comment_button")

function log_in(){

}


comment_button.addEventListener("click", () => {
    if (user_logged==-1)
        return
    
    

})