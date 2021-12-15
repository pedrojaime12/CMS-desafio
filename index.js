function addWorkCard(params = {}){

    // en la primer const, adquiero la info que ya tengo de la card creada en el tag template
    const template = document.querySelector("#portfolio-card")

    // en esta const, es en donde voy a clonar lo que adquiera
    const container = document.querySelector(".portfolio-content")

    template.content.querySelector(".portfolio-card-title").textContent = params.title
    template.content.querySelector(".portfolio-card-desc").textContent = params.description
    template.content.querySelector(".portfolio-card-link").textcontent = params.url

    // primero importo el nodo de template en la var=> clone
    // despues, creo un hijo del nodo en container
    var clone = document.importNode(template.content,true)
    container.appendChild(clone)

}

function getWorks(){
    return fetch("https://cdn.contentful.com/spaces/fm0ijh10fg33/environments/master/entries?access_token=YQHOCsgh7tkWK35y4cPWBRIyDFC0sdhesYW1i4PDgeU&content_type=work")
    .then(res=>{
        return res.json()
    })
    .then((obj)=>{
      //  console.log(obj)


        const fieldsCollect = obj.items.map((item) => {
            return {
                title : item.fields.titulo,
                description : item.fields.descripcion,
                url : item.fields.url
            };
        });


        return fieldsCollect;
    });   
}

function main(){
    getWorks().then((works)=>{
       console.log(works) 
        for(const w of works){
            addWorkCard(w)
        }
        

    })
    
    /* 
    addWorkCard({
        title:"SOY EL TITLE",
        description: "Un trabajaso",
        image:"https://image.shutterstock.com/image-photo/global-technology-concept-260nw-1139809547.jpg",
        url: "https://google.com"  
    })
    */

}

main();