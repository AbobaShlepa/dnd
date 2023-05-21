<script lang="ts">
  import { calculate } from "../../services/alchemy/recieptFactory";
  import { elementStore } from "../../stores/elementStore";
  import { ingredientStore as store } from "../../stores/ingredientStore";
  import type { Ingredient } from "../../types/alchemy/ingredient";
    import { AlchemicState } from "../../types/elements/alchemicState";
  import Table from "../table.svelte";

  const groupBy = <T>(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => string
  ) =>
    array.reduce((acc, value, index, array) => {
      (acc[predicate(value, index, array)] ||= []).push(value);
      return acc;
    }, {} as { [key: string]: T[] });

  function display(item: Ingredient): string {
    return item.name;
  }

  function getKeyName(state: AlchemicState): string {
    if (state & AlchemicState.Nigredo) {
      return 'Нигредо'
    }
    else if (state & AlchemicState.Rubedo) {
      return 'Рубедо'
    }
    else if (state & AlchemicState.Albedo) {
      return 'Альбедо'
    }

    return '';
  }

  $: reciept = $store && [...calculate($elementStore.elements, null)];
  $: grouped = groupBy(reciept, (x) => x[0].state.toString());
  $: header = $elementStore.elements.map((x) => x.name);
</script>

{#if $elementStore.elements.length > 1}
  <p>Возможные рецепты:</p>
  {#each Object.keys(grouped) as key}
    {getKeyName(key)}
    <Table {header} data={grouped[key]} selector={display} />
  {/each}
{/if}
