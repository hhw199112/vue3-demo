<template>
  <div class="layout">
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<style scoped>
header {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}

main {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}

footer {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}
</style>