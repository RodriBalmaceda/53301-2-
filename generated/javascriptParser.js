// Generated from javascript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import javascriptListener from './javascriptListener.js';
import javascriptVisitor from './javascriptVisitor.js';

const serializedATN = [4,1,15,87,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,8,
0,11,0,12,0,27,1,1,1,1,1,1,1,1,3,1,34,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,
2,5,2,44,8,2,10,2,12,2,47,9,2,1,3,1,3,1,3,5,3,52,8,3,10,3,12,3,55,9,3,1,
4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,
7,1,7,3,7,77,8,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,
8,10,12,14,16,18,20,22,0,1,1,0,10,12,81,0,25,1,0,0,0,2,29,1,0,0,0,4,40,1,
0,0,0,6,53,1,0,0,0,8,56,1,0,0,0,10,62,1,0,0,0,12,68,1,0,0,0,14,73,1,0,0,
0,16,78,1,0,0,0,18,80,1,0,0,0,20,82,1,0,0,0,22,84,1,0,0,0,24,26,3,2,1,0,
25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,1,1,0,0,0,29,
30,5,1,0,0,30,31,3,18,9,0,31,33,5,2,0,0,32,34,3,4,2,0,33,32,1,0,0,0,33,34,
1,0,0,0,34,35,1,0,0,0,35,36,5,3,0,0,36,37,5,4,0,0,37,38,3,6,3,0,38,39,5,
5,0,0,39,3,1,0,0,0,40,45,3,18,9,0,41,42,5,6,0,0,42,44,3,18,9,0,43,41,1,0,
0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,5,1,0,0,0,47,45,1,0,0,0,
48,52,3,8,4,0,49,52,3,10,5,0,50,52,3,12,6,0,51,48,1,0,0,0,51,49,1,0,0,0,
51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,7,1,0,0,0,55,
53,1,0,0,0,56,57,5,7,0,0,57,58,5,2,0,0,58,59,3,18,9,0,59,60,5,3,0,0,60,61,
5,9,0,0,61,9,1,0,0,0,62,63,5,8,0,0,63,64,5,2,0,0,64,65,3,14,7,0,65,66,5,
3,0,0,66,67,5,9,0,0,67,11,1,0,0,0,68,69,3,18,9,0,69,70,5,13,0,0,70,71,3,
14,7,0,71,72,5,9,0,0,72,13,1,0,0,0,73,76,3,16,8,0,74,75,5,14,0,0,75,77,3,
16,8,0,76,74,1,0,0,0,76,77,1,0,0,0,77,15,1,0,0,0,78,79,7,0,0,0,79,17,1,0,
0,0,80,81,5,10,0,0,81,19,1,0,0,0,82,83,5,11,0,0,83,21,1,0,0,0,84,85,5,12,
0,0,85,23,1,0,0,0,6,27,33,45,51,53,76];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class javascriptParser extends antlr4.Parser {

    static grammarFileName = "javascript.g4";
    static literalNames = [ null, "'funcion'", "'('", "')'", "'{'", "'}'", 
                            "','", "'leer'", "'escribir'", "';'", null, 
                            null, null, "'='", "'+'" ];
    static symbolicNames = [ null, "FUNC", "LPAREN", "RPAREN", "IZQLLAVE", 
                             "DERLLAVE", "COMA", "LEER", "ESCRIBIR", "PUNTOYCOMA", 
                             "IDENTIFICADOR", "NUMERO", "CADENA", "IGUAL", 
                             "SUMA", "WS" ];
    static ruleNames = [ "programa", "funcion", "parametros", "instrucciones", 
                         "leer", "escribir", "asignacion", "expresion", 
                         "termino", "identificador", "numero", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = javascriptParser.ruleNames;
        this.literalNames = javascriptParser.literalNames;
        this.symbolicNames = javascriptParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, javascriptParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.funcion();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, javascriptParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(javascriptParser.FUNC);
	        this.state = 30;
	        this.identificador();
	        this.state = 31;
	        this.match(javascriptParser.LPAREN);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 32;
	            this.parametros();
	        }

	        this.state = 35;
	        this.match(javascriptParser.RPAREN);
	        this.state = 36;
	        this.match(javascriptParser.IZQLLAVE);
	        this.state = 37;
	        this.instrucciones();
	        this.state = 38;
	        this.match(javascriptParser.DERLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, javascriptParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.identificador();
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 41;
	            this.match(javascriptParser.COMA);
	            this.state = 42;
	            this.identificador();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, javascriptParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1408) !== 0)) {
	            this.state = 51;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 7:
	                this.state = 48;
	                this.leer();
	                break;
	            case 8:
	                this.state = 49;
	                this.escribir();
	                break;
	            case 10:
	                this.state = 50;
	                this.asignacion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, javascriptParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(javascriptParser.LEER);
	        this.state = 57;
	        this.match(javascriptParser.LPAREN);
	        this.state = 58;
	        this.identificador();
	        this.state = 59;
	        this.match(javascriptParser.RPAREN);
	        this.state = 60;
	        this.match(javascriptParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escribir() {
	    let localctx = new EscribirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, javascriptParser.RULE_escribir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(javascriptParser.ESCRIBIR);
	        this.state = 63;
	        this.match(javascriptParser.LPAREN);
	        this.state = 64;
	        this.expresion();
	        this.state = 65;
	        this.match(javascriptParser.RPAREN);
	        this.state = 66;
	        this.match(javascriptParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, javascriptParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.identificador();
	        this.state = 69;
	        this.match(javascriptParser.IGUAL);
	        this.state = 70;
	        this.expresion();
	        this.state = 71;
	        this.match(javascriptParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, javascriptParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.termino();
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 74;
	            this.match(javascriptParser.SUMA);
	            this.state = 75;
	            this.termino();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, javascriptParser.RULE_termino);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, javascriptParser.RULE_identificador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(javascriptParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, javascriptParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(javascriptParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, javascriptParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(javascriptParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

javascriptParser.EOF = antlr4.Token.EOF;
javascriptParser.FUNC = 1;
javascriptParser.LPAREN = 2;
javascriptParser.RPAREN = 3;
javascriptParser.IZQLLAVE = 4;
javascriptParser.DERLLAVE = 5;
javascriptParser.COMA = 6;
javascriptParser.LEER = 7;
javascriptParser.ESCRIBIR = 8;
javascriptParser.PUNTOYCOMA = 9;
javascriptParser.IDENTIFICADOR = 10;
javascriptParser.NUMERO = 11;
javascriptParser.CADENA = 12;
javascriptParser.IGUAL = 13;
javascriptParser.SUMA = 14;
javascriptParser.WS = 15;

javascriptParser.RULE_programa = 0;
javascriptParser.RULE_funcion = 1;
javascriptParser.RULE_parametros = 2;
javascriptParser.RULE_instrucciones = 3;
javascriptParser.RULE_leer = 4;
javascriptParser.RULE_escribir = 5;
javascriptParser.RULE_asignacion = 6;
javascriptParser.RULE_expresion = 7;
javascriptParser.RULE_termino = 8;
javascriptParser.RULE_identificador = 9;
javascriptParser.RULE_numero = 10;
javascriptParser.RULE_cadena = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_programa;
    }

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_funcion;
    }

	FUNC() {
	    return this.getToken(javascriptParser.FUNC, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LPAREN() {
	    return this.getToken(javascriptParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(javascriptParser.RPAREN, 0);
	};

	IZQLLAVE() {
	    return this.getToken(javascriptParser.IZQLLAVE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	DERLLAVE() {
	    return this.getToken(javascriptParser.DERLLAVE, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_parametros;
    }

	identificador = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentificadorContext);
	    } else {
	        return this.getTypedRuleContext(IdentificadorContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(javascriptParser.COMA);
	    } else {
	        return this.getToken(javascriptParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_instrucciones;
    }

	leer = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LeerContext);
	    } else {
	        return this.getTypedRuleContext(LeerContext,i);
	    }
	};

	escribir = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscribirContext);
	    } else {
	        return this.getTypedRuleContext(EscribirContext,i);
	    }
	};

	asignacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsignacionContext);
	    } else {
	        return this.getTypedRuleContext(AsignacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_leer;
    }

	LEER() {
	    return this.getToken(javascriptParser.LEER, 0);
	};

	LPAREN() {
	    return this.getToken(javascriptParser.LPAREN, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	RPAREN() {
	    return this.getToken(javascriptParser.RPAREN, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(javascriptParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscribirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_escribir;
    }

	ESCRIBIR() {
	    return this.getToken(javascriptParser.ESCRIBIR, 0);
	};

	LPAREN() {
	    return this.getToken(javascriptParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(javascriptParser.RPAREN, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(javascriptParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterEscribir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitEscribir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitEscribir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_asignacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	IGUAL() {
	    return this.getToken(javascriptParser.IGUAL, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(javascriptParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	SUMA() {
	    return this.getToken(javascriptParser.SUMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_termino;
    }

	NUMERO() {
	    return this.getToken(javascriptParser.NUMERO, 0);
	};

	CADENA() {
	    return this.getToken(javascriptParser.CADENA, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(javascriptParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_identificador;
    }

	IDENTIFICADOR() {
	    return this.getToken(javascriptParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(javascriptParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = javascriptParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(javascriptParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof javascriptListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof javascriptVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




javascriptParser.ProgramaContext = ProgramaContext; 
javascriptParser.FuncionContext = FuncionContext; 
javascriptParser.ParametrosContext = ParametrosContext; 
javascriptParser.InstruccionesContext = InstruccionesContext; 
javascriptParser.LeerContext = LeerContext; 
javascriptParser.EscribirContext = EscribirContext; 
javascriptParser.AsignacionContext = AsignacionContext; 
javascriptParser.ExpresionContext = ExpresionContext; 
javascriptParser.TerminoContext = TerminoContext; 
javascriptParser.IdentificadorContext = IdentificadorContext; 
javascriptParser.NumeroContext = NumeroContext; 
javascriptParser.CadenaContext = CadenaContext; 
