<template>
  <div class="text-center">
    <!-- Botones -->
    <div class="form-group pb-5">
      <div class="row">
        <div class="col-lg-6 col-md-10 col-sm-12 mx-auto">
          <div class="d-flex overflow-auto">
            <b-button
              v-for="(action, k) in actions"
              :key="k"
              variant="outline-danger"
              :class="{ active: action.key == displayAction.action }"
              @click="clickAction(action)"
              class="m-1"
            >
              <span class="text-truncate">{{ action.title }}</span>
            </b-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Ella -->
    <div class="form-group pb-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-8 mx-auto">
          <div
            @click="changeActitude"
            class="pb-3"
            style="font-size: 3.5rem; margin-bottom: 0.5rem"
          >
            <span class="mr-1" style="color: #f55656">{{ gretting }}</span>
            <span style="color: #f55656"
              ><b>{{ youGirl }},</b></span
            >
          </div>
          <!-- Estado saludo-->
          <div class="form-group">
            <div
              @click="changeActitude"
              class="btn btn-light"
              style="opacity: 0.7"
            >
              <span>{{ grettingMessage }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dato -->
    <div class="form-group pb-5">
      <section v-if="displayAction.action === 'frases'" class="t-bq-section">
        <div class="t-bq-wrapper t-bq-wrapper-boxed">
          <div class="t-bq-quote t-bq-quote-mike">
            <div class="t-bq-quote-mike-qmark"><span>&#10077;</span></div>
            <div
              class="t-bq-quote-mike-base"
              style="cursor: pointer"
              @click="randomData"
            >
              <!--Corazon-->
              <div class="heart heart-main" style="z-index: 1"></div>
              <!---->
              <blockquote class="t-bq-quote-mike-text" :cite="creator">
                {{ displayAction.view }}
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section
        v-if="displayAction.action === 'chistes'"
        @click="randomData"
        class="t-bq-section"
      >
        <div class="t-bq-wrapper t-bq-wrapper-boxed">
          <div class="t-bq-quote t-bq-quote-mike">
            <div class="t-bq-quote-mike-qmark"><span>&#10077;</span></div>
            <div class="t-bq-quote-mike-base">
              <blockquote class="t-bq-quote-mike-text" :cite="creator">
                {{ displayAction.view }}
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const forYou = "chica";
export default {
  name: "ForYou",
  data: () => ({
    creator: "Alex Christian",
    gretting: "Hi", // Estado saludo
    grettingMessage: null, // Saludo
    youGirl: forYou,
    phrasesForShe: [
      "Me siento feliz cuando me miras.",
      "Solo puedo pensar en ti",
      "Tu amor vale más que mil millones de estrellas",
      "Mi pensamiento eres tu",
      "Ni la estrella más lejana me impediría verte",
      "Te amo, hasta el infinito y mas alla",
      "Una sonrisa tuya me hace inmensamente feliz",
      "El mar es inmenso, y el desierto infinito, pero estar contigo, es lo más bonito.",
      "Quiero que seas tú ese principio... al que jamás le encuentre final",
      "Aunque físicamente el corazón esté en mi cuerpo, el verdadero dueño eres tu.",
      "Si algo quiero en esta vida es: ser feliz contigo",
      "Cuando pienso en mi futuro siempre pienso en ti",
      "No sé de cuántas maneras, pero de todas te quiero.",
      "En el primer beso descubrí que nunca iba a dejarte ir",
      "Para mí, un minuto contiene 60 maneras de pensar en ti",
      "Pensando en mi felicidad, me acordé de ti",
      "Ámame sin preguntas, que yo te amaré sin respuesta",
      "Yo ya sabía querer, pero tú me enseñaste a amar",
      "Tenerte me alegra el día, besarte me alegra la semana y amarte me alegra la vida",
      "Eres el motivo de mis mejores sonrisas.",
      "La belleza de la mujer se halla iluminada por una luz que nos lleva y convida a contemplar el alma que tal cuerpo habita, y si aquélla es tan bella como ésta, es imposible no amarla.",
      "La belleza es ese misterio hermoso que no descifran ni la psicología ni la retórica.",
      "No está mal ser bella; lo que está mal es la obligación de serlo.",
      "Quitad de los corazones el amor por lo bello, y habréis quitado todo el encanto a la vida.",
      "El encanto de la belleza estriba en su misterio; si deshacemos la trama sutil que enlaza sus elementos, se evapora toda la esencia.",
      "La belleza es muy superior al genio. No necesita explicación.",
      "La belleza no mira, sólo es mirada.",
      "Siempre he creído que lo bueno no era sino lo bello puesto en acción.",
      "Todo lo que es hermoso tiene su instante, y pasa.",
      "Donde brillan muchas bellezas no han de ofender algunas manchas, de las que rara vez se escapa la naturaleza humana.",
      "La belleza exterior no es más que el encanto de un instante. La apariencia del cuerpo no siempre es el reflejo del alma.",
      "Mira dos veces para ver lo justo. No mires más que una vez para ver lo bello.",
      "La belleza no hace feliz al que la posee, sino a quien puede amarla y adorarla.",
      "Cada cosa tiene su belleza, pero no todos pueden verla.",
      "La belleza que atrae rara vez coincide con la belleza que enamora.",
      "Al cabo de los años he observado que la belleza, como la felicidad, es frecuente. No pasa un día en que no estemos, un instante, en el paraíso.",
      "Es cierto que el amor conserva la belleza y que la cara de las mujeres se nutre de caricias, lo mismo que las abejas se nutren de miel.",
      "Aunque viajemos por todo el mundo para encontrar la belleza, debemos llevarla con nosotros para poder encontrarla.",
      "Aunque le arranques los pétalos, no quitarás su belleza a la flor.",
      "Por muy poderosa que se vea el arma de la belleza, desgraciada la mujer que sólo a este recurso debe el triunfo alcanzado sobre un hombre.",
      "La belleza perece en la vida, pero es inmortal en el arte.",
      "Lo bueno necesita aportar pruebas; lo bello, no.",
      "Es terriblemente triste eso de que el talento dure más que la belleza.",
      "Lo bello nos atrae, despreciamos lo útil; y lo bello muchas veces nos pierde.",
      "Más obliga y más puede un rostro bello que un hombre armado.",
      "La belleza sólo le pertenece al que la entiende, no al que la tiene.",
      "La belleza del fruto está en proporción del tiempo que transcurre entre la semilla y la recolección.",
      "La irregularidad, es decir, lo inesperado, la sorpresa o el estupor son elementos esenciales y característicos de la belleza.",
      "Es usted la mujer más bella que he visto en mi vida, lo cual no dice mucho en su favor.",
      "¿Qué es la belleza? Una convención, una moneda que tiene curso en un tiempo y en un lugar.",
      "Tantos siglos, tantos mundos, tanto espacio … y coincidir.",
      "Quedate conmigo y si no funciona lo intentamos otra vez.",
      "Y asi te fui queriendo a diario, sin una ley, sin un horario.",
      "Quiero que sepas que por más lejos que estemos o por más mal y enojados que podamos estar absolutamente siempre eres y serás mi primer y último pensamiento.",
      "Y debo decir que confío plenamente en la casualidad de haberte conocido.",
      "Si te elegí a ti fue porque renuncie al resto.",
      "Eres esa personas que tiene el privilegio de hacerme sonreír con tan solo escribirme.",
      "Cuando estoy contigo solo me falta una cosa: Tiempo.",
      "Nadie es perfecto, hasta que te enamoras.",
      "Con los pies en la tierra y con el corazón en tus manos.",
      "Yo no buscaba a nadie y te vi.",
      "Están los que conquistan a muchas, y los que en su vida solo hay una. Los primeros conocen a un tipo de mujers y los otros a miles dentro de una.",
      "Quiero que seas tú ese principio, al que jamás le encuentre final.",
      "Yo era un aburrido sin remedio y ella era fascinante hasta el infinito.",
      "Me es imposible ver tus fotos y no volverme a enamorar.",
      "¿Hay algo que necesites? - Te tengo a ti ¿Qué mas podría necesitar?",
      "Solo quiero que sepas que una de las mejores cosas que me pasó este año, fue conocerte.",
      "Prometo amarte ferozmente… en todas las condiciones ahora y para siempre. Prometo nunca olvidar que este es una amor de una vez en la vida.",
      "Te he visto en tus peores momentos y sigo pensando que eres la mejor personas que he conocido.",
      "Sé que te quiero. Lo sé porque cuando discutimos, cuando ni nos hablamos y ocurría algo digno de contar de contar, algo gracioso, lo primero que pienso es en decirtelo.",
      "Y conocí a una persona. De esas que te cambian la vida al conocerlas.",
      "Enamorarse de la misma persona todos los días, eso es amor.",
      "Fuiste, eres y quiero que siempre seas tú.",
      "Sin su amor no puedo hacer nada, con su amor no hay nada que no pueda hacer.",
      "Jamás imaginé que un universo tan maravilloso como tú, chocara contra este planeta tan simple llamado yo y que encajaran perfectamente bien.",
      "Ella lo miraba a él como un ciego miraría el mundo por primera vez.",
      "He llegado a entender que tú eres la forma en la que la vida me dice que los cuentos tienen algo de realidad, y es que ante todas las improbabilidades de la vida tu y yo coincidimos.",
      "Solo con tenerte en mi vida me basta y me sobra para saber que nunca por más distancia, peleas y discusiones que podamos tener. Vas a estar siempre a mi lado.",
      "Y si tuviera otra vida, estaría  buscando como llegar a ti.",
      "Me enamoré de ti, de la forma en la que sonríes en la mitad de cada beso, de la manera en que ríes de mis tonterías, de tus ojos, de tu sonrisa, tus pensamientos, de tu presencia. Me enamoré de la forma en la que me hiciste volver a vivir.",
      "Creo que aunque pasen semana, meses años , yo me seguiré emocionando de tu manera de sonreìr como si fuera la primera vez.",
      "Y ahí estaba yo perdiendo la cordura y la dignidadd para que ella no pierda eso que a mi me encanta, su sonrisa.",
      "Jamás me preocupé por preguntarle hacia donde nos dirigíamos porque sabía agarrado de su mano ya era ir en la dirección correcta.",
      "Y apareciste como sol en un día nublado.",
      "Y si te hubiera conocido antes?",
      "No necesito otra persona, ella lo tiene todo.",
      "Buenos Días princesa, estabas hermosa en mis sueños hoy.",
      "No seré canción pero me dedique a ti.",
      "Voy a hacer que tus momentos a mi lado sean inolvidables.",
      "Gracias por cada segundo que has decidido compartir conmigo.",
      "Puedo decir que mi vida es más bonita desde que te conozco.",
      "Mirarte a los ojos y saber que eres todo lo que buscaba.",
      "Que nadie nos detenga, ni el tiempo.",
      "Quiero regalarte mi mejor sonrisa, mi mejor beso, mi mejor abrazo,mi mejor caricia, mi mejor suspiro, lo mejor de mí.",
      "Siempre con el miedo de que alguien más descubra lo increíble que eres.",
      "Hoy me enamoré de la misma persona que ayer, y mañana de la misma que hoy.",
      "Alguien sin prisa, que te conquiste sin calma y te enamore sin pausas.",
      "Eres lo que siempre quise y nunca tuve ",
      "Me preguntaron qué habia visto en ti. Me limité a sonreír, un pirata jamás devela el contenido de su tesoro. Y yo siendo el pirata con el tesoro más grande, no iba a dejar que te descubrieran, mi amor.",
      "De mi sé poco, y de ti solo sé que haces magia con sólo sonreír, y eso me basta.",
      "Voy a vivir el momento para entender el destino, voy a escuchar en silencio para encontrar el camino. (Marc Anthony)",
      "La vida es una cárcel con las puertas abiertas (Andrés Calamaro)",
      "Hoy te toca ser feliz (Mago de oz)",
      "Hoy vas a conquistar el cielo, sin mirar lo alto que queda del suelo (Bebe)",
      "Y que toda tu risa le gane ese pulso al dolor (El canto del Loco)",
      "And in the end the love you receive is equal to the love that you deliverY al final el amor que recibes es igual al amor que entregas (The Beatles)",
      "Voy a reír, voy a bailar, vivir mi vida. (Marc Anthony)",
      "Cuando estaba a medio paso de caer mis silencios se encontraron con tu voz(Reik)",
      "No quiero perderla porque solo es ella inolvidable para mi corazón... ¡inolvidable...inolvidable!. (Reik)",
      "Me encantaría quererte un poco menos (Maná)",
      "Si dios hizo la manzana fue para morder (Ricky Martín)",
      "It is better to be hated for what you are than to be loved for what you are not.Es mejor ser odiado por lo que eres que amado por lo que no eres (Kurt Cobain)",
      "Una mentira en dos palabras: no puedo (Joaquin Sabina)",
      "Sé que tú no quieres que yo a ti te quiera, siempre tú me esquivas de alguna manera (Oscar D’ León)",
      "Y yo sé que no es querer,porque en tus ojos yo me puedo perder,contigo olvido lo que es temer. (La quinta Estación)",
      "No, yo no me doy por vencido,Yo quiero un mundo contigo. (Luis Fonci)",
      "Sólo con un beso, Yo te haría acabar Ese sufrimiento Que te hace llorar. (Enrique Inglesias)",
      "Esa mujer me está matando Me ha espinado el corazón Por más que trato de olvidarla Mi alma no da razón. Maná",
      "It’s time to begin, isn’t it, I get a little bit Bigger, but then, I’ll admit I’m just the same as I was Now, don’t you understand That I’m never changing who I am. (Imagine Dragon)",
      "Y llorar, y llorar, (y llorar) No sirve de nada ahora que te perdí Te quiero recuperar(Jesse & Joy)",
      "Valió la pena lo que era necesario para estar contigo amor Tú eres una bendición. (Marc Antony)",
      "My pride, my ego, my needs and my selfish ways Caused a good strong woman like you to walk out my life. (Bruno Mars)",
      "Eternamente bella, bella con un hechizo de gitana sere la princesa encantada que te amara por siempre desesperadamente.(Alejandra Guzmán)",
      "La noche está para un reggaetón lento De esos que no se bailan hace tiempo. (CNCO)",
      "Cuatro años sin mirarte Tres postales y un bolero Dos meses y me olvidaste Ni siquiera me pensaste un 29 de febrero. (Morat)",
      "De aquel amor De música ligera Nada nos libra Nada mas queda.(Soda Stereo)",
      "Tu eres mi persona favorita Y aunque no siempre lo ando diciendo Es buen momento decirte que te quiero Te quiero, te quiero y siempre asi será. (Río Roma)",
    ],
    displayAction: {
      action: null,
      data: [],
      view: null,
      color: {
        primary: null,
        secondary: null,
        tertiary: null,
      },
    },
    phrase:
      "Only you have the power to be happy when, where and how! we are fine 👍.",
    typeGrettings: [
      {
        gretting: "Oye",
        youGirl: forYou,
        grettingMessage: "Como estás hoy ❤️",
      },
      {
        gretting: "Hum",
        youGirl: forYou,
        grettingMessage: "Seguro estás con hambre 👀",
      },
      {
        gretting: "Oye",
        youGirl: forYou,
        grettingMessage: "Te han dicho que hoy estas bien bonita 👀 👉👈",
      },
      {
        gretting: "Sabes",
        youGirl: forYou,
        grettingMessage:
          "Me dijeron que las personas felices son las que se sienten bien y que no se sienten mal. 😊",
      },
      {
        gretting: "Ah",
        youGirl: forYou,
        grettingMessage:
          "Tu sabías que si te gusta una persona, te empiezas a preocupar más por ella o él 😊",
      },
      {
        gretting: "Oye",
        youGirl: forYou,
        grettingMessage: "Y si vamos a comer unas buenas hamburguesas 😊",
      },
      {
        gretting: "Eh",
        youGirl: forYou,
        grettingMessage: "Don gato y doña claudia están bien 👀",
      },
      {
        gretting: "Sabes",
        youGirl: forYou,
        grettingMessage:
          "Quiero que me ayudes a sacar buenas calificaciones 😊",
      },
      {
        gretting: "Oye",
        youGirl: forYou,
        grettingMessage: "Aunque parezca que no estoy ahí, estoy ahí 😊",
      },
      {
        gretting: "Oye",
        youGirl: forYou,
        grettingMessage: "Yo soy muy bueno, pero tú eres mejor que yó 😊",
      },
      {
        gretting: "Sabes",
        youGirl: forYou,
        grettingMessage:
          "Cuando estes triste, pídeme un abrazo 😊 con confianza 😊",
      },
      {
        gretting: "Uy",
        youGirl: forYou,
        grettingMessage: "Se me antojo una pizza 🍕 jajaja",
      },
      {
        gretting: "Uy",
        youGirl: forYou,
        grettingMessage: "Tenemos que ir a la playa 🏖 ponle fecha 😊",
      },
      {
        gretting: "Uy",
        youGirl: forYou,
        grettingMessage:
          "hoy es un bonito día para salir a hacer eso que pasó por tu cabeza 😊",
      },
    ],
    actions: [
      {
        key: "frases",
        title: "❤️ Frases",
        data: [
          "Me siento feliz cuando me miras.",
          "Solo puedo pensar en ti",
          "Tu amor vale más que mil millones de estrellas",
          "Mi pensamiento eres tu",
          "Ni la estrella más lejana me impediría verte",
          "Te amo, hasta el infinito y mas alla",
          "Una sonrisa tuya me hace inmensamente feliz",
          "El mar es inmenso, y el desierto infinito, pero estar contigo, es lo más bonito.",
          "Quiero que seas tú ese principio... al que jamás le encuentre final",
          "Aunque físicamente el corazón esté en mi cuerpo, el verdadero dueño eres tu.",
          "Si algo quiero en esta vida es: ser feliz contigo",
          "Cuando pienso en mi futuro siempre pienso en ti",
          "No sé de cuántas maneras, pero de todas te quiero.",
          "En el primer beso descubrí que nunca iba a dejarte ir",
          "Para mí, un minuto contiene 60 maneras de pensar en ti",
          "Pensando en mi felicidad, me acordé de ti",
          "Ámame sin preguntas, que yo te amaré sin respuesta",
          "Yo ya sabía querer, pero tú me enseñaste a amar",
          "Tenerte me alegra el día, besarte me alegra la semana y amarte me alegra la vida",
          "Eres el motivo de mis mejores sonrisas.",
          "La belleza de la mujer se halla iluminada por una luz que nos lleva y convida a contemplar el alma que tal cuerpo habita, y si aquélla es tan bella como ésta, es imposible no amarla.",
          "La belleza es ese misterio hermoso que no descifran ni la psicología ni la retórica.",
          "No está mal ser bella; lo que está mal es la obligación de serlo.",
          "Quitad de los corazones el amor por lo bello, y habréis quitado todo el encanto a la vida.",
          "El encanto de la belleza estriba en su misterio; si deshacemos la trama sutil que enlaza sus elementos, se evapora toda la esencia.",
          "La belleza es muy superior al genio. No necesita explicación.",
          "La belleza no mira, sólo es mirada.",
          "Siempre he creído que lo bueno no era sino lo bello puesto en acción.",
          "Todo lo que es hermoso tiene su instante, y pasa.",
          "Donde brillan muchas bellezas no han de ofender algunas manchas, de las que rara vez se escapa la naturaleza humana.",
          "La belleza exterior no es más que el encanto de un instante. La apariencia del cuerpo no siempre es el reflejo del alma.",
          "Mira dos veces para ver lo justo. No mires más que una vez para ver lo bello.",
          "La belleza no hace feliz al que la posee, sino a quien puede amarla y adorarla.",
          "Cada cosa tiene su belleza, pero no todos pueden verla.",
          "La belleza que atrae rara vez coincide con la belleza que enamora.",
          "Al cabo de los años he observado que la belleza, como la felicidad, es frecuente. No pasa un día en que no estemos, un instante, en el paraíso.",
          "Es cierto que el amor conserva la belleza y que la cara de las mujeres se nutre de caricias, lo mismo que las abejas se nutren de miel.",
          "Aunque viajemos por todo el mundo para encontrar la belleza, debemos llevarla con nosotros para poder encontrarla.",
          "Aunque le arranques los pétalos, no quitarás su belleza a la flor.",
          "Por muy poderosa que se vea el arma de la belleza, desgraciada la mujer que sólo a este recurso debe el triunfo alcanzado sobre un hombre.",
          "La belleza perece en la vida, pero es inmortal en el arte.",
          "Lo bueno necesita aportar pruebas; lo bello, no.",
          "Es terriblemente triste eso de que el talento dure más que la belleza.",
          "Lo bello nos atrae, despreciamos lo útil; y lo bello muchas veces nos pierde.",
          "Más obliga y más puede un rostro bello que un hombre armado.",
          "La belleza sólo le pertenece al que la entiende, no al que la tiene.",
          "La belleza del fruto está en proporción del tiempo que transcurre entre la semilla y la recolección.",
          "La irregularidad, es decir, lo inesperado, la sorpresa o el estupor son elementos esenciales y característicos de la belleza.",
          "Es usted la mujer más bella que he visto en mi vida, lo cual no dice mucho en su favor.",
          "¿Qué es la belleza? Una convención, una moneda que tiene curso en un tiempo y en un lugar.",
          "Tantos siglos, tantos mundos, tanto espacio … y coincidir.",
          "Quedate conmigo y si no funciona lo intentamos otra vez.",
          "Y asi te fui queriendo a diario, sin una ley, sin un horario.",
          "Quiero que sepas que por más lejos que estemos o por más mal y enojados que podamos estar absolutamente siempre eres y serás mi primer y último pensamiento.",
          "Y debo decir que confío plenamente en la casualidad de haberte conocido.",
          "Si te elegí a ti fue porque renuncie al resto.",
          "Eres esa personas que tiene el privilegio de hacerme sonreír con tan solo escribirme.",
          "Cuando estoy contigo solo me falta una cosa: Tiempo.",
          "Nadie es perfecto, hasta que te enamoras.",
          "Con los pies en la tierra y con el corazón en tus manos.",
          "Yo no buscaba a nadie y te vi.",
          "Están los que conquistan a muchas, y los que en su vida solo hay una. Los primeros conocen a un tipo de mujers y los otros a miles dentro de una.",
          "Quiero que seas tú ese principio, al que jamás le encuentre final.",
          "Yo era un aburrido sin remedio y ella era fascinante hasta el infinito.",
          "Me es imposible ver tus fotos y no volverme a enamorar.",
          "¿Hay algo que necesites? - Te tengo a ti ¿Qué mas podría necesitar?",
          "Solo quiero que sepas que una de las mejores cosas que me pasó este año, fue conocerte.",
          "Prometo amarte ferozmente… en todas las condiciones ahora y para siempre. Prometo nunca olvidar que este es una amor de una vez en la vida.",
          "Te he visto en tus peores momentos y sigo pensando que eres la mejor personas que he conocido.",
          "Sé que te quiero. Lo sé porque cuando discutimos, cuando ni nos hablamos y ocurría algo digno de contar de contar, algo gracioso, lo primero que pienso es en decirtelo.",
          "Y conocí a una persona. De esas que te cambian la vida al conocerlas.",
          "Enamorarse de la misma persona todos los días, eso es amor.",
          "Fuiste, eres y quiero que siempre seas tú.",
          "Sin su amor no puedo hacer nada, con su amor no hay nada que no pueda hacer.",
          "Jamás imaginé que un universo tan maravilloso como tú, chocara contra este planeta tan simple llamado yo y que encajaran perfectamente bien.",
          "Ella lo miraba a él como un ciego miraría el mundo por primera vez.",
          "He llegado a entender que tú eres la forma en la que la vida me dice que los cuentos tienen algo de realidad, y es que ante todas las improbabilidades de la vida tu y yo coincidimos.",
          "Solo con tenerte en mi vida me basta y me sobra para saber que nunca por más distancia, peleas y discusiones que podamos tener. Vas a estar siempre a mi lado.",
          "Y si tuviera otra vida, estaría  buscando como llegar a ti.",
          "Me enamoré de ti, de la forma en la que sonríes en la mitad de cada beso, de la manera en que ríes de mis tonterías, de tus ojos, de tu sonrisa, tus pensamientos, de tu presencia. Me enamoré de la forma en la que me hiciste volver a vivir.",
          "Creo que aunque pasen semana, meses años , yo me seguiré emocionando de tu manera de sonreìr como si fuera la primera vez.",
          "Y ahí estaba yo perdiendo la cordura y la dignidadd para que ella no pierda eso que a mi me encanta, su sonrisa.",
          "Jamás me preocupé por preguntarle hacia donde nos dirigíamos porque sabía agarrado de su mano ya era ir en la dirección correcta.",
          "Y apareciste como sol en un día nublado.",
          "Y si te hubiera conocido antes?",
          "No necesito otra persona, ella lo tiene todo.",
          "Buenos Días princesa, estabas hermosa en mis sueños hoy.",
          "No seré canción pero me dedique a ti.",
          "Voy a hacer que tus momentos a mi lado sean inolvidables.",
          "Gracias por cada segundo que has decidido compartir conmigo.",
          "Puedo decir que mi vida es más bonita desde que te conozco.",
          "Mirarte a los ojos y saber que eres todo lo que buscaba.",
          "Que nadie nos detenga, ni el tiempo.",
          "Quiero regalarte mi mejor sonrisa, mi mejor beso, mi mejor abrazo,mi mejor caricia, mi mejor suspiro, lo mejor de mí.",
          "Siempre con el miedo de que alguien más descubra lo increíble que eres.",
          "Hoy me enamoré de la misma persona que ayer, y mañana de la misma que hoy.",
          "Alguien sin prisa, que te conquiste sin calma y te enamore sin pausas.",
          "Eres lo que siempre quise y nunca tuve ",
          "Me preguntaron qué habia visto en ti. Me limité a sonreír, un pirata jamás devela el contenido de su tesoro. Y yo siendo el pirata con el tesoro más grande, no iba a dejar que te descubrieran, mi amor.",
          "De mi sé poco, y de ti solo sé que haces magia con sólo sonreír, y eso me basta.",
          "Voy a vivir el momento para entender el destino, voy a escuchar en silencio para encontrar el camino. (Marc Anthony)",
          "La vida es una cárcel con las puertas abiertas (Andrés Calamaro)",
          "Hoy te toca ser feliz (Mago de oz)",
          "Hoy vas a conquistar el cielo, sin mirar lo alto que queda del suelo (Bebe)",
          "Y que toda tu risa le gane ese pulso al dolor (El canto del Loco)",
          "And in the end the love you receive is equal to the love that you deliverY al final el amor que recibes es igual al amor que entregas (The Beatles)",
          "Voy a reír, voy a bailar, vivir mi vida. (Marc Anthony)",
          "Cuando estaba a medio paso de caer mis silencios se encontraron con tu voz(Reik)",
          "No quiero perderla porque solo es ella inolvidable para mi corazón... ¡inolvidable...inolvidable!. (Reik)",
          "Me encantaría quererte un poco menos (Maná)",
          "Si dios hizo la manzana fue para morder (Ricky Martín)",
          "It is better to be hated for what you are than to be loved for what you are not.Es mejor ser odiado por lo que eres que amado por lo que no eres (Kurt Cobain)",
          "Una mentira en dos palabras: no puedo (Joaquin Sabina)",
          "Sé que tú no quieres que yo a ti te quiera, siempre tú me esquivas de alguna manera (Oscar D’ León)",
          "Y yo sé que no es querer,porque en tus ojos yo me puedo perder,contigo olvido lo que es temer. (La quinta Estación)",
          "No, yo no me doy por vencido,Yo quiero un mundo contigo. (Luis Fonci)",
          "Sólo con un beso, Yo te haría acabar Ese sufrimiento Que te hace llorar. (Enrique Inglesias)",
          "Esa mujer me está matando Me ha espinado el corazón Por más que trato de olvidarla Mi alma no da razón. Maná",
          "It’s time to begin, isn’t it, I get a little bit Bigger, but then, I’ll admit I’m just the same as I was Now, don’t you understand That I’m never changing who I am. (Imagine Dragon)",
          "Y llorar, y llorar, (y llorar) No sirve de nada ahora que te perdí Te quiero recuperar(Jesse & Joy)",
          "Valió la pena lo que era necesario para estar contigo amor Tú eres una bendición. (Marc Antony)",
          "My pride, my ego, my needs and my selfish ways Caused a good strong woman like you to walk out my life. (Bruno Mars)",
          "Eternamente bella, bella con un hechizo de gitana sere la princesa encantada que te amara por siempre desesperadamente.(Alejandra Guzmán)",
          "La noche está para un reggaetón lento De esos que no se bailan hace tiempo. (CNCO)",
          "Cuatro años sin mirarte Tres postales y un bolero Dos meses y me olvidaste Ni siquiera me pensaste un 29 de febrero. (Morat)",
          "De aquel amor De música ligera Nada nos libra Nada mas queda.(Soda Stereo)",
          "Tu eres mi persona favorita Y aunque no siempre lo ando diciendo Es buen momento decirte que te quiero Te quiero, te quiero y siempre asi será. (Río Roma)",
        ],
      },
      {
        key: "chistes",
        title: "🤪 Chistes",
        data: [
          "Había un gato con 16 vidas, lo aplastó un 4x4 y se murió.",
          "A ver Jaimito, ¿Como se llama el compuesto químico que evita el embarazo? -Nitrato de meterlo!",
          "Policía! hay dos mujeres que se están peleando por mi! -Y que problema hay? -Pues que va ganando la fea!",
          "El marido entra con mucho cuidado en la cama y le susurra dulce y apasionadamente al oído de su mujer: \n-Estoy sin calzoncillos...\nY la mujer le responde: \n-Mañana te lavo unos.",
          "- Mamá, ¿qué haces en frente de la computadora con los ojos cerrados?\n- Nada, hijo, es que Windows me dijo que cerrara las pestañas... ",
          "- Mi amor, estoy embarazada. ¿Qué te gustaría que fuera?\n- ¿Una broma?. ",
          '- ¡A mí nadie me da órdenes! -\n- "2% de batería. Conecte el cargador".\n- Voy. ',
          "- ¿Tienes wi-fi?\n- Sí\n- ¿Y cuál es la clave?\n- Tener dinero y pagarlo. ",
          "- ¿Bailamos?\n- Claro. ¿Pero quién saca a mi amiga?\n- Ahhh, por eso no te preocupes. ¡SEGURIDAAAAD! ",
          "- Amor, de ahora en adelante te llamaré Eva por ser mi primera mujer.\n- Vale cariño, pues yo te llamaré dálmata por ser el 101. ",
        ],
      },
      {
        key: "videos",
        title: "📽️ Videos",
        data: [],
      },
      {
        key: "moda",
        title: "🌟 Moda",
        data: [],
      },
      {
        key: "animals",
        title: "Animales",
        data: [],
      },
      {
        key: "news",
        title: "Noticias",
        data: [],
      },
    ],
  }),
  mounted() {
    this.initializeAction();
    this.validateTime();
  },
  methods: {
    initializeAction() {
      const action = this.actions[0];
      this.displayAction.action = action.key;
      this.displayAction.data = action.data;
      this.randomData();
    },
    clickAction(action) {
      switch (action.key) {
        case "frases":
          this.displayAction.action = action.key;
          this.displayAction.data = action.data;
          break;
        case "chistes":
          this.displayAction.action = action.key;
          this.displayAction.data = action.data;
          break;
        case "videos":
          this.displayAction.action = action.key;
          this.displayAction.data = action.data;
          break;
        case "moda":
          this.displayAction.action = action.key;
          this.displayAction.data = action.data;
          break;
        default:
          return;
      }
      this.randomData();
    },
    getRandomIndex() {
      let randomNumber = Math.floor(
        Math.random() * this.displayAction.data.length
      );
      return this.displayAction.data[randomNumber];
    },
    randomData() {
      const value = this.getRandomIndex();
      this.displayAction.view = value;
    },
    //
    validateTime() {
      let time = new Date();
      let hour = time.getHours();
      if (hour >= 0 && hour < 12) {
        this.grettingMessage = "good morning 🌼";
      } else if (hour >= 12 && hour < 18) {
        this.grettingMessage = "good afternoon ☀️";
      } else if (hour >= 18 && hour < 24) {
        this.grettingMessage = "good evening 🌙";
      }
    },
    getRandomValues() {
      let randomNumber = Math.floor(Math.random() * this.typeGrettings.length);
      return this.typeGrettings[randomNumber];
    },
    changeActitude() {
      const { youGirl, gretting, grettingMessage } = this.getRandomValues();
      this.youGirl = youGirl;
      this.gretting = gretting;
      this.grettingMessage = grettingMessage;
    },
  },
};
</script>

<style scoped></style>
