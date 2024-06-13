let count = 1;
document.getElementById("radio1").checked =true;
document.getElementById("radio1_v2").checked =true;


setInterval(() => {
    proximg();
}, 5500);

function proximg(){

    count++;
    if(count>4){
        count=1;
    }

document.getElementById("radio"+count).checked =true;

}
