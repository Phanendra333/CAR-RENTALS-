document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";    

document.body.style.backgroundColor = "black";
let bg = document.createElement("div");


bg.style.width = "1250px";
bg.style.height = "650px";
bg.style.background = "url('benzhe.jpg') no-repeat center center/cover";
bg.style.opacity = "0.9";
bg.style.marginTop = "20px";

document.body.append(bg);

async function load() {
    let request = new Request("car_rentals.json");
    let response = await fetch(request);
  
    let json_obj = await response.json();
    Createpage(json_obj);
  }


  function Createpage(json_obj) {




                    
    
    
    
                                // Navbar section









    let navbar = document.createElement("div");
    bg.append(navbar);

  let mainlogodiv = document.createElement("div");
  mainlogodiv.style.top ="0px";
  navbar.append(mainlogodiv);

  let image = document.createElement("img");
  image.src = json_obj.mainlogo;
  image.style.height = "70px";
  image.style.width = "70px";
  mainlogodiv.append(image);

  let header = document.createElement("nav");
  navbar.append(header);




  let ul = document.createElement("ul");
  ul.style.padding = "0px";
  ul.style.Left = "300px";
  ul.style.position = "absolute";
  ul.style.listStyle = "none";
  ul.style.marginLeft = "400px";
  ul.style.top = "0px";
  ul.style.display = "flex";
  header.append(ul);

  let li1 = document.createElement("li");
//   li1.style.listStyle = "none";
  li1.style.float = "left";
  li1.style.margintop="20px";
  ul.append(li1);

  let a1 = document.createElement("a");
  a1.innerHTML = json_obj.nav1;
  a1.style.fontSize = "23px";
  a1.style.color = "white";
  a1.style.textDecoration = "none";
  a1.style.padding = "10px";
  a1.style.borderRadius = "5px";
  a1.style.fontweight = "500";
  a1.style.textalign = "centre";
  a1.style.display = "block";
  a1.style.width = "100px";
  a1.style.marginleft = "10px";
  a1.style.cursor = "pointer";
  a1.onmouseenter = enter1;
  a1.onmouseleave = leave1;
  li1.append(a1);

  function enter1() {
      a1.style.backgroundColor = "white";
      a1.style.color = "black";
      
    }
  
    function leave1() {
      a1.style.backgroundColor = "";
      a1.style.color = "white";
    }

  let li2 = document.createElement("li");
//   li2.style.listStyle = "none";
  li2.style.float = "left";
  li2.style.margintop="20px";
  ul.append(li2);

  let a2 = document.createElement("a");
  a2.innerHTML = json_obj.nav2;
  a2.href = "#services";
  a2.style.fontSize = "23px";
  a2.style.color = "white";
  a2.style.textDecoration = "none";
  a2.style.padding = "10px";
  a2.style.borderRadius = "5px";
  a2.style.fontweight = "500";
  a2.style.textalign = "centre";
  a2.style.display = "block";
  a2.style.width = "100px";
  a2.style.marginleft = "10px";
  a2.style.cursor = "pointer";
  a2.onmouseenter = enter2;
  a2.onmouseleave = leave2;
  li2.append(a2);

  function enter2() {
      a2.style.backgroundColor = "white";
      a2.style.color = "black";
      
    }
  
    function leave2() {
      a2.style.backgroundColor = "";
      a2.style.color = "white";
    }


  let li3 = document.createElement("li");
  li3.style.listStyle = "none";
  li3.style.margintop="20px";
//   li3.style.float = "left";
  ul.append(li3);

  let a3 = document.createElement("a");
  a3.innerHTML = json_obj.nav3;
  a3.href = "#about";
  a3.style.fontSize = "23px";
  a3.style.color = "white";
  a3.style.textDecoration = "none";
  a3.style.padding = "10px";
  a3.style.borderRadius = "5px";
  a3.style.fontweight = "500";
  a3.style.textalign = "centre";
  a3.style.display = "block";
  a3.style.width = "100px";
  a3.style.marginleft = "10px";
  a3.onmouseenter = enter3;
  a3.onmouseleave = leave3;
  li3.append(a3);

  function enter3() {
      a3.style.backgroundColor = "white";
      a3.style.color = "black";
      
    }
  
    function leave3() {
      a3.style.backgroundColor = "";
      a3.style.color = "white";
    }


  let li4 = document.createElement("li");
  li4.style.listStyle = "none";
  li4.style.margintop="20px";
//   li4.style.float = "left";
  ul.append(li4);

 

  let a4 = document.createElement("a");
  a4.innerHTML = json_obj.nav4;
  a4.href = "#contact";
  a4.style.fontSize = "23px";
  a4.style.color = "white";
  a4.style.textDecoration = "none";
  a4.style.padding = "10px";
  a4.style.borderRadius = "5px";
  a4.style.fontweight = "500";
  a4.style.textalign = "centre";
  a4.style.display = "block";
  a4.style.width = "100px";
  a4.style.marginleft = "10px";
  a4.style.cursor = "pointer";
  a4.onmouseenter = enter4;
  a4.onmouseleave = leave4;
  li4.append(a4);

  function enter4() {
      a4.style.backgroundColor = "white";
      a4.style.color = "black";
      
    }
  
    function leave4() {
      a4.style.backgroundColor = "";
      a4.style.color = "white";
    }

    
    let a5 = document.createElement("a");
    a5.innerHTML = json_obj.login;
    a5.style.fontSize = "23px";
    a5.style.color = "white";
    a5.style.textDecoration = "none";
    a5.style.padding = "10px";
    a5.style.borderRadius = "5px";
    a5.style.fontweight = "500";
    a5.style.textalign = "centre";
    a5.style.display = "block";
    a5.style.width = "140px";
    a5.style.marginLeft = "190px";
    a5.style.backgroundColor = "#FF9900"
    ul.append(a5);



    let whenever = document.createElement("div");
    whenever.innerHTML = json_obj.when;
    whenever.style.position = "absolute";
    whenever.style.width = "822px";
    whenever.style.height = "88px";
    whenever.style.left = "320px";
    whenever.style.top = "90px";
    whenever.style.fontFamily = "'Libre Baskerville', serif";
    whenever.style.fontStyle = "normal";
    whenever.style.fontWeight = "200";
    whenever.style.fontSize = "55px";
    whenever.style.lineHeight = "82px";
    whenever.style.color = "#FFFFFF";

    document.body.append(whenever);

    let lets = document.createElement("div");
    lets.innerHTML = json_obj.lets;
    lets.style.position = "absolute";
    lets.style.width = "599px";
    lets.style.height = "73px";
    lets.style.left = "340px";
    lets.style.top = "160px";
    lets.style.fontFamily = "'Libre Baskerville', serif";
    lets.style.fontStyle = "normal";
    lets.style.fontWeight = "400";
    lets.style.fontSize = "36px";
    lets.style.lineHeight = "54px";
    lets.style.color = "#FFFFFF";

    document.body.append(lets);

    let phan = document.createElement("div");
    document.body.append(phan);

    let gets = document.createElement("a");
    gets.innerHTML = json_obj.start;
    gets.href = "category.html";
    gets.style.position = "absolute";
    gets.style.width = "170px";
    gets.style.height = "30px";
    gets.style.left = "500px";
    gets.style.top = "240px";
    gets.style.color = "black";
    gets.style.textDecoration = "none";
    gets.style.textAlign = "center";
    gets.style.fontweight = "bold";
    gets.style.fontSize = "25px";
    gets.style.background = "#FF9900";
    gets.style.borderRadius = "20px";
    gets.style.padding = "10px";
    gets.style.fontFamily = "'Lato', sans-serif";
    
    phan.append(gets);



     
    




    
                                    //  Why choose us




                                    







    let why = document.createElement("div");
    document.body.append(why);

    let headp = document.createElement("h1")
    headp.innerHTML = json_obj.why;
    headp.id='services';
        headp.style.textAlign = "center";
    headp.style.color = "#FFFFFF";
    headp.style.fontSize = "40px";
    // headp.style.textDecoration = "underline";
    headp.style.marginTop = "100px";
    headp.style.padding = "50px";
    headp.style.fontFamily = "'Libre Baskerville', serif";
    headp.style.fontweight = "500";

    why.append(headp);


    let team = document.createElement("div")
    team.style.display = "flex";
    team.style.justifyContent = "center";
    team.style.width = "auto";
    team.style.textAlign = "center";
    team.style.flexWrap = "wrap";
    team.style.marginTop = "50px";

    why.append(team);


    let teammem = document.createElement("div");
    // teammem.style.background = "#095a55";
    teammem.style.margin = "5px";
    teammem.style.marginBottom = "50px";
    teammem.style.width = "300px";
    teammem.style.padding = "20px";
    teammem.style.lineHeight = "20px";
    teammem.style.color = "#8e8b8b";
    teammem.style.position = "relative";

    team.append(teammem);


    let teamimg = document.createElement("div")
    teamimg.style.position = "absolute";
    teamimg.style.top = "-50px";
    teamimg.style.left = "50%";
    teamimg.style.transform = "translateX(-50%)";
    teamimg.style.width = "100px";
    teamimg.style.height = "100px";
    teamimg.style.borderRadius = "50%";

    teammem.append(teamimg);


    let img1 = document.createElement("img");
    img1.src = json_obj.logo1;
    img1.style.width = "100px";
    img1.style.height = "100px";
    img1.style.padding = "5px";
    img1.style.borderRadius = "50%";
    img1.style.objectFit = "cover";
    img1.onmouseenter = enter8;
    img1.onmouseleave = leave8;
    teamimg.append(img1);

    function enter8(){
        img1.style.transform = "scale(1.35)";
    }

    function leave8(){
        img1.style.transform = "";
    }

     
    let head2 = document.createElement("h3");
    head2.innerHTML = json_obj.head1;
    head2.style.color = "white";
    head2.style.fontSize = "26px";
    head2.style.marginTop = "50px";

    teammem.append(head2);

    let para = document.createElement("p");
    para.innerHTML = json_obj.txt1;
    para.style.color = "white";
    para.style.fontSize = "17px";

    teammem.append(para);



    let teammem1 = document.createElement("div");
    // teammem1.style.background = "#095a55";
    teammem1.style.margin = "5px";
    teammem1.style.marginBottom = "50px";
    teammem1.style.width = "300px";
    teammem1.style.padding = "20px";
    teammem1.style.lineHeight = "20px";
    teammem1.style.color = "#8e8b8b";
    teammem1.style.position = "relative";

    team.append(teammem1);


    let teamimg1 = document.createElement("div")
    teamimg1.style.position = "absolute";
    teamimg1.style.top = "-50px";
    teamimg1.style.left = "50%";
    teamimg1.style.transform = "translateX(-50%)";
    teamimg1.style.width = "100px";
    teamimg1.style.height = "100px";
    teamimg1.style.borderRadius = "50%";

    teammem1.append(teamimg1);


    let img2 = document.createElement("img");
    img2.src = json_obj.logo2;
    img2.style.width = "100px";
    img2.style.height = "100px";
    img2.style.padding = "5px";
    img2.style.borderRadius = "50%";
    img2.style.objectFit = "cover";
    img2.onmouseenter = enter9;
    img2.onmouseleave = leave9;
    teamimg1.append(img2);

    function enter9(){
        img2.style.transform = "scale(1.35)";
    }

    function leave9(){
        img2.style.transform = "";
    }

    
    let head3 = document.createElement("h3");
    head3.innerHTML = json_obj.head2;
    head3.style.color = "white";
    head3.style.fontSize = "26px";
    head3.style.marginTop = "50px";

    teammem1.append(head3);

    let para1 = document.createElement("p");
    para1.innerHTML = json_obj.txt2;
    para1.style.color = "white";
    para1.style.fontSize = "17px";

    teammem1.append(para1);



    let teammem2 = document.createElement("div");
    // teammem2.style.background = "#095a55";
    teammem2.style.margin = "5px";
    teammem2.style.marginBottom = "50px";
    teammem2.style.width = "300px";
    teammem2.style.padding = "20px";
    teammem2.style.lineHeight = "20px";
    teammem2.style.color = "#8e8b8b";
    teammem2.style.position = "relative";

    team.append(teammem2);


    let teamimg2 = document.createElement("div")
    teamimg2.style.position = "absolute";
    teamimg2.style.top = "-50px";
    teamimg2.style.left = "50%";
    teamimg2.style.transform = "translateX(-50%)";
    teamimg2.style.width = "100px";
    teamimg2.style.height = "100px";
    teamimg2.style.borderRadius = "50%";

    teammem2.append(teamimg2);


    let img3 = document.createElement("img");
    img3.src = json_obj.logo3;
    img3.style.width = "100px";
    img3.style.height = "100px";
    img3.style.padding = "5px";
    img3.style.borderRadius = "50%";
    img3.style.objectFit = "cover";
    img3.onmouseenter = enter10;
    img3.onmouseleave = leave10;
    teamimg2.append(img3);

    function enter10(){
        img3.style.transform = "scale(1.35)";
    }

    function leave10(){
        img3.style.transform = "";
    }



    let head4 = document.createElement("h3");
    head4.innerHTML = json_obj.head3;
    head4.style.color = "white";
    head4.style.fontSize = "26px";
    head4.style.marginTop = "50px";

    teammem2.append(head4);

    let para2 = document.createElement("p");
    para2.innerHTML = json_obj.txt3;
    para2.style.color = "white";
    para2.style.fontSize = "17px";
   

    teammem2.append(para2);








                              
    
    
                                 // about us












    let bgabt = document.createElement("div");
    bgabt.style.marginTop = "200px";
    bgabt.style.opacity = "0.4";
    document.body.append(bgabt);

    let pham = document.createElement("img");
    pham.src = json_obj.abtimg;
    pham.style.width = "1250px";
    pham.style.height = "700px";
    bgabt.append(pham);


    let suresh = document.createElement("div");
    suresh.innerHTML = json_obj.abt;
    suresh.style.marginTop = "100px";
    suresh.id = 'about';
    suresh.style.left = "500px";
    suresh.style.top = "1350px";
    suresh.style.position = "absolute";
    suresh.style.fontFamily = "'Roboto', sans-serif";
    suresh.style.fontWeight = "400";
    suresh.style.fontSize = "45px";
    suresh.style.color = "white";
    
    document.body.append(suresh);

    
    let shreyas = document.createElement("p");
    shreyas.innerHTML = json_obj.txt4;
    shreyas.style.left = "40px";
    shreyas.style.top = "1500px";
    shreyas.style.position = "absolute";
    shreyas.style.fontFamily = "'Montserrat', sans-serif";
    shreyas.style.fontWeight = "400";
    shreyas.style.fontSize = "25px";
    shreyas.style.color = "white";
    
    document.body.append(shreyas);










                          // contact us











    let contact = document.createElement("div");
    contact.style.position = "absolute";
    contact.style.top = "2000px";
    document.body.append(contact);

    let wave = document.createElement("img");
    wave.src = json_obj.wave;
    wave.style.width = "1260px";
    wave.style.height = "250px";
     wave.id='contact';
    // sumanth.style.objectFit = "contain";
    contact.append(wave);




  }
  load();

  