<template>
  <div>
    <div class="container">
      <div class="row">
        
        <div class="col-md">
          <AppItemsList title="Prefixos" :type="'prefixes'" :items="items.prefixes" @addItem="addItem" @deleteItem="deleteItem"/>
        </div>

        <div class="col-md">
          <AppItemsList title="Sufixos" :type="'sufixes'" :items="items.sufixes" @addItem="addItem" @deleteItem="deleteItem"/>
        </div>
      </div>

      <br/>
      <div>
        <AppDomainList title="Domínios" :items="domains" />
      </div>

    </div> <!-- container -->
  </div> <!-- home -->
</template>

<script>
import AppItemsList from '../components/AppItemList'
import AppDomainList from '../components/AppDomainList'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    AppItemsList,
    AppDomainList
  },
	data () {
		return {}
  },

  computed: {
    ...mapState(['items', 'domains'])
  },

  methods: {
    ...mapActions(['addItem', 'deleteItem', 'getItems', 'generateDomains'])
	}
}
</script>