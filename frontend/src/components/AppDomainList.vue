<template>
  <div>
    <h5> {{ title }} <span class="badge badge-info">{{ items.length }}</span></h5>
    <div class="card">

      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="(domain, i) in items" :key="i">
            <div class="row">
              <div class="col-md">
                {{ domain.name }}
              </div>
              <div class="col-md text-right">
                <button class="btn btn-info" @click="openDomain(domain)">
                  <span class="fa fa-arrow-right"></span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDomainList',
  props: {
    title: {
      type: String, 
      default: ''
    },
    items: {
      type: Array
    }
  },
  data () {
    return {
      item: ''
      }
  },
  methods: {
    openDomain (domain) {
      this.$router.push({
        path: `/domains/${domain.name}`
      })
    }
  }
}
</script>