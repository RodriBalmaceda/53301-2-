import antlr4 from 'antlr4';
import fs from 'fs';

import javascriptLexer from './generated/javascriptLexer.js';
import javascriptParser from './generated/javascriptParser.js';

import CustomVisitor from './CustomVisitor.js';
import MyErrorListener from './MyErrorListener.js';


// Leer archivo
const input = fs.readFileSync('input.txt', 'utf8');


// Input stream
const chars = new antlr4.InputStream(input);


// Lexer
const lexer = new javascriptLexer(chars);


// ==========================
// TABLA TOKENS
// ==========================

const tokens = lexer.getAllTokens();

console.log("\nTABLA LEXEMAS - TOKENS\n");

tokens.forEach(token => {

    const nombreToken =
        javascriptLexer.symbolicNames[token.type];

    console.log(
        `Lexema: ${token.text} ---> Token: ${nombreToken}`
    );
});


// Reiniciar lexer
lexer.reset();


// Token stream
const tokenStream =
    new antlr4.CommonTokenStream(lexer);


// Parser
const parser =
    new javascriptParser(tokenStream);


// Listener de errores
parser.removeErrorListeners();

parser.addErrorListener(
    new MyErrorListener()
);


// Árbol sintáctico
const tree = parser.programa();


// ==========================
// ÁRBOL
// ==========================

console.log("\nÁRBOL SINTÁCTICO\n");

console.log(
    tree.toStringTree(parser.ruleNames)
);


// ==========================
// EJECUCIÓN
// ==========================

console.log("\nEJECUCIÓN\n");

const visitor = new CustomVisitor();

visitor.visit(tree);