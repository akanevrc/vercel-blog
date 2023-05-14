<script setup lang="ts">
const $q = useQuasar()
const { data } = await useAsyncData(() => queryContent('/').find())
const menu = reactive({ visible: true })
const darkMode = reactive({ dark: false })
watch(darkMode, async (newDarkMode, oldDarkMode) => {
  $q.dark.set(newDarkMode.dark)
})
</script>

<template>
  <div>
    <QLayout>
      <QHeader>
        <QToolbar>
          <QBtn flat round icon="menu" @click="menu.visible = !menu.visible"/>
          <QAvatar icon="favorite" />
          <QToolbarTitle>茜の技術手帖</QToolbarTitle>
          <QBtn flat round :icon="darkMode.dark ? 'dark_mode' : 'light_mode'" @click="darkMode.dark = !darkMode.dark" />
        </QToolbar>
      </QHeader>
      <QDrawer bordered :width="240" class="bg-grey-3" v-model="menu.visible">
        <QScrollArea class="fit">
          <nav>
              <div class="nav">
                <div v-for="post in data" :key="post._path" class="nav-item">
                  <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
                </div>
              </div>
          </nav>
        </QScrollArea>
      </QDrawer>
      <QPageContainer class="bg-grey-1">
        <QPage padding>
          <NuxtPage />
        </QPage>
      </QPageContainer>
      <QFooter>
        <p>© 2023 akanevrc</p>
      </QFooter>
    </QLayout>
  </div>
</template>

<style scoped lang="scss">
.nav {
  padding: 20px;
  color: #222;
  font-size: 12pt;
}
.nav-item {
  margin-bottom: 10px;
}
</style>
<style lang="scss">
a {
  &:link {
    color: #222;
    text-decoration: none;
  }
  &:visited {
    color: #333;
    text-decoration: none;
  }
  &:hover {
    color: #444;
    text-decoration: underline;
  }
  &:active {
    color: #111;
    text-decoration: underline;
  }
  &:focus {
    color: #444;
    text-decoration: none;
  }
}
</style>
