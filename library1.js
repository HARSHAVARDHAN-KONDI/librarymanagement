var bname;

function validate()
{
  var a=document.getElementById("user").value;
  var b=document.getElementById("password").value;
  var c=document.getElementById("first").value;
  var d=document.getElementById("last").value;
  var e=document.getElementById("mail").value;
  var f=document.getElementById("dob").value;
  var g=document.getElementById("phno").value;
  var h=document.getElementById("course").value;
  var i=document.getElementById("address").value;
  if(c=="")
  alert("First name cannot be empty");
  else if(d=="")
  alert("Last name cannot be empty");
  else if(e=="")
  alert("Email cannot be empty");
  else if(f=="")
  alert("Date if birth cannot be empty");
  else if(g=="")
  alert("Phone number cannot be empty");
  else if(h=="--select--")
  alert("Course cannot be empty");
  else if(i=="")
  alert("Address cannot be empty");
  else if(a.length<=5&&a=="")
  alert("username must be greaterthan 5 letters");
  else if(b.length<=5&&b=="")
  alert("password must be greaterthan 5 letters");
  else{
 localStorage.setItem("username1",a);
 localStorage.setItem("password1",b);
 localStorage.setItem("firstname1",c);
 localStorage.setItem("lastname1",d);
 localStorage.setItem("email1",e);
 localStorage.setItem("dob1",f);
 localStorage.setItem("phno1",g);
 localStorage.setItem("course1",h);
 localStorage.setItem("address1",i);
 localStorage.setItem("return1","");
  alert("Registered successfully");
  }
}

function login()
{
  var a=document.getElementById("us").value;
  var b=document.getElementById("pass").value;
  if((a==(localStorage.getItem("username1")))&&(b==(localStorage.getItem("password1"))))
  {
     window.location="home.html"
  }
  else
  alert("incorrect username or password");
  }

function message()
{
  var a=document.getElementById("ymail").value;
  var b=document.getElementById("mess").value;
  if(a=="")
  alert("mail id cannot be empty");
  else if(b=="")
  alert("message cannot be empty");
  else
  {alert("submitted successfully ");
  localStorage.setItem("mailm",a);
  localStorage.setItem("message1",b);
  }
}

function bookr(bname)
{
  var s=localStorage.getItem("return1");
  s=(s+"<br>"+"*"+bname);
  localStorage.setItem("return1",s);
  
  alert("book requested successfully");
}

function forgotp()
  {
    var a=document.getElementById("rname").value;
    var b=document.getElementById("rphno").value;
    var c=document.getElementById("rpass").value;
    var d=document.getElementById("rpass1").value;
    if((a=="")||(a!=localStorage.getItem("username1")))
    alert("enter correct username");
    else if((b=="")||(b!=localStorage.getItem("phno1")))
    alert("enter correct mobile number");
    else if(c==""||d=="")
    alert("enter password");
    else if(c!=d)
    alert("passwords donot match");
    else{
    localStorage.setItem("password1",c);
    alert("password changed successfully");
  }
}

document.getElementById("profile").innerHTML = ("<b>Name</b>:"+localStorage.getItem("firstname1")+localStorage.getItem("lastname1")+"<br>"+"<b>Email:</b>"+localStorage.getItem("email1")+"<br>"+"<b>Date of birth:</b>"+localStorage.getItem("dob1")+"<br>"+"<b>Mobile no:</b>"+localStorage.getItem("phno1")+"<br>"+"<b>Course:</b>"+localStorage.getItem("course1")+"<br>"+"<b>Address:</b>"+localStorage.getItem("address1")+"<br>");
//document.getElementById("welcome").innerHTML = ("Hello "+localStorage.getItem("firstname1")+",");
