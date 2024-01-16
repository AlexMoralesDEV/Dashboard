const sidebar = document.querySelector('#sidebar');
let sidebarOpen = false;

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    } else {

    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}

let options = {
    series: [{
        data: [100, 300, 200, 50, 500]
    }],
    chart: {
        type: 'bar',
        height: 350,
        background: 'transparent',
        toolbar: {
            show: false
        }
    },
    colors: [
        "#2662ff",
        "#d50000",
        "#2e7d32",
        "#ff6d80",
        "#583cb3",
    ],
    theme: {
        mode: 'dark',
        palette: 'palette1',
        monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1
    },
    xaxis: {
        categories: ['Notebook', 'Ps5', 'Iphone', 'Tesla', 'One Piece'],
    }
};

let localdoGraficodeBarras = document.querySelector("#bar-chart");
let chart = new ApexCharts(localdoGraficodeBarras, options);
chart.render();

let options2 = {
    series: [{
        data: [100, 300, 200, 50, 500]
    }],
    chart: {
        type: 'area',
        height: 350,
        background: 'transparent',
        toolbar: {
            show: false
        }
    },
    colors: [
        "#2662ff",
        "#d50000",
        "#2e7d32",
        "#ff6d80",
        "#583cb3",
    ],
    theme: {
        mode: 'dark',
        palette: 'palette1',
        monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1
    },
    xaxis: {
        categories: ['Notebook', 'Ps5', 'Iphone', 'Tesla', 'One Piece'],
    }
};

let localdoGraficodeArea = document.querySelector("#area-chart");
let chart2 = new ApexCharts(localdoGraficodeArea, options2);
chart2.render();