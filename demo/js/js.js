$("#btn-1").click(
    function () {
        $("#popup-run").css("display","inline");
    }
);
$("#close-btn").click(
    function () {
        $("#popup-run").css("display","none");
    }
);
$("#btn-mess").click(
    function () {
        $("#fixed").css("display","none");
        $("#message1").css("display","inline");
    }
);
$("#btn-mess1").click(
    function () {
        $("#fixed").css("display","inline");
        $("#message1").css("display","none");
    }
);


// var modal=document.getElementById("mypost");
// var btn=document.getElementById("btn-1");
// var span=document.getElementsByClassName("close1");
// btn.onclick=function(){
//     modal.style.display="block";
// }
// span.onclick=function(){
//     modal.style.display="none";
// }
// window.onclick=function (event){
//     if (event.target==modal){
//         modal.style.display="none";
//     }
// }

$(function () {
    $(":file").change(function(){
        if(this.files &&this.files[0]){
            var read=new FileReader();
            read.onload=imageIsLoaded;
            read.readAsDataURL(this.files[0]);
        }
    });
});
function imageIsLoaded(e){
    $('#con-2').attr('src',e.target.reset);
}