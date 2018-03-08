window.onload = function ()
{
    document.getElementById("jobs").setAttribute("class","");
    document.getElementById("questions").setAttribute("class","");
    document.getElementById("MyOption").setAttribute("class","");
    document.getElementById("Recommend").setAttribute("class","");
    LoadData();
};
var http = new XMLHttpRequest();
function LoadData()
{
    http.onreadystatechange = PT;

    function PT()
    {

        var data = http.responseText;
        var obj = JSON.parse(data);

        if (http.readyState == 4 && http.status == 200)
        {
            document.getElementById("Fname").innerHTML=obj[1];
            document.getElementById("Lname").innerHTML=obj[2];
            document.getElementById("Image").setAttribute("src","Avatars/"+obj[3]);
            document.getElementById("Email__").innerHTML=obj[4];
            document.getElementById("Type__").innerHTML=obj[5];
            document.getElementById("PhotoWord").innerHTML=obj[1]+" "+obj[2];
        }
    }
    http.open("GET", "ProfileInfo", true);
    http.send(null);
}