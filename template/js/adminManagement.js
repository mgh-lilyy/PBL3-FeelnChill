// var mng = document.getElementsByClassName('main_container');
// var infor = document.getElementsByClassName('infor_container');
// function m_manage() 
// {
//     mng.style.visibility = "visible"
// }
// function cusInfor()
// {
//     for (var i = 0; i < mng.length; i++) {
//         mng[i].style.visibility = "hidden";
//     }
//     for (var i = 0; i < mng.length; i++) {
//         infor[i].style.visibility = "visible";
//     }
// }
let current;
function on(ID) {
  document.getElementById('ownInfor').style.display = "none";
    document.getElementById(ID).style.display = "block";

}
  
function off(ID) {
  document.getElementById(ID).style.display = "none";
}
