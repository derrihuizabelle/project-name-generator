<template>
  <div id="app">
    <div class="text-center slogan">
      <h1>Nomegator</h1>
      <br/>
      <h6 class="text-secondary">Gerador de nomes para projetos</h6>
    </div>
    <router-view class="main"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
	data () {
		return {
    }
  },

  computed: {
    
  },

  methods: {
    
	}
}
</script>
<style>
.slogan {
  margin: 30px 0px;
}
.main {
  background-color: #f1f1f1;
  padding: 30px 0px;
}
</style>