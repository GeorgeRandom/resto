
    

    function createheader(id, text1, text2){
        const header= document.createElement("div")
            header.classList.add(id);
        const headertext=document.createElement("div")
            headertext.classList.add("headertext");

        const h1text=document.createElement("h1")
            h1text.textContent=text1;
        const h3text=document.createElement("h3")
            h3text.textContent = text2;
        headertext.appendChild(h1text);
        headertext.appendChild(h3text);
        header.appendChild(headertext);
        return header
        }
    function createBtn(id, text) {
        const btn = document.createElement('button');
        btn.setAttribute('id', id);
        const span = document.createElement('span');   
        span.textContent = text;
        btn.appendChild(span);
        btn.classList.add('tab');
        return btn;}
    
    function createNav(id) {
        const nav = document.createElement('nav');
        nav.classList.add(id);
          
        const homeBtn = createBtn('home', 'accueil');
        const aboutBtn = createBtn('about',"découvrir");
        const menuBtn = createBtn('menu', 'menu');
        const contactBtn = createBtn('contact', 'contact');
          
        nav.appendChild(homeBtn);
        nav.appendChild(aboutBtn);

        nav.appendChild(menuBtn);
        nav.appendChild(contactBtn);
        return nav;}
    

    
        
    
    

    function load(){
        const content= document.querySelector("#content");
        
        const header=createheader("header","L'ASSOMMAGE","cuisine à l'absinthe");
            content.appendChild(header);
        const nav=createNav("nav");
            content.appendChild(nav);
            
        
        
        
        

    }
export {load}



    



    



