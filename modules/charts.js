
const createChart = (labels, dataArr, labelText, chartType, canvas, colors) => {
    const data = {
        labels: labels,
        datasets: [{
            label: labelText,
            backgroundColor: colors,
            borderColor: 'transparent',
            data: dataArr,
        }]
    };
    
    const config = {
        type: chartType,
        data: data,
        options: {}
    };
    
    const chartOne = new Chart(
        document.getElementById(canvas),
        config
    );
}

createChart(['January','February','March','April','June','May'], [10,20,30,40,50,60], 'chart', 'pie', 'chartOne', ['red', 'blue', 'skyblue'])
createChart(['January','February','March','April','June','May'], [10,20,30,40,50,60], 'chart two', 'pie', 'chartTwo', ['red', 'blue', 'skyblue'])

