const fileInput = document.querySelector('.file-input');
const chooseImgBtn = document.querySelector('.choose-img');
const previewImg = document.querySelector('.preview-img img');
const filterOptions = document.querySelectorAll('.filter button');

const loadImage = () => {
    const file = fileInput.files[0];
    if (!file) return; // Return if user hasn't selected a file...
    previewImg.src = URL.createObjectURL(file); // Pass file URL as preview img src
    previewImg.addEventListener('load', () => {
        document.querySelector(".container").classList.remove('disable');
    });
};

filterOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        const activeButton = document.querySelector(".filter .active");
        if (activeButton) {
            activeButton.classList.remove('active'); // Remove active from current
        }
        option.classList.add('active'); // Add active to clicked button
        console.log(`Active button changed to: ${option.textContent}`); // Log active button
    });
});

fileInput.addEventListener('change', loadImage);
chooseImgBtn.addEventListener('click', () => {
    fileInput.click();
});