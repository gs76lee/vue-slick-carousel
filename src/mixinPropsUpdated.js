export default {
  computed: {
    isPropsUpdated() {
      // Read props that need to be listened for changes.
      Object.keys(this.$props).forEach(key => this[key])
      // Return a different value each time. `Date.now()` is not guaranteed to be unique.
      return (this.updateSwitch = !this.updateSwitch)
    },
  },
  watch: {
    isPropsUpdated() {
      if (typeof this.onPropsUpdated === 'function') {
        this.onPropsUpdated()
      }
    },
  },
}
