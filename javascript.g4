grammar javascript;
//PARSER
programa: funcion+;
funcion: FUNC identificador LPAREN (parametros)? RPAREN IZQLLAVE instrucciones DERLLAVE;
parametros: identificador (COMA identificador) *;
instrucciones: (leer | escribir | asignacion)*;
leer: LEER LPAREN identificador RPAREN PUNTOYCOMA;
escribir: ESCRIBIR LPAREN expresion RPAREN PUNTOYCOMA;
asignacion: identificador IGUAL expresion PUNTOYCOMA;
expresion: termino (SUMA termino)?;
termino: NUMERO | CADENA | IDENTIFICADOR;
identificador: IDENTIFICADOR;
numero: NUMERO;
cadena: CADENA;

//LEXER
FUNC: 'funcion';
LPAREN: '(';
RPAREN: ')';
IZQLLAVE: '{';
DERLLAVE: '}';
COMA: ',';
LEER: 'leer';
ESCRIBIR: 'escribir';
PUNTOYCOMA: ';';
IDENTIFICADOR: [a-zA-Z][a-zA-Z0-9_]*;
NUMERO: [0-9]+;
CADENA: '"' (~["])* '"';
IGUAL: '=';
SUMA: '+';

WS : [ \t\r\n]+ -> skip;