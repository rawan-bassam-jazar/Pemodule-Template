 

 function check(){
    var name=document.getElementById("your-name").value;
    var mail=document.getElementById("your-email").value;
    var mess=document.getElementById("your-message").value;
    console.log(name);
    console.log(mail);
    console.log(mess);
   
    if(name==""){
        document.getElementById("your-name").style.borderColor="red";
    }
    if(mail==""){
        document.getElementById("your-email").style.borderColor="red";
       
    }
    if(mess==""){
        document.getElementById("your-message").style.borderColor="red";
        
    }
    if(name==""&&mess==""&&mail==""){
        document.getElementById("your-name").style.borderColor="red";
        document.getElementById("your-email").style.borderColor="red";
        document.getElementById("your-message").style.borderColor="red";
    }
   
 }


 function checkEmail(){
    var mailSub=document.getElementById("mail").value;
    console.log(mailSub)

    if(mailSub=="") {
       document.getElementById("mail").style.borderColor="red";
    }
 }




//  var el=document.getElementById("landing");
//  var land=window.getComputedStyle(el,'::before')
//  console.log(land.background);

 

 function changeColor(color) {

    var el=document.getElementById("landing");
   var button=document.getElementById("getButton");
     var dots=document.getElementsByClassName("dot");
     var scroll=document.getElementById("scrollbutton");
    var text=document.getElementsByClassName("portScroll");
    var message=document.getElementById("mess");
    var subscribe=document.getElementById("subscribeForm");
    var footerColor=document.getElementById("footer");


    if(color=="purple"){
        document.body.classList.add("purple");
        document.body.classList.remove("red");
        document.body.classList.remove("black");
        document.body.classList.remove("green");
        el.style.setProperty("--left-color","#3224b0");
        el.style.setProperty("--right-color","#be5ede");
        button.style.setProperty("--left-color","#3224b0");
        button.style.setProperty("--right-color","#be5ede");
 
        for(let i=0;i<3;i++){
            dots[i].style.setProperty("--left-color","#3224b0");
            dots[i].style.setProperty("--right-color","#be5ede");
        }

        // scroll.style.setProperty("--left-color","#3224b0");
        // scroll.style.setProperty("--right-color","#be5ed");
        
        for(let i=0;i<4;i++){
            text[i].style.setProperty("--left-scroll-color","#3224b0af");
            text[i].style.setProperty("--right-scroll-color","#be5edeaf");
        }

        message.style.setProperty("--left-color","#3224b0");
        message.style.setProperty("--right-color","#be5ede");

        subscribe.style.setProperty("--left-color","#3224b0");
        subscribe.style.setProperty("--right-color","#be5ede");

        footerColor.style.setProperty("--right-color","#3224b0");
        
    }



    if(color=="red") {
        document.body.classList.add("red");
        document.body.classList.remove("purple");
        document.body.classList.remove("black");
        document.body.classList.remove("green");
        el.style.setProperty("--left-color","#A93226");
        el.style.setProperty("--right-color","#FDEDEC");
        button.style.setProperty("--left-color","#A93226");
        button.style.setProperty("--right-color","#FDEDEC");

        for(let i=0;i<3;i++){
        dots[i].style.setProperty("--left-color","#A93226");
        dots[i].style.setProperty("--right-color","#FDEDEC");
        }
         
        scroll.style.setProperty("--left-color","#A93226");
        scroll.style.setProperty("--right-color","#FDEDEC");

        for(let i=0;i<4;i++){
            text[i].style.setProperty("--left-scroll-color","#b02424af");
            text[i].style.setProperty("--right-scroll-color","#f5dfaeaf");
        }

        message.style.setProperty("--left-color","#A93226");
        message.style.setProperty("--right-color","#FDEDEC");

       subscribe.style.setProperty("--left-color","#A93226");
       subscribe.style.setProperty("--right-color","#FDEDEC");

       footerColor.style.setProperty("--right-color","#A93226");
       
    }


    if(color=="black"){
        document.body.classList.add("black");
        document.body.classList.remove("red");
        document.body.classList.remove("purple");
        document.body.classList.remove("green");
        el.style.setProperty("--left-color","black");
        el.style.setProperty("--right-color","#FDEDEC");
        button.style.setProperty("--left-color","black");
        button.style.setProperty("--right-color","#FDEDEC");
        
        for(let i=0;i<3;i++){
            dots[i].style.setProperty("--left-color","black");
            dots[i].style.setProperty("--right-color","#FDEDEC");
        }

        scroll.style.setProperty("--left-color","black");
        scroll.style.setProperty("--right-color","#FDEDEC");
        

        for(let i=0;i<4;i++){
            text[i].style.setProperty("--left-scroll-color","#00000098");
            text[i].style.setProperty("--right-scroll-color","#fdedec96");
        }

        message.style.setProperty("--left-color","black");
        message.style.setProperty("--right-color","#FDEDEC");

        subscribe.style.setProperty("--left-color","black");
        subscribe.style.setProperty("--right-color","#FDEDEC");

        footerColor.style.setProperty("--right-color","#3C2A21");
        
    }

    if(color=="green"){
        document.body.classList.add("green");
        document.body.classList.remove("red");
        document.body.classList.remove("purple");
        document.body.classList.remove("black");
        el.style.setProperty("--left-color","#5F8D4E");
        el.style.setProperty("--right-color","#FDEDEC");
        button.style.setProperty("--left-color","#5F8D4E");
        button.style.setProperty("--right-color","#FDEDEC");

       for(let i=0;i<3;i++){
        dots[i].style.setProperty("--left-color","#5F8D4E");
        dots[i].style.setProperty("--right-color","#FDEDEC");
    }

    scroll.style.setProperty("--left-color","#5F8D4E");
    scroll.style.setProperty("--right-color","#FDEDEC");
        
    for(let i=0;i<4;i++){
        text[i].style.setProperty("--left-scroll-color","#5f8d4ea5");
        text[i].style.setProperty("--right-scroll-color","#fdedec96");
    }

    message.style.setProperty("--left-color","#5F8D4E");
    message.style.setProperty("--right-color","#FDEDEC");

   subscribe.style.setProperty("--left-color","#5F8D4E");
   subscribe.style.setProperty("--right-color","#FDEDEC");

   footerColor.style.setProperty("--right-color","#5F8D4E");

    }


     
 }