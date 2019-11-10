<template>
  <header class="Header">
    <div class="Wrap">
      <div class="header-inner">
        <div class="header-right">
          <h1 class="site-title">
            <SidebarToggle />
            <router-link to="/">
              <component :is="Logo" />
            </router-link>
          </h1>
          <HeaderNav v-if="leftNav" :nav="leftNav" />
        </div>
        <div class="header-left">
          <InjectedComponents position="header-left:start" />
          <HeaderNav v-if="rightNav" :nav="rightNav" />
          <InjectedComponents position="header-left:end" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import SidebarToggle from './SidebarToggle.vue'

export default {
  components: {
    HeaderNav,
    SidebarToggle
  },

  computed: {
    leftNav() {
      const {nav} = this.$store.getters.config
      return (
        nav &&
        nav.filter(item => {
          return item.position === 'left'
        })
      )
    },

    rightNav() {
      const {nav} = this.$store.getters.config
      return (
        nav &&
        nav.filter(item => {
          return item.position === 'right' || !item.position
        })
      )
    },

    Logo() {
      const {title, logo} = this.$store.getters.config

      if (typeof logo === 'string') {
        return {template: logo}
      }

      if (typeof logo === 'object') {
        return logo
      }

      return {
        render(h) {
          return h('span', null, [title])
        }
      }
    }
  }
}
</script>

<style scoped>
.Header {
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 33;
  border-bottom: 1px solid var(--border-color);
  background: var(--header-background);
  color: var(--header-text-color);

  @media print {
    position: static;
  }
}

.Wrap {
  height: 100%;
}

.site-title {
  font-weight: normal;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 0 0 0 25px;

  & a {
    color: inherit;
    text-decoration: none;
  }
}

.header-inner {
  height: 100%;
  padding: 0 20px;
  position: relative;
  display: flex;
  align-items: center;

  @media print {
    padding: 0;
  }
}

.header-left {
  display: flex;
  margin-right: auto;
}

.header-right {
  display: flex;
  height: 100%;
  background: var(--header-background);

  @media print {
    display: flex;
    right: 0;
    padding-right: 0;

    & /deep/ .header-nav {
      display: flex;
    }
  }
}
</style>
