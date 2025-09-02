<template>
  <footer class="bg-light text-center py-3 mt-auto border-top">
    &copy; {{ year }} Moolah-la Solutions. All rights reserved.
  </footer>
</template>

<script>
export default {
  data() {
    return { year: new Date().getFullYear() }
  }
}
</script>
