console.log('Hello Project.');

// Useful variables
var main_video = document.querySelector('#main_video')
var video_tag = document.querySelector('article video')



// Point 4.a change URL
var url_button = document.querySelector('#url_button')

url_button.addEventListener('click', function() {
                                    var src = document.querySelector('#furl').value

                                    var previous_src = main_video.getAttribute('src')
                                    console.log(previous_src)

                                    try {
                                        main_video.setAttribute('src', src);
                                        video_tag.load()
                                    } catch (err) {
                                        console.error(err.message)
                                        main_video.setAttribute('src', previous_src);
                                        
                                        console.log(main_video)
                                    }
                                                                            
                                    
                                    } )

// Point 4.d Rotate the video 
var rotate_button = document.querySelector('#rotate')

rotate_button.addEventListener('click', function() {
                                        console.log("rotate"); 
                                        main_video.setAttribute('class','rotate');
                                        video_tag.load();
                                        console.log(main_video)})

console.log(main_video)

// point 5.a Remove Controls
var control = document.querySelector('#control')
var no_control = document.querySelector('#no_control')

var control_list = function (){
    console.log('Clicked')
    var video_tag = document.querySelector('article video')
    video_tag.setAttribute('controls', 'controls')
}
control.addEventListener('click', control_list)

var no_control_list = function (){
    console.log('Clicked')

    video_tag.removeAttribute('controls')
}
no_control.addEventListener('click', no_control_list)

