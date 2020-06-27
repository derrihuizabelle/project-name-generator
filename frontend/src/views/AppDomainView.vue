<template>
  <div>
    <div class="container">
      <div class="text-left">
        <router-link to="/domains">Voltar</router-link>
        
        <br/>
        <br/>
        
        <h2>{{ domain }}</h2>
        
        <br/>

        <div class="card">

          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="(domain, i) in domains" :key="i">
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
import axios from 'axios'
export default {
  name: 'AppDomainView',
  props: {
    domain: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      domains: []
    }
  },
  beforeMount () {
    axios({
      url: 'http://localhost:4000',
      method: 'post',
      data: {
        query: `
          mutation ($name: String) {
            domains: generateDomain(name: $name) {
              name,
              checkout,
              available,
              extension
            }
          }
        `,
        variables: {
          name: this.domain
        }
      }
    }).then(response => {
      const query = response.data
      this.domains = query.data.domains
    })
  }
}
</script>