<template>
  <div class="position-relative mt-5">
    <div class="text-left py-3 px-3 position-fixed" style="bottom: 0; left: 0; right: 0">
      <div class="text-center">
        <b-button v-if="isPlaying" @click="pauseAudio(fileMusic)" class="my-auto button-foryou" size="lg" variant="transparent">
          <b-row>
            <b-col cols="3" class="my-auto">
              <b-icon icon="pause"></b-icon>
            </b-col>
            <b-col cols="9" class="mx-auto my-auto">
              <b-row>
                <b-col cols="8" class="my-auto">
                  <div class="d-inline-flex">
                    <div class="current">{{ audioInterval || '0:00' }}</div>
                    <div class="divider">/</div>
                    <div class="length">{{ audioTimer }}</div>
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
        <b-button v-if="!isPlaying" @click="playAudio(fileMusic)" class="my-auto button-foryou" size="lg" variant="transparent">
          <b-row>
            <b-col cols="3" class="my-auto">
              <b-icon icon="play"></b-icon>
            </b-col>
            <b-col cols="9" class="mx-auto my-auto">
              <div class="d-inline-flex">
                <div class="current">{{ audioInterval || '0:00' }}</div>
                <div class="divider">/</div>
                <div class="length">{{ audioTimer }}</div>
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
  data: () => ({
    fileMusic: '1.mp3',
    audio: null,
    isPlaying: false,
    audioTimer: null,
    audioInterval: null,
    timerInterval: null
  }),
  mounted() {
    this.defaultAudio()
  },
  methods: {
    defaultAudio(sound) {
      const getSound = () => {
        return require(`@/assets/sounds/${sound ? sound : '1.mp3'}`)
      }
      const src = getSound()
      if (!src) return

      if (!this.audio) {
        this.audio = new Audio(src)
        if (!this.audio) return
        console.dir(this.audio)
      }

      this.audio.addEventListener(
        'loadeddata',
        () => {
          this.audioTimer = this.getTimeCodeFromNum(this.audio.duration)
          this.audio.volume = 0.75
        },
        false,
      )
    },
    playAudio(sound) {
      if (!this.audio) {
        this.defaultAudio(sound)
      }

      this.timerInterval = setInterval(() => {
        this.audioInterval = this.getTimeCodeFromNum(this.audio.currentTime)
      }, 500)

      this.isPlaying = true
      this.audio.play()
      this.audio.loop = true
    },
    pauseAudio() {
      if(this.timerInterval) clearInterval(this.timerInterval)
      this.isPlaying = false
      this.audio.pause()
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
}
</script>

<style scoped></style>
