<template>
    <div class="chart">
        <h3>Donut</h3>
        <rough-donut
                :data="{
                    labels: ['North', 'South', 'East', 'West'],
                    values: [10, 5, 8, 3]
                      }"
                title="Regions"
                roughness="8"
                :colors="['red', 'orange', 'blue', 'skyblue']"
                stroke="black"
                stroke-width="3"
                fill-style="cross-hatch"
                fill-weight="3.5"
        />
    </div>
</template>

<script>
    export default {
        name: "Chart",
        component() {
        }
    }
</script>

<style scoped>
    .chart{
        min-height: 90vh;
    }
</style>
