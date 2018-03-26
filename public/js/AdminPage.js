window.onload = function ()
{
    document.getElementById("jobs").setAttribute("class","");
    document.getElementById("questions").setAttribute("class","");
    document.getElementById("MyOption").setAttribute("class","active");
    document.getElementById("Recommend").setAttribute("class","");
    AddHead();
    GetReports();
};
var Reports;
var http = new XMLHttpRequest();

function GetReports() {
    http.onreadystatechange = PT;

    function PT()
    {

        var data = http.responseText;
        var obj = JSON.parse(data);

        if (http.readyState == 4 && http.status == 200)
        {
            Reports=obj;
            for (var i = 1; i <obj.length; i++)
            {
                AddRow(obj[i].question_id,obj[i].name,obj[i].mail);
            }
            document.getElementById("Spinner").remove();
        }
    }
    http.open("GET", "GetReported", true);
    http.send(null);
}
function AddHead()
{
    var parent=document.getElementById("container");
    var table=document.createElement("table");
    table.setAttribute("class","table table-striped");
    table.setAttribute("id","MyTable");
    var head=document.createElement("thead");
    var tr=document.createElement("tr");

    var th1=document.createElement("th");
    th1.innerHTML="Question ID";

    var th2=document.createElement("th");
    th2.innerHTML="UserName";

    var th3=document.createElement("th");
    th3.innerHTML="Email";

    var th4=document.createElement("th");
    th4.innerHTML="Delete";

    var th5=document.createElement("th");
    th5.innerHTML="Details";

    var body=document.createElement("tbody");
    body.setAttribute("id","Table_Body");


    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    head.appendChild(tr);
    table.appendChild(head);
    table.appendChild(body);
    parent.appendChild(table);
}
function AddRow(Question_ID,name,mail)
{
    var parent =document.getElementById("Table_Body");
    var tr=document.createElement("tr");
    tr.setAttribute("id","TD"+Question_ID);
    var td1=document.createElement("td");
    td1.innerHTML=Question_ID;
    var td2=document.createElement("td");
    td2.innerHTML=name;
    var td3=document.createElement("td");
    td3.innerHTML=mail;

    var td4=document.createElement("td");
    var delete_button=document.createElement("button");
    delete_button.innerHTML="Delete Question";
    delete_button.setAttribute("class","btn btn-danger");
    delete_button.setAttribute("type","button");
    delete_button.setAttribute("onclick","Delete(this)");
    delete_button.setAttribute("id",Question_ID);
    td4.appendChild(delete_button);

    var td5=document.createElement("td");
    var details_button=document.createElement("button");
    details_button.innerHTML="Report Details";
    details_button.setAttribute("class","btn btn-success");
    details_button.setAttribute("type","button");
    details_button.setAttribute("onclick","Details(this)");
    details_button.setAttribute("id",Question_ID);
    td5.appendChild(details_button);

    var td6=document.createElement("td");
    var cancel_button=document.createElement("button");
    cancel_button.setAttribute("type","button");
    cancel_button.setAttribute("class","close");
    cancel_button.setAttribute("aria-label","Close");
    cancel_button.setAttribute("onclick","Close(this)");
    cancel_button.setAttribute("id",Question_ID);
    var span=document.createElement("span");
    span.setAttribute("aria-hidden","true");
    span.innerHTML="&times;";
    cancel_button.appendChild(span);
    td6.appendChild(cancel_button);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    parent.appendChild(tr);
}
function Close(element)
{
    document.getElementById("TD"+element.id).remove();
}
function Delete(elem)
{
    var con=confirm("Are you sure you want to delete this question with it's comments?");
    if(con)
    {
        document.getElementById("TD"+element.id).remove();
        http.onreadystatechange = PT;

        function PT()
        {
            if (http.readyState == 4 && http.status == 200)
            {
            }
        }
        http.open("GET", "DeleteQuestion?id="+elem.id, true);
        http.send(null);
    }
}
function Details(element)
{
    document.getElementById("head").remove();
    document.getElementById("MyTable").remove();
    DrawDetails(element);
}
function DrawDetails(elem) {
    http.onreadystatechange = PT;

    function PT()
    {
        var data = http.responseText;
        var obj = JSON.parse(data);

        if (http.readyState == 4 && http.status == 200)
        {
            MoreDetails=obj;
            var Div_Control=document.createElement("div");
            Div_Control.setAttribute("id",""+obj[0]);
            var title = document.createElement("h1");
            title.innerHTML=obj[1];

            var body = document.createElement("p");
            body.innerHTML=obj[2];

            var date_div=document.createElement("div");
            var mail = document.createElement("span");
            var tag=document.createElement("span");
            mail.setAttribute("class","badge");
            tag.setAttribute("class","badge");
            mail.innerHTML=obj[3];
            tag.innerHTML=obj[4];
            date_div.appendChild(tag);
            date_div.appendChild(mail);


            var button = document.createElement("button");
            button.setAttribute("type","submit");
            button.setAttribute("class","btn btn-danger");
            button.setAttribute("id",obj[3]);//mail
            button.setAttribute("onclick","BlockUser(this);");
            button.innerHTML="Block The User";




            var hr = document.createElement("hr");

            var container=document.getElementById("container");
            Div_Control.appendChild(title);
            Div_Control.appendChild(body);
            if(obj[6]!="")
            {
                var Img=document.createElement("img");
                Img.setAttribute("src","Questions_Image/"+obj[6]);
                Img.setAttribute("class","img-rounded");
                Div_Control.appendChild(Img);
            }
            Div_Control.appendChild(date_div);
            Div_Control.appendChild(button);
            Div_Control.appendChild(hr);
            container.appendChild(Div_Control);
            for (var i = obj.length-1; i >=7; i--)
            {
                DrawComment(obj[i].mail,obj[i].comment,obj[i].image,0);
            }
        }
    }
    http.open("GET", "details?Question_ID="+elem.id, true);
    http.send(null);
}
function DrawComment(mail,comment,image,flag) {
    div1 = document.createElement("div");
    div1.setAttribute("class", "container ");

    div2 = document.createElement("div");
    div2.setAttribute("class", "row");

    Image_Div_1=document.createElement("div");
    Image_Div_1.setAttribute("class","col-sm-1");
    Image_Div_2=document.createElement("div");
    Image_Div_2.setAttribute("class","thumbnail");
    Image_Div_1.appendChild(Image_Div_2);
    div2.appendChild(Image_Div_1);
    im=document.createElement("img");
    im.setAttribute("class","img-responsive user-photo");
    im.setAttribute("src","Avatars/"+image);
    Image_Div_2.appendChild(im);

    div3 = document.createElement("div");
    div4 = document.createElement("div");
    div4.setAttribute("class", "panel panel-default");
    div5 = document.createElement("div");
    div5.setAttribute("class", "panel-heading");
    stro = document.createElement("strong");
    stro.innerHTML = mail;
    div5.appendChild(stro);
    div6 = document.createElement("panel-body");
    div6.innerHTML = comment;
    div4.appendChild(div5);
    div4.appendChild(div6);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    var all = document.getElementById("comments");
    if (flag == 0) {
        all.appendChild(div1);
    }
    else {
        all.insertBefore(div1, all.firstChild);
    }
}

