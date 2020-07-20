<template>
  <div>
    <div class="container" v-if="loading">
      <div class="row d-flex justify-content-center">
        <socket/>
      </div>
    </div>
    <div class="container" v-else>
      <div class="text-left">
        <router-link to="/domains">Voltar</router-link>
        
        <br/>
        <br/>
        
        <h2>{{ domain }}</h2>
        
        <br/>

        <div class="card">

          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="(domain, i) in information" :key="i">
                <div class="row">
                  <div class="col-md">
                    {{ domain.extension }}
                  </div>
                  <div class="col-md text-right">
                    <a :href="domain.checkout" target="_blank">
                      <button class="btn btn-info">
                        <span class="fa fa-shopping-cart"></span>
                      </button>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>


      </div>
    </div>
  </div>
  
  
</template>

<script>

import { mapActions } from 'vuex'
 import {Socket} from 'vue-loading-spinner'

export default {
  name: 'AppDomainView',
  components: {
    Socket
  },
  props: {
    domain: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      loading: true,
      information: []
    }
  },
  async beforeMount () {
    await this.generateDomain(this.domain)
    this.information = this.$store.state.domainInformation
    this.loading = false
  },
  methods: {
    ...mapActions(['generateDomain'])
	}
}
</script>