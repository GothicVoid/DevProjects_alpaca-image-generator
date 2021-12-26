<template>
  <div>
    <h1>ALPACA GENERATOR</h1>
    <main>
      <section class="main-content">
        <div class="alpaca"></div>
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
export default {
  name: 'App',
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
  grid-column: 1 / span 2;
  width: 7.2rem;
  height: 7.2rem;
  margin-bottom: 0.6rem;
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
