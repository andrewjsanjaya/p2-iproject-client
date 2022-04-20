<script></script>

<template>
  <section class="main">
    <div class="container">
      <div class="row">
        <div class="text-cover">
          <h1>my music varies on my mood or weather of the day</h1>
          <router-link
            type="button"
            class="btn btn-secondary mt-3 button-landing"
            role="button"
            to="/login"
            >Join Mwsnyc</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.main {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(@/assets/images1.jpg);
  height: 100vh;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.text-cover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}

.main h1 {
  font-family: "Lato", sans-serif;
  font-size: 4rem;
  font-weight: 700;
}

.main .btn {
  color: #000000;
  font-family: "Lato", sans-serif;
  background-color: #ffffff;
  border-radius: 10px;
}
.button-landing {
  background: #fff;
  backface-visibility: hidden;
  border-radius: 0.375rem;
  border-style: solid;
  border-width: 0.125rem;
  box-sizing: border-box;
  color: #212121;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  padding: 0.875rem 1.125rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-landing:not(:disabled):hover {
  transform: scale(1.05);
}

.button-landing:not(:disabled):hover:active {
  transform: scale(1.05) translateY(0.125rem);
}

.button-landing:focus {
  outline: 0 solid transparent;
}

.button-landing:focus:before {
  content: "";
  left: calc(-1 * 0.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1 * 0.375rem);
  transition: border-radius;
  user-select: none;
}

.button-landing:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

.button-landing:focus:not(:focus-visible):before {
  border-width: 0;
}

.button-landing:not(:disabled):active {
  transform: translateY(0.125rem);
}
</style>
