<script lang="ts">
    import { elementStore } from "../stores/elementStore";
    import Table from "./table.svelte";

    const header = {
        name: 'Название',
        shortName: 'Обозначение'
    }
</script>

<Table header={header} data={$elementStore.list} />