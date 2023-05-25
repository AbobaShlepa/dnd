<script lang="ts">
  import Carousel from "svelte-carousel";
  import type { PotionBase } from "../types/potionBase";
  import IngredientList from "./alchemy/ingredientList.svelte";
  import RecieptHelper from "./alchemy/recieptHelper.svelte";
  import BaseSelector from "./baseSelector.svelte";
  import ContainerSelector from "./containerSelector.svelte";
  import Formula from "./formula.svelte";
  import Legend from "./legend.svelte";
  import PotionContainer from "./potionContainer.svelte";
  import Receipt from "./receipt.svelte";
  import Result from "./result.svelte";
  import SlidingMenu from "./shared/slidingMenu.svelte";
  import { elementStore } from "../stores/elementStore";

  let base: PotionBase;
</script>

<h1>Добро пожаловать в алхимическую лабораторию имени Котофойника</h1>

<!-- <div class="modal-body row">
  <div class="col-md-auto">
    <ContainerSelector />
    <BaseSelector bind:base />
    <PotionContainer />
    <Receipt />
  </div>
  <div class="col-md-auto">
    <Result />
  </div>
  <div class="col-md-auto">
    <SlidingMenu component={Legend} text="Элементы" />
    <SlidingMenu component={IngredientList} text="Ингредиенты" />
  </div>
</div>
<div class="modal-body row">
  <div class="col-md-5">
    <RecieptHelper />
  </div>
  <div class="col">
    <Formula />
  </div>
</div> -->

<div class="row">
  <div class="col centered">
    <Formula />
  </div>
</div>

<!-- <div class="row">
  <div class="col-md-4">
    <Result />
  </div>
  <div class="col-md-8">
    <RecieptHelper />
  </div>
</div> -->

{#if $elementStore.elements.length > 1}
  <Carousel>
    <Result />
    <RecieptHelper />
  </Carousel>
{/if}

<style>
  .centered {
    text-align: center;
  }
</style>
