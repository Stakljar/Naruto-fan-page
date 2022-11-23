let resized = false;
let images = document.getElementsByClassName("pictures");
function resizeImage(image)
{
    if(resized === false)
    {
        image.style.zIndex = 1;
        resized = true;
        image.style.width = "220%";
        image.style.height = "240%";
        image.classList.add('dim');
        image.classList.remove('undim');
        window.scrollTo({
            left: window.innerWidth
        });
        for (let i = 0; i < images.length; i++){
            if(images[i] != image){
                images[i].onclick = null;
            }
        }
    }
    else
    {
        image.style.zIndex = 0;
        resized = false;
        image.style.width = "100%";
        image.style.height = "120%";
        image.classList.remove('dim');
        image.classList.add('undim');
        for (let i = 0; i < images.length; i++){
            if(images[i] != image){
                images[i].setAttribute("onClick", "resizeImage(this)");
            }
        }
    }
}
