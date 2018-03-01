window.onload = function ()
{
    document.getElementById("jobs").setAttribute("class","active");
    document.getElementById("questions").setAttribute("class","");
    document.getElementById("MyOption").setAttribute("class","");
    document.getElementById("Recommend").setAttribute("class","");
    GetJobs();
};
var http = new XMLHttpRequest();
function GetJobs() {
    http.onreadystatechange = PT;

    function PT()
    {
        var data = http.responseText;
        var obj = JSON.parse(data);
        if (http.readyState == 4 && http.status == 200)
        {
            for (var i = (obj.length-1); i >=1; i--)
            {
                var name=obj[i].fname+" "+obj[i].lname;
                DrawJobPost(obj[i].title,obj[i].body,obj[i].address,obj[i].email_1,obj[i].email_2,name);
            }
            document.getElementById("Spinner").remove();
        }
    }
    http.open("GET", "jobs_loader", true);
    http.send(null);
}

function DrawJobPost(title,body,address,email_1,email_2,name)
{
    var Container=document.getElementById("div_container");

    var Section=document.createElement("section");
    Section.setAttribute("id","wrapper");

    Container.appendChild(Section);

    var RowDiv1=document.createElement("div");
    RowDiv1.setAttribute("class","row");

    Section.appendChild(RowDiv1);

    var ArticleDiv=document.createElement("div")
    ArticleDiv.setAttribute("class","article");

    var Div_=document.createElement("div");
    Div_.setAttribute("class","col-md-10");
    Div_.appendChild(ArticleDiv);
    RowDiv1.appendChild(Div_);

    var h3_1=document.createElement("h3");
    h3_1.innerHTML=title;

    ArticleDiv.appendChild(h3_1);

    var ul=document.createElement("ul");
    ul.setAttribute("class","list-unstyled list-inline");

    var li=document.createElement("li");
    li.innerHTML=name;
    var i=document.createElement("i");
    i.setAttribute("class","fa fa-user");
    li.appendChild(i);
    ul.appendChild(li);

    ArticleDiv.appendChild(ul);


    var ArticleContent=document.createElement("div");
    ArticleContent.setAttribute("class","article-content");
    ArticleDiv.appendChild(ArticleContent);

    var Para=document.createElement("p");
    Para.innerHTML=body;
    ArticleContent.appendChild(Para);

    var blockquote=document.createElement("blockquote");
    blockquote.setAttribute("class","hero");
    var Para2=document.createElement("p");
    Para2.innerHTML=address;
    blockquote.appendChild(Para2);

    ArticleContent.appendChild(blockquote);


    var RowDiv2=document.createElement("div");
    RowDiv2.setAttribute("class","col-md-2");
    RowDiv1.appendChild(RowDiv2);

    var Normal_DIV=document.createElement("div");
    var h3_2=document.createElement("h3");
    h3_2.innerHTML="Contacts";
    Normal_DIV.appendChild(h3_2);

    RowDiv2.appendChild(Normal_DIV);

    var Div_Group=document.createElement("div");
    Div_Group.setAttribute("class","list-group");
    Div_Group.setAttribute("id","list-group");

    Normal_DIV.appendChild(Div_Group);


    var a=document.createElement("a");
    a.setAttribute("class","list-group-item");
    a.setAttribute("href","#");
    var span=document.createElement("span");
    span.setAttribute("class","fa-stack fa-lg");
    a.appendChild(span);
    var i_1=document.createElement("i");
    i_1.setAttribute("class","fa-stack-2x fa fa-circle");
    var i_2=document.createElement("i");
    i_2.setAttribute("class","fa-stack-1x text-primary fa fa-envelope");
    span.appendChild(i_1);
    span.appendChild(i_2);
    var span2=document.createElement("span");
    span2.setAttribute("class","");
    span2.innerHTML=email_1;
    a.appendChild(span2);



    var a2=document.createElement("a");
    a2.setAttribute("class","list-group-item");
    a2.setAttribute("href","#");
    var span=document.createElement("span");
    span.setAttribute("class","fa-stack fa-lg");
    a2.appendChild(span);
    var i_1=document.createElement("i");
    i_1.setAttribute("class","fa-stack-2x fa fa-circle");
    var i_2=document.createElement("i");
    i_2.setAttribute("class","fa-stack-1x text-primary fa fa-envelope");
    span.appendChild(i_1);
    span.appendChild(i_2);
    var span2=document.createElement("span");
    span2.setAttribute("class","");
    span2.innerHTML=email_2;
    a2.appendChild(span2);


    Div_Group.appendChild(a);
    Div_Group.appendChild(a2);
    Container.appendChild(document.createElement("hr"));
}
function ClearJobs()
{
    var parent=document.getElementById("div_container");
    while (parent.hasChildNodes())
    {
        parent.removeChild(parent.lastChild);
    }
}
function AddJob() {
    document.getElementById("JobAdding").remove();
    ClearJobs();
    var Hint=document.createElement("h2");
    Hint.innerHTML="You have only one Advertisment per Week";
    Hint.setAttribute("style","color:red");
    var Alert=document.createElement("div");
    Alert.setAttribute("id","Alert");
    var div=document.createElement("div");
    div.setAttribute("class","container");
    var form=document.createElement("form");
    //form.setAttribute("method","GET");
    //form.setAttribute("action","AddQuestion");

    var div1=document.createElement("div");
    div1.setAttribute("class","form-group");
    var label1=document.createElement("label");
    label1.innerHTML="Job Title";
    var input1=document.createElement("input");
    input1.setAttribute("class","form-control");
    input1.setAttribute("id","title");
    input1.setAttribute("name","title");
    input1.setAttribute("placeholder","Job Title");
    div1.appendChild(label1);
    div1.appendChild(input1);

    var div4=document.createElement("div");
    div4.setAttribute("class","form-group");
    var label1=document.createElement("label");
    label1.innerHTML="Address";
    var input1=document.createElement("input");
    input1.setAttribute("class","form-control");
    input1.setAttribute("id","address");
    input1.setAttribute("name","address");
    input1.setAttribute("placeholder","Job Address");
    div4.appendChild(label1);
    div4.appendChild(input1);



    var div5=document.createElement("div");
    div5.setAttribute("class","form-group");
    var label1=document.createElement("label");
    label1.innerHTML="First Contact Email";
    var input1=document.createElement("input");
    input1.setAttribute("class","form-control");
    input1.setAttribute("id","email_1");
    input1.setAttribute("name","email_1");
    input1.setAttribute("placeholder","Contact Email 1");
    div5.appendChild(label1);
    div5.appendChild(input1);



    var div6=document.createElement("div");
    div6.setAttribute("class","form-group");
    var label1=document.createElement("label");
    label1.innerHTML="Second Contact Email";
    var input1=document.createElement("input");
    input1.setAttribute("class","form-control");
    input1.setAttribute("id","email_2");
    input1.setAttribute("name","email_2");
    input1.setAttribute("placeholder","Contact Email 2");
    div6.appendChild(label1);
    div6.appendChild(input1);





    var div3=document.createElement("div");
    div3.setAttribute("class","form-group");
    var label3=document.createElement("label");
    label3.innerHTML="Job Body";
    var textArea=document.createElement("textarea");
    textArea.setAttribute("class","form-control");
    textArea.setAttribute("rows","5");
    textArea.setAttribute("id","body");
    textArea.setAttribute("name","body");

    div3.appendChild(label3);
    div3.appendChild(textArea);


    var button = document.createElement("button");
    button.setAttribute("type","button");
    button.setAttribute("class","btn btn-success");
    button.setAttribute("onclick","AddJob2();");
    button.innerHTML="Submit";


    form.appendChild(div1);
    form.appendChild(div4);
    form.appendChild(div5);
    form.appendChild(div6);
    form.appendChild(div3);
    form.appendChild(Alert);
    form.appendChild(button);

    div.appendChild(Hint);
    div.appendChild(form);

    document.getElementById("div_container").appendChild(div);
}
function AddJob2() {
    var title=document.getElementById("title").value;
    var address=document.getElementById("address").value;
    var email_1=document.getElementById("email_1").value;
    var email_2=document.getElementById("email_2").value;
    var body=document.getElementById("body").value;
    var alert=document.getElementById("Alert");

    if(title.length==0||address.length==0||email_1.length==0||email_2.length==0||body.length==0)
    {
        alert.setAttribute("class","alert alert-danger");
        alert.innerHTML="Please Fill All Fields";
    }
    else if(title.length>100||title<20)
    {
        alert.setAttribute("class","alert alert-danger");
        alert.innerHTML="Title Length More than 20 char and less than 100 char";
    }
    else if(address.length>100||address<20)
    {
        alert.setAttribute("class","alert alert-danger");
        alert.innerHTML="Address Length More than 20 char and less than 100 char";
    }
    else if(body.length>1000||address<100)
    {
        alert.setAttribute("class","alert alert-danger");
        alert.innerHTML="Body Length More than 100 char and less than 1000 char";
    }
    else if(!validateEmail(email_1)||!validateEmail(email_2))
    {
        alert.setAttribute("class","alert alert-danger");
        alert.innerHTML="Email Not Correct";
    }
    else
    {
        http.onreadystatechange = PT;

        function PT()
        {
            var data = http.responseText;
            if (http.readyState == 4 && http.status == 200)
            {
                window.location="JobsView";
            }
        }
        http.open("GET", "AddJob?title="+title+'&body='+body+'&address='+address+'&email_1='+email_1+'&email_2='+email_2, true);
        http.send(null);

    }
}
function validateEmail(email)
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}