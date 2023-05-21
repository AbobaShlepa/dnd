<script lang="ts">
    export let header: any;
    export let data: object[] = [];
    export let styles: string[] = [];
    export let selector = (item: any): any => item;
    export let dark = false;

    const getStyle = (index: number) => {
        if (styles.length < index) {
            return '';
        }

        return styles[index];
    }
</script>

{#if header && data}
    <table class="table table-hover table-fit {dark ? 'table-dark' : ''}">
        <thead class="thead-dark">
            {#each Object.values(header) as value}
                <th>{value}</th>
            {/each}
        </thead>
        <tbody>
            {#each Object.values(data) as row}
                <tr>
                    {#each Object.values(row) as cell, index}
                        <td class={getStyle(index)}>{selector(cell)}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
{/if}

<style>
    table.table-fit {
        width: auto !important;
        table-layout: auto !important;
    }
    table.table-fit thead th,
    table.table-fit tfoot th {
        width: auto !important;
    }
    table.table-fit tbody td,
    table.table-fit tfoot td {
        width: auto !important;
    }
</style>
