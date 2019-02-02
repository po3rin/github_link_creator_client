<template>
  <div>
    <section class="container">
      <div class="card">
        <h1>GitHub Link Card Creator</h1>
        <div class="input-wrap">
          <input v-model="name" class="textbox" type="text" placeholder="<user>/<repo>"></input>
        </div>
        <div v-bind:class="{ active_result: isActive}" class="font_warn default_invisibled">
          When pasting this code, please confirm that you can access the URL of the image on the blog or web site. Since you can not access Qiita etc please save the image and upload it again.
        </div>
        <div v-bind:class="{ active_result: isActive }" class="code default_invisibled">
          {{ result }}
        </div>
        <div v-bind:class="{ active_error: errorActive }" class="default_invisibled">
          {{ error }}
        </div>
        <div v-bind:class="{ active_result: isActive }" class="default_invisibled">
          <img class="card_img" :src="src"></img>
        </div>
        <div @click="getCard" v-bind:class="{ btn_result: DisableBtn }" class="btn_req">
          Create Card
        </div>
        <div @click="refresh" v-bind:class="{ btn_result: !DisableBtn }" class="btn_refresh">
          {{ btntext }}
        </div>
      </div>
    </section>
    <div class="partition">
      ◆ ◆ ◆
    </div>
    <section class="container">
      <div class="card">
        <div class="container_item">
          <img class="card_img" src="~assets/example.png" />
        </div>
        <div class="container_item">
          <p class="font_desc">Let's create an invitation card to repository. All you have to do is to enter the repository name.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: "",
      result: null,
      error: null,
      src: null,
      isActive: false,
      errorActive: false,
      DisableBtn: false,
      btntext: "",
    }
  },
  methods: {
    getCard: function () {
      this.btntext = "processing ..."
      this.DisableBtn = true;
      if (this.name == ""){
        this.errorActive = true
        this.error = `Faild to create link card. Please enter repository name (format: <user>/<repo>)`
        this.btntext = "reflesh"
        return
      }
        axios.get('https://ghlinkcard.com/api/v1/images/' + this.name).then((res) => {
        // axios.get('http://localhost:8080/api/v1/images/' + this.name).then((res) => {
        this.result = res.data.value
        this.src = res.data.card_url
        this.isActive = true
        this.btntext = "reflesh"
      }).catch((err) => {
        this.errorActive = true
        this.error = `Faild to create link card. Please make sure ${this.name} exits`
        this.btntext = "reflesh"
      })
    },
    refresh: function () {
      this.DisableBtn = false;
      this.result = null;
      this.src = null;
      this.isActive = null;
      this.errorActive = false;
      this.error = null;
    }
  }
}
</script>

<style lang="scss">
body {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #04286E;
}
.container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px 10%;
  &_item {
    padding: 12px 24px;
  }
}
.card {
  padding: 48px;
  margin: 12px;
  border-radius: 8px;
  width: 50%;
  max-width: 720px;
  min-width: 360px;
  box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  background-color: white;
  &_img {
    width: 100%;
  }
}
.input {
  width: 80%;
  border-color: #04286E;
}
.default_invisibled {
  display: none;
}
.btn {
  &_result {
    display: none;
  }
  &_refresh {
    width: 50%;
    background-color: gray;
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1rem;
    margin: 12px auto;
  }
  &_req {
    width: 50%;
    background-color: #35495e;
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1rem;
    margin: auto;
  }
}
.input-wrap {
  position: relative;
  width: 80%;
  margin: 24px auto;
}
.textbox{
  position: relative;
  display: block;
  width: 100%;
  padding: 15px;
  border: 1px solid #04286E;
  border-radius: 5px;
  font-size: 16px;
  color: #04286E;
  outline: none;
  text-align: center;
}
.code {
  margin-bottom: 24px;
  padding: 36px 24px;
  background-color: #35495e;
  color: white;
  border-radius: 12px;
  padding: 36px 24px;
}
.active {
  &_result {
    display: inherit;
  }
  &_error {
    display: inherit;
    color: red;
  }
}
.font{
  &_desc {
    font-size: 1.1rem;
    word-spacing: 1px;
    text-align: left;
    line-height: 1.8;
  }
  &_font_warn {
    color: orange;
    margin: 6px 0px;
    font-size: 0.9rem;
  }
}
.partition {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
@media screen and (max-width: 480px) {
  .container {
    margin: 0 auto;
    display: inherit;
    padding: 12px 0px;
    min-height: 0;
  }
  .card {
    padding: 32px 4px;
    margin: auto;
    border-radius: 8px;
    width: 90%;
    max-width: 720px;
    min-width: 10px;
  }
}
</style>
