<template>
  <div class="position-relative mt-5">
    <div class="text-left py-3 px-3 position-fixed" style="bottom: 0; left: 0; right: 0">
      <div class="text-center">
        <b-button v-if="displayAction.action == 'frases' && fileAudio.isPlaying" @click="randomSounds" variant="transparent" size="lg" class="my-auto button-foryou mr-1">
          <b-icon icon="shuffle"></b-icon>
        </b-button>
        <b-button v-if="fileAudio.isPlaying" @click="pauseAudio()" class="my-auto button-foryou" size="lg" variant="transparent">
          <b-row>
            <b-col cols="3" class="my-auto">
              <b-icon icon="pause"></b-icon>
            </b-col>
            <b-col cols="9" class="mx-auto my-auto">
              <b-row>
                <b-col cols="8" class="my-auto">
                  <div class="d-inline-flex">
                    <div class="current">{{ fileAudio.interval || '0:00' }}</div>
                    <div class="divider">/</div>
                    <div class="length">{{ fileAudio.timer }}</div>
                  </div>
                </b-col>
                <b-col cols="4" class="my-auto">
                  <div class="bar-c">
                    <div id="bar-1" class="bar"></div>
                    <div id="bar-2" class="bar"></div>
                    <div id="bar-3" class="bar"></div>
                    <div id="bar-4" class="bar"></div>
                    <div id="bar-5" class="bar"></div>
                    <div id="bar-6" class="bar"></div>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-button>
        <b-button v-if="!fileAudio.isPlaying" @click="playAudio()" class="my-auto button-foryou" size="lg" variant="transparent">
          <b-row>
            <b-col cols="3" class="my-auto">
              <b-icon icon="play"></b-icon>
            </b-col>
            <b-col cols="9" class="mx-auto my-auto">
              <div class="d-inline-flex">
                <div class="current">{{ fileAudio.interval || '0:00' }}</div>
                <div class="divider">/</div>
                <div class="length">{{ fileAudio.timer }}</div>
              </div>
            </b-col>
          </b-row>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reproductor',
  props: {
    fileAudio: Object,
    displayAction: Object,
  },
  data: () => ({
    timerInterval: null,
    dataSounds: ['1.mp3', '2.mp3', '3.mp3'],
    currentLabelSound: null,
  }),
  computed: {
    labelSound() {
      return '1.mp3'
    },
  },
  mounted() {
    const folder = this.displayAction.action
    let labelSound = null
    switch (folder) {
      case 'frases':
      case 'chistes':
        labelSound = '1.mp3'
        this.currentLabelSound = labelSound
        this.defaultAudio({ folder, labelSound })
        break
      default:
        console.error('Not support case action')
        break
    }
  },
  methods: {
    getRandomIndex() {
      // Obtener lista de musicas filtradas
      const listSounds = this.dataSounds.filter((item) => item != this.currentLabelSound)

      // Obtener random
      let randomNumber = Math.floor(Math.random() * listSounds.length)

      // Retornar una musica aleatoria filtrada
      return listSounds[randomNumber]
    },
    shuffle() {
      let array = this.dataSounds

      let copy = [],
        n = array.length,
        i

      // While there remain elements to shuffle…
      while (n) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * array.length)

        // If not already shuffled, move it to the new array.
        if (i in array) {
          copy.push(array[i])
          delete array[i]
          n--
        }
      }

      // return i
      return this.dataSounds[i - 1]
    },
    randomSounds() {
      // Set
      const labelSound = this.getRandomIndex()
      this.currentLabelSound = labelSound
      const folder = this.displayAction.action

      // Reproducir sonido
      this.defaultAudio({ folder, labelSound, startPlaying: true })
    },
    defaultAudio({ folder, labelSound, startPlaying = false }) {
      const getSound = () => {
        return require(`@/assets/sounds/${folder}/${labelSound ? labelSound : '1.mp3'}`)
      }
      const src = getSound()
      if (!src) return

      if (!this.fileAudio.audio || startPlaying) {
        if (startPlaying) this.fileAudio.audio.pause() // Pausar musica anterior
        this.fileAudio.audio = new Audio(src)
        if (!this.fileAudio.audio) return
      }

      this.fileAudio.audio.addEventListener(
        'loadeddata',
        () => {
          this.fileAudio.timer = this.getTimeCodeFromNum(this.fileAudio.audio.duration)
          this.fileAudio.audio.volume = 0.75
        },
        false,
      )

      if (startPlaying) {
        const folder = this.displayAction.action
        this.playAudio({ folder, labelSound })
      }
    },
    playAudio(labelSound) {
      if (!this.fileAudio.audio) {
        const folder = this.displayAction.action
        this.defaultAudio({ folder, labelSound })
      }

      this.timerInterval = setInterval(() => {
        this.fileAudio.interval = this.getTimeCodeFromNum(this.fileAudio.audio.currentTime)
      }, 500)

      this.fileAudio.isPlaying = true
      this.fileAudio.audio.play()
      this.fileAudio.audio.loop = true
    },
    pauseAudio() {
      if (this.timerInterval) clearInterval(this.timerInterval)
      this.fileAudio.isPlaying = false
      this.fileAudio.audio.pause()
    },
    //turn 128 seconds into 2:08
    getTimeCodeFromNum(num) {
      let seconds = parseInt(num)
      let minutes = parseInt(String(seconds / 60))
      seconds -= minutes * 60
      const hours = parseInt(String(minutes / 60))
      minutes -= hours * 60

      if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, '0')}`
      return `${String(hours).padStart(2, '0')}:${minutes}:${String(seconds % 60).padStart(2, '0')}`
    },
  },
  watch: {
    'fileAudio.audio'(value) {
      if (this.timerInterval) clearInterval(this.timerInterval)
      if (value) return
      const folder = this.displayAction.action
      let labelSound = null
      switch (folder) {
        case 'frases':
          labelSound = '1.mp3'
          this.defaultAudio({ folder, labelSound })
          break
        case 'chistes':
          labelSound = '1.mp3'
          this.defaultAudio({ folder, labelSound })
          break
        case 'videos':
          if (this.timerInterval) clearInterval(this.timerInterval)
          break
        default:
          console.error('not support case')
          break
      }
    },
  },
  destroyed() {
    if (this.timerInterval) clearInterval(this.timerInterval)
    this.fileAudio.audio = null
    this.fileAudio.timer = null
    this.timerInterval = null
  },
}
</script>

<style scoped></style>
