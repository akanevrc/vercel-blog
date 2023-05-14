<template>
  <main>
    <div class="main">
      <slot></slot>
    </div>
  </main>
</template>

<style lang="scss">
.main {
  padding: 20px;
  color: #222;

  h1 {
    font-size: 32pt;
  }
  p {
    font-size: 14pt;
  }
}
</style>
