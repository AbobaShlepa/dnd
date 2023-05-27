<script lang="ts">
  import Carousel from "svelte-carousel";
  import RecieptHelper from "./alchemy/recieptHelper.svelte";
  import Formula from "./formula.svelte";
  import Result from "./result.svelte";
  import { elementStore } from "../stores/elementStore";
</script>

<h1 class="centered">Алхимическая лаборатория имени Котофойника</h1>
<div class="row">
  <div class="col centered mb-5">
    <Formula />
  </div>
</div>

{#if $elementStore.elements.length > 1}
  <Carousel>
    <Result />
    <RecieptHelper />
  </Carousel>
{/if}
