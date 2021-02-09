let tryButton = document.getElementById('tryButton');
let importFile = document.getElementById('importFile');
let selectMenu = document.getElementById('selectMenu');
let closeButton = document.getElementById('closeButton');

let selectPro = document.getElementById('selectPro');
let selectSoMe = document.getElementById('selectSoMe');
let selectNews = document.getElementById('selectNews');
let videoPro = document.getElementById('videoPro');
let videoSoMe = document.getElementById('videoSoMe');
let videoNews = document.getElementById('videoNews');


importFile.style.display = 'none';
selectMenu.style.display = 'none';
selectPro.style.display = 'none';
selectSoMe.style.display = 'none';
selectNews.style.display = 'none';

videoPro.style.display = 'none';
videoSoMe.style.display = 'none';
videoNews.style.display = 'none';

tryButton.addEventListener('click', showimportFile);
function showimportFile(){
	importFile.style.display = 'block';
}

importFile.addEventListener('click', showselectMenu)
function showselectMenu(){
	selectMenu.style.display = 'block';
	selectPro.style.display = 'block';
	selectSoMe.style.display = 'block';
	selectNews.style.display = 'block';

}

selectPro.addEventListener('click', showvideoPro);
function showvideoPro(){
	videoPro.style.display = 'block';
	videoSoMe.style.display = 'none';
	videoNews.style.display = 'none';
}

selectSoMe.addEventListener('click', showvideoSoMe);
function showvideoSoMe(){
	videoPro.style.display = 'none';
	videoSoMe.style.display = 'block';
	videoNews.style.display = 'none';
}

selectNews.addEventListener('click', showvideoNews);
function showvideoNews(){
	videoPro.style.display = 'none';
	videoSoMe.style.display = 'none';
	videoNews.style.display = 'block';
}


// selectPro.addEventListener('click', showselectPro)
// closeButton.addEventListener('click', hideselectPro)
// function showselectPro(){
// 	selectPro.style.display = 'block';
// }
// function hideselectPro(){
// 	selectPro.style.display = 'none';

  // let selectPro;
  // let selectSoMe:
  // let selectNewsletter;