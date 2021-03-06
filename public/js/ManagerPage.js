window.onload = function ()
{
    document.getElementById("jobs").setAttribute("class","");
    document.getElementById("questions").setAttribute("class","");
    document.getElementById("MyOption").setAttribute("class","active");
    document.getElementById("Recommend").setAttribute("class","");
    var parent=document.getElementById("AddAdmin").style.visibility='hidden';
    AddHead();
    GetUsers();
};
var Users;
var http = new XMLHttpRequest();
function GetUsers() {
    http.onreadystatechange = PT;

    function PT()
    {

        var data = http.responseText;
        var obj = JSON.parse(data);

        if (http.readyState == 4 && http.status == 200)
        {
            Users=obj;
            for (var i = 1; i <obj.length; i++)
            {
                AddRow(obj[i].id,obj[i].name,obj[i].mail,obj[i].type,obj[i].questions_number);
            }
            document.getElementById("Spinner").remove();
        }
    }
    http.open("GET", "GetUsers", true);
    http.send(null);
}
function AddHead()
{
    var parent=document.getElementById("container");
    var table=document.createElement("table");
    table.setAttribute("class","table table-striped");
    table.setAttribute("id","MyTable");
    var head=document.createElement("thead");
    table.setAttribute("id","Head");
    var tr=document.createElement("tr");

    var th1=document.createElement("th");
    th1.innerHTML="User ID";

    var th2=document.createElement("th");
    th2.innerHTML="UserName";

    var th3=document.createElement("th");
    th3.innerHTML="Email";

    var th4=document.createElement("th");
    th4.innerHTML="Type";

    var th5=document.createElement("th");
    th5.innerHTML="Questions";

    var th6=document.createElement("th");
    th6.innerHTML="Action";

    var body=document.createElement("tbody");
    body.setAttribute("id","Table_Body");


    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    head.appendChild(tr);
    table.appendChild(head);
    table.appendChild(body);
    parent.appendChild(table);
}
function AddRow(User_ID,name,email,type,question_number)
{
    var parent =document.getElementById("Table_Body");
    var tr=document.createElement("tr");
    tr.setAttribute("id","TD"+User_ID);
    var td1=document.createElement("td");
    td1.innerHTML=User_ID;
    var td2=document.createElement("td");
    td2.innerHTML=name;
    var td3=document.createElement("td");
    td3.innerHTML=email;

    var td4=document.createElement("td");
    td4.innerHTML=type;

    var td5=document.createElement("td");
    var show_Profile=document.createElement("button");
    show_Profile.innerHTML="User Profile";
    show_Profile.setAttribute("class","btn btn-success");
    show_Profile.setAttribute("type","button");
    show_Profile.setAttribute("onclick","User_Profile(this)");
    show_Profile.setAttribute("id",User_ID);
    td5.appendChild(show_Profile);

    var td6=document.createElement("td");
    var delete_button=document.createElement("button");
    delete_button.innerHTML="Delete User";
    delete_button.setAttribute("class","btn btn-danger");
    delete_button.setAttribute("type","button");
    delete_button.setAttribute("onclick","Delete_User(this)");
    delete_button.setAttribute("id",User_ID);
    td6.appendChild(delete_button);



    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    parent.appendChild(tr);
}
function ClearRows()
{
    var parent=document.getElementById("Table_Body");
    while (parent.hasChildNodes())
    {
        parent.removeChild(parent.lastChild);
    }
}
function  Search(element) {
    ClearRows();
    document.getElementById("Head").style.visibility = 'visible';
    var parent=document.getElementById("AddAdmin").style.visibility='hidden';
    var re = new RegExp("\\b("+element.value+")(.)*\\b");
    for(var i=1;i<Users.length;i++)
    {
        if(re.test(Users[i].name))
        {
            AddRow(Users[i].id,Users[i].name,Users[i].mail,Users[i].type,Users[i].questions_number);
        }
    }
}
function Delete_User(element)
{
    var con=confirm("Sure you want to delete the user?");
    if(con)
    {
        http.onreadystatechange = PT;

        function PT()
        {

            if (http.readyState == 4 && http.status == 200)
            {
                document.getElementById("TD"+element.id).remove();
            }
        }
        http.open("GET", "DeleteUser?user_id="+element.id, true);
        http.send(null);
    }

}
function User_Profile(element) {
    window.location="UserProfile?User_ID="+element.id;
}
function AddAdmin() {
    ClearRows();
    document.getElementById("Head").style.visibility = 'hidden';
    var parent=document.getElementById("AddAdmin").style.visibility='visible';

}
function Validate() {
    var Fname = document.getElementById("Fname").value;
    var Lname = document.getElementById("Lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    if (validateName(Fname) == false) {
        var alert_ = document.getElementById("alert2");
        alert_.setAttribute("class", "alert alert-danger");
        alert_.innerHTML = "Invalid First Name";
        return false;
    }
    else if (validateName(Lname) == false) {
        var alert_ = document.getElementById("alert2");
        alert_.setAttribute("class", "alert alert-danger");
        alert_.innerHTML = "Invalid Last Name";
        return false;
    }
    else if (validateEmail(email) == false) {
        var alert_ = document.getElementById("alert2");
        alert_.setAttribute("class", "alert alert-danger");
        alert_.innerHTML = "Invalid email";
        return false;
    }
    else if (password != confirm || password.length < 6) {
        var alert_ = document.getElementById("alert2");
        alert_.setAttribute("class", "alert alert-danger");
        alert_.innerHTML = "Password Not Matched Or Password less than 6 chars";
        return false;
    }
    return true;
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
