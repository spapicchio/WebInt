console.log('Hello Project.');

// Hide the footer
document.querySelector('.form-log-in').style.display = 'none'; // hide

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


//Jukebox
const videos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/25/Sintel_extract_new.ogv",
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Preston_Mill_gear_in_action.webm",
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Proffreading.webm",
    "https://upload.wikimedia.org/wikipedia/commons/4/49/Nuclearcallbloodsta.webm"
]
const videos_name = [
    'Wonderful Game',
    'Wonderful Mechanism',
    'Wonderful Book',
    'Nuclear Cell',
]
var video_index = [0,1,2,3]

var source1 = document.querySelector('#source-1')
var source2 = document.querySelector('#source-2')
var source3 = document.querySelector('#source-3')

function upload_juk(index){

    let i_0 = (video_index[0] + index) % 4
    video_index[0] = (video_index[0] + index) % 4

    document.querySelector('article h2').innerHTML = 'Playing video: ' + videos_name[video_index[0]] 
    

    let i_1 = (video_index[1] + index) % 4
    video_index[1] = (video_index[1] + index) % 4

    let i_2 = (video_index[2] + index) % 4
    video_index[2] = (video_index[2] + index) % 4
    
    let i_3 = (video_index[3] + index) % 4
    video_index[3] = (video_index[3] + index) % 4

    source.setAttribute('src', videos[i_0])
    source1.setAttribute('src', videos[i_1])
    source2.setAttribute('src', videos[i_2])
    source3.setAttribute('src', videos[i_3])

    document.querySelector('#video-1').load()
    document.querySelector('#video-2').load()
    document.querySelector('#video-3').load()
    video.load()
}

upload_juk(0)

document.querySelector('#video-1').addEventListener('click', () => { 
    upload_juk(1) 
})
document.querySelector('#video-2').addEventListener('click', () => {    
    upload_juk(2)
})
document.querySelector('#video-3').addEventListener('click', () => {    
    upload_juk(3)
})

video.addEventListener('ended', () => {
    upload_juk(1)
  });

// Point 6 Log-in 
var i=1;
var comment_button= document.querySelector("#comment_button")

function remove_form(){
    document.querySelector('.form-log-in').style.display = 'none'; 
}

function show_form(){
    document.querySelector('.form-log-in').style.display = 'block'; 
}

function log_in(){

    alert('Please compile the form below for the log in')

    show_form()
    
    let submit = document.querySelector('#submit-log-in')
    console.log(submit)
    
    submit.addEventListener("click",() => {
        
        let name = document.querySelector('#name-log-in').value
        let last_name = document.querySelector('#last-name-log-in').value
        let email = document.querySelector('#email-log-in').value
        let num_1 = document.querySelector('#num-1').value

        if(last_name == "" || name == "")
            {alert('null String'); return}
        
        if(isNaN(num_1))
            {alert('Number not valid');return}
        
        if(!email.includes("@"))
            {alert('Email not valid'); return}

        let storage = window.sessionStorage;
        storage.setItem(name, last_name + " " + email+ " "+num_1);

        remove_form()
        alert('Now you can insert messages!')
    })
}

function create_comment(city_country){
        // If you are not logged in, you have to compile the form 
        let storage = window.sessionStorage;
        let name = document.querySelector('#name-comment').value
        if (storage.getItem(name) == null) 
            {log_in();return}
    
        // Select the text of the contet
        let comment = document.querySelector('#comment').value
    
        //select the date
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        
        //create the new Comment
        let new_comment = document.createElement('div')
        new_comment.setAttribute('class', 'comment-author')
    
        //create the actual text comment
        let new_text = document.createElement('p')
        new_text.textContent = comment
    
        // add the name, the date amd the city, country
        let new_span = document.createElement('span')
        new_span.textContent = 'posted by '+ name + " | " + date + " | " + city_country
        
        //check for debugging
        console.log(new_text)
    
        //append 
        new_comment.appendChild(new_text)
        new_comment.appendChild(new_span)
        
        //insert the new comment
        document.querySelector('#comments div').appendChild(new_comment)
    
        
        
        //Used for storing the comments inside the local storage
        let previous = window.localStorage.getItem('comments')
        
        if (previous == null)
            window.localStorage.setItem('comments', new_comment.outerHTML)
        else
            window.localStorage.setItem('comments', previous+new_comment.outerHTML)
}


comment_button.addEventListener("click", () => {

    //first element must to return a Promise
    var getPosition = function (options) {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }
      
    getPosition()
    .then((position) => {
        lat = position.coords['latitude']
        long = position.coords['longitude']
        return lat+','+long
    })
    .then((latLong)=>{
        api= "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latLong+"&key=AIzaSyCLgL8NUcjeqaxkGR-KhcPpkVJLraMtwfQ"
        return fetch(api)
    })
    .then((response) => { return response.json() })
    .then((data) => { return data.results[9]['formatted_address'] })
    .then((city_country) => { create_comment(city_country) })
    
    .catch((err) => {
        console.error(err.message);
    });
})



//Point 7.c show the comments stored in the local storage
window.addEventListener('load', (event) => {
    keys = Object.keys(localStorage)
    i = keys.length
    console.log(i)

    while ( i-- ) {
        let value=localStorage.getItem(keys[i])
        let dir = document.createElement('div')
        dir.innerHTML = value
        document.querySelector('#comments div').append(dir)
    }

  });

function remove_local_storage(){
window.localStorage.clear();
}

//remove_local_storage()