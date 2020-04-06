<template>
    <div>
        <div class="chart-nav">
            <span>
                <span @back="goBack">
                    <i class="el-icon-back"></i>返回
                </span>
                <span>创建图表</span>
                <el-button @click="showAllChart" type="text">全部图表</el-button>
            </span>
            <span>
                <el-button type="primary">保存</el-button>
                <el-button type="primary"><i class="el-icon-download"></i></el-button>
            </span>
        </div>
        <div class="app-container">
            <el-card id="data-panel">
                <data-panel :dimensions="dimensionList" ref="dataPanel" @change="handleDataSrcChange"></data-panel>
            </el-card>
            <el-card id="visualize-panel">
                    <div id="chart-panel">
                            <div class="form-wrap">
                                <el-form>
                                    <el-form-item label="维度">
                                        <draggable class="draggable-wrapper" v-model="dimensionList" :group="{name: 'col', put: true, pull: true}" @change="handleDimensionListChange">
                                            <el-tag v-for="item in dimensionList" :key="item.Column" closable @close="handleCloseDimension(item.Id)">{{item.Column}}</el-tag>
                                        </draggable>
                                    </el-form-item>
                                    <el-form-item label="数值">
                                        <draggable class="draggable-wrapper" v-model="calculutionList" :group="{name: 'col', put: true, pull: true}" @change="handleCalculutionListChange">
                                            <el-tag v-for="item in calculutionList" :key="item.Column" closable @close="handleCloseField(item.Id)">{{item.Column}}</el-tag>
                                        </draggable>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div>
                                <el-form label-position="top">
                                        <el-form-item label="图表名称">
                                            <el-input type="text" placeholder="未命名"/>
                                        </el-form-item>
                                        <el-form-item label="图表描述">
                                            <el-input type="text" placeholder="请输入图表描述"/>
                                        </el-form-item>
                                </el-form>
                            </div>
                        </div>
                        <div class="panel-container">
                                <visualize-panel :data="result" :schema="schema" :chartType="currentType"></visualize-panel>
                            </div>
            </el-card>
            
            
        </div>       
    </div>
</template>
<script>
    import dataPanel from './components/dataPanel.vue'
    import draggable from 'vuedraggable'
    import { buildSqlSentence } from '../../utils/buildSentence'
    import { exeSql } from '../../api/exeSql'
    import visualizePanel from './components/visualizePanel.vue'
    export default {
        data() {
            return {
                dimensionList: [],
                calculutionList:[],
                filterStr: undefined,
                limit: 200,
                orderByStrs: [],
                dataSrc: undefined,
                result: [],
                currentType: "Table"
            }
        },
        components: {dataPanel, draggable, 'visualize-panel':visualizePanel},
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            showAllChart() {

            },
            handleCloseDimension(index) {
                this.dimensionList.splice(index, 1)
            },
            handleCloseField(index) {
                this.fieldList.splice(index, 1)
            },
            handleDataSrcChange(value) {
                this.dataSrc = value;
            },
            handleDimensionListChange(event) {
                if(event.added) {
                    event.added.element.Axis = "Dimension"
                }
            },
            handleCalculutionListChange(event) {
                event.added.element.Axis = "Calculution"
            }
        },
        computed: {
            sqlSentence() {
                return buildSqlSentence({
                    dataSrc: this.dataSrc,
                    selectedDimension: this.dimensionList,
                    selectedCalcul: this.calculutionList,
                    filterStr: this.filterStr,
                    limit: this.limit,
                    orderByStrs: this.orderByStrs}
                )
            },
            schema() {
                return this.dimensionList.concat(this.calculutionList);
            }
        },
        watch: {
            sqlSentence: function(newValue) {
                    exeSql(newValue).then( resp => {
                        this.result = resp.data.data;
                    });
                
            },
            '$route.params.id': {
                immediate: true,
                handler() {
                    if(this.$route.params.id === "create") {
                        this.dataSrc = "a";
                        this.$nextTick(() => {
                            this.$refs.dataPanel.initDataPanel(this.dataSrc)
                          })
                    }
                }
            }
        }
    }
</script>
<style type="text/css">
    .chart-nav {
        display: flex;
        justify-content: space-between;
        padding-top: 1px;
    }
    .app-container {
        display: flex;
    }
    #data-panel {
        width: 20%;
    }
    #visualize-panel {
        width: 80%;
    }
    #chart-panel {
        width: 100%;
        display: flex;
    }
    .form-wrap {
        width: 100%;
    }
    .draggable-wrapper {
        min-height: 30px;
        border-bottom: 1px solid #dad7d7;
    }
    .panel-container {
    }
</style>