<template>
  <nav>
    <!-- <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code">
        {{ lang.text }}
      </option>
    </select>
  </div> -->
    <select @change="updateLanguage()" v-model="$i18n.locale">
      <option
        v-for="(locale, i) in locales"
        :key="`locale-${i}`"
        :value="locale"
      >
        {{ locale.toUpperCase() }}
      </option>
    </select>
  </nav>
  <div class="hello">
    <div class="appBar">APP BAR</div>
    <div class="main">
      <div class="vrtcl">
        <div>
          <div class="dashboard">
            <ul>
              <li>
                <router-link to="/">{{ $t("message.dashboard") }}</router-link>
              </li>
              <li>
                <router-link to="/about">{{ $t("message.todos") }}</router-link>
              </li>
              <li>
                <router-link to="/weather">{{
                  $t("message.weather")
                }}</router-link>
              </li>
              <li>
                <router-link to="/">{{ $t("message.profile") }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <hr class="vertical" />
        <div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <!-- <router-view /> -->
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      locales: ["en", "fa"],
    };
  },
  methods: {
    updateLanguage() {
      sessionStorage.setItem("locale", this.$i18n.locale);
    },
  },
  mounted() {
    if (sessionStorage.getItem("locale")) {
      this.$i18n.locale = sessionStorage.getItem("locale");
    } else {
      sessionStorage.setItem("locale", this.$i18n.locale);
    }
    if (this.locales === "en") {
      alert("hello");
      console.log(locales);
    }
  },
};
</script>

<style lang="scss" scoped>
.hello {
  height: auto;
  margin: auto;
  padding: 2rem;
  width: 80%;

  .vrtcl {
    display: flex;
  }
  .appBar {
    border: 1px solid #000;
    text-align: center;
    padding-top: 10px;
  }
  .main {
    border: 1px solid #000;
    display: flex;
    flex-wrap: wrap;

    .dashboard {
      padding-left: 1rem;
      ul > li {
        display: flex;
        margin-top: 10px;
      }
    }
    hr {
      display: inline-flex;
      border: none;
      border-left: 1px solid hsla(200, 10%, 50%, 100);
      height: 100vh;
      width: 1px;
      margin: 20px;
    }
  }
}

a {
  text-decoration: none;
  color: #2c3e50;
}
a:hover {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
