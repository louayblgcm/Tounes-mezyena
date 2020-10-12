var image = document.getElementById("image");
var prev= document.getElementById("prev");
var next= document.getElementById("next");
var myimages=["https://lp-cms-production.imgix.net/2019-06/e41ea44f84a51473b215065226625602-tunisia.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4","https://miro.medium.com/max/9362/1*iUaWGAoNEao_JCGMjD40Qw.jpeg",
"https://i.huffpost.com/gen/2778636/images/o-TUNISIA-facebook.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw1hPVRRRfJFBCPstLiRQFPzbeHUON6DHXAYaxT27C2GBF5pfY",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6sveoT72DuU52kVj311H9BG6qz1GKul3IECBpB5-n684W1w3Z","https://www.facebook.com/photo.php?fbid=525235457825771&set=pb.100010179638601.-2207520000..&type=3",];
image.setAttribute("src",myimages[4]);
var myindex=0;
prev.addEventListener('click',prevfn);
function prevfn(){
    if (myindex==0){
        myindex=myimages.length-1;
    }
    else{
        myindex--;
    }
    image.setAttribute("src",myimages[myindex]);
};
next.addEventListener('click',nextfn);
function nextfn(){
    if (myindex==myimages.length-1){
        myindex=0;
    }
    else{
        myindex++;
    }
    image.setAttribute("src",myimages[myindex]);
}

