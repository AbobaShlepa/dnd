<script lang="ts">
  import { elementStore as store } from "../stores/elementStore";
  import Table from "./table.svelte";

  const header = {
    first: "Положительный эффект",
    second: "Отрицительный эффект",
  };

  const styles = ["table-success", "table-danger"];
</script>

{#if $store.effects.length > 0}
  <div style="max-width: 80%;">
    <Table {header} data={$store.effects} {styles} />
  </div>
{/if}
