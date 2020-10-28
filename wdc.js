< len; i++) {
tableData.push({
"date": feat[i]["Month"]["Year"],
"trips": feat[i]["Trips Per Day"],
"farebox": feat[i] ["Farebox Per Day"],
"uniquemed": feat[i] ["Unique Medallions"],
"uniquedrivers": feat[i] ["Unique Drivers"],
"medperday": feat[i] ["Medallions Per Day"],
"avg1": feat[i] ["Avg Days Medallions on Road"],
"avg2": feat[i] ["Avg Hours Per Day Per Medallion"] ,
"avg3": feat[i] ["Avg Days Drivers on Road"],
"avg4": feat[i] ["Avg Hours Per Day Per Driver"],
"avg5": feat[i] ["Avg Minutes Per Trip"],
"cc": feat[i] ["Percent of Trips Paid with Credit Card"]
});
}
table.appendRows(tableData);
doneCallback();
});
};
tableau.registerConnector(myConnector);
$(document).ready(function () {
$("#submitButton").click(function () {
tableau.connectionName = "taxi";
tableau.submit();
});
});})();