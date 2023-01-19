module.exports = {
  filter: {
    category: (activeAlerts, category) => {
      let data = { ...activeAlerts };
      data.activeAlerts = activeAlerts.activeAlerts.filter((el) => el.category === category)
      return data;
    },
    status: (activeAlerts, status) => {
      let data = { ...activeAlerts };
      data.activeAlerts = [];
      status.forEach((currentStatus) => {
        const filteredStatus = activeAlerts.activeAlerts.filter((el) => el.status === currentStatus);
        if (filteredStatus) {
          data.activeAlerts = [...data.activeAlerts, ...filteredStatus];
        }
      })
      return data;
    },
  }
};
