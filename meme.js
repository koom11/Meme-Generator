document.addEventListener('DOMContentLoaded', function(){
    let newImg = document.createElement('li');
    let imgInput = document.querySelector('#img-url');
    let imgURL = document.createElement('img');
    let topTextInput = document.querySelector('#top-text');
    let topText = document.createElement('h1');
    let bottomTextInput = document.querySelector('#bottom-text')
    let bottomText = document.createElement('h1');
    const memeList = document.querySelector('#meme-list');
    let form = document.querySelector('form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        createNewDiv();
        /* let newImg = document.createElement('div');
        imgURL.src = imgInput.value;
        newImg.appendChild(imgURL);
        newImg.classList.add('parent-img');
        topText.innerText = document.getElementById('top-text').value;
        topText.classList.add('meme-top');
        newImg.appendChild(topText);
        bottomText.innerText = document.getElementById('bottom-text').value;
        bottomText.classList.add('meme-bottom');
        newImg.appendChild(bottomText);
        memeList.appendChild(newImg); */
        form.reset();
    
    });

    function createParentDiv(){
        newImg = document.createElement('div');
        imgURL.src = imgInput.value;
        newImg.appendChild(imgURL);
        newImg.classList.add('parent-img');
        memeList.appendChild(newImg);
    }

    function createTopTextDiv(){
        topText.innerHTML = topTextInput.value;
        topText.classList.add('meme-top');
        //newImg.append(topText);
    }

    function createBottomTextDiv(){
        bottomText.innerHTML = bottomTextInput.value;
        bottomText.classList.add('meme-bottom');
        //newImg.append(bottomText);
    }

    function createNewDiv(){
        createParentDiv();
        createTopTextDiv();
        createBottomTextDiv();
        memeList.appendChild(newImg).appendChild(topText);
        memeList.appendChild(newImg).appendChild(bottomText);
    }
    





})