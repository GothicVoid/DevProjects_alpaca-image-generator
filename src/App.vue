<template>
  <div>
    <h1>ALPACA GENERATOR</h1>
    <main>
      <section class="main-content">
        <div class="alpaca">
          <img v-for="(part, index) in alpaca" :key="index" :src="part.src" />
        </div>
        <button class="btn-random">Random</button>
        <button class="btn-download">Download</button>
      </section>
      <section class="config">
        <h2>ACCESSORIZE THE ALPACA'S</h2>
        <h2>STYLE</h2>
      </section>
    </main>
  </div>
</template>

<script>
import {
  BACKGROUNDS,
  EARS,
  LEG,
  NECK,
  NOSE,
  MOUTH,
  HAIR,
  EYES,
  ACCESSORIES,
} from './scripts/constant/img-data';

export default {
  name: 'App',
  data() {
    return {
      config: [
        { part: 'background', style: 0 },
        { part: 'ears', style: 0 },
        { part: 'leg', style: 0 },
        { part: 'neck', style: 0 },
        { part: 'mouth', style: 0 },
        { part: 'hair', style: 0 },
        { part: 'eyes', style: 0 },
        { part: 'accessory', style: 0 },
      ],
    };
  },
  computed: {
    alpaca() {
      return [
        BACKGROUNDS[this.config[0].style],
        EARS[this.config[1].style],
        LEG[this.config[2].style],
        NECK[this.config[3].style],
        NOSE[0],
        MOUTH[this.config[4].style],
        HAIR[this.config[5].style],
        EYES[this.config[6].style],
        ACCESSORIES[this.config[7].style],
      ];
    },
  },
};
</script>

<style>
h1 {
  width: max-content;
  margin: 0.1rem 0.7rem;
  font-size: 0.9rem;
}

main {
  display: flex;
  flex-wrap: wrap;
}

section {
  flex: 0 0 auto;
  width: 7.2rem;
  margin: 0.2rem 0.7rem;
  outline: 0.05rem solid #000;
}

.main-content {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);
}

.alpaca {
  position: relative;
  grid-column: 1 / span 2;
  width: 7.2rem;
  height: 7.2rem;
  margin-bottom: 0.6rem;
}

.alpaca img {
  position: absolute;
  top: 0;
  left: 0;
  width: 7.2rem;
  height: 7.2rem;
}

button {
  width: 3.4rem;
  height: 0.8rem;
  border: none;
  border-radius: 0.1rem;
}

.btn-random {
  justify-self: left;
}

.btn-download {
  justify-self: right;
}

h2 {
  margin: 0 0 0.2rem;
  font-size: 0.46rem;
  line-height: 1;
}

/* @media screen and (max-width: 1720px) { */
@media screen and (max-width: 860px) {
  /* 缩小一半方便调试 */
  h1 {
    font-size: 0.66rem;
  }

  main {
    width: 7.6rem;
  }
}
</style>
