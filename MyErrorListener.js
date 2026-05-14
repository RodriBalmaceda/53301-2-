import antlr4 from 'antlr4';

export default class MyErrorListener extends antlr4.error.ErrorListener {

    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {

        console.log(
            `Error sintáctico en línea ${line}, columna ${column}`
        );

        console.log(`Causa: ${msg}`);
    }
}