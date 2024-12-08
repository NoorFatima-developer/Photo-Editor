const fileInput = document.querySelector('.file-input');
const chooseImgBtn = document.querySelector('.choose-img');
const previewImg = document.querySelector('.preview-img img');

const loadImage = () => {
    const file = fileInput.files[0];
    if(!file) return; //return if user hasn't selected file...
    // console.log(file);
    previewImg.src = URL.createObjectURL(file);     //passing the file url as preview img src
}


fileInput.addEventListener('change', loadImage)
chooseImgBtn.addEventListener('click', () => {
    fileInput.click();
  });
  