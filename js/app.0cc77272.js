(function(e){function a(a){for(var s,r,n=a[0],l=a[1],u=a[2],c=0,m=[];c<n.length;c++)r=n[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(a);while(m.length)m.shift()();return t.push.apply(t,u||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],s=!0,n=1;n<o.length;n++){var l=o[n];0!==i[l]&&(s=!1)}s&&(t.splice(a--,1),e=r(r.s=o[0]))}return e}var s={},i={app:0},t=[];function r(a){if(s[a])return s[a].exports;var o=s[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=s,r.d=function(e,a,o){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)r.d(o,s,function(a){return e[a]}.bind(null,s));return o},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/foryou/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var u=0;u<n.length;u++)a(n[u]);var d=l;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},1495:function(e,a,o){e.exports=o.p+"media/2.7891086d.mp3"},"388f":function(e,a,o){e.exports=o.p+"media/1.f6665fa4.mp3"},"3d1e":function(e,a,o){"use strict";o("9d4f")},"56d7":function(e,a,o){"use strict";o.r(a);var s=o("2b0e"),i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"overflow-hidden"},[a("ForYou")],1)},t=[],r=function(){var e=this,a=e._self._c;return a("b-row",[a("b-col",{staticClass:"my-auto mx-auto",attrs:{xl:"4",lg:"6",md:"8",sm:"12"}},[a("div",{staticClass:"text-center"},[a("div",[a("div",{staticClass:"d-flex overflow-auto"},e._l(e.actions,(function(o,s){return a("b-button",{key:s,staticClass:"m-1",class:{active:o.key==e.displayAction.action,"button-foryou":!0},attrs:{variant:"transparent",size:"lg"},on:{click:function(a){return e.clickAction(o)}}},[a("span",{staticClass:"text-truncate"},[e._v(e._s(o.title))])])})),1)]),a("div",{staticClass:"py-3"},[a("b-row",[a("b-col",{staticClass:"mx-auto title-foryou",attrs:{lg:"7",md:"12",sm:"12"}},[a("div",{staticClass:"h1 px-1",on:{click:e.changeActitude}},[a("span",[a("b",[e._v(e._s(e.youGirl))])])]),a("div",{staticClass:"px-2 pb-3 subtitle-foryou"},[a("div",{staticStyle:{opacity:"0.85"},on:{click:e.changeActitude}},[a("span",[e._v(e._s(e.grettingMessage))])])])])],1)],1),a("div",{staticClass:"py-1"},["frases"===e.displayAction.action?a("section",{staticClass:"py-2 px-4"},[a("div",{staticClass:"t-bq-wrapper t-bq-wrapper-boxed"},[a("div",{staticClass:"t-bq-quote t-bq-quote-mike"},[a("div",{staticClass:"t-bq-quote-mike-qmark"},[a("span",[e._v("❝")])]),a("div",{staticClass:"t-bq-quote-mike-base",staticStyle:{cursor:"pointer"},on:{click:e.randomData}},[a("div",{staticClass:"heart heart-main",staticStyle:{"z-index":"1"}}),a("span",{staticClass:"ec ec-joy"}),a("blockquote",{staticClass:"t-bq-quote-mike-text",attrs:{cite:e.creator}},[e._v(" "+e._s(e.displayAction.view)+" ")])])])])]):e._e(),"chistes"===e.displayAction.action?a("section",{staticClass:"py-2 px-4",on:{click:e.randomData}},[a("div",{staticClass:"t-bq-wrapper t-bq-wrapper-boxed"},[a("div",{staticClass:"t-bq-quote t-bq-quote-mike"},[a("div",{staticClass:"t-bq-quote-mike-qmark"},[a("span",[e._v("❝")])]),a("div",{staticClass:"t-bq-quote-mike-base"},[a("blockquote",{staticClass:"t-bq-quote-mike-text",attrs:{cite:e.creator}},[e._v(" "+e._s(e.displayAction.view)+" ")])])])])]):e._e(),"videos"===e.displayAction.action?a("div",{staticClass:"py-2 px-4",staticStyle:{"margin-bottom":"12em"},on:{click:e.randomData}}):e._e()]),"frases"===e.displayAction.action||"chistes"===e.displayAction.action?a("Reproductor",{staticClass:"pt-2",attrs:{fileAudio:e.fileAudio,displayAction:e.displayAction}}):e._e()],1)])],1)},n=[],l=function(){var e=this,a=e._self._c;return a("div",{staticClass:"position-relative mt-5"},[a("div",{staticClass:"text-left py-3 px-3 position-fixed",staticStyle:{bottom:"0",left:"0",right:"0"}},[a("div",{staticClass:"text-center"},["frases"==e.displayAction.action&&e.fileAudio.isPlaying?a("b-button",{staticClass:"my-auto button-foryou mr-1",attrs:{variant:"transparent",size:"lg"},on:{click:e.randomSounds}},[a("b-icon",{attrs:{icon:"shuffle"}})],1):e._e(),e.fileAudio.isPlaying?a("b-button",{staticClass:"my-auto button-foryou",attrs:{size:"lg",variant:"transparent"},on:{click:function(a){return e.pauseAudio()}}},[a("b-row",[a("b-col",{staticClass:"my-auto",attrs:{cols:"3"}},[a("b-icon",{attrs:{icon:"pause"}})],1),a("b-col",{staticClass:"mx-auto my-auto",attrs:{cols:"9"}},[a("b-row",[a("b-col",{staticClass:"my-auto",attrs:{cols:"8"}},[a("div",{staticClass:"d-inline-flex"},[a("div",{staticClass:"current"},[e._v(e._s(e.fileAudio.interval||"0:00"))]),a("div",{staticClass:"divider"},[e._v("/")]),a("div",{staticClass:"length"},[e._v(e._s(e.fileAudio.timer))])])]),a("b-col",{staticClass:"my-auto",attrs:{cols:"4"}},[a("div",{staticClass:"bar-c"},[a("div",{staticClass:"bar",attrs:{id:"bar-1"}}),a("div",{staticClass:"bar",attrs:{id:"bar-2"}}),a("div",{staticClass:"bar",attrs:{id:"bar-3"}}),a("div",{staticClass:"bar",attrs:{id:"bar-4"}}),a("div",{staticClass:"bar",attrs:{id:"bar-5"}}),a("div",{staticClass:"bar",attrs:{id:"bar-6"}})])])],1)],1)],1)],1):e._e(),e.fileAudio.isPlaying?e._e():a("b-button",{staticClass:"my-auto button-foryou",attrs:{size:"lg",variant:"transparent"},on:{click:function(a){return e.playAudio()}}},[a("b-row",[a("b-col",{staticClass:"my-auto",attrs:{cols:"3"}},[a("b-icon",{attrs:{icon:"play"}})],1),a("b-col",{staticClass:"mx-auto my-auto",attrs:{cols:"9"}},[a("div",{staticClass:"d-inline-flex"},[a("div",{staticClass:"current"},[e._v(e._s(e.fileAudio.interval||"0:00"))]),a("div",{staticClass:"divider"},[e._v("/")]),a("div",{staticClass:"length"},[e._v(e._s(e.fileAudio.timer))])])])],1)],1)],1)])])},u=[],d=(o("14d9"),{name:"Reproductor",props:{fileAudio:Object,displayAction:Object},data:()=>({timerInterval:null,dataSounds:["1.mp3","2.mp3","3.mp3"],currentLabelSound:null}),computed:{labelSound(){return"1.mp3"}},mounted(){const e=this.displayAction.action;let a=null;switch(e){case"frases":case"chistes":a="1.mp3",this.currentLabelSound=a,this.defaultAudio({folder:e,labelSound:a});break;default:console.error("Not support case action");break}},methods:{getRandomIndex(){const e=this.dataSounds.filter(e=>e!=this.currentLabelSound);let a=Math.floor(Math.random()*e.length);return e[a]},shuffle(){let e,a=this.dataSounds,o=[],s=a.length;while(s)e=Math.floor(Math.random()*a.length),e in a&&(o.push(a[e]),delete a[e],s--);return this.dataSounds[e-1]},randomSounds(){const e=this.getRandomIndex();this.currentLabelSound=e;const a=this.displayAction.action;this.defaultAudio({folder:a,labelSound:e,startPlaying:!0})},defaultAudio({folder:e,labelSound:a,startPlaying:s=!1}){const i=()=>o("f900")(`./${e}/${a||"1.mp3"}`),t=i();if(t&&(this.fileAudio.audio&&!s||(s&&this.fileAudio.audio.pause(),this.fileAudio.audio=new Audio(t),this.fileAudio.audio))&&(this.fileAudio.audio.addEventListener("loadeddata",()=>{this.fileAudio.timer=this.getTimeCodeFromNum(this.fileAudio.audio.duration),this.fileAudio.audio.volume=.75},!1),s)){const e=this.displayAction.action;this.playAudio({folder:e,labelSound:a})}},playAudio(e){if(!this.fileAudio.audio){const a=this.displayAction.action;this.defaultAudio({folder:a,labelSound:e})}this.timerInterval=setInterval(()=>{this.fileAudio.interval=this.getTimeCodeFromNum(this.fileAudio.audio.currentTime)},500),this.fileAudio.isPlaying=!0,this.fileAudio.audio.play(),this.fileAudio.audio.loop=!0},pauseAudio(){this.timerInterval&&clearInterval(this.timerInterval),this.fileAudio.isPlaying=!1,this.fileAudio.audio.pause()},getTimeCodeFromNum(e){let a=parseInt(e),o=parseInt(String(a/60));a-=60*o;const s=parseInt(String(o/60));return o-=60*s,0===s?`${o}:${String(a%60).padStart(2,"0")}`:`${String(s).padStart(2,"0")}:${o}:${String(a%60).padStart(2,"0")}`}},watch:{"fileAudio.audio"(e){if(this.timerInterval&&clearInterval(this.timerInterval),e)return;const a=this.displayAction.action;let o=null;switch(a){case"frases":o="1.mp3",this.defaultAudio({folder:a,labelSound:o});break;case"chistes":o="1.mp3",this.defaultAudio({folder:a,labelSound:o});break;case"videos":this.timerInterval&&clearInterval(this.timerInterval);break;default:console.error("not support case");break}}},destroyed(){this.timerInterval&&clearInterval(this.timerInterval),this.fileAudio.audio=null,this.fileAudio.timer=null,this.timerInterval=null}}),c=d,m=o("2877"),p=Object(m["a"])(c,l,u,!1,null,"4f52ed37",null),b=p.exports;const y="❤ CRUSH ❤";var q={name:"ForYou",components:{Reproductor:b},data:()=>({fileAudio:{isPlaying:!1,audio:null,timer:"0:00",interval:"0.00"},creator:"Alex Christian 🥰",gretting:"Hola",grettingMessage:null,youGirl:y,phrasesForShe:["Me siento feliz cuando me miras.","Solo puedo pensar en ti","Tu amor vale más que mil millones de estrellas","Mi pensamiento eres tu","Ni la estrella más lejana me impediría verte","Te amo, hasta el infinito y mas alla","Una sonrisa tuya me hace inmensamente feliz","El mar es inmenso, y el desierto infinito, pero estar contigo, es lo más bonito.","Quiero que seas tú ese principio... al que jamás le encuentre final","Aunque físicamente el corazón esté en mi cuerpo, el verdadero dueño eres tu.","Si algo quiero en esta vida es: ser feliz contigo","Cuando pienso en mi futuro siempre pienso en ti","No sé de cuántas maneras, pero de todas te quiero.","En el primer beso descubrí que nunca iba a dejarte ir","Para mí, un minuto contiene 60 maneras de pensar en ti","Pensando en mi felicidad, me acordé de ti","Ámame sin preguntas, que yo te amaré sin respuesta","Yo ya sabía querer, pero tú me enseñaste a amar","Tenerte me alegra el día, besarte me alegra la semana y amarte me alegra la vida","Eres el motivo de mis mejores sonrisas.","La belleza de la mujer se halla iluminada por una luz que nos lleva y convida a contemplar el alma que tal cuerpo habita, y si aquélla es tan bella como ésta, es imposible no amarla.","La belleza es ese misterio hermoso que no descifran ni la psicología ni la retórica.","No está mal ser bella; lo que está mal es la obligación de serlo.","Quitad de los corazones el amor por lo bello, y habréis quitado todo el encanto a la vida.","El encanto de la belleza estriba en su misterio; si deshacemos la trama sutil que enlaza sus elementos, se evapora toda la esencia.","La belleza es muy superior al genio. No necesita explicación.","La belleza no mira, sólo es mirada.","Siempre he creído que lo bueno no era sino lo bello puesto en acción.","Todo lo que es hermoso tiene su instante, y pasa.","Donde brillan muchas bellezas no han de ofender algunas manchas, de las que rara vez se escapa la naturaleza humana.","La belleza exterior no es más que el encanto de un instante. La apariencia del cuerpo no siempre es el reflejo del alma.","Mira dos veces para ver lo justo. No mires más que una vez para ver lo bello.","La belleza no hace feliz al que la posee, sino a quien puede amarla y adorarla.","Cada cosa tiene su belleza, pero no todos pueden verla.","La belleza que atrae rara vez coincide con la belleza que enamora.","Al cabo de los años he observado que la belleza, como la felicidad, es frecuente. No pasa un día en que no estemos, un instante, en el paraíso.","Es cierto que el amor conserva la belleza y que la cara de las mujeres se nutre de caricias, lo mismo que las abejas se nutren de miel.","Aunque viajemos por todo el mundo para encontrar la belleza, debemos llevarla con nosotros para poder encontrarla.","Aunque le arranques los pétalos, no quitarás su belleza a la flor.","Por muy poderosa que se vea el arma de la belleza, desgraciada la mujer que sólo a este recurso debe el triunfo alcanzado sobre un hombre.","La belleza perece en la vida, pero es inmortal en el arte.","Lo bueno necesita aportar pruebas; lo bello, no.","Es terriblemente triste eso de que el talento dure más que la belleza.","Lo bello nos atrae, despreciamos lo útil; y lo bello muchas veces nos pierde.","Más obliga y más puede un rostro bello que un hombre armado.","La belleza sólo le pertenece al que la entiende, no al que la tiene.","La belleza del fruto está en proporción del tiempo que transcurre entre la semilla y la recolección.","La irregularidad, es decir, lo inesperado, la sorpresa o el estupor son elementos esenciales y característicos de la belleza.","Es usted la mujer más bella que he visto en mi vida, lo cual no dice mucho en su favor.","¿Qué es la belleza? Una convención, una moneda que tiene curso en un tiempo y en un lugar.","Tantos siglos, tantos mundos, tanto espacio … y coincidir.","Quedate conmigo y si no funciona lo intentamos otra vez.","Y asi te fui queriendo a diario, sin una ley, sin un horario.","Quiero que sepas que por más lejos que estemos o por más mal y enojados que podamos estar absolutamente siempre eres y serás mi primer y último pensamiento.","Y debo decir que confío plenamente en la casualidad de haberte conocido.","Si te elegí a ti fue porque renuncie al resto.","Eres esa personas que tiene el privilegio de hacerme sonreír con tan solo escribirme.","Cuando estoy contigo solo me falta una cosa: Tiempo.","Nadie es perfecto, hasta que te enamoras.","Con los pies en la tierra y con el corazón en tus manos.","Yo no buscaba a nadie y te vi.","Están los que conquistan a muchas, y los que en su vida solo hay una. Los primeros conocen a un tipo de mujers y los otros a miles dentro de una.","Quiero que seas tú ese principio, al que jamás le encuentre final.","Yo era un aburrido sin remedio y ella era fascinante hasta el infinito.","Me es imposible ver tus fotos y no volverme a enamorar.","¿Hay algo que necesites? - Te tengo a ti ¿Qué mas podría necesitar?","Solo quiero que sepas que una de las mejores cosas que me pasó este año, fue conocerte.","Prometo amarte ferozmente… en todas las condiciones ahora y para siempre. Prometo nunca olvidar que este es una amor de una vez en la vida.","Te he visto en tus peores momentos y sigo pensando que eres la mejor personas que he conocido.","Sé que te quiero. Lo sé porque cuando discutimos, cuando ni nos hablamos y ocurría algo digno de contar de contar, algo gracioso, lo primero que pienso es en decirtelo.","Y conocí a una persona. De esas que te cambian la vida al conocerlas.","Enamorarse de la misma persona todos los días, eso es amor.","Fuiste, eres y quiero que siempre seas tú.","Sin su amor no puedo hacer nada, con su amor no hay nada que no pueda hacer.","Jamás imaginé que un universo tan maravilloso como tú, chocara contra este planeta tan simple llamado yo y que encajaran perfectamente bien.","Ella lo miraba a él como un ciego miraría el mundo por primera vez.","He llegado a entender que tú eres la forma en la que la vida me dice que los cuentos tienen algo de realidad, y es que ante todas las improbabilidades de la vida tu y yo coincidimos.","Solo con tenerte en mi vida me basta y me sobra para saber que nunca por más distancia, peleas y discusiones que podamos tener. Vas a estar siempre a mi lado.","Y si tuviera otra vida, estaría  buscando como llegar a ti.","Me enamoré de ti, de la forma en la que sonríes en la mitad de cada beso, de la manera en que ríes de mis tonterías, de tus ojos, de tu sonrisa, tus pensamientos, de tu presencia. Me enamoré de la forma en la que me hiciste volver a vivir.","Creo que aunque pasen semana, meses años , yo me seguiré emocionando de tu manera de sonreìr como si fuera la primera vez.","Y ahí estaba yo perdiendo la cordura y la dignidadd para que ella no pierda eso que a mi me encanta, su sonrisa.","Jamás me preocupé por preguntarle hacia donde nos dirigíamos porque sabía agarrado de su mano ya era ir en la dirección correcta.","Y apareciste como sol en un día nublado.","Y si te hubiera conocido antes?","No necesito otra persona, ella lo tiene todo.","Buenos Días princesa, estabas hermosa en mis sueños hoy.","No seré canción pero me dedique a ti.","Voy a hacer que tus momentos a mi lado sean inolvidables.","Gracias por cada segundo que has decidido compartir conmigo.","Puedo decir que mi vida es más bonita desde que te conozco.","Mirarte a los ojos y saber que eres todo lo que buscaba.","Que nadie nos detenga, ni el tiempo.","Quiero regalarte mi mejor sonrisa, mi mejor beso, mi mejor abrazo,mi mejor caricia, mi mejor suspiro, lo mejor de mí.","Siempre con el miedo de que alguien más descubra lo increíble que eres.","Hoy me enamoré de la misma persona que ayer, y mañana de la misma que hoy.","Alguien sin prisa, que te conquiste sin calma y te enamore sin pausas.","Eres lo que siempre quise y nunca tuve ","Me preguntaron qué habia visto en ti. Me limité a sonreír, un pirata jamás devela el contenido de su tesoro. Y yo siendo el pirata con el tesoro más grande, no iba a dejar que te descubrieran, mi amor.","De mi sé poco, y de ti solo sé que haces magia con sólo sonreír, y eso me basta.","Voy a vivir el momento para entender el destino, voy a escuchar en silencio para encontrar el camino. (Marc Anthony)","La vida es una cárcel con las puertas abiertas (Andrés Calamaro)","Hoy te toca ser feliz (Mago de oz)","Hoy vas a conquistar el cielo, sin mirar lo alto que queda del suelo (Bebe)","Y que toda tu risa le gane ese pulso al dolor (El canto del Loco)","And in the end the love you receive is equal to the love that you deliverY al final el amor que recibes es igual al amor que entregas (The Beatles)","Voy a reír, voy a bailar, vivir mi vida. (Marc Anthony)","Cuando estaba a medio paso de caer mis silencios se encontraron con tu voz(Reik)","No quiero perderla porque solo es ella inolvidable para mi corazón... ¡inolvidable...inolvidable!. (Reik)","Me encantaría quererte un poco menos (Maná)","Si dios hizo la manzana fue para morder (Ricky Martín)","It is better to be hated for what you are than to be loved for what you are not.Es mejor ser odiado por lo que eres que amado por lo que no eres (Kurt Cobain)","Una mentira en dos palabras: no puedo (Joaquin Sabina)","Sé que tú no quieres que yo a ti te quiera, siempre tú me esquivas de alguna manera (Oscar D’ León)","Y yo sé que no es querer,porque en tus ojos yo me puedo perder,contigo olvido lo que es temer. (La quinta Estación)","No, yo no me doy por vencido,Yo quiero un mundo contigo. (Luis Fonci)","Sólo con un beso, Yo te haría acabar Ese sufrimiento Que te hace llorar. (Enrique Inglesias)","Esa mujer me está matando Me ha espinado el corazón Por más que trato de olvidarla Mi alma no da razón. Maná","It’s time to begin, isn’t it, I get a little bit Bigger, but then, I’ll admit I’m just the same as I was Now, don’t you understand That I’m never changing who I am. (Imagine Dragon)","Y llorar, y llorar, (y llorar) No sirve de nada ahora que te perdí Te quiero recuperar(Jesse & Joy)","Valió la pena lo que era necesario para estar contigo amor Tú eres una bendición. (Marc Antony)","My pride, my ego, my needs and my selfish ways Caused a good strong woman like you to walk out my life. (Bruno Mars)","Eternamente bella, bella con un hechizo de gitana sere la princesa encantada que te amara por siempre desesperadamente.(Alejandra Guzmán)","La noche está para un reggaetón lento De esos que no se bailan hace tiempo. (CNCO)","Cuatro años sin mirarte Tres postales y un bolero Dos meses y me olvidaste Ni siquiera me pensaste un 29 de febrero. (Morat)","De aquel amor De música ligera Nada nos libra Nada mas queda.(Soda Stereo)","Tu eres mi persona favorita Y aunque no siempre lo ando diciendo Es buen momento decirte que te quiero Te quiero, te quiero y siempre asi será. (Río Roma)"],displayAction:{action:"frases",data:[],view:null,color:{primary:null,secondary:null,tertiary:null}},phrase:"Only you have the power to be happy when, where and how! we are fine 👍.",typeGrettings:[{gretting:"Oye",youGirl:y,grettingMessage:"Como estás hoy ❤️"},{gretting:"Hum",youGirl:y,grettingMessage:"Seguro estás con hambre 👀"},{gretting:"Oye",youGirl:y,grettingMessage:"Te he dicho que hoy estas bien bonita 👉👈"},{gretting:"Oye",youGirl:y,grettingMessage:"Te he dicho que hoy estas super hermosa 👉👈"},{gretting:"Oye",youGirl:y,grettingMessage:"Te he dicho que, ohhh! me tienes profundamente enamorado 👉👈"},{gretting:"Sabes",youGirl:y,grettingMessage:"Me dijeron que las personas super felices estan bien consigo mismos 😊 y obvio con su pareja tambien"},{gretting:"Ah",youGirl:y,grettingMessage:"Tu sabías que si te gusta una persona, te empiezas a preocupar más por ella o él 😊"},{gretting:"Oye",youGirl:y,grettingMessage:"Y si vamos a comer unas buenas hamburguesas 😊"},{gretting:"Eh",youGirl:y,grettingMessage:"Vamos a RUPAC 👀"},{gretting:"Sabes",youGirl:y,grettingMessage:"Quiero que me ayudes a ser mejor 😊"},{gretting:"Oye",youGirl:y,grettingMessage:"Aunque parezca que no estoy ahí, creeme estoy ahí 😊"},{gretting:"Oye",youGirl:y,grettingMessage:"Yo soy muy bueno, pero tú eres mejor que yó 😊"},{gretting:"Sabes",youGirl:y,grettingMessage:"Cuando estes triste, pídeme un abrazo 😊 con confianza 😊 dale go"},{gretting:"Uy",youGirl:y,grettingMessage:"Se me antojo una pizza 🍕 tu tambien quieres jaja"},{gretting:"Uy",youGirl:y,grettingMessage:"Tenemos que ir a la playa 🏖 ponle fecha 😊"},{gretting:"Uy",youGirl:y,grettingMessage:"hoy es un bonito día para salir, a hacer eso que pasó por tu cabeza 😊"},{gretting:"Oye",youGirl:y,grettingMessage:"Si estas choclex 😊 te puedo hacer tamalitos"},{gretting:"Oye",youGirl:y,grettingMessage:"Solo un factor decisivo es lo que falta 😊 en tu corazón"},{gretting:"Oye",youGirl:y,grettingMessage:"Todos tenemos una mente creativa, pero un virgo como yó es otro level 😊 xD"}],actions:[{key:"frases",title:"❤ Enamorarte",data:["Me siento feliz cuando me miras.","Solo puedo pensar en ti","Tu amor vale más que mil millones de estrellas","Mi pensamiento eres tu","Ni la estrella más lejana me impediría verte","Te amo, hasta el infinito y mas alla","Una sonrisa tuya me hace inmensamente feliz","El mar es inmenso, y el desierto infinito, pero estar contigo, es lo más bonito.","Quiero que seas tú ese principio... al que jamás le encuentre final","Aunque físicamente el corazón esté en mi cuerpo, el verdadero dueño eres tu.","Si algo quiero en esta vida es: ser feliz contigo","Cuando pienso en mi futuro siempre pienso en ti","No sé de cuántas maneras, pero de todas te quiero.","En el primer beso descubrí que nunca iba a dejarte ir","Para mí, un minuto contiene 60 maneras de pensar en ti","Pensando en mi felicidad, me acordé de ti","Ámame sin preguntas, que yo te amaré sin respuesta","Yo ya sabía querer, pero tú me enseñaste a amar","Tenerte me alegra el día, besarte me alegra la semana y amarte me alegra la vida","Eres el motivo de mis mejores sonrisas.","La belleza de la mujer se halla iluminada por una luz que nos lleva y convida a contemplar el alma que tal cuerpo habita, y si aquélla es tan bella como ésta, es imposible no amarla.","La belleza es ese misterio hermoso que no descifran ni la psicología ni la retórica.","No está mal ser bella; lo que está mal es la obligación de serlo.","Quitad de los corazones el amor por lo bello, y habréis quitado todo el encanto a la vida.","El encanto de la belleza estriba en su misterio; si deshacemos la trama sutil que enlaza sus elementos, se evapora toda la esencia.","La belleza es muy superior al genio. No necesita explicación.","La belleza no mira, sólo es mirada.","Siempre he creído que lo bueno no era sino lo bello puesto en acción.","Todo lo que es hermoso tiene su instante, y pasa.","Donde brillan muchas bellezas no han de ofender algunas manchas, de las que rara vez se escapa la naturaleza humana.","La belleza exterior no es más que el encanto de un instante. La apariencia del cuerpo no siempre es el reflejo del alma.","Mira dos veces para ver lo justo. No mires más que una vez para ver lo bello.","La belleza no hace feliz al que la posee, sino a quien puede amarla y adorarla.","Cada cosa tiene su belleza, pero no todos pueden verla.","La belleza que atrae rara vez coincide con la belleza que enamora.","Al cabo de los años he observado que la belleza, como la felicidad, es frecuente. No pasa un día en que no estemos, un instante, en el paraíso.","Es cierto que el amor conserva la belleza y que la cara de las mujeres se nutre de caricias, lo mismo que las abejas se nutren de miel.","Aunque viajemos por todo el mundo para encontrar la belleza, debemos llevarla con nosotros para poder encontrarla.","Aunque le arranques los pétalos, no quitarás su belleza a la flor.","Por muy poderosa que se vea el arma de la belleza, desgraciada la mujer que sólo a este recurso debe el triunfo alcanzado sobre un hombre.","La belleza perece en la vida, pero es inmortal en el arte.","Lo bueno necesita aportar pruebas; lo bello, no.","Es terriblemente triste eso de que el talento dure más que la belleza.","Lo bello nos atrae, despreciamos lo útil; y lo bello muchas veces nos pierde.","Más obliga y más puede un rostro bello que un hombre armado.","La belleza sólo le pertenece al que la entiende, no al que la tiene.","La belleza del fruto está en proporción del tiempo que transcurre entre la semilla y la recolección.","La irregularidad, es decir, lo inesperado, la sorpresa o el estupor son elementos esenciales y característicos de la belleza.","Es usted la mujer más bella que he visto en mi vida, lo cual no dice mucho en su favor.","¿Qué es la belleza? Una convención, una moneda que tiene curso en un tiempo y en un lugar.","Tantos siglos, tantos mundos, tanto espacio … y coincidir.","Quedate conmigo y si no funciona lo intentamos otra vez.","Y asi te fui queriendo a diario, sin una ley, sin un horario.","Quiero que sepas que por más lejos que estemos o por más mal y enojados que podamos estar absolutamente siempre eres y serás mi primer y último pensamiento.","Y debo decir que confío plenamente en la casualidad de haberte conocido.","Si te elegí a ti fue porque renuncie al resto.","Eres esa personas que tiene el privilegio de hacerme sonreír con tan solo escribirme.","Cuando estoy contigo solo me falta una cosa: Tiempo.","Nadie es perfecto, hasta que te enamoras.","Con los pies en la tierra y con el corazón en tus manos.","Yo no buscaba a nadie y te vi.","Están los que conquistan a muchas, y los que en su vida solo hay una. Los primeros conocen a un tipo de mujers y los otros a miles dentro de una.","Quiero que seas tú ese principio, al que jamás le encuentre final.","Yo era un aburrido sin remedio y ella era fascinante hasta el infinito.","Me es imposible ver tus fotos y no volverme a enamorar.","¿Hay algo que necesites? - Te tengo a ti ¿Qué mas podría necesitar?","Solo quiero que sepas que una de las mejores cosas que me pasó este año, fue conocerte.","Prometo amarte ferozmente… en todas las condiciones ahora y para siempre. Prometo nunca olvidar que este es una amor de una vez en la vida.","Te he visto en tus peores momentos y sigo pensando que eres la mejor personas que he conocido.","Sé que te quiero. Lo sé porque cuando discutimos, cuando ni nos hablamos y ocurría algo digno de contar de contar, algo gracioso, lo primero que pienso es en decirtelo.","Y conocí a una persona. De esas que te cambian la vida al conocerlas.","Enamorarse de la misma persona todos los días, eso es amor.","Fuiste, eres y quiero que siempre seas tú.","Sin su amor no puedo hacer nada, con su amor no hay nada que no pueda hacer.","Jamás imaginé que un universo tan maravilloso como tú, chocara contra este planeta tan simple llamado yo y que encajaran perfectamente bien.","Ella lo miraba a él como un ciego miraría el mundo por primera vez.","He llegado a entender que tú eres la forma en la que la vida me dice que los cuentos tienen algo de realidad, y es que ante todas las improbabilidades de la vida tu y yo coincidimos.","Solo con tenerte en mi vida me basta y me sobra para saber que nunca por más distancia, peleas y discusiones que podamos tener. Vas a estar siempre a mi lado.","Y si tuviera otra vida, estaría  buscando como llegar a ti.","Me enamoré de ti, de la forma en la que sonríes en la mitad de cada beso, de la manera en que ríes de mis tonterías, de tus ojos, de tu sonrisa, tus pensamientos, de tu presencia. Me enamoré de la forma en la que me hiciste volver a vivir.","Creo que aunque pasen semana, meses años , yo me seguiré emocionando de tu manera de sonreìr como si fuera la primera vez.","Y ahí estaba yo perdiendo la cordura y la dignidadd para que ella no pierda eso que a mi me encanta, su sonrisa.","Jamás me preocupé por preguntarle hacia donde nos dirigíamos porque sabía agarrado de su mano ya era ir en la dirección correcta.","Y apareciste como sol en un día nublado.","Y si te hubiera conocido antes?","No necesito otra persona, ella lo tiene todo.","Buenos Días princesa, estabas hermosa en mis sueños hoy.","No seré canción pero me dedique a ti.","Voy a hacer que tus momentos a mi lado sean inolvidables.","Gracias por cada segundo que has decidido compartir conmigo.","Puedo decir que mi vida es más bonita desde que te conozco.","Mirarte a los ojos y saber que eres todo lo que buscaba.","Que nadie nos detenga, ni el tiempo.","Quiero regalarte mi mejor sonrisa, mi mejor beso, mi mejor abrazo,mi mejor caricia, mi mejor suspiro, lo mejor de mí.","Siempre con el miedo de que alguien más descubra lo increíble que eres.","Hoy me enamoré de la misma persona que ayer, y mañana de la misma que hoy.","Alguien sin prisa, que te conquiste sin calma y te enamore sin pausas.","Eres lo que siempre quise y nunca tuve ","Me preguntaron qué habia visto en ti. Me limité a sonreír, un pirata jamás devela el contenido de su tesoro. Y yo siendo el pirata con el tesoro más grande, no iba a dejar que te descubrieran, mi amor.","De mi sé poco, y de ti solo sé que haces magia con sólo sonreír, y eso me basta.","Voy a vivir el momento para entender el destino, voy a escuchar en silencio para encontrar el camino. (Marc Anthony)","La vida es una cárcel con las puertas abiertas (Andrés Calamaro)","Hoy te toca ser feliz (Mago de oz)","Hoy vas a conquistar el cielo, sin mirar lo alto que queda del suelo (Bebe)","Y que toda tu risa le gane ese pulso al dolor (El canto del Loco)","And in the end the love you receive is equal to the love that you deliverY al final el amor que recibes es igual al amor que entregas (The Beatles)","Voy a reír, voy a bailar, vivir mi vida. (Marc Anthony)","Cuando estaba a medio paso de caer mis silencios se encontraron con tu voz(Reik)","No quiero perderla porque solo es ella inolvidable para mi corazón... ¡inolvidable...inolvidable!. (Reik)","Me encantaría quererte un poco menos (Maná)","Si dios hizo la manzana fue para morder (Ricky Martín)","It is better to be hated for what you are than to be loved for what you are not.Es mejor ser odiado por lo que eres que amado por lo que no eres (Kurt Cobain)","Una mentira en dos palabras: no puedo (Joaquin Sabina)","Sé que tú no quieres que yo a ti te quiera, siempre tú me esquivas de alguna manera (Oscar D’ León)","Y yo sé que no es querer,porque en tus ojos yo me puedo perder,contigo olvido lo que es temer. (La quinta Estación)","No, yo no me doy por vencido,Yo quiero un mundo contigo. (Luis Fonci)","Sólo con un beso, Yo te haría acabar Ese sufrimiento Que te hace llorar. (Enrique Inglesias)","Esa mujer me está matando Me ha espinado el corazón Por más que trato de olvidarla Mi alma no da razón. Maná","It’s time to begin, isn’t it, I get a little bit Bigger, but then, I’ll admit I’m just the same as I was Now, don’t you understand That I’m never changing who I am. (Imagine Dragon)","Y llorar, y llorar, (y llorar) No sirve de nada ahora que te perdí Te quiero recuperar(Jesse & Joy)","Valió la pena lo que era necesario para estar contigo amor Tú eres una bendición. (Marc Antony)","My pride, my ego, my needs and my selfish ways Caused a good strong woman like you to walk out my life. (Bruno Mars)","Eternamente bella, bella con un hechizo de gitana sere la princesa encantada que te amara por siempre desesperadamente.(Alejandra Guzmán)","La noche está para un reggaetón lento De esos que no se bailan hace tiempo. (CNCO)","Cuatro años sin mirarte Tres postales y un bolero Dos meses y me olvidaste Ni siquiera me pensaste un 29 de febrero. (Morat)","De aquel amor De música ligera Nada nos libra Nada mas queda.(Soda Stereo)","Tu eres mi persona favorita Y aunque no siempre lo ando diciendo Es buen momento decirte que te quiero Te quiero, te quiero y siempre asi será. (Río Roma)"]},{key:"chistes",title:"🤪 Hacerte reir",data:["Había un gato con 16 vidas, lo aplastó un 4x4 y se murió.","A ver Jaimito, ¿Como se llama el compuesto químico que evita el embarazo? -Nitrato de meterlo!","Policía! hay dos mujeres que se están peleando por mi! -Y que problema hay? -Pues que va ganando la fea!","El marido entra con mucho cuidado en la cama y le susurra dulce y apasionadamente al oído de su mujer: \n-Estoy sin calzoncillos...\nY la mujer le responde: \n-Mañana te lavo unos.","- Mamá, ¿qué haces en frente de la computadora con los ojos cerrados?\n- Nada, hijo, es que Windows me dijo que cerrara las pestañas... ","- Mi amor, estoy embarazada. ¿Qué te gustaría que fuera?\n- ¿Una broma?. ",'- ¡A mí nadie me da órdenes! -\n- "2% de batería. Conecte el cargador".\n- Voy. ',"- ¿Tienes wi-fi?\n- Sí\n- ¿Y cuál es la clave?\n- Tener dinero y pagarlo. ","- ¿Bailamos?\n- Claro. ¿Pero quién saca a mi amiga?\n- Ahhh, por eso no te preocupes. ¡SEGURIDAAAAD! ","- Amor, de ahora en adelante te llamaré Eva por ser mi primera mujer.\n- Vale cariño, pues yo te llamaré dálmata por ser el 101. "]}],themes:[{color_1:"#F5C705",color_2:"#B86D07",color_3:"#222A0F",color_4:"#733D0A",color_5:"#7D7530"}]}),mounted(){this.initializeAction(),this.validateTime()},methods:{initializeAction(){const e=this.actions[0];this.displayAction.action=e.key,this.displayAction.data=e.data,this.randomData()},clickAction(e){switch(this.fileAudio.audio&&(this.fileAudio.audio.pause(),this.fileAudio.interval="0:00",this.fileAudio.isPlaying=!1,this.fileAudio.audio=null),e.key){case"frases":this.displayAction.action=e.key,this.displayAction.data=e.data;break;case"chistes":this.displayAction.action=e.key,this.displayAction.data=e.data;break;case"videos":this.displayAction.action=e.key,this.displayAction.data=e.data;break;case"moda":this.displayAction.action=e.key,this.displayAction.data=e.data;break;default:return}this.randomData()},getRandomIndex(){let e=Math.floor(Math.random()*this.displayAction.data.length);return this.displayAction.data[e]},randomData(){const e=this.getRandomIndex();this.displayAction.view=e},validateTime(){let e=new Date,a=e.getHours();a>=0&&a<12?this.grettingMessage="buenos dias 🌼":a>=12&&a<18?this.grettingMessage="buenas tardes ☀️":a>=18&&a<24&&(this.grettingMessage="buenas noches 🌙")},getRandomValues(){let e=Math.floor(Math.random()*this.typeGrettings.length);return this.typeGrettings[e]},changeActitude(){const{youGirl:e,gretting:a,grettingMessage:o}=this.getRandomValues();this.youGirl=e,this.gretting=a,this.grettingMessage=o}}},h=q,g=Object(m["a"])(h,r,n,!1,null,null,null),v=g.exports,f={name:"App",components:{ForYou:v}},z=f,A=(o("3d1e"),Object(m["a"])(z,i,t,!1,null,null,null)),j=A.exports,C=o("5f5b"),M=o("b1e0");s["default"].use(C["a"]),s["default"].use(M["a"]),s["default"].config.productionTip=!1,new s["default"]({render:e=>e(j)}).$mount("#app")},"89fd":function(e,a,o){e.exports=o.p+"media/3.9174ca04.mp3"},"9d4f":function(e,a,o){},ba28:function(e,a,o){e.exports=o.p+"media/2.5d156eea.mp3"},d788:function(e,a,o){e.exports=o.p+"media/1.3216ebbf.mp3"},f900:function(e,a,o){var s={"./chistes/1.mp3":"d788","./chistes/2.mp3":"1495","./frases/1.mp3":"388f","./frases/2.mp3":"ba28","./frases/3.mp3":"89fd"};function i(e){var a=t(e);return o(a)}function t(e){if(!o.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=t,e.exports=i,i.id="f900"}});
//# sourceMappingURL=app.0cc77272.js.map