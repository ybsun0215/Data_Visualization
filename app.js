// 柱状图：各位置的威胁数量
const ctx1 = document.getElementById('threatsByLocation').getContext('2d');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: threatData.locations,
    datasets: threatData.threats.map((t, i) => ({
      label: t.type,
      data: t.counts,
      backgroundColor: `hsl(${i * 30}, 70%, 60%)`
    }))
  },
  options: {
    plugins: { title: { display: true, text: 'Threats by Location' } },
    responsive: true,
    stacked: true
  }
});

// 饼图：风险等级分布
const ctx2 = document.getElementById('riskLevelPie').getContext('2d');
new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ["Low", "Medium", "High", "Critical"],
    datasets: [{
      data: [threatData.riskLevels.L, threatData.riskLevels.M, threatData.riskLevels.H, threatData.riskLevels.C],
      backgroundColor: ["#9ae6b4", "#fbd38d", "#f56565", "#4a5568"]
    }]
  },
  options: {
    plugins: { title: { display: true, text: 'Risk Level Distribution' } }
  }
});
