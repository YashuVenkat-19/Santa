function giftgen(){
    var n = document.getElementById("num").value;
    if(n<5000){
        for(let i=1;i<=n;i++){
            const parent1=document.getElementById("output");
            const myImage = new Image();
            myImage.src = 'gitfbox.jpg';
            myImage.setAttribute("class","gift");
            parent1.appendChild(myImage);
            }
        }else{
                window.alert("Please enter a value lesser than 5000")
        }
}