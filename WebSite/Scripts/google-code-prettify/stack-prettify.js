window.PR_SHOULD_USE_CONTINUATION=true;window.PR_TAB_WIDTH=8;window.PR_normalizedHtml=window.PR=window.prettyPrintOne=window.prettyPrint=void 0;window._pr_isIE6=function(){var a=navigator&&navigator.userAgent&&navigator.userAgent.match(/\bMSIE ([6789])\./);a=a?+a[1]:false;window._pr_isIE6=function(){return a};return a};(function(){var r="break continue do else for if return while ";var c=r+"auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile ";var aa=c+"catch class delete false import new operator private protected public this throw true try typeof ";var E=aa+"alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where ";var O=aa+"abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ";var A=O+"as base by checked decimal delegate descending dynamic event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ";var W="all and by catch class else extends false finally for if in is isnt loop new no not null of off on or return super then true try unless until when while yes ";var al=aa+"debugger eval export function get null set undefined var with Infinity NaN ";var t="caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ";var n=r+"and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ";var Y=r+"alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ";var h=r+"case done elif esac eval fi function in local set then until ";var Z=(E+A+al+t+n+Y+h);var J="str";var k="kwd";var M="com";var D="typ";var z="lit";var G="pun";var V="pln";var p="tag";var l="dec";var af="src";var ag="atn";var w="atv";var N="nocode";var U=function(){var ap=["!","!=","!==","#","%","%=","&","&&","&&=","&=","(","*","*=","+=",",","-=","->","/","/=",":","::",";","<","<<","<<=","<=","=","==","===",">",">=",">>",">>=",">>>",">>>=","?","@","[","^","^=","^^","^^=","{","|","|=","||","||=","~","break","case","continue","delete","do","else","finally","instanceof","return","throw","try","typeof"];var aq="(?:^^|[+-]";for(var ao=0;ao<ap.length;++ao){aq+="|"+ap[ao].replace(/([^=<>:&a-z])/g,"\\$1")}aq+=")\\s*";return aq}();var T=/&/g;var g=/</g;var R=/>/g;var j=/\"/g;function v(ao){return ao.replace(T,"&amp;").replace(g,"&lt;").replace(R,"&gt;").replace(j,"&quot;")}function q(ao){return ao.replace(T,"&amp;").replace(g,"&lt;").replace(R,"&gt;")}var b=/&lt;/g;var o=/&gt;/g;var s=/&apos;/g;var F=/&quot;/g;var f=/&amp;/g;var ah=/&nbsp;/g;function u(ar){var au=ar.indexOf("&");if(au<0){return ar}for(--au;(au=ar.indexOf("&#",au+1))>=0;){var at=ar.indexOf(";",au);if(at>=0){var ap=ar.substring(au+3,at);var ao=10;if(ap&&ap.charAt(0)==="x"){ap=ap.substring(1);ao=16}var aq=parseInt(ap,ao);if(!isNaN(aq)){ar=(ar.substring(0,au)+String.fromCharCode(aq)+ar.substring(at+1))}}}return ar.replace(b,"<").replace(o,">").replace(s,"'").replace(F,'"').replace(ah," ").replace(f,"&")}function L(ao){return"XMP"===ao.tagName}var Q=/[\r\n]/g;function y(ao,ap){if("PRE"===ao.tagName){return true}if(!Q.test(ap)){return true}var aq="";if(ao.currentStyle){aq=ao.currentStyle.whiteSpace}else{if(window.getComputedStyle){aq=window.getComputedStyle(ao,null).whiteSpace}}return !aq||aq==="pre"}function i(ao,ay,ax){switch(ao.nodeType){case 1:var aq=ao.tagName.toLowerCase();ay.push("<",aq);var ar=ao.attributes;var aw=ar.length;if(aw){if(ax){var au=[];for(var av=aw;--av>=0;){au[av]=ar[av]}au.sort(function(aA,az){return(aA.name<az.name)?-1:aA.name===az.name?0:1});ar=au}for(var av=0;av<aw;++av){var at=ar[av];if(!at.specified){continue}ay.push(" ",at.name.toLowerCase(),'="',v(at.value),'"')}}ay.push(">");for(var ap=ao.firstChild;ap;ap=ap.nextSibling){i(ap,ay,ax)}if(ao.firstChild||!/^(?:br|link|img)$/.test(aq)){ay.push("</",aq,">")}break;case 3:case 4:ay.push(q(ao.nodeValue));break}}function C(aq){var ar=0;var au=false;var ay=false;for(var ax=0,az=aq.length;ax<az;++ax){var at=aq[ax];if(at.ignoreCase){ay=true}else{if(/[a-z]/i.test(at.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){au=true;ay=false;break}}}function ap(aB){if(aB.charAt(0)!=="\\"){return aB.charCodeAt(0)}switch(aB.charAt(1)){case"b":return 8;case"t":return 9;case"n":return 10;case"v":return 11;case"f":return 12;case"r":return 13;case"u":case"x":return parseInt(aB.substring(2),16)||aB.charCodeAt(1);case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":return parseInt(aB.substring(1),8);default:return aB.charCodeAt(1)}}function av(aC){if(aC<32){return(aC<16?"\\x0":"\\x")+aC.toString(16)}var aB=String.fromCharCode(aC);if(aB==="\\"||aB==="-"||aB==="["||aB==="]"){aB="\\"+aB}return aB}function ao(aI){var aF=aI.substring(1,aI.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g"));var aB=[];var aH=[];var aL=aF[0]==="^";for(var aM=aL?1:0,aN=aF.length;aM<aN;++aM){var aG=aF[aM];switch(aG){case"\\B":case"\\b":case"\\D":case"\\d":case"\\S":case"\\s":case"\\W":case"\\w":aB.push(aG);continue}var aE=ap(aG);var aJ;if(aM+2<aN&&"-"===aF[aM+1]){aJ=ap(aF[aM+2]);aM+=2}else{aJ=aE}aH.push([aE,aJ]);if(!(aJ<65||aE>122)){if(!(aJ<65||aE>90)){aH.push([Math.max(65,aE)|32,Math.min(aJ,90)|32])}if(!(aJ<97||aE>122)){aH.push([Math.max(97,aE)&~32,Math.min(aJ,122)&~32])}}}aH.sort(function(aQ,aP){return(aQ[0]-aP[0])||(aP[1]-aQ[1])});var aK=[];var aO=[NaN,NaN];for(var aM=0;aM<aH.length;++aM){var aC=aH[aM];if(aC[0]<=aO[1]+1){aO[1]=Math.max(aO[1],aC[1])}else{aK.push(aO=aC)}}var aD=["["];if(aL){aD.push("^")}aD.push.apply(aD,aB);for(var aM=0;aM<aK.length;++aM){var aC=aK[aM];aD.push(av(aC[0]));if(aC[1]>aC[0]){if(aC[1]+1>aC[0]){aD.push("-")}aD.push(av(aC[1]))}}aD.push("]");return aD.join("")}function aA(aE){var aH=aE.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g"));var aJ=aH.length;var aC=[];for(var aI=0,aD=0;aI<aJ;++aI){var aF=aH[aI];if(aF==="("){++aD}else{if("\\"===aF.charAt(0)){var aB=+aF.substring(1);if(aB&&aB<=aD){aC[aB]=-1}}}}for(var aI=1;aI<aC.length;++aI){if(-1===aC[aI]){aC[aI]=++ar}}for(var aI=0,aD=0;aI<aJ;++aI){var aF=aH[aI];if(aF==="("){++aD;if(aC[aD]===undefined){aH[aI]="(?:"}}else{if("\\"===aF.charAt(0)){var aB=+aF.substring(1);if(aB&&aB<=aD){aH[aI]="\\"+aC[aD]}}}}for(var aI=0,aD=0;aI<aJ;++aI){if("^"===aH[aI]&&"^"!==aH[aI+1]){aH[aI]=""}}if(aE.ignoreCase&&au){for(var aI=0;aI<aJ;++aI){var aF=aH[aI];var aG=aF.charAt(0);if(aF.length>=2&&aG==="["){aH[aI]=ao(aF)}else{if(aG!=="\\"){aH[aI]=aF.replace(/[a-zA-Z]/g,function(aK){var aL=aK.charCodeAt(0);return"["+String.fromCharCode(aL&~32,aL|32)+"]"})}}}}return aH.join("")}var aw=[];for(var ax=0,az=aq.length;ax<az;++ax){var at=aq[ax];if(at.global||at.multiline){throw new Error(""+at)}aw.push("(?:"+aA(at)+")")}return new RegExp(aw.join("|"),ay?"gi":"g")}var d=null;function K(ao){if(null===d){var aq=document.createElement("PRE");aq.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC "foo bar">\n<foo />'));d=!/</.test(aq.innerHTML)}if(d){var ap=ao.innerHTML;if(L(ao)){ap=q(ap)}else{if(!y(ao,ap)){ap=ap.replace(/(<br\s*\/?>)[\r\n]+/g,"$1").replace(/(?:[\r\n]+[ \t]*)+/g," ")}}return ap}var at=[];for(var ar=ao.firstChild;ar;ar=ar.nextSibling){i(ar,at)}return at.join("")}function a(aq){var ap="                ";var ao=0;return function(at){var ay=null;var ax=0;for(var au=0,av=at.length;au<av;++au){var ar=at.charAt(au);switch(ar){case"\t":if(!ay){ay=[]}ay.push(at.substring(ax,au));var aw=aq-(ao%aq);ao+=aw;for(;aw>=0;aw-=ap.length){ay.push(ap.substring(0,aw))}ax=au+1;break;case"\n":ao=0;break;default:++ao}}if(!ay){return at}ay.push(at.substring(ax));return ay.join("")}}var X=new RegExp("[^<]+|<!--[\\s\\S]*?-->|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>|</?[a-zA-Z](?:[^>\"']|'[^']*'|\"[^\"]*\")*>|<","g");var ae=/^<\!--/;var x=/^<!\[CDATA\[/;var B=/^<br\b/i;var ad=/^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/;function aj(av){var ao=av.match(X);var ap=[];var ax=0;var aq=[];if(ao){for(var az=0,aA=ao.length;az<aA;++az){var at=ao[az];if(at.length>1&&at.charAt(0)==="<"){if(ae.test(at)){continue}if(x.test(at)){ap.push(at.substring(9,at.length-3));ax+=at.length-12}else{if(B.test(at)){ap.push("\n");++ax}else{if(at.indexOf(N)>=0&&ak(at)){var aB=at.match(ad)[2];var au=1;var ay;end_tag_loop:for(ay=az+1;ay<aA;++ay){var ar=ao[ay].match(ad);if(ar&&ar[2]===aB){if(ar[1]==="/"){if(--au===0){break end_tag_loop}}else{++au}}}if(ay<aA){aq.push(ax,ao.slice(az,ay+1).join(""));az=ay}else{aq.push(ax,at)}}else{aq.push(ax,at)}}}}else{var aw=u(at);ap.push(aw);ax+=aw.length}}}return{source:ap.join(""),tags:aq}}function ak(ao){return !!ao.replace(/\s(\w+)\s*=\s*(?:\"([^\"]*)\"|'([^\']*)'|(\S+))/g,' $1="$2$3$4"').match(/[cC][lL][aA][sS][sS]=\"[^\"]*\bnocode\b/)}function ab(ar,ao,aq,at){if(!ao){return}var ap={source:ao,basePos:ar};aq(ap);at.push.apply(at,ap.decorations)}function m(au,ao){var aq={};var ap;(function(){var aE=au.concat(ao);var aB=[];var aF={};for(var aD=0,aC=aE.length;aD<aC;++aD){var ay=aE[aD];var az=ay[3];if(az){for(var aw=az.length;--aw>=0;){aq[az.charAt(aw)]=ay}}var ax=ay[1];var aA=""+ax;if(!aF.hasOwnProperty(aA)){aB.push(ax);aF[aA]=null}}aB.push(/[\0-\uffff]/);ap=C(aB)})();var ar=ao.length;var av=/\S/;var at=function(ax){var ay=ax.source,aF=ax.basePos;var aK=[aF,V];var aH=0;var aE=ay.match(ap)||[];var aP={};for(var aw=0,aN=aE.length;aw<aN;++aw){var aA=aE[aw];var aB=aP[aA];var aI=void 0;var aD;if(typeof aB==="string"){aD=false}else{var aG=aq[aA.charAt(0)];if(aG){aI=aA.match(aG[1]);aB=aG[0]}else{for(var aJ=0;aJ<ar;++aJ){aG=ao[aJ];aI=aA.match(aG[1]);if(aI){aB=aG[0];break}}if(!aI){aB=V}}aD=aB.length>=5&&"lang-"===aB.substring(0,5);if(aD&&!(aI&&typeof aI[1]==="string")){aD=false;aB=af}if(!aD){aP[aA]=aB}}var aO=aH;aH+=aA.length;if(!aD){aK.push(aF+aO,aB)}else{var aM=aI[1];var az=aA.indexOf(aM);var aC=az+aM.length;if(aI[2]){aC=aA.length-aI[2].length;az=aC-aM.length}var aL=aB.substring(5);ab(aF+aO,aA.substring(0,az),at,aK);ab(aF+aO+az,aM,an(aL,aM),aK);ab(aF+aO+aC,aA.substring(aC),at,aK)}}ax.decorations=aK};return at}function e(at){var ar=[],aq=[];if(at.tripleQuotedStrings){ar.push([J,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""])}else{if(at.multiLineStrings){ar.push([J,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"])}else{ar.push([J,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"])}}if(at.verbatimStrings){aq.push([J,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null])}var au=at.hashComments;if(au){if(at.cStyleComments){if(au>1){ar.push([M,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"])}else{ar.push([M,/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"])}aq.push([J,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,null])}else{ar.push([M,/^#[^\r\n]*/,null,"#"])}}if(at.cStyleComments){aq.push([M,/^\/\/[^\r\n]*/,null]);aq.push([M,/^\/\*[\s\S]*?(?:\*\/|$)/,null])}if(at.regexLiterals){var ap=("/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/");aq.push(["lang-regex",new RegExp("^"+U+"("+ap+")")])}var ao=at.keywords.replace(/^\s+|\s+$/g,"");if(ao.length){aq.push([k,new RegExp("^(?:"+ao.replace(/\s+/g,"|")+")\\b"),null])}ar.push([V,/^\s+/,null," \r\n\t\xA0"]);aq.push([z,/^@[a-z_$][a-z_$@0-9]*/i,null],[D,/^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/,null],[V,/^[a-z_$][a-z_$@0-9]*/i,null],[z,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[G,/^.[^\s\w\.$@\'\"\`\/\#]*/,null]);return m(ar,aq)}var ac=e({keywords:Z,hashComments:true,cStyleComments:true,multiLineStrings:true,regexLiterals:true});function am(ao){var ar=ao.source;var au=ao.extractedTags;var aF=ao.decorations;var aO=ao.numberLines;var aH=ao.sourceNode;var aB=[];var az=0;var aJ=null;var aw=null;var aK=0;var aq=0;var aM=a(window.PR_TAB_WIDTH);var ap=/([\r\n ]) /g;var ax=/(^| ) /gm;var aI=/\r\n?|\n/g;var aL=/[ \r\n]$/;var aD=true;var aA=window._pr_isIE6();var at=(aA?(aH&&aH.tagName==="PRE"?(aA===6?"&#160;\r\n":aA===7?"&#160;<br />\r":aA===8?"&#160;<br />":"&#160;\r"):"&#160;<br />"):"<br />");var aN;if(aO){var av=[];for(var aE=0;aE<10;++aE){av[aE]=at+'</li><li class="L'+aE+'">'}var aG=typeof aO==="number"?aO-1:0;aB.push('<ol class="linenums"><li class="L',(aG)%10,'"');if(aG){aB.push(' value="',aG+1,'"')}aB.push(">");aN=function(){var aP=av[++aG%10];return aJ?("</span>"+aP+'<span class="'+aJ+'">'):aP}}else{aN=at}function ay(aQ){if(aQ>az){if(aJ&&aJ!==aw){aB.push("</span>");aJ=null}if(!aJ&&aw){aJ=aw;aB.push('<span class="',aJ,'">')}var aP=q(aM(ar.substring(az,aQ))).replace(aD?ax:ap,"$1&#160;");aD=aL.test(aP);aB.push(aP.replace(aI,aN));az=aQ}}while(true){var aC;if(aK<au.length){if(aq<aF.length){aC=au[aK]<=aF[aq]}else{aC=true}}else{aC=false}if(aC){ay(au[aK]);if(aJ){aB.push("</span>");aJ=null}aB.push(au[aK+1]);aK+=2}else{if(aq<aF.length){ay(aF[aq]);aw=aF[aq+1];aq+=2}else{break}}}ay(ar.length);if(aJ){aB.push("</span>")}if(aO){aB.push("</li></ol>")}ao.prettyPrintedHtml=aB.join("")}var H={};function S(ao,ar){for(var aq=ar.length;--aq>=0;){var ap=ar[aq];if(!H.hasOwnProperty(ap)){H[ap]=ao}else{if("console" in window){console.warn("cannot override language handler %s",ap)}}}}function an(ap,ao){if(!(ap&&H.hasOwnProperty(ap))){ap=/^\s*</.test(ao)?"default-markup":"default-code"}return H[ap]}S(ac,["default-code"]);S(m([],[[V,/^[^<?]+/],[l,/^<!\w[^>]*(?:>|$)/],[M,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[G,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);S(m([[V,/^[\s]+/,null," \t\r\n"],[w,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[p,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[ag,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[G,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);S(m([],[[w,/^[\s\S]+/]]),["uq.val"]);S(e({keywords:E,hashComments:true,cStyleComments:true}),["c","cc","cpp","cxx","cyc","m"]);S(e({keywords:"null true false"}),["json"]);S(e({keywords:A,hashComments:true,cStyleComments:true,verbatimStrings:true}),["cs"]);S(e({keywords:O,cStyleComments:true}),["java"]);S(e({keywords:h,hashComments:true,multiLineStrings:true}),["bsh","csh","sh"]);S(e({keywords:n,hashComments:true,multiLineStrings:true,tripleQuotedStrings:true}),["cv","py"]);S(e({keywords:t,hashComments:true,multiLineStrings:true,regexLiterals:true}),["perl","pl","pm"]);S(e({keywords:Y,hashComments:true,multiLineStrings:true,regexLiterals:true}),["rb"]);S(e({keywords:al,cStyleComments:true,regexLiterals:true}),["js"]);S(e({keywords:W,hashComments:3,cStyleComments:true,multilineStrings:true,tripleQuotedStrings:true,regexLiterals:true}),["coffee"]);S(m([],[[J,/^[\s\S]+/]]),["regex"]);function ai(ap){var ao=ap.sourceCodeHtml;var ar=ap.langExtension;ap.prettyPrintedHtml=ao;try{var au=aj(ao);var at=au.source;ap.source=at;ap.basePos=0;ap.extractedTags=au.tags;an(ar,at)(ap);am(ap)}catch(aq){if("console" in window){console.log(aq&&aq.stack?aq.stack:aq)}}}function I(ao,aq,ap){var ar={sourceCodeHtml:ao,langExtension:aq,numberLines:ap};ai(ar);return ar.prettyPrintedHtml}function P(az){function ar(aB){return document.getElementsByTagName(aB)}var ay=[ar("pre"),ar("code"),ar("xmp")];var ax=[];for(var aw=0;aw<ay.length;++aw){for(var at=0,aA=ay[aw].length;at<aA;++at){ax.push(ay[aw][at])}}ay=null;var ap=Date;if(!ap.now){ap={now:function(){return(new Date).getTime()}}}var au=0;var av;function ao(){var aH=(window.PR_SHOULD_USE_CONTINUATION?ap.now()+250:Infinity);for(;au<ax.length&&ap.now()<aH;au++){var aD=ax[au];if(aD.className&&aD.className.indexOf("prettyprint")>=0){var aG=aD.className.match(/\blang-(\w+)\b/);if(aG){aG=aG[1]}var aB=false;for(var aC=aD.parentNode;aC;aC=aC.parentNode){if((aC.tagName==="pre"||aC.tagName==="code"||aC.tagName==="xmp")&&aC.className&&aC.className.indexOf("prettyprint")>=0){aB=true;break}}if(!aB){var aE=K(aD);aE=aE.replace(/(?:\r\n?|\n)$/,"");var aF=aD.className.match(/\blinenums\b(?::(\d+))?/);av={sourceCodeHtml:aE,langExtension:aG,sourceNode:aD,numberLines:aF?aF[1]&&aF[1].length?+aF[1]:true:false};ai(av);aq()}}}if(au<ax.length){setTimeout(ao,250)}else{if(az){az()}}}function aq(){var aD=av.prettyPrintedHtml;if(!aD){return}var aC=av.sourceNode;if(!L(aC)){aC.innerHTML=aD}else{var aE=document.createElement("PRE");for(var aF=0;aF<aC.attributes.length;++aF){var aB=aC.attributes[aF];if(aB.specified){var aG=aB.name.toLowerCase();if(aG==="class"){aE.className=aB.value}else{aE.setAttribute(aB.name,aB.value)}}}aE.innerHTML=aD;aC.parentNode.replaceChild(aE,aC);aC=aE}}ao()}window.PR_normalizedHtml=i;window.prettyPrintOne=I;window.prettyPrint=P;window.PR={combinePrefixPatterns:C,createSimpleLexer:m,registerLangHandler:S,sourceDecorator:e,PR_ATTRIB_NAME:ag,PR_ATTRIB_VALUE:w,PR_COMMENT:M,PR_DECLARATION:l,PR_KEYWORD:k,PR_LITERAL:z,PR_NOCODE:N,PR_PLAIN:V,PR_PUNCTUATION:G,PR_SOURCE:af,PR_STRING:J,PR_TAG:p,PR_TYPE:D}})();PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," \t\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']*)\)/i],[PR.PR_KEYWORD,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^(?:<!--|-->)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["css-str"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\x0B\x0C\r ]+/,null,"\t\n\x0B\x0C\r "],[PR.PR_STRING,/^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/,null,'"'],[PR.PR_STRING,/^\'(?:[^\'\\\n\x0C\r]|\\[^&])\'?/,null,"'"],[PR.PR_LITERAL,/^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,"0123456789"]],[[PR.PR_COMMENT,/^(?:(?:--+(?:[^\r\n\x0C]*)?)|(?:\{-(?:[^-]|-+[^-\}])*-\}))/],[PR.PR_KEYWORD,/^(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^a-zA-Z0-9\']|$)/,null],[PR.PR_PLAIN,/^(?:[A-Z][\w\']*\.)*[a-zA-Z][\w\']*/],[PR.PR_PUNCTUATION,/^[^\t\n\x0B\x0C\r a-zA-Z0-9\'\"]+/]]),["hs"]);PR.registerLangHandler(PR.createSimpleLexer([["opn",/^\(+/,null,"("],["clo",/^\)+/,null,")"],[PR.PR_COMMENT,/^;[^\r\n]*/,null,";"],[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \xA0"],[PR.PR_STRING,/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"']],[[PR.PR_KEYWORD,/^(?:block|c[ad]+r|catch|con[ds]|def(?:ine|un)|do|eq|eql|equal|equalp|eval-when|flet|format|go|if|labels|lambda|let|load-time-value|locally|macrolet|multiple-value-call|nil|progn|progv|quote|require|return-from|setq|symbol-macrolet|t|tagbody|the|throw|unwind)\b/,null],[PR.PR_LITERAL,/^[+\-]?(?:[0#]x[0-9a-f]+|\d+\/\d+|(?:\.\d+|\d+(?:\.\d*)?)(?:[ed][+\-]?\d+)?)/i],[PR.PR_LITERAL,/^\'(?:-*(?:\w|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?)?/],[PR.PR_PLAIN,/^-*(?:[a-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0()\"\\\';]+/]]),["cl","el","lisp","scm"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \xA0"],[PR.PR_STRING,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])*(?:\'|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^--(?:\[(=*)\[[\s\S]*?(?:\]\1\]|$)|[^\r\n]*)/],[PR.PR_STRING,/^\[(=*)\[[\s\S]*?(?:\]\1\]|$)/],[PR.PR_KEYWORD,/^(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^[a-z_]\w*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\"\'\-\+=]*/]]),["lua"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \xA0"],[PR.PR_COMMENT,/^#(?:if[\t\n\r \xA0]+(?:[a-z_$][\w\']*|``[^\r\n\t`]*(?:``|$))|else|endif|light)/i,null,"#"],[PR.PR_STRING,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])(?:\'|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:\/\/[^\r\n]*|\(\*[\s\S]*?\*\))/],[PR.PR_KEYWORD,/^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/],[PR.PR_LITERAL,/^[+\-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^(?:[a-z_][\w']*[!?#]?|``[^\r\n\t`]*(?:``|$))/i],[PR.PR_PUNCTUATION,/^[^\t\n\r \xA0\"\'\w]+/]]),["fs","ml"]);PR.registerLangHandler(PR.createSimpleLexer([],[]),["none"]);PR.registerLangHandler(PR.sourceDecorator({keywords:("bool bytes default double enum extend extensions false fixed32 fixed64 float group import int32 int64 max message option optional package repeated required returns rpc service sfixed32 sfixed64 sint32 sint64 string syntax to true uint32 uint64"),cStyleComments:true}),["proto"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \xA0"],[PR.PR_STRING,/^(?:"(?:(?:""(?:""?(?!")|[^\\"]|\\.)*"{0,3})|(?:[^"\r\n\\]|\\.)*"?))/,null,'"'],[PR.PR_LITERAL,/^`(?:[^\r\n\\`]|\\.)*`?/,null,"`"],[PR.PR_PUNCTUATION,/^[!#%&()*+,\-:;<=>?@\[\\\]^{|}~]+/,null,"!#%&()*+,-:;<=>?@[\\]^{|}~"]],[[PR.PR_STRING,/^'(?:[^\r\n\\']|\\(?:'|[^\r\n']+))'/],[PR.PR_LITERAL,/^'[a-zA-Z_$][\w$]*(?!['$\w])/],[PR.PR_KEYWORD,/^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\b/],[PR.PR_LITERAL,/^(?:true|false|null|this)\b/],[PR.PR_LITERAL,/^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\.[0-9]+)?(?:E[+\-]?[0-9]+)?F?|L?))|\\.[0-9]+(?:E[+\-]?[0-9]+)?F?)/i],[PR.PR_TYPE,/^[$_]*[A-Z][_$A-Z0-9]*[a-z][\w$]*/],[PR.PR_PLAIN,/^[$a-zA-Z_][\w$]*/],[PR.PR_COMMENT,/^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],[PR.PR_PUNCTUATION,/^(?:\.+|\/)/]]),["scala"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \xA0"],[PR.PR_STRING,/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],[PR.PR_KEYWORD,/^(?:ADD|ALL|ALTER|AND|ANY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|NATIONAL|NOCHECK|NONCLUSTERED|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PERCENT|PLAN|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNION|UNIQUE|UPDATE|UPDATETEXT|USE|USER|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WRITETEXT)(?=[^\w-]|$)/i,null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^[a-z_][\w-]*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]]),["sql"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \xA0"],[PR.PR_COMMENT,/^%[^\r\n]*/,null,"%"]],[[PR.PR_DECLARATION,/^\\([egx]?def|(new|renew|provide)(command|environment))\b/],[PR.PR_KEYWORD,/^\\[a-zA-Z@:]+/],[PR.PR_KEYWORD,/^\\./],[PR.PR_TYPE,/^[$&]/],[PR.PR_LITERAL,/[+-]?(?:\.\d+|\d+(?:\.\d*)?)(cm|em|ex|in|pc|pt|bp|mm)/i],[PR.PR_PUNCTUATION,/^[{}()\[\]=]+/]]),["latex","tex"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0\u2028\u2029]+/,null,"\t\n\r \xA0\u2028\u2029"],[PR.PR_STRING,/^(?:[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})(?:[\"\u201C\u201D]c|$)|[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})*(?:[\"\u201C\u201D]|$))/i,null,'"\u201C\u201D'],[PR.PR_COMMENT,/^[\'\u2018\u2019][^\r\n\u2028\u2029]*/,null,"'\u2018\u2019"]],[[PR.PR_KEYWORD,/^(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\b/i,null],[PR.PR_COMMENT,/^REM[^\r\n\u2028\u2029]*/i],[PR.PR_LITERAL,/^(?:True\b|False\b|Nothing\b|\d+(?:E[+\-]?\d+[FRD]?|[FRDSIL])?|(?:&H[0-9A-F]+|&O[0-7]+)[SIL]?|\d*\.\d+(?:E[+\-]?\d+)?[FRD]?|#\s+(?:\d+[\-\/]\d+[\-\/]\d+(?:\s+\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)?|\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)\s+#)/i],[PR.PR_PLAIN,/^(?:(?:[a-z]|_\w)\w*|\[(?:[a-z]|_\w)\w*\])/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \"\'\[\]\xA0\u2018\u2019\u201C\u201D\u2028\u2029]+/],[PR.PR_PUNCTUATION,/^(?:\[|\])/]]),["vb","vbs"]);