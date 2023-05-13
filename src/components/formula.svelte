<script lang="ts">
    import { containerStore } from "../stores/containerStore";
    import { elementStore } from "../stores/elementStore";

    let formula: string = '';

    function handle(event: any) {
        const input: string = event?.target?.value as string;
       
        elementStore.updateElements(input);
    }   
</script>

<h6>Алхимическая формула</h6>
<input type="text" value={formula} on:input={handle} pattern="[rRhHvVaAKkCcEeSs]" maxlength="{$containerStore.selected.maxCapacity}">