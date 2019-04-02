export const lineOption = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[{ name:'邮件营销', textStyle:{ color: 'rgba(255,100,155,1)' }}, { name: '联盟广告', textStyle: { color: 'rgba(5,188,51,1)'}},
        { name: '视频广告', textStyle: { color: 'rgba(155,180,255,1)'}},
        { name:'直接访问', textStyle:{ color: 'rgba(155,100,155,1)' }}, { name: '搜索引擎', textStyle: { color: 'rgba(155,190,155,1)'}} ],
        width: '80%',
        textStyle: {
          color: '#fca'
        }
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        axisLine:{
          lineStyle:{
            color: 'rgba(155,100,155,1)'
          }
        }
    },
    yAxis: {
        type: 'value',
        axisLine:{
          lineStyle:{
            color: '#cad'
          }
        }
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210],
            lineStyle: {
                color: {
                    x: .6,
                    y: .7,
                    x2: .8,
                    y2: .9,
                    colorStops: [{
                        offset: .2, color: 'rgba(255,100,155,.6)' // 0% 处的颜色
                    }, {
                        offset: 0.4, color: 'rgba(255,100,155,.7)' // 100% 处的颜色
                    }, {
                        offset: 0.6, color: 'rgba(255,100,155,.8)' // 100% 处的颜色
                    }, {
                        offset: .8, color: 'rgba(255,100,155,.7)' // 100% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(255,100,155,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310],
            lineStyle: {
                color: {
                    x: .6,
                    y: .7,
                    x2: .8,
                    y2: .9,
                    colorStops: [{
                        offset: .2, color: 'rgba(5,188,51,.6)' // 0% 处的颜色
                    }, {
                        offset: .4, color: 'rgba(5,188,51,.7)' // 100% 处的颜色
                    }, {
                        offset: .6, color: 'rgba(5,188,51,.8)' // 100% 处的颜色
                    }, {
                        offset: .8, color: 'rgba(5,188,51,.9)' // 100% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(5,188,51,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410],
            lineStyle: {
                color: {
                    x: .6,
                    y: .7,
                    x2: .8,
                    y2: .9,
                    colorStops: [{
                        offset: 0.2, color: 'rgba(155,180,255,.6)' // 100% 处的颜色
                    }, {
                        offset: 0.4, color: 'rgba(155,180,255,.7)' // 100% 处的颜色
                    }, {
                        offset: 0.6, color: 'rgba(155,180,255,.8)' // 100% 处的颜色
                    }, {
                        offset: 0.8, color: 'rgba(155,180,255,.9)' // 100% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(155,180,255,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320],
            lineStyle: {
                color: {
                    x: .6,
                    y: .7,
                    x2: .8,
                    y2: .9,
                    colorStops: [{
                        offset: 0.2, color: 'rgba(155,100,155,.6)' // 0% 处的颜色
                    },{
                        offset: 0.4, color: 'rgba(155,100,155,.7)' // 0% 处的颜色
                    }, {
                        offset: 0.6, color: 'rgba(155,100,155,.8)' // 100% 处的颜色
                    }, {
                        offset: 0.8, color: 'rgba(155,100,155,.9)' // 100% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(155,100,155,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320],
            lineStyle: {
                color: {
                    x: .6,
                    y: .7,
                    x2: .8,
                    y2: .9,
                    colorStops: [{
                        offset: .2, color: 'rgba(155,190,155,.7)' // 0% 处的颜色
                    }, {
                        offset: 0.4, color: 'rgba(155,190,155,.7)' // 100% 处的颜色
                    }, {
                        offset: 0.6, color: 'rgba(155,190,155,.8)' // 100% 处的颜色
                    }, {
                        offset: 0.8, color: 'rgba(155,190,155,.9)' // 100% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(155,190,155,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }
    ]
  }
  export const cylinderOption = {
    angleAxis: {
        type: 'category',
        data: [{value:'周一',textStyle:{color: 'rgba(255,100,155,1)'}},
        {value:'周二',textStyle:{color: 'rgba(255,100,155,1)'}},{value:'周三',textStyle:{color: 'rgba(255,100,155,1)'}},
        {value:'周四',textStyle:{color: 'rgba(255,100,155,1)'}},{value:'周五',textStyle:{color: 'rgba(255,100,155,1)'}},
        {value:'周六',textStyle:{color: 'rgba(255,100,155,1)'}},{value:'周日',textStyle:{color: 'rgba(255,100,155,1)'}}],
        z: 0
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: '访问量',
        stack: 'a',
        color: 'rgba(155,180,255,1)'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: '销售量',
        stack: 'a',
        color: 'rgba(155,190,155,1)'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: '来访数',
        stack: 'a',
        color: 'rgba(155,100,155,1)'
    }],
    legend: {
        show: true,
        data: [{name:'访问量',textStyle:{color:'rgba(155,180,255,1)'}},{name:'销售量',textStyle:{color:'rgba(155,190,155,1)'}},
        {name:'来访数',textStyle:{color:'rgba(155,100,155,1)'}}]
    }
}