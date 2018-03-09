
window.onload = function ()
{
    document.getElementById("jobs").setAttribute("class","");
    document.getElementById("questions").setAttribute("class","active");
    document.getElementById("MyOption").setAttribute("class","");
    document.getElementById("Recommend").setAttribute("class","");
    GetTags();
};
var MyData ;     //have all questions
var Questions_Number;
var Tags;        // have all Tags
var MoreDetails; //Question Comments
var Logged_Mail; // User Mail
var Logged_Image;
var http = new XMLHttpRequest();

function GetTags() {
        http.onreadystatechange = PT;

        function PT()
        {

            var data = http.responseText;
            var obj = JSON.parse(data);

            if (http.readyState == 4 && http.status == 200)
            {
                Logged_Mail=obj[0];
                Logged_Image=obj[1];
                Tags=obj;
                var parent=document.getElementById("Options");
                for (var i = 2; i <obj.length; i++)
                {
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
        Questions_Number=MyData.length;
        document.getElementById("Question_Number").innerHTML="Questions Number  : "+Questions_Number;
        if (http.readyState == 4 && http.status == 200)
        {
            for (var i = (obj.length-1); i >=1; i--)
            {
                DrawPost(obj[0],obj[i].id,obj[i].title,obj[i].mail,obj[i].tag,obj[i].body,MyData[i].img);
            }
            document.getElementById("Spinner").remove();
        }
    }
    http.open("GET", "questions_loader", true);
    http.send(null);
}
function OnSelectedIndexChange(elem) {
    ClearDrawing();
    ClearComments();
    var Temp=0;
    for (var i = (MyData.length - 1); i >= 1; i--) {
        if (elem.value == MyData[i].tag) {
            DrawPost(MyData[0], MyData[i].id, MyData[i].title, MyData[i].mail, MyData[i].tag, MyData[i].body,MyData[i].img);
            Temp++;
        }
        document.getElementById("Question_Number").innerHTML="Questions Number : "+Temp;
    }
}
function MyQuestions() {
    ClearDrawing();
    ClearComments();
    var Temp=0;
    for (var i = (MyData.length - 1); i >= 1; i--) {
        if (Logged_Mail == MyData[i].mail) {
            var Div_Control=document.createElement("div");
            Div_Control.setAttribute("id",MyData[i].id);
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


            var button = document.createElement("button");
            button.setAttribute("type","submit");
            button.setAttribute("class","btn btn-success");
            button.setAttribute("id",MyData[i].id);
            button.setAttribute("onclick","MoreDetails(this,1);");
            button.innerHTML="More Details";



   /*         var button2 = document.createElement("button");
            button2.setAttribute("type","submit");
            button2.setAttribute("class","btn btn-danger");
            button2.setAttribute("name","Delete My Question");
            button2.setAttribute("id",MyData[i].id);
            button2.setAttribute("onclick","DeleteMyQuestion(this);");
            button2.innerHTML="Delete";*/


            var hr = document.createElement("hr");

            var container=document.getElementById("questionsContrainer");
            Div_Control.appendChild(title);
            Div_Control.appendChild(body);
            if(MyData[i].img!="")
            {
                var Img=document.createElement("img");
                Img.setAttribute("src","Questions_Image/"+MyData[i].img);
                Img.setAttribute("class","img-rounded");
                Div_Control.appendChild(Img);
            }
            Div_Control.appendChild(date_div);
            Div_Control.appendChild(button);
            Div_Control.appendChild(hr);
            container.appendChild(Div_Control);
            Temp++;
        }
        document.getElementById("Question_Number").innerHTML="Questions Number : "+Temp;

    }
}
function DrawPost(check,id,title_,mail_,tag_,body_,question_Image)
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
        button.setAttribute("onclick","MoreDetails(this,0);");
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
    if(question_Image!="")
    {
        var Img=document.createElement("img");
        Img.setAttribute("src","Questions_Image/"+question_Image);
        Img.setAttribute("class","img-rounded");
        Div_Control.appendChild(Img);
    }
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
function MoreDetails(elem,flag)
{
    document.getElementById("option-div").remove();
    document.getElementById("buttons_option").setAttribute("style","display:none");
    ClearDrawing();
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
            button.setAttribute("class","btn btn-info");
            button.setAttribute("id",obj[0]);
            button.setAttribute("onclick","MakeComment(this);");
            button.innerHTML="Make Comment";


            var hr = document.createElement("hr");

            var container=document.getElementById("questionsContrainer");
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
            if(flag==1)
            {
                var form=document.createElement("form");
                form.setAttribute("method","POST");
                form.setAttribute("enctype","multipart/form-data");
                form.setAttribute("name","MyForm");
                form.setAttribute("action","AddQuestionImage");
                form.setAttribute("onsubmit","return ValidateImageExist()");
                var Input_File=document.createElement("input");
                Input_File.setAttribute("type","file");
                Input_File.setAttribute("name","question_image");

                var br=document.createElement("br");
                var Question_ID=document.createElement("input");
                Question_ID.setAttribute("type","text");
                Question_ID.style.visibility="hidden";
                Question_ID.setAttribute("name","Question_ID");
                Question_ID.setAttribute("value",elem.id);
                br.appendChild(Question_ID);

                var Token=document.createElement("input");
                Token.setAttribute("type","hidden");
                Token.setAttribute("name","_token");
                var metas = document.getElementById('MetaID');

                Token.setAttribute("value",metas.getAttribute("content"));

                var Submit=document.createElement("input");
                Submit.setAttribute("type","submit");
                Submit.setAttribute("value","Add Image To Question");
                Submit.setAttribute("class","btn btn-warning");




                form.appendChild(Token);
                form.appendChild(Input_File);
                form.appendChild(br);
                form.appendChild(Submit);
                Div_Control.appendChild(form);
            }
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
function ValidateImageExist()
{
  var Img=document.forms["MyForm"]["question_image"].value;
  if(Img=="")
  {
      alert("Please Select an Image");
      return false;
  }
  return true;
}
function DrawComment(mail,comment,image,flag)
{
    div1=document.createElement("div");
    div1.setAttribute("class","container ");

    div2=document.createElement("div");
    div2.setAttribute("class","row");

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
    if(flag==0)
    {
        all.appendChild(div1);
    }
    else
    {
        all.insertBefore(div1,all.firstChild);
    }
}
function AddQuestion()
{
    document.getElementById("option-div").remove();
    document.getElementById("buttons_option").setAttribute("style","display:none");
    ClearDrawing();
    var Hint=document.createElement("h2");
    Hint.innerHTML="Please make sure this question that you want to add is not asked before!";
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
    label1.innerHTML="Question Title";
    var input1=document.createElement("input");
    input1.setAttribute("class","form-control");
    input1.setAttribute("id","question_title");
    input1.setAttribute("name","question_title");
    input1.setAttribute("placeholder","Question Title");
    div1.appendChild(label1);
    div1.appendChild(input1);

    var div2=document.createElement("div");
    div2.setAttribute("class","form-group");
    var label2=document.createElement("label");
    label2.innerHTML="SELECT TAG";
    var select=document.createElement("select");
    select.setAttribute("class","form-control");
    select.setAttribute("name","tag");
    select.setAttribute("id","tag");
    for (var i = 2; i <Tags.length; i++)
    {
        var option=document.createElement("option");
        option.innerHTML=Tags[i].tag;
        select.appendChild(option);
    }
    div2.appendChild(label2);
    div2.appendChild(select);

    var div3=document.createElement("div");
    div3.setAttribute("class","form-group");
    var label3=document.createElement("label");
    label3.innerHTML="Question Body";
    var textArea=document.createElement("textarea");
    textArea.setAttribute("class","form-control");
    textArea.setAttribute("rows","5");
    textArea.setAttribute("id","question_body");
    textArea.setAttribute("name","question_body");

    div3.appendChild(label3);
    div3.appendChild(textArea);




    var button = document.createElement("button");
    button.setAttribute("type","button");
    button.setAttribute("class","btn btn-success");
    button.setAttribute("onclick","AddQuestion2();");
    button.innerHTML="Submit";


    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(Alert);
    form.appendChild(button);

    div.appendChild(Hint);
    div.appendChild(form);

    document.getElementById("questionsContrainer").appendChild(div);
}
function AddQuestion2()
{
    var title=document.getElementById("question_title").value;
    var body=document.getElementById("question_body").value;
    var tag=document.getElementById("tag").value;
    if(title.length>100||title.length<20)
    {
        var alert=document.getElementById("Alert");
        alert.setAttribute("class","alert alert-danger");
        alert.innerHTML="Title must be more than 20 Char and less than 100";
    }
    else if(body.length>1000||body.length<50)
    {
        var alert=document.getElementById("Alert");
        alert.setAttribute("class","alert alert-danger");
        alert.innerHTML="Body must be more than 50 Char and has all details";
    }
    else
    {
        http.onreadystatechange = PT;

        function PT()
        {
            if (http.readyState == 4 && http.status == 200)
            {
                window.location="questions";
            }
        }
        http.open("GET", "AddQuestion?question_title="+title+'&question_body='+body+'&tag='+tag, true);
        http.send(null);

    }
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
                Questions_Number=Questions_Number-1;
                document.getElementById("Question_Number").innerHTML="Questions Number : "+Temp;
            }
        }
        http.open("GET", "DeleteQuestion?id="+elem.id, true);
        http.send(null);
    }
}
/*function DeleteMyQuestion(elem)
{
    alert(elem.id);
}*/
function  MakeComment(elem)
{
    div=document.createElement("div");
    div.setAttribute("class","form-group");
    div.setAttribute("id","comment-block");
    label=document.createElement("label");
    label=document.createElement("comment-label");
    label.setAttribute("for","comment");
    label.innerHTML="Comment:";
    textArea=document.createElement("textarea");
    textArea.setAttribute("class","form-control");
    textArea.setAttribute("row","3");
    textArea.setAttribute("id","comment-area");
    div.appendChild(label);
    div.appendChild(textArea);

    var button = document.createElement("button");
    button.setAttribute("type","submit");
    button.setAttribute("class","btn btn-info");
    button.setAttribute("id","comment-submit");
    button.setAttribute("onclick","CreateComment();");

    button.innerHTML="Comment";
    document.getElementById("questionsContrainer").appendChild(div);
    document.getElementById("questionsContrainer").appendChild(button);

    elem.setAttribute("style","visibility :hidden");
}
function CreateComment()
{
    var comment=document.getElementById("comment-area").value;
    if(comment.length>1000||comment.length==0)
    {
        alert("Comment Length Must be less than 100 and not empty")
    }
    else
    {
        DrawComment(MoreDetails[5],comment,Logged_Image,1);
        var parent=document.getElementById("comment-block");
        document.getElementById("comment-block").remove();
        document.getElementById("comment-submit").remove();
    }

        http.onreadystatechange = PT;

        function PT()
        {
            if (http.readyState == 4 && http.status == 200)
            {
            }
        }
        http.open("GET", "AddComment?comment="+comment+'&mail='+MoreDetails[5]+'&question_id='+MoreDetails[0], true);
        http.send(null);

}
function Report(elem)
{
    http.onreadystatechange = PT;
    function PT()
    {
        var data = http.responseText;
        if (http.readyState == 4 && http.status == 200)
        {
            if(data=='false')
            {
                alert("The Question Already Reported");
            }
            else
            {
                alert("Question Reported");
            }
        }
    }
    http.open("GET", "ReportQuestion?Question_ID="+elem.id, true);
    http.send(null);
}



