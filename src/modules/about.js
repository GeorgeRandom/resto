function about(){
    function createUnder(id){
        const under=document.createElement("div")
            under.classList.add(id);
        const imgbox=document.createElement("div")
            imgbox.classList.add("imgbox");
        const descript=document.createElement("span")
            descript.classList.add("descript");
        const textInDescript1=document.createTextNode("Restaurant familial");
        const lineBr=document.createElement("br");
        const textInDescript2=document.createTextNode("ouvert tous les lundis matin.");
            

        descript.appendChild(textInDescript1);
        descript.appendChild(lineBr);
        descript.appendChild(textInDescript2);

        under.appendChild(imgbox);
        under.appendChild(descript);
        return under
    }
    const content= document.querySelector("#content");
    const under=createUnder("about");
    
        content.appendChild(under);
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight,);

}
 export {about}