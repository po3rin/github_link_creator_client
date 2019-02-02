<template>
  <div>
    <header class="header">
      <div>
        <p>GitHub Link Card Creator</p>
      </div>
      <div>
        <a cleass="link" href="https://github.com/po3rin/github_link_creator"><img width="48px" src="~assets/github.png" /></a>
      </div>
    </header>
    <nuxt />
    <footer class="footer"></footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.link {
  cursor: pointer;
}
.header {
  font-size: 20px;
  width: 100%;
  padding: 24px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 480px) {
  .header {
    padding: 26px 12px;
  }
}
</style>
