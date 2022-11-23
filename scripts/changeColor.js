let loadOnce = false;
    function load(){
        document.getElementById('chakra').style.visibility = "visible";
        document.getElementById('chakra').style.animationDuration = "4s";
        document.getElementById('chakra').style.animationName = "changeColor";
        if(loadOnce === true){
            document.getElementById('sharingan').style.visibility = "visible";
            document.getElementById('sharingan').style.animationDuration = "4s";
            document.getElementById('sharingan').style.animationName = "changeColor";
            document.getElementById('loader').style.visibility = "collapse";
        }
        loadOnce = true;
    }
