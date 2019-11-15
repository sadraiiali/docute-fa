<template>
  <div class="box">
    <img :src="img" alt="" height="100" width="100" />
    <div class="name">
      <h4>{{ firstName }}</h4>
      <h3>{{ lastName }}</h3>
      <div class="social">
        <a :href="'http://t.me/' + telegram" target="_blank" v-if="telegram">
          <i class="socicon-telegram"></i>
        </a>
        <a :href="'mailto://' + email" target="_blank" v-if="email">
          <i class="socicon-mail"></i>
        </a>
        <a
          :href="'http://twitter.com/' + twitter"
          target="_blank"
          v-if="twitter"
        >
          <i class="socicon-twitter"></i>
        </a>
        <a
          :href="'https://www.linkedin.com/in/' + linkedin"
          target="_blank"
          v-if="linkedin"
        >
          <i class="socicon-linkedin"></i>
        </a>
        <a :href="'http://github.com/' + github" target="_blank" v-if="github">
          <i class="socicon-github"></i>
        </a>
        <a :href="'http://gitlab.com/' + gitlab" target="_blank" v-if="gitlab">
          <i class="socicon-gitlab"></i>
        </a>
        <a :href="internet" target="_blank" v-if="internet">
          <i class="socicon-internet"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AvatarMini',
  props: {
    img: {
      type: String,
      required: true,
      default() {
        return null
      }
    },
    firstName: {
      type: String,
      required: true,
      default() {
        return null
      }
    },
    lastName: {
      type: String,
      required: true,
      default() {
        return null
      }
    },
    email: {
      type: String,
      required: false,
      default() {
        return null
      }
    },
    twitter: {
      type: String,
      required: false,
      default() {
        return null
      }
    },
    telegram: {
      type: String,
      required: false,
      default() {
        return null
      }
    },
    linkedin: {
      type: String,
      required: false,
      default() {
        return null
      }
    },
    github: {
      type: String,
      required: false,
      default() {
        return null
      }
    },
    gitlab: {
      type: String,
      required: false,
      default() {
        return null
      }
    },
    internet: {
      type: String,
      required: false,
      default() {
        return null
      }
    }
  }
}
</script>

<style scoped>
@import url('https://s3.amazonaws.com/icomoon.io/114779/Socicon/style.css?u8vidh');

.box {
  margin: 10px;
  display: inline-flex;
  position: relative;
  top: 0;
  height: auto;
  width: auto;
  flex-direction: row;
  align-items: center;
  transition: ease-in-out 200ms;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.box:hover {
  top: -1px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

img {
  display: inline-flex;
  padding: 0;
  margin: 10px;
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.name {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  align-self: flex-start;
  padding-top: 0;
  margin: 0 10px 10px;
}

.social {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 124px;
}

.social a {
  display: inline-flex;
  margin: 2px;
  border-radius: 100%;
  padding: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-decoration: none;
}

.social a:hover {
  background-color: var(--accent-color);
  color: white;
}

h3 {
  display: inline-flex;
  font-size: 1.5rem;
  margin: -2rem 0 0;
  padding-left: 10px;
}

h4 {
  display: inline-flex;
  font-size: 0.9rem;
  align-self: flex-start;
  padding-left: 10px;
}
</style>
