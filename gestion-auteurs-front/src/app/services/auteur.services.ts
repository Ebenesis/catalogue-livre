
export class AuteurService{

    //1-   les  données
    auteurs = [
        {id:1,nom:'Bart Simpson',numero:3},
        {id:2,nom:'Pierre Laurent',numero:15},
        {id:3,nom:'Olivia Lisa',numero:1}
    ];
    //2-    les traitements 
    /**
     * 
     * @returns 
     */
    getAllAuteur(){
        return this.auteurs;
    }
    /**
     * 
     * @param id 
     * @returns 
     */
    getOneAuteurById(id : number){
        /*
            const unAuteur = this.auteurs.find((objUnAuteur)=>{
                return objUnAuteur.id == id
            })
            return unAuteur;
        */    
        
        /** Deuxième méthode */
        let auteur = {id:0,nom:'',numero:0};
        for(let unElement of this.auteurs){
            if(unElement.id == id){
                auteur = unElement;
                break;
            }
        }
        return auteur;
        
    }
    /**
     * 
     * @param unAuteur 7
     */
    addOneAuteur(unAuteur : any){
        this.auteurs.push(unAuteur);
    }
    deleteOneAuteur(id : number){
     //1-    On vérifie que l'auteur existe bien dans le Array
        let index = -1;
        for(let i = 0; i <= this.auteurs.length -1 ;i++){
            if(this.auteurs[i].id == id){
                index = i;
                break;
            }
        }
        if(index != -1){
            /*on supprime l'élément à partir de son index c'est-à-dire sa position
                dans le tableau (array) d'auteurs. splice(index,1)
            */
           this.auteurs.splice(index,1);
        }else{
            console.log('Wrong id auteur')
        }
    }
    /**
     * 
     * @param unAuteur 
     */
    updateOneAuteur(unAuteur : any){
  //1-    Retrouve l'auteur dans le tableau
        let index = -1,
        auteur : any;
        for(let i = 0; i <= this.auteurs.length -1 ;i++){
            if(this.auteurs[i].id == unAuteur.id){
                index = i; // on sauvegarde la position de l'auteur dans le tableau
                auteur = this.auteurs[i]; //on sauvegarde l'objet entier dans la variable auteu
                break;
            }
        }
/********************************************** */    
//ici on vérifie si on à trouver l'objet dans le tableau avec sa position index
    if(index != -1){
     /*ici on crée un objet pour la mise à jour avec les données soit passées en paramètre
        soit avec les anciennes données du tableau
    */
        let unObj ={
             id: unAuteur.id ,
             nom: unAuteur.nom == '' ? auteur.nom : unAuteur.nom,
             numero : unAuteur.numero == 0 ? auteur.numero : unAuteur.numero
        }
            //ici on met a jour avec la position : index
                this.auteurs[index].nom = unObj.nom;
                this.auteurs[index].numero = unObj.numero      
        }else{
                console.log('Wrong id auteur')
        }    

    }
}