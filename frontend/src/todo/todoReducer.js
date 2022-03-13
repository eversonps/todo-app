const initalState = {
    description: "Ler Livro",
    list: [{
        _id: 1,
        description: "Pagar Fatura do cartão",
        done: true
    }, {
        _id: 2,
        description: "Reunião com a equipe às 10:00",
        done: false
    },{
        _id: 3,
        description: "Consulta médica na terça depois do almoço",
        done: false
    }]
}

export default (state = initalState, action) =>{
    switch(action.type){
        case "CHANGE_DESCRIPTION":
            return {...state, description: action.payload}
        default: 
            return state
    }
}