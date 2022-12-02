document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";

async function load() {
    let request = new Request("Web_Project.json");
    let response = await fetch(request);

    let json_obj = await response.json();
    Bmw(json_obj);
}
function Bmw(json_obj) {
    let div1 = document.createElement("div");
    div1.style.width = "1470px";
    div1.style.height = "820px";
    div1.style.backgroundColor = "black";
    document.body.append(div1);

    let pic = document.createElement("img");
    pic.src = json_obj.img;
    pic.style.height = "500px";
    pic.style.width = "800px";
    pic.style.position = "absolute";
    pic.style.left = "80px";
    pic.style.top = "230px";
    div1.append(pic);

    let hed = document.createElement("h4");
    hed.innerHTML = 'BMW 7 SERIES';
    hed.style.position = "relative";
    hed.style.width = "400px";
    hed.style.height = "50px";
    hed.style.left = "400px";
    hed.style.top = "650px";
    hed.style.fontStyle = "italic";
    hed.style.fontSize = "30px";
    hed.style.color = "white";
    div1.append(hed);

    let hed2 = document.createElement("h1");
    hed2.innerHTML = 'LUXURY CAR';
    hed2.style.position = "relative";
    hed2.style.width = "400px";
    hed2.style.height = "50px";
    hed2.style.left = "400px";
    hed2.style.top = "0px";
    hed2.style.fontStyle = "italic";
    hed2.style.fontSize = "40px";
    hed2.style.color = "#FD9800";
    div1.append(hed2);


    let box = document.createElement("div");
    box.style.position =  "absolute";
    box.style.width =  "420px";
    box.style.height =  "700px";
    box.style.right =  "57px";
    box.style.top =  "93px";
    box.style.background =  "#212529";
    box.style.borderRadius =  "20px";
    box.style.fontSize =  "20px";
    div1.append(box);

    let hed1 = document.createElement("h2");
    hed1.innerHTML = 'Booking';
    // hed1.style.position =  "absolute";
    hed1.style.marginLeft = "110px";
    hed1.style.marginTop = "20px";
    hed1.style.textAlign = "center";
    hed1.style.width = "150px";
    hed1.style.height = "40px";
    hed1.style.left = "1200px";
    hed1.style.top = "106px";
    hed1.style.background = "#FD9800";
    hed1.style.borderRadius = "30px";
    box.append(hed1);

    let list = document.createElement("form");
    list.style.marginLeft = "60px";
    list.style.marginTop = "40px";
    list.style.fontSize = "16px";
    list.style.color = "white";
    list.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    box.append(list);

    let lebo1 = document.createElement("label");
    lebo1.innerHTML = 'Pick Up';
    lebo1.style.width = "100px";
    lebo1.style.display = "inline-block";
    list.append(lebo1);

    let inp = document.createElement("input");
    inp.style.marginInlineStart =  "0px";
    inp.style.width =  "200px";
    inp.style.height =  "25px";
    inp.style.left =  "10px";
    inp.style.top =  "10px";
    inp.style.background =  "#FFFFFF";
    inp.style.borderRadius =  "5px";
    inp.style.fontSize =  "15px";
    inp.style.fontFamily =  "Arial, Helvetica, sans-serif";
    inp.style.color = "black";
    list.append(inp);

    let lebo2 = document.createElement("label");
    lebo2.innerHTML = 'Return';
    lebo2.style.width = "100px";
    lebo2.style.display = "inline-block";
    list.append(lebo2);

    let inp1 = document.createElement("input");
    inp1.style.marginInlineStart =  "0px";
    inp1.style.width =  "200px";
    inp1.style.marginTop = "20px";
    inp1.style.marginBottom = "20px";
    inp1.style.height =  "25px";
    inp1.style.left =  "10px";
    inp1.style.top =  "10px";
    inp1.style.background =  "#FFFFFF";
    inp1.style.borderRadius =  "5px";
    inp1.style.fontSize =  "15px";
    inp1.style.fontFamily =  "Arial, Helvetica, sans-serif";
    inp1.style.color = "black";
    list.append(inp1);

    let lebo3 = document.createElement("label");
    lebo3.innerHTML = 'Start';
    lebo3.style.width = "100px";
    lebo3.style.display = "inline-block";
    list.append(lebo3);

    let inp2 = document.createElement("input");
    inp2.style.marginInlineStart =  "0px";
    inp2.style.width =  "200px";
    inp2.style.marginTop = "20px";
    inp2.style.marginBottom = "20px";
    inp2.style.height =  "25px";
    inp2.style.left =  "10px";
    inp2.style.top =  "10px";
    inp2.style.background =  "#FFFFFF";
    inp2.style.borderRadius =  "5px";
    inp2.style.fontSize =  "15px";
    inp2.style.fontFamily =  "Arial, Helvetica, sans-serif";
    inp2.style.color = "black";
    list.append(inp2);

    let lebo4 = document.createElement("label");
    lebo4.innerHTML = 'End';
    lebo4.style.width = "100px";
    lebo4.style.display = "inline-block";
    list.append(lebo4);

    let inp3 = document.createElement("input");
    inp3.style.marginInlineStart =  "0px";
    inp3.style.width =  "200px";
    inp3.style.marginTop = "20px";
    inp3.style.marginBottom = "20px";
    inp3.style.height =  "25px";
    inp3.style.left =  "10px";
    inp3.style.top =  "10px";
    inp3.style.background =  "#FFFFFF";
    inp3.style.borderRadius =  "5px";
    inp3.style.fontSize =  "15px";
    inp3.style.fontFamily =  "Arial, Helvetica, sans-serif";
    inp3.style.color = "black";
    list.append(inp3);

    let lebo5 = document.createElement("label");
    lebo5.innerHTML = 'First Name';
    lebo5.style.width = "100px";
    lebo5.style.display = "inline-block";
    list.append(lebo5);

    let inp4 = document.createElement("input");
    inp4.style.marginInlineStart =  "0px";
    inp4.style.width =  "200px";
    inp4.style.marginTop = "20px";
    inp4.style.marginBottom = "20px";
    inp4.style.height =  "25px";
    inp4.style.left =  "10px";
    inp4.style.top =  "10px";
    inp4.style.background =  "#FFFFFF";
    inp4.style.borderRadius =  "5px";
    inp4.style.fontSize =  "15px";
    inp4.style.fontFamily =  "Arial, Helvetica, sans-serif";
    inp4.style.color = "black";
    list.append(inp4);

    let lebo6 = document.createElement("label");
    lebo6.innerHTML = 'Second Name';
    lebo6.style.width = "100px";
    lebo6.style.display = "inline-block";
    list.append(lebo6);

    let inp5 = document.createElement("input");
    inp5.style.marginInlineStart =  "0px";
    inp5.style.width =  "200px";
    inp5.style.marginTop = "20px";
    inp5.style.marginBottom = "20px";
    inp5.style.height =  "25px";
    inp5.style.left =  "10px";
    inp5.style.top =  "10px";
    inp5.style.background =  "#FFFFFF";
    inp5.style.borderRadius =  "5px";
    inp5.style.fontSize =  "15px";
    inp5.style.fontFamily =  "Arial, Helvetica, sans-serif";
    inp5.style.color = "black";
    list.append(inp5);

    let lebo7 = document.createElement("label");
    lebo7.innerHTML = 'Email';
    lebo7.style.width = "100px";
    lebo7.style.display = "inline-block";
    list.append(lebo7);

    let inp6 = document.createElement("input");
    inp6.style.marginInlineStart =  "0px";
    inp6.style.width =  "200px";
    inp6.style.marginTop = "20px";
    inp6.style.marginBottom = "20px";
    inp6.style.height =  "25px";
    inp6.style.left =  "10px";
    inp6.style.top =  "10px";
    inp6.style.background =  "#FFFFFF";
    inp6.style.borderRadius =  "5px";
    inp6.style.fontSize =  "15px";
    inp6.style.fontFamily =  "Arial, Helvetica, sans-serif";
    inp6.style.color = "black";
    list.append(inp6);

    let lebo8 = document.createElement("label");
    lebo8.innerHTML = 'Total';
    lebo8.style.width = "100px";
    lebo8.style.display = "inline-block";
    list.append(lebo8);

    let inp7 = document.createElement("input");
    inp7.style.marginInlineStart =  "0px";
    inp7.style.width =  "200px";
    inp7.style.marginTop = "20px";
    inp7.style.marginBottom = "20px";
    inp7.style.height =  "25px";
    inp7.style.left =  "10px";
    inp7.style.top =  "10px";
    inp7.style.background =  "#FFFFFF";
    inp7.style.borderRadius =  "5px";
    inp7.style.fontSize =  "15px";
    inp7.style.fontFamily =  "Arial, Helvetica, sans-serif";
    inp7.style.color = "black";
    list.append(inp7);

    let inp8 = document.createElement("input");
    inp8.value = 'Book Now';
    inp8.style.marginLeft = "100px";
    inp8.style.width = "130px";
    inp8.style.marginTop = "20px";
    inp8.style.marginBottom = "20px";
    inp8.style.height = "30px";
    inp8.style.left = "848px";
    inp8.style.top = "823px";
    inp8.style.background = "#FD9800";
    inp8.style.borderRadius = "20px";
    inp8.style.fontSize = "20px";
    inp8.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    list.append(inp8);


}

load();