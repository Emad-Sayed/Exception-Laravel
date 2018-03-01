window.onload = function ()
{
    document.getElementById("jobs").setAttribute("class","");
    document.getElementById("questions").setAttribute("class","");
    document.getElementById("MyOption").setAttribute("class","active");
    document.getElementById("Recommend").setAttribute("class","");
    AddHead();
    GetReports();
};

var http = new XMLHttpRequest();

function GetReports() {
    http.onreadystatechange = PT;

    function PT()
    {

        var data = http.responseText;
        var obj = JSON.parse(data);

        if (http.readyState == 4 && http.status == 200)
        {
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
    delete_button.setAttribute("onclick","DeleteRow(this)");
    delete_button.setAttribute("id",Question_ID);
    td4.appendChild(delete_button);

    var td5=document.createElement("td");
    var details_button=document.createElement("button");
    details_button.innerHTML="Report Details";
    details_button.setAttribute("class","btn btn-success");
    details_button.setAttribute("type","button");
    details_button.setAttribute("id",Question_ID);
    td5.appendChild(details_button);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    parent.appendChild(tr);
}
function DeleteRow(element)
{
    document.getElementById("TD"+element.id).remove();
    //Delete(element);

}
function Delete(elem)
{
    var con=confirm("Are you sure you want to delete this question with it's comments?");
    if(con)
    {
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