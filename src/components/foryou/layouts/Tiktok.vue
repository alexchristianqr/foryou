<template>
  <div>
    <iframe width="347" height="618" src="https://www.youtube.com/embed/H_VfDFyPpgM" title="Khaby Lame conoce a Lionel Messi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <!--    <div v-html="embedHtml"></div>-->
    <!--    <pre>{{ embedHtml }}</pre>-->
<!--    <blockquote-->
<!--      class="tiktok-embed"-->
<!--      cite="https://www.tiktok.com/@michi6394/video/6699860382145580294"-->
<!--      data-video-id="6699860382145580294"-->
<!--      style="max-width: 805px; min-width: 325px; background-color: transparent !important"-->
<!--    >-->
<!--      <section>-->
<!--        <a target="_blank" title="@michi6394" href="https://www.tiktok.com/@michi6394?refer=embed">@michi6394</a>-->
<!--        <a title="dúo" target="_blank" href="https://www.tiktok.com/tag/d%C3%BAo?refer=embed">#dúo</a> con @carlitospotter-->
<!--        <a target="_blank" title="♬ Monja La Parodia - Jostyn Dcx" href="https://www.tiktok.com/music/Monja-La-Parodia-6606435250832673542?refer=embed">♬ Monja La Parodia - Jostyn Dcx</a>-->
<!--      </section>-->
<!--    </blockquote>-->
  </div>
</template>

<script>
export default {
  name: 'Tiktok',
  data: () => ({
    embedHtml: null,
    dataIframes: [
      {
        link: '<iframe width="347" height="618" src="https://www.youtube.com/embed/H_VfDFyPpgM" title="Khaby Lame conoce a Lionel Messi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      }
    ]
  }),
  beforeMount() {
    require('@/assets/plugins/embed_v1.0.10.js')
  },
  async mounted() {
    await this.getVideoTiktok()
  },

  methods: {
    async getVideoTiktok() {
      try {
        const url = `https://www.tiktok.com/oembed?url=https://www.tiktok.com/@tonycano2003/video/7137351805855419654?is_from_webapp=1&sender_device=pc&web_id=7137529634711864837`
        let response = await fetch(url)
        if (!response.ok) {
          console.error(response)
          return
        }

        // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json()
        let first = json.html.replace(`<script async src="https://www.tiktok.com/embed.js">`, '')
        let second = first.replace('/script', '')
        this.embedHtml = second.replace('<>', '')
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style scoped></style>
