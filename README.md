# JSFuck Encrypter Module
메신저봇 **JSFuck** 암호화 모듈입니다!
<br></br>
**사용법**: jsfuck_Encrypter 폴더를 global_module이나 봇 폴더의 module 폴더 안에 넣기
<br></br>
>## 예제
>```javascript
>const jsfuck_encoder = require("jsfuck_Encrypter");
>
>function response(...){
>  if(msg.startsWith(";jsfuck ")){
>    replier.reply(jsfuck_encoder(msg.substr(8)))
>  }
>}
>```
<br></br>
>## 매개변수&반환값
>```javascript
>function(str: string, isScript: boolean): string
>```
>**str**: 암호화할 문자열입니다. string 외의 다른 타입이 주어지면 자동으로 string으로 변환합니다.
><br />
>**isScript**: true일시 문자열을 실행하는 코드로 만듭니다. 기본값은 false 입니다.
><br></br>
>**반환값**: jsfuck으로 암호화된 문자열을 반환합니다.
