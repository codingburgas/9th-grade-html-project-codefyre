// Initialize charts d
document.addEventListener('DOMContentLoaded', function() {
    const timePeriodSelect = document.getElementById('time-period');
    if (timePeriodSelect) {
        timePeriodSelect.addEventListener('change', function() {
            const showCustom = this.value === 'custom';
            document.getElementById('custom-date-range').style.display = 
                showCustom ? 'block' : 'none';
            document.getElementById('end-date-container').style.display = 
                showCustom ? 'block' : 'none';
        });
    }

    // Chart data configurations
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

    // Initialize all charts
    initChart('monthlyFiresChart', 'line', fireData, {
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Number of Incidents' }
            }
        }
    });

    initChart('incidentTypesChart', 'pie', incidentData, {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percent = Math.round((context.raw / total) * 100);
                        return `${context.label}: ${context.raw} (${percent}%)`;
                    }
                }
            }
        }
    });

    initChart('teamStatusChart', 'doughnut', teamStatusData);

    initChart('responseTimeChart', 'bar', responseTimeData, {
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Time (minutes)' }
            }
        }
    });
});

// chart initialization function
function initChart(canvasId, type, data, customOptions = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    const defaultOptions = {
        responsive: true,
        plugins: {
            legend: { position: type === 'pie' || type === 'doughnut' ? 'right' : 'top' }
        }
    };

    new Chart(ctx.getContext('2d'), {
        type: type,
        data: data,
        options: { ...defaultOptions, ...customOptions }
    });
}