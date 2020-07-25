document.addEventListener('DOMContentLoaded', function(){
    const img = document.createElement('div');
    const imgInput = document.querySelector('#img-url');
    const imgURL = document.createElement('img');
    const topTextInput = document.querySelector('#top-text');
    const topText = document.createElement('div');
    const bottomTextInput = document.querySelector('#bottom-text')
    const bottomText = document.createElement('div');;
    const submitBtn = document.querySelector('button');
    const memeList = document.querySelector('#meme-list');
    const form = document.querySelector('form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        createParentDiv();
        createTopTextDiv();
        createBottomTextDiv();
    
    }, false);

    function createParentDiv(){
        imgURL.src = imgInput.value;
        img.appendChild(imgURL);
        img.classList.add('parent-img');
        memeList.appendChild(img);
    }

    function createTopTextDiv(){
        topText.innerHTML = topTextInput.value;
        topText.classList.add('meme-top');
        img.appendChild(topText);
    }

    function createBottomTextDiv(){
        bottomText.innerHTML = bottomTextInput.value;
        bottomText.classList.add('meme-bottom');
        img.appendChild(bottomText);
    }
    





})