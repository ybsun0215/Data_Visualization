// 威胁数量柱状图
const ctx1 = document.getElementById('threatsByLocation').getContext('2d');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: threatData.locations,
    datasets: threatData.threats.map((t, i) => ({
      label: t.type,
      data: t.counts,
      backgroundColor: `hsl(${i * 40}, 70%, 60%)`,
      stack: 'Threats'
    }))
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Threats by Location'
      },
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  }
});

// 风险等级饼图
const ctx2 = document.getElementById('riskLevelPie').getContext('2d');
new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ["Low", "Medium", "High", "Critical"],
    datasets: [{
      data: [
        threatData.riskLevels.L,
        threatData.riskLevels.M,
        threatData.riskLevels.H,
        threatData.riskLevels.C
      ],
      backgroundColor: ["#9ae6b4", "#fbd38d", "#f56565", "#4a5568"]
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Risk Level Distribution'
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});
