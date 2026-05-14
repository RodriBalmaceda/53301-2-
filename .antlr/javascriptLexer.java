// Generated from c:/Users/admin/ssl-antlr-calculator/javascript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class javascriptLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FUNC=1, LPAREN=2, RPAREN=3, IZQLLAVE=4, DERLLAVE=5, COMA=6, LEER=7, ESCRIBIR=8, 
		PUNTOYCOMA=9, IDENTIFICADOR=10, NUMERO=11, CADENA=12, IGUAL=13, SUMA=14, 
		WS=15;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"FUNC", "LPAREN", "RPAREN", "IZQLLAVE", "DERLLAVE", "COMA", "LEER", "ESCRIBIR", 
			"PUNTOYCOMA", "IDENTIFICADOR", "NUMERO", "CADENA", "IGUAL", "SUMA", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'funcion'", "'('", "')'", "'{'", "'}'", "','", "'leer'", "'escribir'", 
			"';'", null, null, null, "'='", "'+'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "FUNC", "LPAREN", "RPAREN", "IZQLLAVE", "DERLLAVE", "COMA", "LEER", 
			"ESCRIBIR", "PUNTOYCOMA", "IDENTIFICADOR", "NUMERO", "CADENA", "IGUAL", 
			"SUMA", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public javascriptLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "javascript.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u000fa\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0005\tD\b\t\n\t\f"+
		"\tG\t\t\u0001\n\u0004\nJ\b\n\u000b\n\f\nK\u0001\u000b\u0001\u000b\u0005"+
		"\u000bP\b\u000b\n\u000b\f\u000bS\t\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0004\u000e\\\b\u000e\u000b\u000e"+
		"\f\u000e]\u0001\u000e\u0001\u000e\u0000\u0000\u000f\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u0001\u0000"+
		"\u0005\u0002\u0000AZaz\u0004\u000009AZ__az\u0001\u000009\u0001\u0000\""+
		"\"\u0003\u0000\t\n\r\r  d\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000"+
		"\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0001\u001f\u0001\u0000"+
		"\u0000\u0000\u0003\'\u0001\u0000\u0000\u0000\u0005)\u0001\u0000\u0000"+
		"\u0000\u0007+\u0001\u0000\u0000\u0000\t-\u0001\u0000\u0000\u0000\u000b"+
		"/\u0001\u0000\u0000\u0000\r1\u0001\u0000\u0000\u0000\u000f6\u0001\u0000"+
		"\u0000\u0000\u0011?\u0001\u0000\u0000\u0000\u0013A\u0001\u0000\u0000\u0000"+
		"\u0015I\u0001\u0000\u0000\u0000\u0017M\u0001\u0000\u0000\u0000\u0019V"+
		"\u0001\u0000\u0000\u0000\u001bX\u0001\u0000\u0000\u0000\u001d[\u0001\u0000"+
		"\u0000\u0000\u001f \u0005f\u0000\u0000 !\u0005u\u0000\u0000!\"\u0005n"+
		"\u0000\u0000\"#\u0005c\u0000\u0000#$\u0005i\u0000\u0000$%\u0005o\u0000"+
		"\u0000%&\u0005n\u0000\u0000&\u0002\u0001\u0000\u0000\u0000\'(\u0005(\u0000"+
		"\u0000(\u0004\u0001\u0000\u0000\u0000)*\u0005)\u0000\u0000*\u0006\u0001"+
		"\u0000\u0000\u0000+,\u0005{\u0000\u0000,\b\u0001\u0000\u0000\u0000-.\u0005"+
		"}\u0000\u0000.\n\u0001\u0000\u0000\u0000/0\u0005,\u0000\u00000\f\u0001"+
		"\u0000\u0000\u000012\u0005l\u0000\u000023\u0005e\u0000\u000034\u0005e"+
		"\u0000\u000045\u0005r\u0000\u00005\u000e\u0001\u0000\u0000\u000067\u0005"+
		"e\u0000\u000078\u0005s\u0000\u000089\u0005c\u0000\u00009:\u0005r\u0000"+
		"\u0000:;\u0005i\u0000\u0000;<\u0005b\u0000\u0000<=\u0005i\u0000\u0000"+
		"=>\u0005r\u0000\u0000>\u0010\u0001\u0000\u0000\u0000?@\u0005;\u0000\u0000"+
		"@\u0012\u0001\u0000\u0000\u0000AE\u0007\u0000\u0000\u0000BD\u0007\u0001"+
		"\u0000\u0000CB\u0001\u0000\u0000\u0000DG\u0001\u0000\u0000\u0000EC\u0001"+
		"\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000F\u0014\u0001\u0000\u0000"+
		"\u0000GE\u0001\u0000\u0000\u0000HJ\u0007\u0002\u0000\u0000IH\u0001\u0000"+
		"\u0000\u0000JK\u0001\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000KL\u0001"+
		"\u0000\u0000\u0000L\u0016\u0001\u0000\u0000\u0000MQ\u0005\"\u0000\u0000"+
		"NP\b\u0003\u0000\u0000ON\u0001\u0000\u0000\u0000PS\u0001\u0000\u0000\u0000"+
		"QO\u0001\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000RT\u0001\u0000\u0000"+
		"\u0000SQ\u0001\u0000\u0000\u0000TU\u0005\"\u0000\u0000U\u0018\u0001\u0000"+
		"\u0000\u0000VW\u0005=\u0000\u0000W\u001a\u0001\u0000\u0000\u0000XY\u0005"+
		"+\u0000\u0000Y\u001c\u0001\u0000\u0000\u0000Z\\\u0007\u0004\u0000\u0000"+
		"[Z\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000][\u0001\u0000\u0000"+
		"\u0000]^\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_`\u0006\u000e"+
		"\u0000\u0000`\u001e\u0001\u0000\u0000\u0000\u0005\u0000EKQ]\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}