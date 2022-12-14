const buttonView = document.querySelector('.mostPopular__button');
const wrapper = document.querySelector(".wrapper-2");
const buttonHide = document.querySelector('.mostPopular__button-2');

function viewWrapper() {
    wrapper.style.display = 'flex';


    if (wrapper.style.display === 'flex') {
        buttonView.style.display = 'none';
        buttonHide.innerHTML = 'Hide';
        buttonHide.style.display = 'block';
    }
}

function hideWrapper() {
    wrapper.style.display = 'none';

    if (wrapper.style.display = 'none') {
        buttonView.style.display = 'block';
        buttonHide.style.display = 'none';
    }

}







