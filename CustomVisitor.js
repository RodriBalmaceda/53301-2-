import javascriptVisitor from './generated/javascriptVisitor.js';

export default class CustomVisitor extends javascriptVisitor {

    constructor() {
        super();
        this.variables = {};
    }

    visitPrograma(ctx) {

        for (const funcion of ctx.funcion()) {
            this.visit(funcion);
        }
    }

    visitFuncion(ctx) {

        console.log(
            "Ejecutando función:",
            ctx.identificador().getText()
        );

        if (ctx.instrucciones()) {
            this.visit(ctx.instrucciones());
        }
    }

    visitInstrucciones(ctx) {

        for (const hijo of ctx.children) {

            if (hijo.accept) {
                this.visit(hijo);
            }
        }
    }

    visitLeer(ctx) {

        const nombre = ctx.identificador().getText();

        this.variables[nombre] = "valor_ingresado";

        console.log(`Leyendo variable: ${nombre}`);
    }

    visitEscribir(ctx) {

        const valor = this.visit(ctx.expresion());

        console.log(valor);
    }

    visitAsignacion(ctx) {

        const nombre = ctx.identificador().getText();

        const valor = this.visit(ctx.expresion());

        this.variables[nombre] = valor;
    }

    visitExpresion(ctx) {

        let resultado = this.visit(ctx.termino(0));

        for (let i = 1; i < ctx.termino().length; i++) {

            resultado += this.visit(ctx.termino(i));
        }

        return resultado;
    }

    visitTermino(ctx) {

        if (ctx.NUMERO()) {
            return Number(ctx.getText());
        }

        if (ctx.CADENA()) {
            return ctx.getText().replace(/"/g, '');
        }

        if (ctx.IDENTIFICADOR()) {

            const nombre = ctx.getText();

            return this.variables[nombre];
        }
    }
}