window.onload = function ()
{
    document.getElementById("jobs").setAttribute("class","active");
    document.getElementById("questions").setAttribute("class","");
    document.getElementById("MyOption").setAttribute("class","");
    document.getElementById("Recommend").setAttribute("class","");
    DrawJobPost();
};
function DrawJobPost()
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
    h3_1.innerHTML="Pellentesque habitant morbi tristiqu";

    ArticleDiv.appendChild(h3_1);

    var ul=document.createElement("ul");
    ul.setAttribute("class","list-unstyled list-inline");

    var li=document.createElement("li");
    li.innerHTML="Sergio Rodriguez";
    var i=document.createElement("i");
    i.setAttribute("class","fa fa-user");
    li.appendChild(i);
    ul.appendChild(li);

    ArticleDiv.appendChild(ul);


    var ArticleContent=document.createElement("div");
    ArticleContent.setAttribute("class","article-content");
    ArticleDiv.appendChild(ArticleContent);

    var Para=document.createElement("p");
    Para.innerHTML="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero consectetur adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat";
    ArticleContent.appendChild(Para);

    var blockquote=document.createElement("blockquote");
    blockquote.setAttribute("class","hero");
    var Para2=document.createElement("p");
    Para2.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit posuere erat a ante.";
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
    span2.innerHTML="Email";
    a.appendChild(span2);

    Div_Group.appendChild(a);


}