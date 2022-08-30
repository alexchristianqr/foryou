<template>
  <div class="position-relative mt-5">
    <div class="text-left py-3 px-3 position-fixed" style="bottom: 0; left: 0; right: 0">
      <div class="text-center">
        <b-button v-if="isPlaying" @click="pauseAudio(fileMusic)" class="my-auto button-foryou" size="lg">
          <div class="row">
            <div class="col-4 my-auto">
              <b-icon icon="pause"></b-icon>
            </div>
            <div class="col-8 mx-auto my-auto">
              <div class="bar-c">
                <div id="bar-1" class="bar"></div>
                <div id="bar-2" class="bar"></div>
                <div id="bar-3" class="bar"></div>
                <div id="bar-4" class="bar"></div>
                <div id="bar-5" class="bar"></div>
                <div id="bar-6" class="bar"></div>
              </div>
            </div>
          </div>
        </b-button>
        <b-button v-if="!isPlaying" @click="playAudio(fileMusic)" class="my-auto button-foryou" size="lg">
          <b-icon icon="play"></b-icon>
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
  }),
  mounted() {
    // this.payAudio()
  },
  methods: {
    playAudio(sound) {
      const getSound = () => {
        return require(`@/assets/sounds/${sound}`)
      }
      const src = getSound()
      if (!src) return

      if (!this.audio) {
        this.audio = new Audio(src)
        console.dir(this.audio)
      }

      this.isPlaying = true
      this.audio.play()
    },
    pauseAudio() {
      this.isPlaying = false
      this.audio.pause()
    },
  },
}
</script>

<style scoped>
body {
  background: #000;
}
.bar-c {
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 30px;
  width: 40px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
}
.bar {
  height: 1px;
  width: 3px;
  display: inline-block;
  background-color: #000000;
  margin-left: 1px;
  border-radius: 3px;
  -webkit-animation-duration: 500ms;
  -webkit-animation-play-state: running;
  -webkit-animation-direction: alternate;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
}
.bar.noAnim {
  -webkit-animation: none;
  -webkit-animation-name: none;
}
.bar#bar-1 {
  -webkit-animation-name: danceHeight1;
  -webkit-animation-delay: 0ms;
}
.bar#bar-2 {
  -webkit-animation-name: danceHeight2;
  -webkit-animation-delay: 300ms;
}
.bar#bar-3 {
  -webkit-animation-name: danceHeight3;
  -webkit-animation-delay: 600ms;
}
.bar#bar-4 {
  -webkit-animation-name: danceHeight4;
  -webkit-animation-delay: 900ms;
}
.bar#bar-5 {
  -webkit-animation-name: danceHeight5;
  -webkit-animation-delay: 1200ms;
}
.bar#bar-6 {
  -webkit-animation-name: danceHeight6;
  -webkit-animation-delay: 1500ms;
}
@-webkit-keyframes danceHeight1 {
  from {
    height: 1px;
  }
  to {
    height: 22px;
  }
}
@-webkit-keyframes danceHeight2 {
  from {
    height: 1px;
  }
  to {
    height: 15px;
  }
}
@-webkit-keyframes danceHeight3 {
  from {
    height: 1px;
  }
  to {
    height: 30px;
  }
}
@-webkit-keyframes danceHeight4 {
  from {
    height: 1px;
  }
  to {
    height: 20px;
  }
}
@-webkit-keyframes danceHeight5 {
  from {
    height: 1px;
  }
  to {
    height: 15px;
  }
}
@-webkit-keyframes danceHeight6 {
  from {
    height: 1px;
  }
  to {
    height: 15px;
  }
}
</style>
