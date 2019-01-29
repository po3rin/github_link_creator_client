<template>
  <section class="container">
    <div class="card">
      <h1>GitHub Link Card Creator</h1>
      <div class="input-wrap">
        <input v-model="name" class="textbox" type="text" placeholder="<user>/<repo>"></input>
      </div>
      <div v-bind:class="{ active_result: isActive }">
        {{ result }}
      </div>
      <div v-bind:class="{ active_error: errorActive }">
        {{ error }}
      </div>
      <img class="result_img" :src="src"></img>
      <div @click="getCard" v-bind:class="{ result_btn: DisableBtn }" class="reqbtn">
        Create Card
      </div>
      <div @click="refresh" v-bind:class="{ result_btn: !DisableBtn }" class="refresh_btn">
        Refresh
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: null,
      result: null,
      error: null,
      src: null,
      isActive: false,
      DisableBtn: false
    }
  },
  methods: {
    getCard: function () {
      this.DisableBtn = true;
      axios.get('https://ghlinkcard.com/api/v1/images/' + this.name).then((res) => {
        this.result = res.data.value
        this.src = res.data.card_url
        this.isActive = true
      }).catch((err) => {
        console.error(err)
        this.errorActive = true
        this.error = `Faild to create link card. Please make sure ${this.name} exits`
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
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
}
.input {
  width: 80%;
  border-color: #04286E;
}
.result_btn {
  display: none;
}
.refresh_btn {
  width: 50%;
  background-color: gray;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  margin: auto;
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
.active {
  &_result {
    margin-bottom: 24px;
    padding: 36px 24px;
    background-color: #35495e;
    color: white;
    border-radius: 12px;
    padding: 36px 24px;
  }
  &_error {
    color: red;
  }
}
.result_img {
  width: 100%;
  margin-bottom: 24px;
}
.reqbtn {
  width: 50%;
  background-color: #35495e;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  margin: auto;
}
@media screen and (max-width: 480px) {
  .container {
    margin: 0 auto;
    display: inherit;
  }
  .card {
    padding: 24px;
    margin: auto;
    border-radius: 8px;
    width: 90%;
    max-width: 720px;
    min-width: 10px;
  }
}
</style>
