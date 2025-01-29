"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4097],{64097:(t,i,e)=>{e.d(i,{diagram:()=>q});var s=e(93084),n=e(41868),a=e(74762),h=e(11493),o=e(28098),r=function(){var t=(0,h.eW)((function(t,i,e,s){for(e=e||{},s=t.length;s--;e[t[s]]=i);return e}),"o"),i=[1,10,12,14,16,18,19,21,23],e=[2,6],s=[1,3],n=[1,5],a=[1,6],o=[1,7],r=[1,5,10,12,14,16,18,19,21,23,34,35,36],l=[1,25],c=[1,26],g=[1,28],u=[1,29],x=[1,30],p=[1,31],d=[1,32],f=[1,33],y=[1,34],m=[1,35],b=[1,36],A=[1,37],C=[1,43],S=[1,42],w=[1,47],_=[1,50],k=[1,10,12,14,16,18,19,21,23,34,35,36],T=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],R=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],D=[1,64],W={trace:(0,h.eW)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:(0,h.eW)((function(t,i,e,s,n,a,h){var o=a.length-1;switch(n){case 5:s.setOrientation(a[o]);break;case 9:s.setDiagramTitle(a[o].text.trim());break;case 12:s.setLineData({text:"",type:"text"},a[o]);break;case 13:s.setLineData(a[o-1],a[o]);break;case 14:s.setBarData({text:"",type:"text"},a[o]);break;case 15:s.setBarData(a[o-1],a[o]);break;case 16:this.$=a[o].trim(),s.setAccTitle(this.$);break;case 17:case 18:this.$=a[o].trim(),s.setAccDescription(this.$);break;case 19:case 27:this.$=a[o-1];break;case 20:this.$=[Number(a[o-2]),...a[o]];break;case 21:this.$=[Number(a[o])];break;case 22:s.setXAxisTitle(a[o]);break;case 23:s.setXAxisTitle(a[o-1]);break;case 24:s.setXAxisTitle({type:"text",text:""});break;case 25:s.setXAxisBand(a[o]);break;case 26:s.setXAxisRangeData(Number(a[o-2]),Number(a[o]));break;case 28:this.$=[a[o-2],...a[o]];break;case 29:this.$=[a[o]];break;case 30:s.setYAxisTitle(a[o]);break;case 31:s.setYAxisTitle(a[o-1]);break;case 32:s.setYAxisTitle({type:"text",text:""});break;case 33:s.setYAxisRangeData(Number(a[o-2]),Number(a[o]));break;case 37:case 38:this.$={text:a[o],type:"text"};break;case 39:this.$={text:a[o],type:"markdown"};break;case 40:this.$=a[o];break;case 41:this.$=a[o-1]+""+a[o]}}),"anonymous"),table:[t(i,e,{3:1,4:2,7:4,5:s,34:n,35:a,36:o}),{1:[3]},t(i,e,{4:2,7:4,3:8,5:s,34:n,35:a,36:o}),t(i,e,{4:2,7:4,6:9,3:10,5:s,8:[1,11],34:n,35:a,36:o}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},t(r,[2,34]),t(r,[2,35]),t(r,[2,36]),{1:[2,1]},t(i,e,{4:2,7:4,3:21,5:s,34:n,35:a,36:o}),{1:[2,3]},t(r,[2,5]),t(i,[2,7],{4:22,34:n,35:a,36:o}),{11:23,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:p,45:d,46:f,47:y,48:m,49:b,50:A},{11:39,13:38,24:C,27:S,29:40,30:41,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:p,45:d,46:f,47:y,48:m,49:b,50:A},{11:45,15:44,27:w,33:46,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:p,45:d,46:f,47:y,48:m,49:b,50:A},{11:49,17:48,24:_,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:p,45:d,46:f,47:y,48:m,49:b,50:A},{11:52,17:51,24:_,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:p,45:d,46:f,47:y,48:m,49:b,50:A},{20:[1,53]},{22:[1,54]},t(k,[2,18]),{1:[2,2]},t(k,[2,8]),t(k,[2,9]),t(T,[2,37],{40:55,41:g,42:u,43:x,44:p,45:d,46:f,47:y,48:m,49:b,50:A}),t(T,[2,38]),t(T,[2,39]),t(R,[2,40]),t(R,[2,42]),t(R,[2,43]),t(R,[2,44]),t(R,[2,45]),t(R,[2,46]),t(R,[2,47]),t(R,[2,48]),t(R,[2,49]),t(R,[2,50]),t(R,[2,51]),t(k,[2,10]),t(k,[2,22],{30:41,29:56,24:C,27:S}),t(k,[2,24]),t(k,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:p,45:d,46:f,47:y,48:m,49:b,50:A},t(k,[2,11]),t(k,[2,30],{33:60,27:w}),t(k,[2,32]),{31:[1,61]},t(k,[2,12]),{17:62,24:_},{25:63,27:D},t(k,[2,14]),{17:65,24:_},t(k,[2,16]),t(k,[2,17]),t(R,[2,41]),t(k,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},t(k,[2,31]),{27:[1,69]},t(k,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},t(k,[2,15]),t(k,[2,26]),t(k,[2,27]),{11:59,32:72,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:p,45:d,46:f,47:y,48:m,49:b,50:A},t(k,[2,33]),t(k,[2,19]),{25:73,27:D},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:(0,h.eW)((function(t,i){if(!i.recoverable){var e=new Error(t);throw e.hash=i,e}this.trace(t)}),"parseError"),parse:(0,h.eW)((function(t){var i=this,e=[0],s=[],n=[null],a=[],o=this.table,r="",l=0,c=0,g=0,u=a.slice.call(arguments,1),x=Object.create(this.lexer),p={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(p.yy[d]=this.yy[d]);x.setInput(t,p.yy),p.yy.lexer=x,p.yy.parser=this,void 0===x.yylloc&&(x.yylloc={});var f=x.yylloc;a.push(f);var y=x.options&&x.options.ranges;function m(){var t;return"number"!=typeof(t=s.pop()||x.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=i.symbols_[t]||t),t}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,h.eW)((function(t){e.length=e.length-2*t,n.length=n.length-t,a.length=a.length-t}),"popStack"),(0,h.eW)(m,"lex");for(var b,A,C,S,w,_,k,T,R,D={};;){if(C=e[e.length-1],this.defaultActions[C]?S=this.defaultActions[C]:(null==b&&(b=m()),S=o[C]&&o[C][b]),void 0===S||!S.length||!S[0]){var W;for(_ in R=[],o[C])this.terminals_[_]&&_>2&&R.push("'"+this.terminals_[_]+"'");W=x.showPosition?"Parse error on line "+(l+1)+":\n"+x.showPosition()+"\nExpecting "+R.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(W,{text:x.match,token:this.terminals_[b]||b,line:x.yylineno,loc:f,expected:R})}if(S[0]instanceof Array&&S.length>1)throw new Error("Parse Error: multiple actions possible at state: "+C+", token: "+b);switch(S[0]){case 1:e.push(b),n.push(x.yytext),a.push(x.yylloc),e.push(S[1]),b=null,A?(b=A,A=null):(c=x.yyleng,r=x.yytext,l=x.yylineno,f=x.yylloc,g>0&&g--);break;case 2:if(k=this.productions_[S[1]][1],D.$=n[n.length-k],D._$={first_line:a[a.length-(k||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(k||1)].first_column,last_column:a[a.length-1].last_column},y&&(D._$.range=[a[a.length-(k||1)].range[0],a[a.length-1].range[1]]),void 0!==(w=this.performAction.apply(D,[r,c,l,p.yy,S[1],n,a].concat(u))))return w;k&&(e=e.slice(0,-1*k*2),n=n.slice(0,-1*k),a=a.slice(0,-1*k)),e.push(this.productions_[S[1]][0]),n.push(D.$),a.push(D._$),T=o[e[e.length-2]][e[e.length-1]],e.push(T);break;case 3:return!0}}return!0}),"parse")},L=function(){return{EOF:1,parseError:(0,h.eW)((function(t,i){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,i)}),"parseError"),setInput:(0,h.eW)((function(t,i){return this.yy=i||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,h.eW)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,h.eW)((function(t){var i=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===s.length?this.yylloc.first_column:0)+s[s.length-e.length].length-e[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,h.eW)((function(){return this._more=!0,this}),"more"),reject:(0,h.eW)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,h.eW)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,h.eW)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,h.eW)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,h.eW)((function(){var t=this.pastInput(),i=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+i+"^"}),"showPosition"),test_match:(0,h.eW)((function(t,i){var e,s,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack){for(var a in n)this[a]=n[a];return!1}return!1}),"test_match"),next:(0,h.eW)((function(){if(this.done)return this.EOF;var t,i,e,s;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),a=0;a<n.length;a++)if((e=this._input.match(this.rules[n[a]]))&&(!i||e[0].length>i[0].length)){if(i=e,s=a,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,n[a])))return t;if(this._backtrack){i=!1;continue}return!1}if(!this.options.flex)break}return i?!1!==(t=this.test_match(i,n[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,h.eW)((function(){return this.next()||this.lex()}),"lex"),begin:(0,h.eW)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,h.eW)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,h.eW)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,h.eW)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,h.eW)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,h.eW)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,h.eW)((function(t,i,e,s){switch(e){case 0:case 1:case 5:case 43:break;case 2:case 3:return this.popState(),34;case 4:return 34;case 6:return 10;case 7:return this.pushState("acc_title"),19;case 8:return this.popState(),"acc_title_value";case 9:return this.pushState("acc_descr"),21;case 10:return this.popState(),"acc_descr_value";case 11:this.pushState("acc_descr_multiline");break;case 12:case 25:case 27:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";case 17:return this.pushState("axis_data"),"Y_AXIS";case 18:return this.pushState("axis_band_data"),24;case 19:return 31;case 20:return this.pushState("data"),16;case 21:return this.pushState("data"),18;case 22:return this.pushState("data_inner"),24;case 23:return 27;case 24:return this.popState(),26;case 26:this.pushState("string");break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 44:return 35;case 45:return 36}}),"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}}}();function P(){this.yy={}}return W.lexer=L,(0,h.eW)(P,"Parser"),P.prototype=W,W.Parser=P,new P}();r.parser=r;var l=r;function c(t){return"bar"===t.type}function g(t){return"band"===t.type}function u(t){return"linear"===t.type}(0,h.eW)(c,"isBarPlot"),(0,h.eW)(g,"isBandAxisData"),(0,h.eW)(u,"isLinearAxisData");var x=class{constructor(t){this.parentGroup=t}static{(0,h.eW)(this,"TextDimensionCalculatorWithFont")}getMaxDimension(t,i){if(!this.parentGroup)return{width:t.reduce(((t,i)=>Math.max(i.length,t)),0)*i,height:i};const e={width:0,height:0},n=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);for(const a of t){const t=(0,s.QA)(n,1,a),h=t?t.width:a.length*i,o=t?t.height:i;e.width=Math.max(e.width,h),e.height=Math.max(e.height,o)}return n.remove(),e}},p=class{constructor(t,i,e,s){this.axisConfig=t,this.title=i,this.textDimensionCalculator=e,this.axisThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left",this.showTitle=!1,this.showLabel=!1,this.showTick=!1,this.showAxisLine=!1,this.outerPadding=0,this.titleTextHeight=0,this.labelTextHeight=0,this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}static{(0,h.eW)(this,"BaseAxis")}setRange(t){this.range=t,"left"===this.axisPosition||"right"===this.axisPosition?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){const t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map((t=>t.toString())),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){.7*this.getTickDistance()>2*this.outerPadding&&(this.outerPadding=Math.floor(.7*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let i=t.height;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const e=this.getLabelDimension(),s=.2*t.width;this.outerPadding=Math.min(e.width/2,s);const n=e.height+2*this.axisConfig.labelPadding;this.labelTextHeight=e.height,n<=i&&(i-=n,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const t=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),e=t.height+2*this.axisConfig.titlePadding;this.titleTextHeight=t.height,e<=i&&(i-=e,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-i}calculateSpaceIfDrawnVertical(t){let i=t.width;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const e=this.getLabelDimension(),s=.2*t.height;this.outerPadding=Math.min(e.height/2,s);const n=e.width+2*this.axisConfig.labelPadding;n<=i&&(i-=n,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const t=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),e=t.height+2*this.axisConfig.titlePadding;this.titleTextHeight=t.height,e<=i&&(i-=e,this.showTitle=!0)}this.boundingRect.width=t.width-i,this.boundingRect.height=t.height}calculateSpace(t){return"left"===this.axisPosition||"right"===this.axisPosition?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map((t=>({text:t.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(t),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"})))}),this.showTick){const i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map((t=>({path:`M ${i},${this.getScaleValue(t)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(t)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth})))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map((t=>({text:t.toString(),x:this.getScaleValue(t),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"})))}),this.showTick){const i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map((t=>({path:`M ${this.getScaleValue(t)},${i} L ${this.getScaleValue(t)},${i+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth})))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map((t=>({text:t.toString(),x:this.getScaleValue(t),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+2*this.axisConfig.titlePadding:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"})))}),this.showTick){const i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map((t=>({path:`M ${this.getScaleValue(t)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(t)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth})))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if("left"===this.axisPosition)return this.getDrawableElementsForLeftAxis();if("right"===this.axisPosition)throw Error("Drawing of right axis is not implemented");return"bottom"===this.axisPosition?this.getDrawableElementsForBottomAxis():"top"===this.axisPosition?this.getDrawableElementsForTopAxis():[]}},d=class extends p{static{(0,h.eW)(this,"BandAxis")}constructor(t,i,e,s,n){super(t,s,n,i),this.categories=e,this.scale=(0,o.tiA)().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=(0,o.tiA)().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),h.cM.trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)??this.getRange()[0]}},f=class extends p{static{(0,h.eW)(this,"LinearAxis")}constructor(t,i,e,s,n){super(t,s,n,i),this.domain=e,this.scale=(0,o.BYU)().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){const t=[...this.domain];"left"===this.axisPosition&&t.reverse(),this.scale=(0,o.BYU)().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}};function y(t,i,e,s){const n=new x(s);return g(t)?new d(i,e,t.categories,t.title,n):new f(i,e,[t.min,t.max],t.title,n)}(0,h.eW)(y,"getAxis");var m=class{constructor(t,i,e,s){this.textDimensionCalculator=t,this.chartConfig=i,this.chartData=e,this.chartThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}static{(0,h.eW)(this,"ChartTitle")}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){const i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),e=Math.max(i.width,t.width),s=i.height+2*this.chartConfig.titlePadding;return i.width<=e&&i.height<=s&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=e,this.boundingRect.height=s,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){const t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}};function b(t,i,e,s){const n=new x(s);return new m(n,t,i,e)}(0,h.eW)(b,"getChartTitleComponent");var A=class{constructor(t,i,e,s,n){this.plotData=t,this.xAxis=i,this.yAxis=e,this.orientation=s,this.plotIndex=n}static{(0,h.eW)(this,"LinePlot")}getDrawableElement(){const t=this.plotData.data.map((t=>[this.xAxis.getScaleValue(t[0]),this.yAxis.getScaleValue(t[1])]));let i;return i="horizontal"===this.orientation?(0,o.jvg)().y((t=>t[0])).x((t=>t[1]))(t):(0,o.jvg)().x((t=>t[0])).y((t=>t[1]))(t),i?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:i,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}},C=class{constructor(t,i,e,s,n,a){this.barData=t,this.boundingRect=i,this.xAxis=e,this.yAxis=s,this.orientation=n,this.plotIndex=a}static{(0,h.eW)(this,"BarPlot")}getDrawableElement(){const t=this.barData.data.map((t=>[this.xAxis.getScaleValue(t[0]),this.yAxis.getScaleValue(t[1])])),i=.95*Math.min(2*this.xAxis.getAxisOuterPadding(),this.xAxis.getTickDistance()),e=i/2;return"horizontal"===this.orientation?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map((t=>({x:this.boundingRect.x,y:t[0]-e,height:i,width:t[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill})))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map((t=>({x:t[0]-e,y:t[1],width:i,height:this.boundingRect.y+this.boundingRect.height-t[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill})))}]}},S=class{constructor(t,i,e){this.chartConfig=t,this.chartData=i,this.chartThemeConfig=e,this.boundingRect={x:0,y:0,width:0,height:0}}static{(0,h.eW)(this,"BasePlot")}setAxes(t,i){this.xAxis=t,this.yAxis=i}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!this.xAxis||!this.yAxis)throw Error("Axes must be passed to render Plots");const t=[];for(const[i,e]of this.chartData.plots.entries())switch(e.type){case"line":{const s=new A(e,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...s.getDrawableElement())}break;case"bar":{const s=new C(e,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...s.getDrawableElement())}}return t}};function w(t,i,e){return new S(t,i,e)}(0,h.eW)(w,"getPlotComponent");var _,k=class{constructor(t,i,e,s){this.chartConfig=t,this.chartData=i,this.componentStore={title:b(t,i,e,s),plot:w(t,i,e),xAxis:y(i.xAxis,t.xAxis,{titleColor:e.xAxisTitleColor,labelColor:e.xAxisLabelColor,tickColor:e.xAxisTickColor,axisLineColor:e.xAxisLineColor},s),yAxis:y(i.yAxis,t.yAxis,{titleColor:e.yAxisTitleColor,labelColor:e.yAxisLabelColor,tickColor:e.yAxisTickColor,axisLineColor:e.yAxisLineColor},s)}}static{(0,h.eW)(this,"Orchestrator")}calculateVerticalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,s=0,n=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),a=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),h=this.componentStore.plot.calculateSpace({width:n,height:a});t-=h.width,i-=h.height,h=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),s=h.height,i-=h.height,this.componentStore.xAxis.setAxisPosition("bottom"),h=this.componentStore.xAxis.calculateSpace({width:t,height:i}),i-=h.height,this.componentStore.yAxis.setAxisPosition("left"),h=this.componentStore.yAxis.calculateSpace({width:t,height:i}),e=h.width,t-=h.width,t>0&&(n+=t,t=0),i>0&&(a+=i,i=0),this.componentStore.plot.calculateSpace({width:n,height:a}),this.componentStore.plot.setBoundingBoxXY({x:e,y:s}),this.componentStore.xAxis.setRange([e,e+n]),this.componentStore.xAxis.setBoundingBoxXY({x:e,y:s+a}),this.componentStore.yAxis.setRange([s,s+a]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:s}),this.chartData.plots.some((t=>c(t)))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizontalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,s=0,n=0,a=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),h=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),o=this.componentStore.plot.calculateSpace({width:a,height:h});t-=o.width,i-=o.height,o=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),e=o.height,i-=o.height,this.componentStore.xAxis.setAxisPosition("left"),o=this.componentStore.xAxis.calculateSpace({width:t,height:i}),t-=o.width,s=o.width,this.componentStore.yAxis.setAxisPosition("top"),o=this.componentStore.yAxis.calculateSpace({width:t,height:i}),i-=o.height,n=e+o.height,t>0&&(a+=t,t=0),i>0&&(h+=i,i=0),this.componentStore.plot.calculateSpace({width:a,height:h}),this.componentStore.plot.setBoundingBoxXY({x:s,y:n}),this.componentStore.yAxis.setRange([s,s+a]),this.componentStore.yAxis.setBoundingBoxXY({x:s,y:e}),this.componentStore.xAxis.setRange([n,n+h]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:n}),this.chartData.plots.some((t=>c(t)))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){"horizontal"===this.chartConfig.chartOrientation?this.calculateHorizontalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();const t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for(const i of Object.values(this.componentStore))t.push(...i.getDrawableElements());return t}},T=class{static{(0,h.eW)(this,"XYChartBuilder")}static build(t,i,e,s){return new k(t,i,e,s).getDrawableElement()}},R=0,D=M(),W=I(),L={yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]},P=W.plotColorPalette.split(",").map((t=>t.trim())),E=!1,v=!1;function I(){const t=(0,h.xN)(),i=(0,h.iE)();return(0,n.Rb)(t.xyChart,i.themeVariables.xyChart)}function M(){const t=(0,h.iE)();return(0,n.Rb)(h.vZ.xyChart,t.xyChart)}function $(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}function B(t){const i=(0,h.iE)();return(0,h.oO)(t.trim(),i)}function z(t){_=t}function O(t){D.chartOrientation="horizontal"===t?"horizontal":"vertical"}function F(t){L.xAxis.title=B(t.text)}function N(t,i){L.xAxis={type:"linear",title:L.xAxis.title,min:t,max:i},E=!0}function V(t){L.xAxis={type:"band",title:L.xAxis.title,categories:t.map((t=>B(t.text)))},E=!0}function X(t){L.yAxis.title=B(t.text)}function Y(t,i){L.yAxis={type:"linear",title:L.yAxis.title,min:t,max:i},v=!0}function U(t){const i=Math.min(...t),e=Math.max(...t),s=u(L.yAxis)?L.yAxis.min:1/0,n=u(L.yAxis)?L.yAxis.max:-1/0;L.yAxis={type:"linear",title:L.yAxis.title,min:Math.min(s,i),max:Math.max(n,e)}}function H(t){let i=[];if(0===t.length)return i;if(!E){const i=u(L.xAxis)?L.xAxis.min:1/0,e=u(L.xAxis)?L.xAxis.max:-1/0;N(Math.min(i,1),Math.max(e,t.length))}if(v||U(t),g(L.xAxis)&&(i=L.xAxis.categories.map(((i,e)=>[i,t[e]]))),u(L.xAxis)){const e=L.xAxis.min,s=L.xAxis.max,n=(s-e)/(t.length-1),a=[];for(let t=e;t<=s;t+=n)a.push(`${t}`);i=a.map(((i,e)=>[i,t[e]]))}return i}function j(t){return P[0===t?0:t%P.length]}function G(t,i){const e=H(i);L.plots.push({type:"line",strokeFill:j(R),strokeWidth:2,data:e}),R++}function Q(t,i){const e=H(i);L.plots.push({type:"bar",fill:j(R),data:e}),R++}function K(){if(0===L.plots.length)throw Error("No Plot to render, please provide a plot with some data");return L.title=(0,h.Kr)(),T.build(D,L,W,_)}function Z(){return W}function J(){return D}(0,h.eW)(I,"getChartDefaultThemeConfig"),(0,h.eW)(M,"getChartDefaultConfig"),(0,h.eW)($,"getChartDefaultData"),(0,h.eW)(B,"textSanitizer"),(0,h.eW)(z,"setTmpSVGG"),(0,h.eW)(O,"setOrientation"),(0,h.eW)(F,"setXAxisTitle"),(0,h.eW)(N,"setXAxisRangeData"),(0,h.eW)(V,"setXAxisBand"),(0,h.eW)(X,"setYAxisTitle"),(0,h.eW)(Y,"setYAxisRangeData"),(0,h.eW)(U,"setYAxisRangeFromPlotData"),(0,h.eW)(H,"transformDataWithoutCategory"),(0,h.eW)(j,"getPlotColorFromPalette"),(0,h.eW)(G,"setLineData"),(0,h.eW)(Q,"setBarData"),(0,h.eW)(K,"getDrawableElem"),(0,h.eW)(Z,"getChartThemeConfig"),(0,h.eW)(J,"getChartConfig");var q={parser:l,db:{getDrawableElem:K,clear:(0,h.eW)((function(){(0,h.ZH)(),R=0,D=M(),L={yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]},W=I(),P=W.plotColorPalette.split(",").map((t=>t.trim())),E=!1,v=!1}),"clear"),setAccTitle:h.GN,getAccTitle:h.eu,setDiagramTitle:h.g2,getDiagramTitle:h.Kr,getAccDescription:h.Mx,setAccDescription:h.U$,setOrientation:O,setXAxisTitle:F,setXAxisRangeData:N,setXAxisBand:V,setYAxisTitle:X,setYAxisRangeData:Y,setLineData:G,setBarData:Q,setTmpSVGG:z,getChartThemeConfig:Z,getChartConfig:J},renderer:{draw:(0,h.eW)(((t,i,e,s)=>{const n=s.db,o=n.getChartThemeConfig(),r=n.getChartConfig();function l(t){return"top"===t?"text-before-edge":"middle"}function c(t){return"left"===t?"start":"right"===t?"end":"middle"}function g(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}(0,h.eW)(l,"getDominantBaseLine"),(0,h.eW)(c,"getTextAnchor"),(0,h.eW)(g,"getTextTransformation"),h.cM.debug("Rendering xychart chart\n"+t);const u=(0,a.P)(i),x=u.append("g").attr("class","main"),p=x.append("rect").attr("width",r.width).attr("height",r.height).attr("class","background");(0,h.v2)(u,r.height,r.width,!0),u.attr("viewBox",`0 0 ${r.width} ${r.height}`),p.attr("fill",o.backgroundColor),n.setTmpSVGG(u.append("g").attr("class","mermaid-tmp-group"));const d=n.getDrawableElem(),f={};function y(t){let i=x,e="";for(const[s]of t.entries()){let n=x;s>0&&f[e]&&(n=f[e]),e+=t[s],i=f[e],i||(i=f[e]=n.append("g").attr("class",t[s]))}return i}(0,h.eW)(y,"getGroup");for(const t of d){if(0===t.data.length)continue;const i=y(t.groupTexts);switch(t.type){case"rect":i.selectAll("rect").data(t.data).enter().append("rect").attr("x",(t=>t.x)).attr("y",(t=>t.y)).attr("width",(t=>t.width)).attr("height",(t=>t.height)).attr("fill",(t=>t.fill)).attr("stroke",(t=>t.strokeFill)).attr("stroke-width",(t=>t.strokeWidth));break;case"text":i.selectAll("text").data(t.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",(t=>t.fill)).attr("font-size",(t=>t.fontSize)).attr("dominant-baseline",(t=>l(t.verticalPos))).attr("text-anchor",(t=>c(t.horizontalPos))).attr("transform",(t=>g(t))).text((t=>t.text));break;case"path":i.selectAll("path").data(t.data).enter().append("path").attr("d",(t=>t.path)).attr("fill",(t=>t.fill?t.fill:"none")).attr("stroke",(t=>t.strokeFill)).attr("stroke-width",(t=>t.strokeWidth))}}}),"draw")}}}}]);
//# sourceMappingURL=4097.104ae39.js.map