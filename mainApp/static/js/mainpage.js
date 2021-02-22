// Selectors
const chatButton = document.querySelector('.btn_chat');
const chatArea = document.querySelector('.chatArea');
const chatClose = document.querySelector('.chatClose');
const writePostButton = document.querySelector('#writepostBtn');
const writePostPage = document.querySelector('.writePost');
const postChart = document.querySelectorAll('.post');
const postMoreView = document.querySelector('#postMoreView');
const postInformation = document.querySelector('.postInformation');
const profile = document.querySelector('fa-user');
const scrollRightChart = document.querySelector('.rightChart');

// Eventlistener
chatButton.addEventListener('click', openChat);
chatClose.addEventListener('click', closeChat);
writePostButton.addEventListener('click', writePost);
postMoreView.addEventListener('click', moreviewPost);
window.addEventListener('scroll', scrollFunc);

// 스크롤 함수
function scrollFunc() {
    // console.log(pageYOffset);
    if(pageYOffset >= 10){
        scrollRightChart.classList.add('on');
    }else{
        scrollRightChart.classList.remove('on');
    }
}


// Function
// 채팅방 열기
function openChat(){
    chatArea.style.display = "flex";
    chatButton.style.display = "none";
}

// 채팅방 닫기
function closeChat(){
    chatArea.style.display = "none";
    chatButton.style.display = "block";
}

// 게시물 작성
function writePost(){
    var i=0;
    if(writePostButton.value === "게시물 작성"){
        for(i=0; i<postChart.length; i++){
            postChart[i].style.display="none";
        }
        writePostButton.value = "홈으로 이동";
    }else{
        for(i=0; i<postChart.length; i++){
            postChart[i].style.display="unset";
        }
        writePostButton.value = "게시물 작성";
    }
}

// 게시물 정보 더보기
function moreviewPost(){
    if(postMoreView.innerHTML === "더보기"){
        const moreview = document.createElement('p');
        postInformation.style.height = "300px";
        postMoreView.innerHTML = "간략히";
        moreview.innerText = "아브라카다브라";
        moreview.classList.add('moreview');
        postInformation.appendChild(moreview);
    }else{
        postInformation.style.height = "32px";
        postMoreView.innerHTML = "더보기";
    }
}