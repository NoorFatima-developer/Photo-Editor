const fileInput = document.querySelector('.file-input');
const chooseImgBtn = document.querySelector('.choose-img');
const previewImg = document.querySelector('.preview-img img');
const filterOptions = document.querySelectorAll('.filter button');
const filterName = document.querySelector('.filter-info .name');
const filterValue = document.querySelector('.filter-info .value');
const filterSlider = document.querySelector('.filter input');

let brightness = 100, saturation = 100, inversion = 0, grayscale = 0;

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
        if(btn.id === "brightness") {
            filterSlider.max = "200";
            filterSlider.value = brightness;
            filterValue.innerHTML = `${brightness}%`
        } else if (btn.id === "saturation") {
            filterSlider.max = "200";
            filterSlider.value = saturation;
            filterValue.innerHTML = `${saturation}%`
        } else if (btn.id === "inversion") {
            filterSlider.max = "100";
            filterSlider.value = inversion
            filterValue.innerHTML = `${inversion}%`
        } else if (btn.id === "grayscale") {
            filterSlider.max = "100";
            filterSlider.value = grayscale
            filterValue.innerHTML = `${grayscale}%`
        }
    });
});

const updateFilter = () => {
    filterValue.innerHTML = `${filterSlider.value}%`; 
    // console.log(filterSlider.value);
    const selectedFilter = document.querySelector(".filter .active");
    if (selectedFilter.id === "brightness") {
        brightness = filterSlider.value
    } else if (selectedFilter.id === "saturation") {
        saturation = filterSlider.value
    } else if (selectedFilter.id === "inversion") {
        inversion = filterSlider.value
    } else if (selectedFilter.id === "grayscale") {
        grayscale = filterSlider.value
    }
    }
filterSlider.addEventListener("input", updateFilter);
fileInput.addEventListener('change', loadImage);
chooseImgBtn.addEventListener('click', () => { fileInput.click()});