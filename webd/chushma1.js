document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";

async function load() {
    let request = new Request("chushma1.json");
    let response = await fetch(request);
    let json_obj = await response.json();
    SedanCars(json_obj);
}
function SedanCars(json_obj) {
    let div1 = document.createElement("div");
    div1.style.position = " absolute ";
    div1.style.top = " 0px ";
    div1.style.left = " 0px ";
    div1.style.width = " 1500px ";
    div1.style.height = "1350px";
    div1.style.backgroundColor = " black ";
    document.body.append(div1);

    let head = document.createElement("h1");
    head.innerHTML = 'SUV CARS';
    head.style.position = "relative";
    head.style.width = "443px";
    head.style.height = "0px";
    head.style.left = "600px";
    head.style.top = "15px";
    head.style.fontFamily = "'Poppins'";
    head.style.fontStyle = "normal";
    head.style.fontSize = "40px";
    head.style.color = "#FF9900";
    div1.append(head);

    let head1 = document.createElement("h4");
    head1.innerHTML = 'Innova Crysta';
    head1.style.position = "relative";
    // head1.style.width = "440px";
    // head1.style.height = "50px";
    head1.style.left = "290px";
    head1.style.top = "190px";
    head1.style.fontFamily = "'Poppins'";
    head1.style.fontStyle = "normal";
    head1.style.fontSize = "20px";
    head1.style.color = "white";
    div1.append(head1);

    let head2 = document.createElement("h4");
    head2.innerHTML = 'Suzuki Ertiga';
    head2.style.position = "relative";
    // head1.style.width = "440px";
    // head1.style.height = "50px";
    head2.style.left = "270px";
    head2.style.top = "810px";
    head2.style.fontFamily = "'Poppins'";
    head2.style.fontStyle = "normal";
    head2.style.fontSize = "20px";
    head2.style.color = "white";
    div1.append(head2);

    let swift = document.createElement("div");
    swift.style.marginTop = "100px";
    swift.style.marginLeft = "50px";
    swift.style.width = "550px";
    swift.style.height = "400px";
    div1.append(swift);

    let swift1 = document.createElement("img");
    swift1.src = json_obj.img;
    swift1.style.width =  "550px";
    swift1.style.height = "400px";
    swift.append(swift1);

    // let swiftprice = document.createElement("div");
    // swiftprice.style.marginTop = "200px";
    // swiftprice.style.marginLeft = "180px";
    // swiftprice.style.width = "50px";
    // swiftprice.style.height = "100px";
    // div1.append(swiftprice);

    let swift1price = document.createElement("img");
    swift1price.src = json_obj.img1;
    swift1price.style.width =  "180px";
    swift1price.style.height = "50px";
    swift1price.style.marginLeft = "200px";
    swift.append(swift1price);

    let verna1price = document.createElement("img");
    verna1price.src = json_obj.img2;
    verna1price.style.width =  "180px";
    verna1price.style.height = "50px";
    verna1price.style.marginLeft = "200px";
    verna1price.style.marginTop = "600px";
    swift.append(verna1price);

    let verna = document.createElement("div");
    verna.style.marginTop = "300px";
    verna.style.marginLeft = "50px";
    verna.style.width = "550px";
    verna.style.height = "400px";
    div1.append(verna);

    let verna1 = document.createElement("img");
    verna1.src = json_obj.pic;
    verna1.style.width =  "550px";
    verna1.style.height = "400px";
    verna.append(verna1);

    // let image1 = document.createElement("div");
    // image1.style.position = "absolute";
    // image1.style.backgroundColor = "#FFFFFF";
    // image1.style.left = "810px";
    // image1.style.top = "150px";
    // swift.append(image1);

    // let image01 = document.createElement("img");
    // image01.src = json_obj.img01;
    // image01.style.height = "50px";
    // image1.append(image01);

    // let image2 = document.createElement("div");
    // image2.style.backgroundColor = "#FFFFFF";
    // image2.style.marginLeft = "810px";
    // image2.style.marginTop = "180px";
    // swift.append(image2);

    // let image02 = document.createElement("img");
    // image02.scr = json_obj.img02;
    // image2.append(image02);

    let swiftspecs = document.createElement("div");
    swiftspecs.style.marginTop = "150px";
    swiftspecs.style.marginLeft = "200px";
    swiftspecs.style.width = "550px";
    swiftspecs.style.height = "400px";
    head.append(swiftspecs);

    let swift1specs = document.createElement("img");
    swift1specs.src = json_obj.specs2;
    swift1specs.style.width =  "550px";
    swift1specs.style.height = "500px";
    swiftspecs.append(swift1specs);

    let vernaspecs = document.createElement("div");
    vernaspecs.style.marginTop = "200px";
    vernaspecs.style.marginLeft = "200px";
    vernaspecs.style.width = "550px";
    vernaspecs.style.height = "500px";
    head.append(vernaspecs);

    let verna1specs = document.createElement("img");
    verna1specs.src = json_obj.specs1;
    verna1specs.style.width =  "550px";
    verna1specs.style.height = "500px";
    vernaspecs.append(verna1specs);













}

load();