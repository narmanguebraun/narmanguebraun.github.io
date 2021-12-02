// Image Slider
let i = 0; 
const images = [];
const time = 3000;
// Image List
images[0] = 'public/photo/nin-asphalt-dune-n-armangue-braun-2019-tossa-01.jpg'
images[1] = 'public/photo/nin-asphalt-dune-n-armangue-braun-2019-tossa-02.jpg';
images[2] = 'public/photo/nin-asphalt-dune-n-armangue-braun-2019-tossa-03.jpg';
images[3] = 'public/photo/nin-asphalt-dune-n-armangue-braun-2019-tossa-02.jpg';
images[4] = 'public/photo/nin-asphalt-dune-n-armangue-braun-2019-tossa-01.jpg';
images[5] = 'public/photo/nin-asphalt-dune-n-armangue-braun-2019-tossa-02.jpg';
images[6] = 'public/photo/nin-asphalt-dune-n-armangue-braun-2019-tossa-01.jpg';
images[7] = 'public/photo/nin-asphalt-dune-n-armangue-braun-2019-tossa-02.jpg';
images[8] = 'public/photo/nin-asphalt-dune-n-armangue-braun-2019-tossa-03.jpg';
images[9] = 'public/photo/nin-asphalt-dune-n-armangue-braun-2019-tossa-02.jpg'
// Change Image
function changeImg(){
	document.slide.setAttribute("alt","Tossa de Mar, Catalunya");
	document.slide.src = images[i];	
	i < images.length - 1 ? i++ : i = 0;
	setTimeout("changeImg()", time);
}
window.onload = changeImg;
// Links
const links = document.getElementsByTagName('a');
const len = links.length;
for (let i=0; i<len; i++) {links[i].target = "_blank";}
