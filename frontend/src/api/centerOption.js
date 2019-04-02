export const center_option = {
    legend: {
    },
    tooltip: {
        trigger: 'axis',
        showContent: false
    },
    dataset: {
        source: [
            ['product', '2013', '2014', '2015', '2016', '2017', '2018'],
            ['客户来电量', 60, 75, 81, 89, 93, 98],
            ['客户来访量', 30, 35, 41, 45, 47, 58],
            ['成交数量', 12, 11, 18, 21, 19, 30],
            ['实际销售量', 34, 39, 21, 43, 53, 59]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {gridIndex: 0},
    grid: {top: '55%'},
    series: [
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
                formatter: '{b}: {@2013} ({d}%)'
            },
            encode: {
                itemName: 'product',
                value: '2013',
                tooltip: '2013'
            }
        }
    ]
};