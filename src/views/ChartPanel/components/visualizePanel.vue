<template>
    <div class="container">
        <div id="chart"><component :is="chartType" :data="chartData"></component></div>
        <div>
            <el-form label-position="top">
                <el-form-item label="图表类型">
                    <el-radio-group v-model="chartType">
                        <el-radio-button label="BarChart">表格</el-radio-button>
                        <el-radio-button label="LineChart">柱状图</el-radio-button>
                        <el-radio-button label="Table">折线图</el-radio-button>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            
        </div>
        
    </div>
</template>
<script>
    import BarChart from '../../../widgets/BarChart.vue'
    import LineChart from '../../../widgets/LineChart.vue'
    import ChartTypeList from '../../../utils/ChartTypeList'
    export default {
        name: 'visualizePanel',
        data() {
            return {chartType: 'BarChart'}
        },
        components: { BarChart, LineChart },
        props: ['data', 'schema'],
        computed: {
            chartData() {
                if(this.currentType()) {
                    return this.currentType().dataTransfer(this.data, this.schema);
                } else {
                    return [];
                }
            }
        },
        methods: {
            currentType() {
                console.log(ChartTypeList)
                return ChartTypeList.find( item=> item.type === this.chartType);
            }
        }
    }
</script>
<style type="text/css">
    .container {
        display: flex;
    }
    #chart {
        width:100%;
    }
</style>