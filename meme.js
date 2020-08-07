document.addEventListener('DOMContentLoaded', function(){
    let newImg = document.createElement('li');
    let imgInput = document.querySelector('#img-url');
    let topTextInput = document.querySelector('#top-text');
    const bottomTextInput = document.querySelector('#bottom-text')
    const memeList = document.querySelector('#meme-list');
    let form = document.querySelector('form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        createNewDiv();
        form.reset();
    
    });

    function createParentDiv(){
        newImg = document.createElement('li');
        const imgURL = document.createElement('img');
        imgURL.src = imgInput.value;
        newImg.appendChild(imgURL);
        newImg.classList.add('parent-img');
        memeList.appendChild(newImg);
    }

    function createTopTextDiv(){
        const topText = document.createElement('h1');
        topText.innerHTML = topTextInput.value;
        topText.classList.add('meme-top');
        newImg.appendChild(topText);
    }

    function createBottomTextDiv(){
        const bottomText = document.createElement('h1');
        bottomText.innerHTML = bottomTextInput.value;
        bottomText.classList.add('meme-bottom');
        newImg.append(bottomText);
    }

    function createNewDiv(){
        createParentDiv();
        createTopTextDiv();
        createBottomTextDiv();
    }
});