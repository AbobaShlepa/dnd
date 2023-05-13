<script lang="ts">
    import { elementStore as store } from "../stores/elementStore";
    import Table from "./table.svelte";
    
    const header = {
        first: 'Положительный эффект',
        second: 'Отрицительный эффект'
    }

    const styles = [
        'table-success',
        'table-danger'
    ]
</script>

<Table header={header} data={$store.effects} styles={styles}/>