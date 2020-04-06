<template>
    <div>
        <dashboard-list></dashboard-list>
    </div>
</template>
<script>
    import DashboardList from  './components/dashboardList.vue'
    export default {
        name: 'dashboard',
        components: {
            'dashboard-list': DashboardList
        }
    }
</script>