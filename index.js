function addWorkCard(params = {}){

    // en la primer const, adquiero la info que ya tengo de la card creada en el tag template
    const template = document.querySelector("#portfolio-card")

    // en esta const, es en donde voy a clonar lo que adquiera
    const container = document.querySelector(".portfolio-content")

    template.content.querySelector(".portfolio-card-title").textContent = params.title
    template.content.querySelector(".portfolio-card-desc").textContent = params.description
    template.content.querySelector(".portfolio-img").src = params.image
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
        console.log(obj)
        const fieldsCollect = obj.items.map((item) => {
            return {
                title : item.fields.titulo,
                description : item.fields.descripcion,
                image : item.fields.imagen

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
    addWorkCard({
        title:"SOY EL TITLE again",
        description: "Un trabajaso en el cual me esforce",
        image:"https://media.istockphoto.com/photos/technology-abstract-picture-id1148091793?k=20&m=1148091793&s=612x612&w=0&h=yunVTPC-vyrQ4VBCOrUYkYytQKtWM7zYj3KxsLwPHto=",
        url: "https://google.com"  
    })
    */
}

main();