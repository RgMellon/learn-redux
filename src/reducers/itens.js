
const INITIAL_STATE = [
    {
        id: 0.67345396177212,
        nome: "tenis",
        preco: "22",
    }
];

export function itens (state = INITIAL_STATE, action) {

    if(action.type === 'ADD_ITEM') {
        let novoEstado = [...state, action.obj];
        state = novoEstado;
        return state;
    }


    return state;
}