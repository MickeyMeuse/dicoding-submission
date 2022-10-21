// 'js/mian.js'

const img1 = "https://ik.imagekit.io/0ysnbn7br/images/3_IcVgJpQML.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666334059809";
const img2 = "https://ik.imagekit.io/0ysnbn7br/images/1_KdZGOQdtFT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666334057534";
const img3 = "https://ik.imagekit.io/0ysnbn7br/images/2_UdRse_39m.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666334057531";
const img4 = "https://ik.imagekit.io/0ysnbn7br/images/6_CAJCZhloK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666334057203";
const img5 = "https://ik.imagekit.io/0ysnbn7br/images/4_VM9N3VxTJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666334057177";
const img6 = "https://ik.imagekit.io/0ysnbn7br/images/Lumix-1-21_-_Copy_g-pGiw3Nx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666336245614";
const img7 = "https://ik.imagekit.io/0ysnbn7br/images/Lumix-1-22_7ealbhE5f.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666336245824";
const img8 = "https://ik.imagekit.io/0ysnbn7br/images/Lumix-1-35_kcELJFpSi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666336245318";

var slide_image = document.querySelector('.slider-img');
var images = [img1, img2, img3, img4, img5, img6, img7, img8];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;
	i--;
	return setImg();
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();
}

function setImg(){
	return slide_image.setAttribute('src', images[i]);
}
