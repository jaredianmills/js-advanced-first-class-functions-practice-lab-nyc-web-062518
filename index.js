function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  const filteredDrivers = drivers.filter(function(driver) {return hometown === driver.hometown;});
  return logDriverNames(filteredDrivers);
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a, b) {return a.revenue - b.revenue});
}

function driversByName(drivers) {
  return drivers.slice(0).sort(function(a, b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  let total = 0;
  return drivers.reduce(function(total, driver) {
    return total + driver.revenue;
  }, total)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
