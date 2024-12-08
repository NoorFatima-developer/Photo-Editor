const fileInput = document.querySelector('.file-input');
const chooseImgBtn = document.querySelector('.choose-img');
const previewImg = document.querySelector('.preview-img img');
const filterOptions = document.querySelectorAll('.filter button');
const filterName = document.querySelector('.filter-info .name');
const filterValue = document.querySelector('.filter-info .value');
const filterSlider = document.querySelector('.filter input');

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
        btn.classList.add('active'); // Add active to clicked button
        console.log(`Active button changed to: ${btn.textContent}`); // Log active button
        filterName.innerHTML = btn.innerHTML; 
    });
});

const updateFilter = () => {
    filterValue.innerHTML = `${filterSlider.value}%`; 
    console.log(filterSlider.value);
}


filterSlider.addEventListener("input", updateFilter);
fileInput.addEventListener('change', loadImage);
chooseImgBtn.addEventListener('click', () => { fileInput.click()});