<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from './routes/Home.svelte'
  import Mint from './routes/Mint.svelte'

  export let url = "";
</script>

<main>
  <Router url="{url}">
    <div>
      <Route path="/"><Home/></Route>
      <Route path="/mint"><Mint/></Route>
    </div>
  </Router>
</main>

<style>
</style>
