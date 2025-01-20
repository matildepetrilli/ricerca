//qui creerò la funzione reducer, fondamentale perchè
//  è la creatrice materiale dello STATO dell'applicativo e poi si occupa di 
// generare delle nuove "biglie" in base alle nostre modifiche

const initialState={
//come sarà lo stato di redux inizialmente
list:{
    content:[],
},
}

const mainReducer=(state=initialState, action)=> {
    //questa funzione ritornerà sempre il nuovo stato dell'applicazione
    //quando l'app si carica creiamo noi la prima biglia, ovvero lo stato iniziale di react.
switch(action.type){
    default:
        //è la casistica che avviene quando nessuna delle precedenti viene colpita
        //cosa facciamo come default quando non sappiamo calcolare il nuovo stato dell'app?
        //il nostro nuovo stato se nessuna action viene rispettato, il nostro rimarrà il precedente
        return state
}
}

export default mainReducer