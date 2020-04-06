<template>
    <v-chart :options="options"></v-chart>
</template>
<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/bar'
    export default {
        name: 'barChart',
        components: {
            'v-chart': ECharts
        },
        props: ['data'],
        data() {
            function randomize () {
                return [0, 0, 0].map(v => {
                  return Math.round(300 + Math.random() * 700) / 10
                })};
            return {
                options: {
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: this.data
                    },
                    // Declare X axis, which is a category axis, mapping
                    // to the first column by default.
                    xAxis: {type: 'category'},
                    // Declare Y axis, which is a value axis.
                    yAxis: {},
                    // Declare several series, each of them mapped to a
                    // column of the dataset by default.
                    series: [{ type: 'bar' }]
                  }
            }
        }
    }
</script>