<script lang="ts">
    import { containerStore } from "../stores/containerStore";
    import { elementStore } from "../stores/elementStore";

    const regex : RegExp = /[rhvakces]/i;

    let formula: string = '';

    function handle(event: any) {
        const input: string = event?.target?.value as string;
        if (!regex.test(input))
        {
            event.target.value = input.slice(0, -1);
        }
       
        elementStore.updateElements(input);
    }   
</script>

<h6>Алхимическая формула</h6>
<input type="text" value={formula} on:input={handle} pattern="[rRhHvVaAKkCcEeSs]" maxlength="{$containerStore.selected.maxCapacity}">