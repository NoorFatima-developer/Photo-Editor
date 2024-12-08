const fileInput = document.querySelector('.file-input');
const chooseImgBtn = document.querySelector('.choose-img');
const previewImg = document.querySelector('.preview-img img');
const filterOptions = document.querySelectorAll('.filter button');
const rotateOptions = document.querySelectorAll('.rotate button');
const filterName = document.querySelector('.filter-info .name');
const filterValue = document.querySelector('.filter-info .value');
const filterSlider = document.querySelector('.filter input');
const resetFilterBtn = document.querySelector('.reset-filter');
const saveImgBtn = document.querySelector('.save-img');

let brightness = 100, saturation = 100, inversion = 0, grayscale = 0;
let rotate = 0, flipHorizontal = 1, flipVertical = 1;

const applyFilters = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter= `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale})`;
}

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


rotateOptions.forEach(option => {
    option.addEventListener('click', () => {
        // console.log(option);

        if(option.id === "left"){
            rotate -= 90;
        } else if(option.id === "right"){
            rotate += 90;
        } else if(option.id === "horizontal"){
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        } else if(option.id === "vertical"){
            flipVertical = flipVertical === 1 ? -1 : 1;
        }

        applyFilters();
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

    applyFilters();
}


const resetFilter = () => {
 brightness = 100;
 saturation = 100;
 inversion = 0; 
 grayscale = 0;
 rotate = 0;
 flipHorizontal = 1;
 flipVertical = 1;
 filterOptions[0].click();    // clicking brightness btn, so the brightness selected b default..
 applyFilters();
}

function saveImage(){
    console.log("Save Image Button Clicked");
    
}

chooseImgBtn.addEventListener('click', () => { fileInput.click()});
fileInput.addEventListener('change', loadImage);
filterSlider.addEventListener("input", updateFilter);
resetFilterBtn.addEventListener("click", resetFilter);
saveImgBtn.addEventListener('click', saveImage);