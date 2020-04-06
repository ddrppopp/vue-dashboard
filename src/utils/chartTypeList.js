function dataTransfer(data, schema) {
    console.log('***************')
    console.log(data)
    console.log(schema)
    const chartData = []
    for(const col of schema) {
        if(col.Axis === "Dimension") {
            if(!chartData[0]) {
                chartData[0] = [];
                data.forEach( (item, index) => {
                    chartData[index+1] = [];
                    chartData[index+1][0] = item[col.Column.toLowerCase()];
                })
            } else {
                data.forEach( (item, index) => {
                    chartData[0][index+1] = item[col.Column.toLowerCase()];
                })
            }
        } else if(col.Axis === "Calculution") {
            
        }
    }
    data.forEach( (item, index) => {
        for(const key in item) {
            let x = schema.find( col => col.Column.toLowerCase() === key)
            if(x && x.Axis === 'Dimension') {
                if(!chartData[0]) {
                    
                }
            }
        }
    });
    console.log(chartData)
    return [
        ['name',''],
        [1,10],
        [2,20],
        [3,30]
        ]
}
const chartTypeList = [
    {
        name: '表格',
        componentName: 'Table',
        type: 'table',
        dataTransfer
    },
    {
        name: '柱状图',
        componentName: 'BarChart',
        type: 'BarChart',
        dataTransfer
    },
    {
        name: '直线图',
        componentName: 'LineChart',
        type: 'LineChart',
        dataTransfer
    }
]
export default chartTypeList