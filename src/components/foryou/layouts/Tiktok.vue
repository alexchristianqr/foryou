<template>
  <div>
    <!--    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@scout2015/video/6718335390845095173" data-video-id="6718335390845095173" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@scout2015" href="https://www.tiktok.com/@scout2015?refer=embed">@scout2015</a> Scramble up ur name &#38; I’ll try to guess it😍❤️ <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a> <a title="petsoftiktok" target="_blank" href="https://www.tiktok.com/tag/petsoftiktok?refer=embed">#petsoftiktok</a> <a title="aesthetic" target="_blank" href="https://www.tiktok.com/tag/aesthetic?refer=embed">#aesthetic</a> <a target="_blank" title="♬ original sound - tiff" href="https://www.tiktok.com/music/original-sound-6689804660171082501?refer=embed">♬ original sound - tiff</a> </section> </blockquote>-->

    <div v-html="embedHtml"></div>
    <pre>{{ embedHtml }}</pre>
  </div>
  <!--  <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tiktokconsumidor/video/7136936073103510826" data-video-id="7136936073103510826" >-->
  <!--    <section></section>-->
  <!--  </blockquote>-->
</template>

<script>
import '@/assets/plugins/embed_v1.0.10.js'
export default {
  name: 'Tiktok',
  data: () => ({
    embedHtml: null,
  }),
  created() {
    // require('@/assets/plugins/embed_v1.0.10.js')
  },
  async mounted() {
    await this.getVideoTiktok()
  },

  methods: {
    async getVideoTiktok() {
      const url = `https://www.tiktok.com/oembed?url=https://www.tiktok.com/@tonycano2003/video/7137351805855419654?is_from_webapp=1&sender_device=pc&web_id=7137529634711864837`
      let response = await fetch(url)

      if (response.ok) {
        // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json()
        console.log(json)
        // <\/script>
        let first = json.html.replace(`<script async src="https://www.tiktok.com/embed.js">`, '')
        let second = first.replace('/script', '')
        this.embedHtml = second.replace('<>', '')
      } else {
        alert('HTTP-Error: ' + response.status)
      }
    },
  },
}
</script>

<style scoped></style>
