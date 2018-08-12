<template>
  <a :href=wppUrl()>Talk to me on WhatsApp</a>
</template>

<script>
  import whatsappUrl from 'whatsapp-url'

  export default {
    data () {
      return {
        phone: '55984401163',
        text: 'Hello World, its me Mario!'
      }
    },
    methors: {
      wppUrl () {
        return whatsappUrl(this.$data)
      }
    }
  }
</script>

<style scoped>
a {
  text-decoration: none;
  /* stylesheet to whatsapp button */
}
</style>