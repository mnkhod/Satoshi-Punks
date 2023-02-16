<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from './routes/Home.svelte'
  import Mint from './routes/Mint.svelte'
  import Gallery from './routes/Gallery.svelte'

  export let url = "";
</script>

<main>
  <Router url="{url}">
    <div>
      <Route path="/"><Home/></Route>
      <Route path="/mint"><Mint/></Route>
      <Route path="/gallery"><Gallery/></Route>
    </div>
  </Router>
</main>

<style>
</style>
