window.onload = function ()
{
    document.getElementById("home").setAttribute("class","");
    document.getElementById("questions").setAttribute("class","active");
    document.getElementById("MyOption").setAttribute("class","");
    document.getElementById("Recommend").setAttribute("class","");
    GetTags();
};
var MyData ; //have all questions
var http = new XMLHttpRequest();

function GetTags() {
        http.onreadystatechange = PT;

        function PT()
        {

            var data = http.responseText;
            var obj = JSON.parse(data);

            if (http.readyState == 4 && http.status == 200)
            {
                for (var i = 0; i <obj.length; i++)
                {
                    var parent=document.getElementById("Options");
                    var option=document.createElement("option");
                    option.innerHTML=obj[i].tag;
                    parent.appendChild(option);
                    GetPosts();
                }
            }
        }
        http.open("GET", "tags_loader", true);
        http.send(null);
}

function GetPosts()
{

    http.onreadystatechange = PT;

    function PT()
    {
        var data = http.responseText;
        var obj = JSON.parse(data);
        MyData=obj;
        if (http.readyState == 4 && http.status == 200)
        {
            for (var i = (obj.length-1); i >=1; i--)
            {
                DrawPost(obj[0],obj[i].id,obj[i].title,obj[i].mail,obj[i].tag,obj[i].body);
            }
        }
    }
    http.open("GET", "questions_loader", true);
    http.send(null);
}
function OnSelectedIndexChange(elem) {
    ClearDrawing();
    ClearComments();
    for (var i = (MyData.length - 1); i >= 1; i--) {
        if (elem.value == MyData[i].tag) {
            DrawPost(MyData[0], MyData[i].id, MyData[i].title, MyData[i].mail, MyData[i].tag, MyData[i].body);
        }

    }
}
function DrawPost(check,id,title_,mail_,tag_,body_)
{
        var Div_Control=document.createElement("div");
        Div_Control.setAttribute("id",id);
        var title = document.createElement("h1");
        title.innerHTML=title_;

        var body = document.createElement("p");
        body.innerHTML=body_;

        var date_div=document.createElement("div");
        var mail = document.createElement("span");
        var tag=document.createElement("span");
        mail.setAttribute("class","badge");
        tag.setAttribute("class","badge");
        mail.innerHTML=mail_;
        tag.innerHTML=tag_;
        date_div.appendChild(tag);
        date_div.appendChild(mail);


        var button = document.createElement("button");
        button.setAttribute("type","submit");
        button.setAttribute("class","btn btn-success");
        button.setAttribute("id",id);
        button.setAttribute("onclick","MoreDetails(this);");
        button.innerHTML="More Details";

        var button2 = document.createElement("button");
        button2.setAttribute("type","submit");
        button2.setAttribute("class","btn btn-danger");
        button2.setAttribute("name","report");
        button2.setAttribute("id",id);
        button2.setAttribute("onclick","Report(this);");
        button2.innerHTML="Report Question";



        if(check=='2')
        {
            var button3 = document.createElement("button");
            button3.setAttribute("type","button");
            button3.setAttribute("class","btn btn-danger");
            button3.setAttribute("id",id);
            button3.setAttribute("onclick","Delete(this);");
            button3.innerHTML="Delete";
        }





        var hr = document.createElement("hr");

        var container=document.getElementById("questionsContrainer");
        Div_Control.appendChild(title);
        Div_Control.appendChild(body);
        Div_Control.appendChild(date_div);
        Div_Control.appendChild(button);

    if(check=='2')
        {
            Div_Control.appendChild(button3);
        }
        else
    {
        Div_Control.appendChild(button2);
    }
        Div_Control.appendChild(hr);
        container.appendChild(Div_Control);
}
function ClearDrawing()
{
    var parent=document.getElementById("questionsContrainer");
    while (parent.hasChildNodes())
    {
        parent.removeChild(parent.lastChild);
    }
}
function ClearComments()
{
    var parent=document.getElementById("comments");
    while (parent.hasChildNodes())
    {
        parent.removeChild(parent.lastChild);
    }
}
function MoreDetails(elem)
{
    ClearDrawing();
    http.onreadystatechange = PT;

    function PT()
    {

        var data = http.responseText;
        var obj = JSON.parse(data);

        if (http.readyState == 4 && http.status == 200)
        {
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
            button.setAttribute("class","btn btn-info");
            button.setAttribute("id",obj[0]);
            button.setAttribute("onclick","MakeComment(this);");
            button.innerHTML="Make Comment";


            var hr = document.createElement("hr");

            var container=document.getElementById("questionsContrainer");
            Div_Control.appendChild(title);
            Div_Control.appendChild(body);
            Div_Control.appendChild(date_div);
            Div_Control.appendChild(button);
            Div_Control.appendChild(hr);
            container.appendChild(Div_Control);
            for (var i = 5; i <obj.length; i++)
            {
                DrawComment(obj[i].mail,obj[i].comment);
            }
        }
    }
    http.open("GET", "details?Question_ID="+elem.id, true);
    http.send(null);
}
function DrawComment(mail,comment)
{
    div1=document.createElement("div");
    div1.setAttribute("class","container");
    div2=document.createElement("div");
    div2.setAttribute("class","row");
    div3=document.createElement("div");
    div3.setAttribute("class","col-sm-5");
    div4=document.createElement("div");
    div4.setAttribute("class","panel panel-default");
    div5=document.createElement("div");
    div5.setAttribute("class","panel-heading");
    stro=document.createElement("strong");
    stro.innerHTML=mail;
    div5.appendChild(stro);
    div6=document.createElement("panel-body");
    div6.innerHTML=comment;
    div4.appendChild(div5);
    div4.appendChild(div6);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    var all = document.getElementById("comments");
    all.appendChild(div1);
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
                var container=document.getElementById("questionsContrainer");
                container.removeChild(document.getElementById(""+elem.id));
            }
        }
        http.open("GET", "DeleteQuestion?id="+elem.id, true);
        http.send(null);
    }


}
function  MakeComment(elem)
{
    div=document.createElement("div");
    div.setAttribute("class","form-group");
    label=document.createElement("label");
    label.setAttribute("for","comment");
    label.innerHTML="Comment:";
    textArea=document.createElement("textarea");
    textArea.setAttribute("class","form-control");
    textArea.setAttribute("row","3");
    div.appendChild(label);
    div.appendChild(textArea);
    document.getElementById("questionsContrainer").appendChild(div);
    elem.setAttribute("style","visibility :hidden");
}
function Report(elem)
{
    alert(elem.id);
}


