console.log("welcome to spotify");

// lnitializing the value

let songIndex=0;
let audioElement = new Audio('songs/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let progress = document.getElementById('myprogressbar');
let gif= document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songsitems = Array.from( document.getElementsByClassName('songitem'));
let songitemplay =  Array.from(document.getElementsByClassName('songitemplay'));

let songs =[
{songname:"closer",filepath:"songs/0.mp3",
coverpath:'cover/fifty-shades-freed.jpg'},
{songname:"let me love you. jb",filepath:"songs/1.mp3",
coverpath:'cover/fifty-shades-freed.jpg'},
{songname:"no lie ft. sean paul",filepath:"songs/2.mp3",
coverpath:'cover/fifty-shades-freed.jpg'},
{songname:"ed sheran shape of you",filepath:"songs/3.mp3",
coverpath:'cover/fifty-shades-freed.jpg'},
{songname:"sorry",filepath:"songs/4.mp3",
coverpath:'cover/fifty-shades-freed.jpg'},
{songname:"thats what i like",filepath:"songs/5.mp3",
coverpath:'cover/fifty-shades-freed.jpg'},
{songname:"what do you mean",filepath:"songs/6.mp3",
coverpath:'cover/fifty-shades-freed.jpg'},
{songname:"dusk till dowm",filepath:"songs/7.mp3",
coverpath:'cover/fifty-shades-freed.jpg'},
]

songsitems.forEach((element,i)=>
{
    console.log(element,i);
    element.getElementsByTagName("img")[0]=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
}
)
// audioelement

// handle  play pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        // // songitemplay.forEach((song,i)=>
        // // {

        // // }
        // )
   }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})

// listen to events

audioElement.addEventListener('timeupdate',()=>
{
    // update seekbar
    Progressbar =((audioElement.currentTime/audioElement.duration)* 100);
    progress.value=Progressbar
})

progress.addEventListener('change',()=>
{
    audioElement.currentTime = progress.value * audioElement.duration/100;
})


const Allplay = ()=>
{
    Array.from(document.getElementsByClassName('songitemplay')).forEach
    (
        (elementz)=>
        {
            elementz.classList.remove('fa-circle-pause');
            elementz.classList.add('fa-circle-play');
            
        } )

}


Array.from(document.getElementsByClassName('songitemplay')).forEach
(
    (elements)=>
    {
        elements.addEventListener('click',(e)=>
        {
            if(audioElement.paused)
            {// console.log(e.target);
            Allplay();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`songs/${songIndex}.mp3`;
            mastersongname.innerText = songs[songIndex].songname;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            // let masterPlayer = document.getElementById('masterPlay');
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            }
            else
            {
                audioElement.pause();
                e.target.classList.remove('fa-circle-pause');
                e.target.classList.add('fa-circle-play'); 
                gif.style.opacity=0;
                masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
            }

        })
    }
)
    document.getElementById('next').addEventListener('click',()=>
    {
        if(songIndex>=7)
        {
            songIndex=0;
        }
        else
        {
            songIndex = songIndex+1;
        }
             audioElement.src=`songs/${songIndex}.mp3`;
             mastersongname.innerText = songs[songIndex].songname;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity=1;


    })

    document.getElementById('previous').addEventListener('click',()=>
    {
        if(songIndex==0)
        {
            songIndex =7;
        }
        else
        {
            songIndex = songIndex-1;
        }
             audioElement.src=`songs/${songIndex}.mp3`;
             mastersongname.innerText = songs[songIndex].songname;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity=1;


    })

// document.getElementById('')

