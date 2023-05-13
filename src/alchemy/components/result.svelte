<script lang="ts">
    import Table from "../../shared/components/table.svelte";
    import { elementStore as store } from "../stores/elementStore";
    
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