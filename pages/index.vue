<template>
  <section class="container">
    <div class="card">
      <h1>GitHub Link Card Creator</h1>
      <div class="input-wrap">
        <input v-model="name" class="textbox" type="text" placeholder="<user>/<repo>"></input>
        <div>
          {{ result }}
        </div>
      </div>
      <div @click="getCard" class="reqbtn">
        Create Card
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
      result: null
    }
  },
  methods: {
    getCard: function () {
      axios.get('http://localhost:8080/api/v1/images/' + this.name).then((res) => {
        this.result = res.data.result.value
      }).catch((err) => {
        console.error(err)
        this.result = `Faild to create link card. Please make sure ${this.name} exits`
      })
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
}
.input {
  width: 80%;
  border-color: #04286E;
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
