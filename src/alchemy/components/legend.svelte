<script lang="ts">
    import Table from "../../shared/components/table.svelte";
    import { elementStore } from "../stores/elementStore";

    const header = {
        name: 'Название',
        shortName: 'Обозначение'
    }
</script>

<Table header={header} data={$elementStore.list} />