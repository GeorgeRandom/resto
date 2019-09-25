function menu(){
    function createUnder(id){
        const under=document.createElement("div")
        const descript=document.createElement("span")
            descript.classList.add("descript");
        const textInDescript1=document.createTextNode("des clous.");
       
            

        descript.appendChild(textInDescript1);
        

        
        under.appendChild(descript);
        return under
    }
    const content= document.querySelector("#content");
    const under=createUnder("menu");
    
        content.appendChild(under);
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight,);
}
export {menu}
