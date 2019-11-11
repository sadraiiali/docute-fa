<template functional>
  <div>
    <h1>something</h1>
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
    }
  }
}
</script>

<style scoped></style>
