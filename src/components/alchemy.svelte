<script lang="ts">
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

    let base: PotionBase;
</script>

<h1>Добро пожаловать в алхимическую лабораторию имени Котофойника</h1>

<div class="modal-body row">
    <div class="col-md-5">
        <ContainerSelector />
        <BaseSelector bind:base />
        <PotionContainer />
        <Receipt />
        <Formula />
    </div>
    <div class="col-md-5">
        <Result />
    </div>
    <div class="col-md-2">
        <Legend />
    </div>
</div>
<div class="modal-body row">
    <div class="col-md-5">
        <RecieptHelper />
        <IngredientList />
    </div>
</div>
