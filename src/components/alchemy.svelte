<script lang="ts">
  import Carousel from "svelte-carousel";
  import type { PotionBase } from "../types/potionBase";
  import RecieptHelper from "./alchemy/recieptHelper.svelte";
  import Formula from "./formula.svelte";
  import Result from "./result.svelte";
  import { elementStore } from "../stores/elementStore";

  let base: PotionBase;
</script>

<h1>Добро пожаловать в алхимическую лабораторию имени Котофойника</h1>
<div class="row">
  <div class="col centered">
    <Formula />
  </div>
</div>

{#if $elementStore.elements.length > 1}
  <Carousel>
    <Result />
    <RecieptHelper />
  </Carousel>
{/if}
