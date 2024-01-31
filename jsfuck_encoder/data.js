module.exports = {
    "__comment__": "해당 문서의 내용은 https://github.com/aemkei/jsfuck 의 jsfuck.js 일부 부분을 참고하였습니다.",
    
    "defualts": {
      "true": "!![]",
      "false": "![]",
      "undefined": "[][[]]",
      "NaN": "+[![]]",
      "Infinity": "+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])"
    },
  
    "constructors":{
      "String": "([]+[])",
      "Number": "(+[])",
      "Boolean": "(![])",
      "Array": "[]",
      "Function": "[]['find']",
      "RegExp": "Function('return/'+false+'/')"
      "Object": "[]['entries']()"
    },
  
    "words":{
      "a":   "(false+[])[1]",
      "b":   "([]['entries']()+[])[2]",
      "c":   "([]['fill']+[])[3]",
      "d":   "(undefined+[])[2]",
      "e":   "(true+[])[3]",
      "f":   "(false+[])[0]",
      "g":   "(false+[0]+String)[20]",
      "h":   "(+(101))['to'+String['name']](21)[1]",
      "i":   "(false+[undefined])[10]",
      "j":   "([]['entries']()+[])[3]",
      "k":   "(+(20))['to'+String['name']](21)",
      "l":   "(false+[])[2]",
      "m":   "(Number+[])[11]",
      "n":   "(undefined+[])[1]",
      "o":   "(true+[[]['fill']])[10]",
      "p":   "(+(211))['to'+String['name']](31)[1]",
      "q":   "(+(212))['to'+String['name']](32)[1]",
      "r":   "(true+[])[1]",
      "s":   "(false+[])[3]",
      "t":   "(true+[])[0]",
      "u":   "(undefined+[])[0]",
      "v":   "(+(31))['to'+String['name']](32)",
      "w":   "(+(32))['to'+String['name']](33)",
      "x":   "(+(101))['to'+String['name']](34)[1]",
      "y":   "(NaN+[Infinity])[10]",
      "z":   "(+(35))['to'+String['name']](36)",
  
      "A":   "(false+[[]['fill']])[40]",
      "B":   "(+[]+Boolean)[10]",
      "C":   "Function('return escape')()(([]+[])['italics']())[2]",
      "D":   "Function('return escape')()([]['fill'])['slice']('-1')",
      "E":   "(RegExp+[])[12]",
      "F":   "(+[]+Function)[10]",
      "G":   "(false+Function('return Date')()())[30]",
      "H":   null,
      "I":   "(Infinity+[])[0]",
      "J":   null,
      "K":   null,
      "L":   null,
      "M":   "(true+Function('return Date')()())[30]",
      "N":   "(NaN+[])[0]",
      "O":   "(+[]+Object)[10]",
      "P":   null,
      "Q":   null,
      "R":   "(+[]+RegExp)[10]",
      "S":   "(+[]+String)[10]",
      "T":   "(NaN+Function('return Date')()())[30]",
      "U":   null,
      "V":   null,
      "W":   null,
      "X":   null,
      "Y":   null,
      "Z":   null,
  
      " ":   "(NaN+[]['fill'])[11]",
      "!":   null,
      "\"":  "([]+[])['fontcolor']()[12]",
      "#":   null,
      "$":   null,
      "%":   "Function('return escape')()([]['fill'])[21]",
      "&":   null,
      "'":   null,
      "(":   "([]['fill']+[])[13]",
      ")":   "([0]+false+[]['fill'])[20]",
      "*":   null,
      "+":   "(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[2]",
      ",":   "([]['fill']+[])[40]",
      "-":   "(+('.'+[0000001])+[])[2]",
      ".":   "(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]",
      "/":   "(false+[0])['italics']()[10]",
      ":":   "(RegExp()+[])[3]",
      ";":   null,
      "<":   "([]+[])['italics']()[0]",
      "=":   "(false+[NaN]+[[]['fill']])[60]",
      ">":   "([])['italics']()[2]",
      "?":   "(RegExp()+[])[2]",
      "@":   null,
      "[":   "(10+[[]['fill']])[20]",
      "\\":  "(RegExp('/')+[])[1]",
      "]":   "(false+[0]+[[]['fill']])[60]",
      "^":   null,
      "_":   null,
      "`":   null,
      "{":   "(true+[]['fill'])[20]",
      "|":   null,
      "}":   "([]['fill']+[])['slice']('-1')",
      "~":   null,
        
      "0":   "+[]",
      "1":   "+!+[]",
      "2":   "!+[]+!+[]",
      "3":   "!+[]+!+[]+!+[]",
      "4":   "!+[]+!+[]+!+[]+!+[]",
      "5":   "!+[]+!+[]+!+[]+!+[]+!+[]",
      "6":   "!+[]+!+[]+!+[]+!+[]+!+[]+!+[]",
      "7":   "!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]",
      "8":   "!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]",
      "9":   "!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]",
    }
  }
