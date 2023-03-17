"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[40],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,m=p["".concat(l,".").concat(f)]||p[f]||c[f]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={},o=void 0,d={unversionedId:"API_protokoll",id:"API_protokoll",title:"API_protokoll",description:"Api",source:"@site/docs/API_protokoll.md",sourceDirName:".",slug:"/API_protokoll",permalink:"/Ef-Info/docs/API_protokoll",draft:!1,editUrl:"https://github.com/gaeschpu/Ef-Info/tree/main/docs/API_protokoll.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API mit node Red erstellen",permalink:"/Ef-Info/docs/API_erstellen"},next:{title:"Numtrip in Arbeit",permalink:"/Ef-Info/docs/No\xe9s_Numtrip"}},l={},s=[{value:"Api",id:"api",level:2},{value:"Json format",id:"json-format",level:2},{value:"Xml format",id:"xml-format",level:2},{value:"Http request:",id:"http-request",level:2},{value:"Url:",id:"url",level:2},{value:"Methoden:",id:"methoden",level:2},{value:"Headers:",id:"headers",level:2},{value:"Body:",id:"body",level:2},{value:"Http status codes",id:"http-status-codes",level:2},{value:"Endpunkte",id:"endpunkte",level:2},{value:"Polling",id:"polling",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"api"},"Api"),(0,i.kt)("p",null," (application programming interface) is ein schnittstelle die verschiedenen anwendungen erlaubt miteinander zu kommunizieren und daten auszutauschen. grundlegend stellt die api ein satz von regeln und protokollen zur verf\xfcgung, damit eine anwendung daten von einer anderen anwendung anfordern und empfangen kann. ein beispiel daf\xfcr w\xe4re eine website, die daten eines anderen servers oder einer datenbank abrufen m\xf6chte. durch verwendung einer api kann die website eine anfrage an den server oder die datenbank senden und die ben\xf6tigten daten abrufen, ohne die gesamte datenbankstruktur oder das backend-system zu kennen. stattdessen kann die api als zwischenschicht fungieren und anforderungen von einer anwendung an eine andere weiterleiten, wodurch ein nahtloser datenfluss und effektive kommunikation erm\xf6glicht werden."),(0,i.kt)("h2",{id:"json-format"},"Json format"),(0,i.kt)("p",null,"json (javascript object notation) ist ein datenformat, das leicht lesbar und schreibbar ist und h\xe4ufig f\xfcr den austausch von daten zwischen verschiedenen anwendungen verwendet wird."),(0,i.kt)("h2",{id:"xml-format"},"Xml format"),(0,i.kt)("p",null,"xml (extensible markup language) ist ein textformat, das daten in strukturierter form speichert und h\xe4ufig f\xfcr den austausch von daten zwischen verschiedenen systemen verwendet wird."),(0,i.kt)("h2",{id:"http-request"},"Http request:"),(0,i.kt)("p",null,"http request ist ein begriff, der sich auf die anfrage bezieht, die ein client an einen server sendet, um daten abzurufen oder zu senden."),(0,i.kt)("h2",{id:"url"},"Url:"),(0,i.kt)("p",null,"die url (uniform resource locator) ist die adresse, die den standort der ressource angibt, auf die der client zugreifen m\xf6chte."),(0,i.kt)("h2",{id:"methoden"},"Methoden:"),(0,i.kt)("p",null,"die methoden beschreiben die art der anfrage, die der client an den server sendet, z.b. get, post, put oder delete."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET - fordert den Server auf, eine Ressource abzurufen."),(0,i.kt)("li",{parentName:"ul"},"POST - fordert den Server auf, eine neue Ressource zu erstellen."),(0,i.kt)("li",{parentName:"ul"},"PUT - fordert den Server auf, eine vorhandene Ressource zu bearbeiten/aktualisieren."),(0,i.kt)("li",{parentName:"ul"},"DELETE - fordert den Server auf, eine Ressource zu l\xf6schen.")),(0,i.kt)("h2",{id:"headers"},"Headers:"),(0,i.kt)("p",null,"die headers enthalten informationen \xfcber die anfrage, wie z.b. den verwendeten browser, den akzeptierten datenformattyp usw."),(0,i.kt)("h2",{id:"body"},"Body:"),(0,i.kt)("p",null,"der body enth\xe4lt die tats\xe4chlichen daten, die der client an den server senden m\xf6chte, z.b. benutzername und passwort."),(0,i.kt)("h2",{id:"http-status-codes"},"Http status codes"),(0,i.kt)("p",null,"http-statuscodes geben an, ob eine anfrage erfolgreich bearbeitet wurde oder nicht. beispiele f\xfcr http-statuscodes sind 200 ok, 404 not found und 500 internal server error."),(0,i.kt)("h2",{id:"endpunkte"},"Endpunkte"),(0,i.kt)("p",null,"ein endpunkt ist die spezifische adresse, die einen bestimmten service oder eine bestimmte funktion innerhalb einer api definiert."),(0,i.kt)("h2",{id:"polling"},"Polling"),(0,i.kt)("p",null,'polling bezieht sich auf den prozess, bei dem eine anwendung regelm\xe4\xdfig eine api abfragt, um nach aktualisierten informationen zu suchen. dieser prozess kann auch als "abfragen" bezeichnet\xa0werden."'))}c.isMDXComponent=!0}}]);