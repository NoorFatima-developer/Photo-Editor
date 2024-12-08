const fileInput = document.querySelector('.file-input');
const chooseImgBtn = document.querySelector('.choose-img');
const previewImg = document.querySelector('.preview-img img');
const filterOptions = document.querySelectorAll('.filter .options button');
const loadImage = () => {
    const file = fileInput.files[0];
    if(!file) return; //return if user hasn't selected file...
    // console.log(file);
    previewImg.src = URL.createObjectURL(file);     //passing the file url as preview img src
    previewImg.addEventListener('load', () => {
        document.querySelector(".container").classList.remove('disable');
    })
}

filterOptions.forEach(options => {
    options.addEventListener('click', () => {
        document.querySelector(".filter .active").classList.remove('active');
        options.classList.add('active');
    })
    console.log(options);
    
});

fileInput.addEventListener('change', loadImage)
chooseImgBtn.addEventListener('click', () => {
    fileInput.click();
});







