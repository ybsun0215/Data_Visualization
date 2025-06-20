const threatData = {
  locations: ["Cloud", "IVI", "APP", "ECU", "Network", "T-Box", "Radio", "Charging Pile"],
  threats: [
    { type: "Unauthorized accessing", counts: [57, 45, 19, 1, 6, 7, 0, 0] },
    { type: "Information leakage", counts: [53, 13, 27, 7, 1, 3, 0, 8] },
    // ... 其他类型
  ],
  riskLevels: { L: 245, M: 208, H: 66, C: 46 }
};
