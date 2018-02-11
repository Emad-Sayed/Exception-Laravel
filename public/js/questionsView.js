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
                var Div_Control=document.createElement("div");
                Div_Control.setAttribute("id",""+obj[i].id);
                var title = document.createElement("h1");
                title.innerHTML=obj[i].title;

                var body = document.createElement("p");
                body.innerHTML=obj[i].body;

                var date_div=document.createElement("div");
                var mail = document.createElement("span");
                var tag=document.createElement("span");
                mail.setAttribute("class","badge");
                tag.setAttribute("class","badge");
                mail.innerHTML=obj[i].mail;
                tag.innerHTML=obj[i].tag;
                date_div.appendChild(tag);
                date_div.appendChild(mail);


                var form=document.createElement("form");
                form.setAttribute("method","GET");
                form.setAttribute("action","details");
                var input=document.createElement("input");
                input.setAttribute("name","Question_ID");
                input.setAttribute("value",obj[i].id);
                input.setAttribute("type","hidden");

                var button = document.createElement("button");
                button.setAttribute("type","submit");
                button.setAttribute("class","btn btn-success");
                button.setAttribute("id",obj[i].id);
                //button.setAttribute("onclick","MoreDetails(this);");
                button.innerHTML="More Details";
                form.appendChild(input);
                form.appendChild(button);


                if(obj[0]=='2')
                {
                    var button2 = document.createElement("button");
                    button2.setAttribute("type","button");
                    button2.setAttribute("class","btn btn-danger");
                    button2.setAttribute("id",obj[i].id);
                    button2.setAttribute("onclick","Delete(this);");
                    button2.innerHTML="Delete";
                }





                var hr = document.createElement("hr");

                var container=document.getElementById("questionsContrainer");
                Div_Control.appendChild(title);
                Div_Control.appendChild(body);
                Div_Control.appendChild(date_div);
                Div_Control.appendChild(form);
                if(obj[0]=='2')
                {
                    Div_Control.appendChild(button2);
                }
                Div_Control.appendChild(hr);
                container.appendChild(Div_Control);
            }
        }
    }
    http.open("GET", "questions_loader", true);
    http.send(null);
}

function ClearDrawing()
{
    var parent=document.getElementById("questionsContrainer");
    while (parent.hasChildNodes())
    {
        parent.removeChild(parent.lastChild);
    }
}
function MoreDetails(elem)
{
    alert(elem.id);
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

function OnSelectedIndexChange(elem)
{
    var parent=document.getElementById("questionsContrainer");
    while (parent.hasChildNodes())
    {
        parent.removeChild(parent.lastChild);
    }
    for (var i = (MyData.length-1); i >=1; i--)
    {
        if(elem.value==MyData[i].tag)
        {
            var Div_Control=document.createElement("div");
            Div_Control.setAttribute("id",""+MyData[i].id);
            var title = document.createElement("h1");
            title.innerHTML=MyData[i].title;

            var body = document.createElement("p");
            body.innerHTML=MyData[i].body;

            var date_div=document.createElement("div");
            var mail = document.createElement("span");
            var tag=document.createElement("span");
            mail.setAttribute("class","badge");
            tag.setAttribute("class","badge");
            mail.innerHTML=MyData[i].mail;
            tag.innerHTML=MyData[i].tag;
            date_div.appendChild(tag);
            date_div.appendChild(mail);


            var form=document.createElement("form");
            form.setAttribute("method","GET");
            form.setAttribute("action","details");
            var input=document.createElement("input");
            input.setAttribute("name","Question_ID");
            input.setAttribute("value",MyData[i].id);
            input.setAttribute("type","hidden");

            var button = document.createElement("button");
            button.setAttribute("type","submit");
            button.setAttribute("class","btn btn-success");
            button.setAttribute("id",MyData[i].id);
            //button.setAttribute("onclick","MoreDetails(this);");
            button.innerHTML="More Details";
            form.appendChild(input);
            form.appendChild(button);


            if(MyData[0]=='2')
            {
                var button2 = document.createElement("button");
                button2.setAttribute("type","button");
                button2.setAttribute("class","btn btn-danger");
                button2.setAttribute("id",MyData[i].id);
                button2.setAttribute("onclick","Delete(this);");
                button2.innerHTML="Delete";
            }

            var hr = document.createElement("hr");

            var container=document.getElementById("questionsContrainer");
            Div_Control.appendChild(title);
            Div_Control.appendChild(body);
            Div_Control.appendChild(date_div);
            Div_Control.appendChild(form);
            if(MyData[0]=='2')
            {
                Div_Control.appendChild(button2);
            }
            Div_Control.appendChild(hr);
            container.appendChild(Div_Control);
        }

    }
}