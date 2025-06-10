// Обработка на избора на период
document.addEventListener('DOMContentLoaded', function() {
    const timePeriodSelect = document.getElementById('time-period');
    if (timePeriodSelect) {
        timePeriodSelect.addEventListener('change', function() {
            const customRange = this.value === 'custom';
            const customDateRange = document.getElementById('custom-date-range');
            const endDateContainer = document.getElementById('end-date-container');
            
            if (customDateRange) customDateRange.style.display = customRange ? 'block' : 'none';
            if (endDateContainer) endDateContainer.style.display = customRange ? 'block' : 'none';
        });
    }

    initCharts();
});

// Примерни данни за графиките
const fireData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Fire Incidents',
        data: [15, 12, 18, 20, 25, 30, 35, 32, 28, 22, 18, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        tension: 0.1,
        fill: true
    }]
};

const incidentData = {
    labels: ['Fires', 'Traffic Accidents', 'Natural Disasters', 'Technical Failures', 'Others'],
    datasets: [{
        data: [120, 85, 30, 45, 20],
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

const teamStatusData = {
    labels: ['Available', 'On Call', 'In Maintenance'],
    datasets: [{
        data: [15, 8, 5],
        backgroundColor: [
            'rgba(40, 167, 69, 0.7)',
            'rgba(220, 53, 69, 0.7)',
            'rgba(255, 193, 7, 0.7)'
        ],
        borderColor: [
            'rgba(40, 167, 69, 1)',
            'rgba(220, 53, 69, 1)',
            'rgba(255, 193, 7, 1)'
        ],
        borderWidth: 1
    }]
};

const responseTimeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Average Response Time (min)',
        data: [8.5, 7.8, 9.2, 6.5, 7.0, 6.8],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2
    }]
};

// Инициализация на графиките
function initCharts() {
    // Месечни пожари
    const monthlyFiresCtx = document.getElementById('monthlyFiresChart');
    if (monthlyFiresCtx) {
        new Chart(monthlyFiresCtx.getContext('2d'), {
            type: 'line',
            data: fireData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Incidents'
                        }
                    }
                }
            }
        });
    }
    
    // Типове инциденти
    const incidentTypesCtx = document.getElementById('incidentTypesChart');
    if (incidentTypesCtx) {
        new Chart(incidentTypesCtx.getContext('2d'), {
            type: 'pie',
            data: incidentData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Статус на екипи
    const teamStatusCtx = document.getElementById('teamStatusChart');
    if (teamStatusCtx) {
        new Chart(teamStatusCtx.getContext('2d'), {
            type: 'doughnut',
            data: teamStatusData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    }
                }
            }
        });
    }
    
    // Време за реакция
    const responseTimeCtx = document.getElementById('responseTimeChart');
    if (responseTimeCtx) {
        new Chart(responseTimeCtx.getContext('2d'), {
            type: 'bar',
            data: responseTimeData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Avg. time: ${context.raw} min`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Time (minutes)'
                        }
                    }
                }
            }
        });
    }
}