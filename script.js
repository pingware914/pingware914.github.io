function writeCookieusrname(username){
	var username2='username='+username+'; expires=Thu, 1 Jan 4040 12:00:00 UTC';
	document.cookie=username2;
}
function writeCookiepsswrd(psswrd){
	var psswrdcookie='password='+psswrd+'; expires=Thu, 1 Jan 4040 12:00:00 UTC';
	document.cookie=psswrdcookie;
}
function deerpong(arg1){
    document.getElementById("deerpong").innerHTML=arg1;
	console.log(arg1);
}
function beerpong(arg1){
    document.getElementById("beerpong").innerHTML=arg1;
    console.log(arg1);
}
function secret(arg1){
    document.getElementById("secret").innerHTML=arg1;
    console.log=(arg1);
}
function tennis(arg1){
    document.getElementById("tennis").innerHTML=arg1;
    console.log(arg1);
}
function pingpong(arg1){
    document.getElementById("pingpong").innerHTML=arg1;
    console.log(arg1);
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }