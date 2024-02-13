import _ from 'underscore';

export const miNombre = 'Guillermo Miguel Guardia ';

/**
 * Crea un Nuevo DECK
 * @param {Array<String>} tiposDeCarta      Tipo de Cartas Comunes Ej. ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales   Tipo de Cartas Especiales Ej. ['A','J','Q','K']
 * @returns {Array<String>} Regresa un nuevo Deck de cartas
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if (!tiposDeCarta    || tiposDeCarta.length     === 0) throw new Error('tiposDeCarta es obligatorio');
    if (!tiposEspeciales || tiposEspeciales.length  === 0) throw new Error('tiposEspeciales es obligatorio');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck )
    return deck;
}

// export default crearDeck;