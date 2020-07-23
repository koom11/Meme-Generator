document.addEventListener('DOMContentLoaded', function(){
    const img = document.createElement('div').classList.add('parent-img');
    const topText = document.createElement('div').classList.add('meme-top');
    const bottomText = document.createElement('div').classList.add('meme-bottom');
    const submitBtn = document.querySelector('button');

    submitBtn.addEventListener('click', function(e){
        e.preventDefault();
        document.body.appendChild(img, topText, bottomText)
    })

    





})