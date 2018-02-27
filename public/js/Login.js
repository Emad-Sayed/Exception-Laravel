

function LoginCheck()
{

    $.ajax({
        type:'POST',
        url:'/verify?mail='+document.getElementById("login-username").value+'&pass='+document.getElementById("login-password").value,
        success:function(data){
            if(data=='True')
            {
                window.location='JobsView';
            }
            else
            {
                var alert=document.getElementById("alert");
                alert.setAttribute("class","alert alert-danger");
                alert.innerHTML="Wrong Mail Or Password";
            }
        }
    });
}
var http = new XMLHttpRequest();

function data_validation()
{
    var Fname=document.getElementById("Fname").value;
    var Lname=document.getElementById("Lname").value;
    var secret_word=document.getElementById("secret").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirm=document.getElementById("confirm").value;

    if(validateName(Fname)==false)
    {
        var alert_=document.getElementById("alert2");
        alert_.setAttribute("class","alert alert-danger");
        alert_.innerHTML="Invalid First Name";
    }
    else if(validateName(Lname)==false)
    {
        var alert_=document.getElementById("alert2");
        alert_.setAttribute("class","alert alert-danger");
        alert_.innerHTML="Invalid Last Name";
    }
    else if(validateEmail(email)==false)
    {
        var alert_=document.getElementById("alert2");
        alert_.setAttribute("class","alert alert-danger");
        alert_.innerHTML="Invalid email";
    }
    else if (password!=confirm||password.length<6)
    {
        var alert_=document.getElementById("alert2");
        alert_.setAttribute("class","alert alert-danger");
        alert_.innerHTML="Password Not Matched Or Password less than 6 chars";
    }
    else
    {
        Regist(Fname,Lname,email,password,secret_word);
    }

}
function validateName(name)
{
    return /^[a-zA-Z ]+$/.test(name);
}
function validateEmail(email)
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function Regist(Fname,Lname,email,password,secret_word)
{

    $.ajax({
        type:'POST',
        url:'/Regist?Fname='+Fname+'&Lname='+Lname+'&email='+email+'&password='+password+'&secret_word='+secret_word,
        success:function(data){
            window.location='Login';
        }
    });
}