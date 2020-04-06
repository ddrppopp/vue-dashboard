<template>
    <div>
        <el-form label-position="top">
            <el-form-item label="数据源" >
                <el-select v-model="selected" @change="dataSrcChange">
                    <el-option v-for="(item, index) in dataSourceList" :key="index" :value="item.value" :label="item.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="字段">
                <draggable v-model="schemes" :move="handleMove" :group="{name: 'col', put: false, pull: 'clone'}">
                    <transition-group>
                        <div v-for="item in schemes" :key="item.Column">{{item.Column}}</div>
                    </transition-group>
                </draggable>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import { tables } from '../../../mock/dataSource'
    import { exeSql } from '../../../api/exeSql'
    import draggable from 'vuedraggable'
    export default {
        name: 'data-panel',
        components: {draggable},
        data() {
            return {
                selected: '',
                dataSourceList: [],
                schemes: []
            }
        },
        props: {
            dimensions: {type: Array}
        },
        methods: {
            initDataPanel(selected) {
                this.selected = selected;
            },
            handleMove(evt, y) {
                console.log(evt.draggedContext.element)
                if(this.dimensions.find( item => evt.draggedContext.element === item )) {
                    return false
                } else {
                    return true;
                }
            },
            dataSrcChange() {
                this.$emit('change', this.selected);
                this.fetchSchem();
            },
            fetchSchem() {
                if(!this.selected) {
                    this.schemes = [];
                } else {
                    exeSql(`desc ${this.selected}`).then( (resp => {
                        let schemeArray = resp.data.data;
                        console.log(schemeArray)
                        this.schemes = schemeArray.map( (item, index) => {
                            return {
                                Id: index,
                                Type: item.Type,
                                Column: item.Field
                            }
                        });
                    }));
                }
            }
        },
        created() {
            this.dataSourceList = tables
        },
        updated() {
            console.log(this.list)
        }
    }
</script>