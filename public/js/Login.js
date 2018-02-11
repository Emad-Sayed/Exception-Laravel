

function LoginCheck()
{

    $.ajax({
        type:'POST',
        url:'/verify?mail='+document.getElementById("login-username").value+'&pass='+document.getElementById("login-password").value,
        success:function(data){
            if(data=='True')
            {
                window.location='home';
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
