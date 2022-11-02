// <!-- CHARTS SCRIPTS  -->
//#region
function page_6_updateDataOfCharts() {
	let latestDataForIncomeChart = [
		numeral(
			document.getElementById("page_5_adjustedBAH_Year_1").innerHTML
		).value(),
		numeral(
			document.getElementById("page_5_totalMonthlyRent_Year_1").innerHTML
		).value(),
		numeral(
			document.getElementById("page_5_totalOtherIncome_Year_1").innerHTML
		).value(),
	];
	incomeChartFeatures.data.datasets[0].data = latestDataForIncomeChart;
	incomeChartFeatures.update();

	// expenseChartFeatures
	let latestDataForExpenseChart = [
		numeral(
			document.getElementById("page_4_avgSTRExpenses_propertyManagement_Avg").value
		).value(),
		numeral(
			document.getElementById("page_4_avgSTRExpenses_operationalExpenses_Avg")
				.value
		).value(),
		numeral(
			document.getElementById("page_4_avgSTRExpenses_capitalExpenses_Avg").value
		).value(),
		numeral(
			document.getElementById("page_4_avgSTRExpenses_vacancy_Avg").value
		).value(),
		numeral(
			document.getElementById("page_5_fixedPropertyExpenses_Year_1").innerHTML
		).value(),
		numeral(
			document.getElementById("page_5_mortgagePrincipal_Year_1").innerHTML
		).value(),
		numeral(
			document.getElementById("page_5_mortgageInterest_Year_1").innerHTML
		).value(),
		numeral(
			document.getElementById("page_5_fixedPropertyExpenses_Year_1").innerHTML
		).value(),
	];
	expenseChartFeatures.data.datasets[0].data = latestDataForExpenseChart;
	expenseChartFeatures.update();

	let latestDataOfBalanceForBalanceVsEquityChart = [
		OACD_table_balance[11],
		OACD_table_balance[35],
		OACD_table_balance[59],
		OACD_table_balance[119],
		OACD_table_balance[179],
		OACD_table_balance[359],
	];
	let latestDataOfEquityForBalanceVsEquityChart = [
		OACD_table_equity[11],
		OACD_table_equity[35],
		OACD_table_equity[59],
		OACD_table_equity[119],
		OACD_table_equity[179],
		OACD_table_equity[359],
	];

	loanBalance_VS_EquityChartFeatures.data.datasets[0].data =
		latestDataOfBalanceForBalanceVsEquityChart;
	loanBalance_VS_EquityChartFeatures.data.datasets[1].data =
		latestDataOfEquityForBalanceVsEquityChart;
	loanBalance_VS_EquityChartFeatures.update();

	let latestDataOfTotalRevenue_SeasonalIncomeVsExpensesChart = [];
	for (let index = 0; index < arrayOfMonthNames.length; index++) {
		latestDataOfTotalRevenue_SeasonalIncomeVsExpensesChart.push(
			numeral(
				document.getElementById(
					"page_3_seasonalIncome_grossTotalIncome_" + arrayOfMonthNames[index]
				).value
			).value()
		);
	}
	let latestDataOfOperatingExpenses_SeasonalIncomeVsExpensesChart = [];
	for (let index = 0; index < arrayOfMonthNames.length; index++) {
		latestDataOfOperatingExpenses_SeasonalIncomeVsExpensesChart.push(
			numeral(
				document.getElementById(
					"page_3_seasonalExpenses_totalMonthlyExpenses_" + arrayOfMonthNames[index]
				).value
			).value()
		);
	}
	let latestDataOfNetMonthlyIncome_SeasonalIncomeVsExpensesChart = [];
	for (let index = 0; index < arrayOfMonthNames.length; index++) {
		latestDataOfNetMonthlyIncome_SeasonalIncomeVsExpensesChart.push(
			numeral(
				document.getElementById(
					"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_" +
						arrayOfMonthNames[index]
				).value
			).value()
		);
	}
	seasonalIncomeVsExpensesChart.data.datasets[0].data =
		latestDataOfTotalRevenue_SeasonalIncomeVsExpensesChart;
	seasonalIncomeVsExpensesChart.data.datasets[1].data =
		latestDataOfOperatingExpenses_SeasonalIncomeVsExpensesChart;
	seasonalIncomeVsExpensesChart.data.datasets[2].data =
		latestDataOfNetMonthlyIncome_SeasonalIncomeVsExpensesChart;
	seasonalIncomeVsExpensesChart.update();
}

var incomeChart = document.getElementById("incomeChart").getContext("2d");
var expensesChart = document.getElementById("expensesChart").getContext("2d");
var loanBalance_VS_EquityChart = document
	.getElementById("loanBalance_VS_EquityChart")
	.getContext("2d");

var incomeChartFeatures = new Chart(incomeChart, {
	type: "pie",
	data: {
		labels: ["BAH", "Rent", "Other"],
		datasets: [
			{
				backgroundColor: ["#f1c40f", "#e74c3c", "#34495e"],
				data: [12, 19, 3],
			},
		],
	},
});
var expenseChartFeatures = new Chart(expensesChart, {
	type: "pie",
	data: {
		labels: [
			"Management",
			"Maintenance",
			"CapEx",
			"Vacancy",
			"Insurance",
			"Principle",
			"Interest",
			"Taxes",
		],
		datasets: [
			{
				backgroundColor: [
					"#15bcdd",
					"#ff0000",
					"#02bf87",
					"#68069f",
					"#0dcde7",
					"#f7b40a",
					"#02279f",
					"#850000",
				],
				data: [28, 24, 7, 56, 23, 45, 65, 11],
			},
		],
	},
});

var loanBalance_VS_EquityChartFeatures = new Chart(loanBalance_VS_EquityChart, {
	type: "line",
	data: {
		labels: ["Year 1", "Year 3", "Year 5", "Year 10", "Year 15", "Year 30"],
		datasets: [
			{
				label: "For Balance",
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgb(255, 99, 132)",
				fill: false,
				data: [3, 2, 3, 4, 1, 4],
				yAxisID: "y",
			},
			{
				label: "For Equity",
				borderColor: "rgb(54, 162, 235)",
				backgroundColor: "rgb(54, 162, 235)",
				fill: false,
				data: [4, 5, 6, 7, 1, 8],
				yAxisID: "y1",
			},
		],
	},
	options: {
		responsive: true,
		interaction: {
			mode: "index",
			intersect: false,
		},
		stacked: false,
		plugins: {
			title: {
				display: true,
				text: "Chart.js Line Chart - Multi Axis",
			},
		},
		scales: {
			y: {
				type: "linear",
				display: true,
				position: "left",
			},
			y1: {
				type: "linear",
				display: true,
				position: "right",

				// grid line settings
				grid: {
					drawOnChartArea: false, // only want the grid lines for one axis to show up
				},
			},
		},
	},
});

let aDatasets1 = [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 20];
let aDatasets2 = [20, 30, 40, 50, 60, 20, 25, 40, 75, 50, 65, 30];
let aDatasets3 = [30, 20, 25, 65, 90, 34, 20, 100, 89, 45, 75, 40];
var ctx = document.getElementById("strSeasonalIncome_VS_ExpensesChart");
var seasonalIncomeVsExpensesChart = new Chart(ctx, {
	type: "bar",
	data: {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],

		datasets: [
			{
				label: "Total Revenue",
				fill: false,
				data: aDatasets1,
				backgroundColor: "#E91E63",
				borderColor: ["rgba(255,99,132,1)"],
				borderWidth: 1,
			},

			{
				label: "Operating Expenses",
				fill: false,
				data: aDatasets2,
				backgroundColor: "#3F51B5",
				borderColor: ["rgba(255,99,132,1)"],
				borderWidth: 1,
			},
			{
				label: "Net Monthly Income",
				data: aDatasets3,
				fill: false,
				backgroundColor: "#004D40",
				borderColor: ["rgba(255,99,132,1)"],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
		title: {
			display: true,
			text: "Nishi IT Institute",
		},
		responsive: true,

		tooltips: {
			callbacks: {
				labelColor: function (tooltipItem, chart) {
					return {
						borderColor: "rgb(255, 0, 20)",
						backgroundColor: "rgb(255,20, 0)",
					};
				},
			},
		},
		legend: {
			labels: {
				// This more specific font property overrides the global property
				fontColor: "red",
			},
		},
	},
});
function showOrHideBasicHousingAllowance(inputFromRadioBtn) {
	if (inputFromRadioBtn == "show") {
		$("#basicHousingAllowanceForm").show(500);
	} else {
		$("#basicHousingAllowanceForm").hide(1000);
	}
}
//#endregion

// <!-- PAGE 2 SCRIPTS -->
//#region
function addingDollarSignAndCommaInNumeric(elementId) {
	if (
		document.getElementById(elementId).value != "" &&
		document.getElementById(elementId).value != "$"
	) {
		let result = numeral(document.getElementById(elementId).value)._value;
		document.getElementById(elementId).value =
			"$" +
			result.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			});
	}
}

function addingPercentageSignInNumeric(elementId) {
	if (document.getElementById(elementId).value != "") {
		let result = numeral(document.getElementById(elementId).value).value();
		document.getElementById(elementId).value =
			result.toLocaleString(undefined, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}) + "%";
	}
}

function showArbitrageOrPurchaseDetails() {
	let selectedValue = document.getElementById("pg_2_strStrategy").value;
	if (selectedValue == "Purchase") {
		$("#purchaseDetailsSection").show();
		$("#arbitrageDetailsSection").hide();
	} else {
		$("#arbitrageDetailsSection").show();
		$("#purchaseDetailsSection").hide();
	}
}

function calculateEstimatedSetupCost() {
	let totalSum =
		numeral(document.getElementById("pg_2_securityDeposit").value).value() +
		numeral(document.getElementById("pg_2_furniture").value).value() +
		numeral(document.getElementById("pg_2_labor").value).value() +
		numeral(document.getElementById("pg_2_holdingCosts").value).value() +
		numeral(document.getElementById("pg_2_supplies").value).value() +
		numeral(document.getElementById("pg_2_initialClean").value).value();

	document.getElementById("pg_2_estimatedSetupCost").value =
		"$" + totalSum.toLocaleString();
}

function calculateExteriorRepairsCost() {
	let totalSum =
		numeral(document.getElementById("pg_2_roof").value).value() +
		numeral(document.getElementById("pg_2_gutterSoffit").value).value() +
		numeral(document.getElementById("pg_2_siding").value).value() +
		numeral(document.getElementById("pg_2_paint").value).value() +
		numeral(document.getElementById("pg_2_decksPorches").value).value() +
		numeral(document.getElementById("pg_2_foundation").value).value() +
		numeral(document.getElementById("pg_2_concreteDriveway").value).value() +
		numeral(document.getElementById("pg_2_garage").value).value() +
		numeral(document.getElementById("pg_2_landscaping").value).value() +
		numeral(document.getElementById("pg_2_septic").value).value() +
		numeral(document.getElementById("pg_2_windows").value).value() +
		numeral(document.getElementById("pg_2_lighting").value).value() +
		numeral(document.getElementById("pg_2_miscellaneous_1").value).value();

	document.getElementById("pg_2_exteriorRepairs").value =
		"$" + totalSum.toLocaleString();

	let totalSumForAllRepairCost =
		numeral(document.getElementById("pg_2_exteriorRepairs").value).value() +
		numeral(document.getElementById("pg_2_interiorRepairs").value).value();

	document.getElementById("pg_2_estimatedRepairCost").value =
		"$" + totalSumForAllRepairCost.toLocaleString();
}
function calculateInteriorRepairsCost() {
	let totalSum =
		numeral(document.getElementById("pg_2_demo").value).value() +
		numeral(document.getElementById("pg_2_plumbing").value).value() +
		numeral(document.getElementById("pg_2_electrical").value).value() +
		numeral(document.getElementById("pg_2_HVAC").value).value() +
		numeral(document.getElementById("pg_2_farming").value).value() +
		numeral(document.getElementById("pg_2_sheetRock").value).value() +
		numeral(document.getElementById("pg_2_hardware").value).value() +
		numeral(document.getElementById("pg_2_paint").value).value() +
		numeral(document.getElementById("pg_2_cabinets").value).value() +
		numeral(document.getElementById("pg_2_flooring").value).value() +
		numeral(document.getElementById("pg_2_miscellaneous_2").value).value();

	document.getElementById("pg_2_interiorRepairs").value =
		"$" + totalSum.toLocaleString();

	let totalSumForAllRepairCost =
		numeral(document.getElementById("pg_2_exteriorRepairs").value).value() +
		numeral(document.getElementById("pg_2_interiorRepairs").value).value();

	document.getElementById("pg_2_estimatedRepairCost").value =
		"$" + totalSumForAllRepairCost.toLocaleString();
}
function calculateClosingCost() {
	let totalSum =
		numeral(
			document.getElementById("pg_2_prepaidHazardInsurance").value
		).value() +
		numeral(document.getElementById("pg_2_prepaidFloodInsurance").value).value() +
		numeral(document.getElementById("pg_2_prepaidPropertyTaxes").value).value() +
		numeral(document.getElementById("pg_2_appraisalFee").value).value() +
		numeral(document.getElementById("pg_2_titleAndEscrowFees").value).value() +
		numeral(document.getElementById("pg_2_inspectionFee").value).value() +
		numeral(document.getElementById("pg_2_attorneyFees").value).value() +
		numeral(document.getElementById("pg_2_recordingFees").value).value() +
		numeral(document.getElementById("pg_2_annualAssessmentFees").value).value() +
		numeral(document.getElementById("pg_2_otherFees").value).value() +
		numeral(document.getElementById("pg_2_sellerCredits").value).value() +
		numeral(document.getElementById("pg_2_earnestCredits").value).value();

	document.getElementById("pg_2_closingCosts").value =
		"$" + totalSum.toLocaleString();
}
function calculateBaseLoanAmountAndDownPayment() {
	// Base Loan Amount
	let result =
		numeral(document.getElementById("pg_2_amountForFinancing").value).value() -
		numeral(document.getElementById("pg_2_amountForFinancing").value).value() *
			(numeral(document.getElementById("pg_2_downPaymentPurchase").value).value() /
				100);

	document.getElementById("pg_2_baseLoanAmount").value =
		"$" +
		result.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	// Down Payment

	result =
		numeral(document.getElementById("pg_2_amountForFinancing").value).value() *
		(numeral(document.getElementById("pg_2_downPaymentPurchase").value).value() /
			100);

	document.getElementById("pg_2_baseLoanAmountdownPayment").value =
		"$" +
		result.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateLoanTerm_MO() {
	let result =
		numeral(document.getElementById("pg_2_loanAmortization").value).value() * 12;

	document.getElementById("pg_2_loanTerm_MO").value = result;
}

function calculatePointsOutput() {
	let result =
		numeral(document.getElementById("pg_2_baseLoanAmount").value).value() *
		(numeral(document.getElementById("pg_2_pointsInput").value).value() / 100);

	document.getElementById("pg_2_pointsOutput").value =
		"$" + result.toLocaleString();
}

function calculateMortgageInsurance(selectedValue) {
	if (selectedValue == "FHA") {
		let result =
			numeral(document.getElementById("pg_2_baseLoanAmount").value).value() *
			0.0175;

		document.getElementById("pg_2_mortgageInsurance").value =
			"$" + result.toLocaleString();
	} else {
		document.getElementById("pg_2_mortgageInsurance").value = 0;
	}
	if (selectedValue == "VA") {
		let result =
			numeral(document.getElementById("pg_2_baseLoanAmount").value).value() *
			0.036;

		document.getElementById("pg_2_vaFundingFees").value =
			"$" + result.toLocaleString();
	} else {
		document.getElementById("pg_2_vaFundingFees").value = 0;
	}
}

function calculateTotalLenderFees() {
	debugger;
	let totalSum =
		numeral(
			document
				.getElementById("pg_2_lenderOriginationFees")
				.value.toLocaleString(undefined, {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				})
		).value() +
		numeral(
			document
				.getElementById("pg_2_pointsOutput")
				.value.toLocaleString(undefined, {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				})
		).value() +
		numeral(
			document
				.getElementById("pg_2_mortgageInsurance")
				.value.toLocaleString(undefined, {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				})
		).value() +
		numeral(
			document
				.getElementById("pg_2_vaFundingFees")
				.value.toLocaleString(undefined, {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				})
		).value() +
		numeral(
			document.getElementById("pg_2_otherFees_2").value.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			})
		).value();

	document.getElementById("pg_2_totalLenderFees").value =
		"$" +
		totalSum.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAdjustedLoanAmount(selectedValue) {
	if (selectedValue == "Yes") {
		let result =
			numeral(document.getElementById("pg_2_baseLoanAmount").value).value() +
			numeral(document.getElementById("pg_2_otherFees_2").value).value();

		document.getElementById("pg_2_adjustedLoanAmount").value =
			"$" + result.toLocaleString();
	} else {
		document.getElementById("pg_2_adjustedLoanAmount").value =
			"$" +
			numeral(document.getElementById("pg_2_otherFees_2").value)
				.value()
				.toLocaleString();
	}
}
// ________________________________________________________________ //

//#endregion

// <!-- PAGE 3 SCRIPTS -->
//#region

function showFixedPropertyExpensesCollapsable() {
	$(".fixedPropertyExpenses_Collapsable").toggle(400);
}
function showOTACommissionCollapsable() {
	$(".otaCommission_Collapsable").toggle(400);
}
function showUtilitiesCollapsable() {
	$(".utilities_Collapsable").toggle(400);
}
function showRepaiesAndMaintenanceCollapsable() {
	$(".repairsAndMaintenance_Collapsable").toggle(400);
}
function showDuesAndSubcriptionCollapsable() {
	$(".duesAndSubscription_Collapsable").toggle(400);
}

function showVariableMonthlyExpensesCollapsable() {
	$(".variableMonthlyExpenses_Collapsable").toggle(400);
}

function calculateAverageOfBookedRated_seasonalIncome() {
	let totalAvg =
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Jan").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Feb").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Mar").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Apr").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_May").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Jun").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Jul").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Aug").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Sep").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Oct").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Nov").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_Dec").value
		).value();
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalIncome_bookedRate_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfOccupancy_seasonalIncome() {
	let totalAvg =
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Jan").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Feb").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Mar").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Apr").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_May").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Jun").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Jul").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Aug").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Sep").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Oct").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Nov").value
		).value() *
			100 +
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_Dec").value
		).value() *
			100;
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalIncome_occupancy_Avg").value =
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}) + "%";
}

function calculateDaysBookedPerMonth_seasonalIncome(
	monthName,
	noOfDaysInMonth
) {
	let result =
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_" + monthName).value
		).value() * noOfDaysInMonth;
	document.getElementById(
		"page_3_seasonalIncome_daysBookedPerMonth_" + monthName
	).value =
		"$" +
		result.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateAverageOfDaysBookedPerMonth_seasonalIncome();
}

function calculateAverageOfDaysBookedPerMonth_seasonalIncome() {
	let totalAvg =
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Jan").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Feb").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Mar").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Apr").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_May").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Jun").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Jul").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Aug").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Sep").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Oct").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Nov").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Dec").value
		).value();
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalIncome_daysBookedPerMonth_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateRevPAR_seasonalIncome(monthName) {
	let result =
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_" + monthName)
				.value
		).value() *
		numeral(
			document.getElementById("page_3_seasonalIncome_occupancy_" + monthName).value
		).value();
	document.getElementById("page_3_seasonalIncome_revPAR_" + monthName).value =
		"$" + Math.round(result);

	calculateAverageOfRevPAR_seasonalIncome();
}

function calculateAverageOfRevPAR_seasonalIncome() {
	let totalAvg =
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Jan").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Feb").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Mar").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Apr").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_May").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Jun").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Jul").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Aug").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Sep").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Oct").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Nov").value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_revPAR_Dec").value
		).value();
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalIncome_revPAR_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateGrossMonthlyIncome_seasonalIncome(monthName) {
	let result =
		numeral(
			document.getElementById("page_3_seasonalIncome_bookedRate_" + monthName)
				.value
		).value() *
		numeral(
			document.getElementById(
				"page_3_seasonalIncome_daysBookedPerMonth_" + monthName
			).value
		).value();
	if (monthName == "Mar") {
		document.getElementById(
			"page_3_seasonalIncome_grossMonthlyIncome_" + monthName
		).value = "$" + result;
	} else {
		document.getElementById(
			"page_3_seasonalIncome_grossMonthlyIncome_" + monthName
		).value = "$" + Math.round(result);
	}

	calculateAverageOfGrossMonthlyIncome_seasonalIncome();
}

function calculateAverageOfGrossMonthlyIncome_seasonalIncome() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalIncome_grossMonthlyIncome_Jan",
		"page_3_seasonalIncome_grossMonthlyIncome_Feb",
		"page_3_seasonalIncome_grossMonthlyIncome_Mar",
		"page_3_seasonalIncome_grossMonthlyIncome_Apr",
		"page_3_seasonalIncome_grossMonthlyIncome_May",
		"page_3_seasonalIncome_grossMonthlyIncome_Jun",
		"page_3_seasonalIncome_grossMonthlyIncome_Jul",
		"page_3_seasonalIncome_grossMonthlyIncome_Aug",
		"page_3_seasonalIncome_grossMonthlyIncome_Sep",
		"page_3_seasonalIncome_grossMonthlyIncome_Oct",
		"page_3_seasonalIncome_grossMonthlyIncome_Nov",
		"page_3_seasonalIncome_grossMonthlyIncome_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}

	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalIncome_grossMonthlyIncome_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfMiscIncome_seasonalIncome() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalIncome_miscIncome_Jan",
		"page_3_seasonalIncome_miscIncome_Feb",
		"page_3_seasonalIncome_miscIncome_Mar",
		"page_3_seasonalIncome_miscIncome_Apr",
		"page_3_seasonalIncome_miscIncome_May",
		"page_3_seasonalIncome_miscIncome_Jun",
		"page_3_seasonalIncome_miscIncome_Jul",
		"page_3_seasonalIncome_miscIncome_Aug",
		"page_3_seasonalIncome_miscIncome_Sep",
		"page_3_seasonalIncome_miscIncome_Oct",
		"page_3_seasonalIncome_miscIncome_Nov",
		"page_3_seasonalIncome_miscIncome_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}

	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalIncome_miscIncome_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateGrossTotalIncome_seasonalIncome(monthName) {
	let result =
		numeral(
			document.getElementById(
				"page_3_seasonalIncome_grossMonthlyIncome_" + monthName
			).value
		).value() +
		numeral(
			document.getElementById("page_3_seasonalIncome_miscIncome_" + monthName)
				.value
		).value();
	document.getElementById(
		"page_3_seasonalIncome_grossTotalIncome_" + monthName
	).value =
		"$" +
		result.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateAverageOfGrossTotalIncome_seasonalIncome();
}

function calculateAverageOfGrossTotalIncome_seasonalIncome() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalIncome_grossTotalIncome_Jan",
		"page_3_seasonalIncome_grossTotalIncome_Feb",
		"page_3_seasonalIncome_grossTotalIncome_Mar",
		"page_3_seasonalIncome_grossTotalIncome_Apr",
		"page_3_seasonalIncome_grossTotalIncome_May",
		"page_3_seasonalIncome_grossTotalIncome_Jun",
		"page_3_seasonalIncome_grossTotalIncome_Jul",
		"page_3_seasonalIncome_grossTotalIncome_Aug",
		"page_3_seasonalIncome_grossTotalIncome_Sep",
		"page_3_seasonalIncome_grossTotalIncome_Oct",
		"page_3_seasonalIncome_grossTotalIncome_Nov",
		"page_3_seasonalIncome_grossTotalIncome_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}

	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalIncome_grossTotalIncome_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAllGrossIncomeYTD_whenUserChangesAnyValue() {
	calculateGrossIncomeYTD_seasonalIncome("Jan", 1);
	calculateGrossIncomeYTD_seasonalIncome("Feb", 2);
	calculateGrossIncomeYTD_seasonalIncome("Mar", 3);
	calculateGrossIncomeYTD_seasonalIncome("Apr", 4);
	calculateGrossIncomeYTD_seasonalIncome("May", 5);
	calculateGrossIncomeYTD_seasonalIncome("Jun", 6);
	calculateGrossIncomeYTD_seasonalIncome("Jul", 7);
	calculateGrossIncomeYTD_seasonalIncome("Aug", 8);
	calculateGrossIncomeYTD_seasonalIncome("Sep", 9);
	calculateGrossIncomeYTD_seasonalIncome("Oct", 10);
	calculateGrossIncomeYTD_seasonalIncome("Nov", 11);
	calculateGrossIncomeYTD_seasonalIncome("Dec", 12);
}

function calculateGrossIncomeYTD_seasonalIncome(monthName, lengthOfArray) {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalIncome_grossTotalIncome_Jan",
		"page_3_seasonalIncome_grossTotalIncome_Feb",
		"page_3_seasonalIncome_grossTotalIncome_Mar",
		"page_3_seasonalIncome_grossTotalIncome_Apr",
		"page_3_seasonalIncome_grossTotalIncome_May",
		"page_3_seasonalIncome_grossTotalIncome_Jun",
		"page_3_seasonalIncome_grossTotalIncome_Jul",
		"page_3_seasonalIncome_grossTotalIncome_Aug",
		"page_3_seasonalIncome_grossTotalIncome_Sep",
		"page_3_seasonalIncome_grossTotalIncome_Oct",
		"page_3_seasonalIncome_grossTotalIncome_Nov",
		"page_3_seasonalIncome_grossTotalIncome_Dec",
	];
	for (let index = 0; index < lengthOfArray; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	document.getElementById(
		"page_3_seasonalIncome_grossIncomeYTD_" + monthName
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfRentOrMortgage_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_rentOrMortgage_Jan",
		"page_3_seasonalExpenses_rentOrMortgage_Feb",
		"page_3_seasonalExpenses_rentOrMortgage_Mar",
		"page_3_seasonalExpenses_rentOrMortgage_Apr",
		"page_3_seasonalExpenses_rentOrMortgage_May",
		"page_3_seasonalExpenses_rentOrMortgage_Jun",
		"page_3_seasonalExpenses_rentOrMortgage_Jul",
		"page_3_seasonalExpenses_rentOrMortgage_Aug",
		"page_3_seasonalExpenses_rentOrMortgage_Sep",
		"page_3_seasonalExpenses_rentOrMortgage_Oct",
		"page_3_seasonalExpenses_rentOrMortgage_Nov",
		"page_3_seasonalExpenses_rentOrMortgage_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_rentOrMortgage_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfCOAOrHOAFees_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_hoaOrCOA_Jan",
		"page_3_seasonalExpenses_hoaOrCOA_Feb",
		"page_3_seasonalExpenses_hoaOrCOA_Mar",
		"page_3_seasonalExpenses_hoaOrCOA_Apr",
		"page_3_seasonalExpenses_hoaOrCOA_May",
		"page_3_seasonalExpenses_hoaOrCOA_Jun",
		"page_3_seasonalExpenses_hoaOrCOA_Jul",
		"page_3_seasonalExpenses_hoaOrCOA_Aug",
		"page_3_seasonalExpenses_hoaOrCOA_Sep",
		"page_3_seasonalExpenses_hoaOrCOA_Oct",
		"page_3_seasonalExpenses_hoaOrCOA_Nov",
		"page_3_seasonalExpenses_hoaOrCOA_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_hoaOrCOA_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfMortgageInsurance_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_mortgageInsurancePMI_Jan",
		"page_3_seasonalExpenses_mortgageInsurancePMI_Feb",
		"page_3_seasonalExpenses_mortgageInsurancePMI_Mar",
		"page_3_seasonalExpenses_mortgageInsurancePMI_Apr",
		"page_3_seasonalExpenses_mortgageInsurancePMI_May",
		"page_3_seasonalExpenses_mortgageInsurancePMI_Jun",
		"page_3_seasonalExpenses_mortgageInsurancePMI_Jul",
		"page_3_seasonalExpenses_mortgageInsurancePMI_Aug",
		"page_3_seasonalExpenses_mortgageInsurancePMI_Sep",
		"page_3_seasonalExpenses_mortgageInsurancePMI_Oct",
		"page_3_seasonalExpenses_mortgageInsurancePMI_Nov",
		"page_3_seasonalExpenses_mortgageInsurancePMI_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_mortgageInsurancePMI_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculatePropertyTaxes_seasonalExpenses() {
	let result = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_propertyTaxes_Jan",
		"page_3_seasonalExpenses_propertyTaxes_Feb",
		"page_3_seasonalExpenses_propertyTaxes_Mar",
		"page_3_seasonalExpenses_propertyTaxes_Apr",
		"page_3_seasonalExpenses_propertyTaxes_May",
		"page_3_seasonalExpenses_propertyTaxes_Jun",
		"page_3_seasonalExpenses_propertyTaxes_Jul",
		"page_3_seasonalExpenses_propertyTaxes_Aug",
		"page_3_seasonalExpenses_propertyTaxes_Sep",
		"page_3_seasonalExpenses_propertyTaxes_Oct",
		"page_3_seasonalExpenses_propertyTaxes_Nov",
		"page_3_seasonalExpenses_propertyTaxes_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		result =
			numeral(
				document.getElementById("page_1_annualPropertyTaxes").value
			).value() / 12;
		result = Math.round(result);
		document.getElementById(arrayOfElementsId[index]).value =
			"$" + result.toLocaleString();
	}

	calculateAverageOfPropertyTaxes_seasonalExpenses();
}

function calculateAverageOfPropertyTaxes_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_propertyTaxes_Jan",
		"page_3_seasonalExpenses_propertyTaxes_Feb",
		"page_3_seasonalExpenses_propertyTaxes_Mar",
		"page_3_seasonalExpenses_propertyTaxes_Apr",
		"page_3_seasonalExpenses_propertyTaxes_May",
		"page_3_seasonalExpenses_propertyTaxes_Jun",
		"page_3_seasonalExpenses_propertyTaxes_Jul",
		"page_3_seasonalExpenses_propertyTaxes_Aug",
		"page_3_seasonalExpenses_propertyTaxes_Sep",
		"page_3_seasonalExpenses_propertyTaxes_Oct",
		"page_3_seasonalExpenses_propertyTaxes_Nov",
		"page_3_seasonalExpenses_propertyTaxes_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_propertyTaxes_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfHomeownersInsurance_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_homeownerInsurance_Jan",
		"page_3_seasonalExpenses_homeownerInsurance_Feb",
		"page_3_seasonalExpenses_homeownerInsurance_Mar",
		"page_3_seasonalExpenses_homeownerInsurance_Apr",
		"page_3_seasonalExpenses_homeownerInsurance_May",
		"page_3_seasonalExpenses_homeownerInsurance_Jun",
		"page_3_seasonalExpenses_homeownerInsurance_Jul",
		"page_3_seasonalExpenses_homeownerInsurance_Aug",
		"page_3_seasonalExpenses_homeownerInsurance_Sep",
		"page_3_seasonalExpenses_homeownerInsurance_Oct",
		"page_3_seasonalExpenses_homeownerInsurance_Nov",
		"page_3_seasonalExpenses_homeownerInsurance_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_homeownerInsurance_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfSTRInsurance_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_strInsurance_Jan",
		"page_3_seasonalExpenses_strInsurance_Feb",
		"page_3_seasonalExpenses_strInsurance_Mar",
		"page_3_seasonalExpenses_strInsurance_Apr",
		"page_3_seasonalExpenses_strInsurance_May",
		"page_3_seasonalExpenses_strInsurance_Jun",
		"page_3_seasonalExpenses_strInsurance_Jul",
		"page_3_seasonalExpenses_strInsurance_Aug",
		"page_3_seasonalExpenses_strInsurance_Sep",
		"page_3_seasonalExpenses_strInsurance_Oct",
		"page_3_seasonalExpenses_strInsurance_Nov",
		"page_3_seasonalExpenses_strInsurance_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_strInsurance_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateFixedPropertyExpenses_seasonalExpenses(monthName) {
	let totalSum = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_rentOrMortgage_",
		"page_3_seasonalExpenses_hoaOrCOA_",
		"page_3_seasonalExpenses_mortgageInsurancePMI_",
		"page_3_seasonalExpenses_propertyTaxes_",
		"page_3_seasonalExpenses_homeownerInsurance_",
		"page_3_seasonalExpenses_strInsurance_",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalSum += numeral(
			document.getElementById(arrayOfElementsId[index] + monthName).value
		).value();
	}
	document.getElementById(
		"page_3_seasonalExpenses_fixedPropertyExpenses_" + monthName
	).value =
		"$" +
		totalSum.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateAverageOfFixedPropertyExpenses_seasonalExpenses();
}

function calculateAverageOfFixedPropertyExpenses_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_fixedPropertyExpenses_Jan",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Feb",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Mar",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Apr",
		"page_3_seasonalExpenses_fixedPropertyExpenses_May",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Jun",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Jul",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Aug",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Sep",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Oct",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Nov",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_fixedPropertyExpenses_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

// =====
function calculateAverageOfAirbnbCommission_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_airbndCommission_Jan",
		"page_3_seasonalExpenses_airbndCommission_Feb",
		"page_3_seasonalExpenses_airbndCommission_Mar",
		"page_3_seasonalExpenses_airbndCommission_Apr",
		"page_3_seasonalExpenses_airbndCommission_May",
		"page_3_seasonalExpenses_airbndCommission_Jun",
		"page_3_seasonalExpenses_airbndCommission_Jul",
		"page_3_seasonalExpenses_airbndCommission_Aug",
		"page_3_seasonalExpenses_airbndCommission_Sep",
		"page_3_seasonalExpenses_airbndCommission_Oct",
		"page_3_seasonalExpenses_airbndCommission_Nov",
		"page_3_seasonalExpenses_airbndCommission_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_airbndCommission_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfVRBOCommission_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_vrboCommission_Jan",
		"page_3_seasonalExpenses_vrboCommission_Feb",
		"page_3_seasonalExpenses_vrboCommission_Mar",
		"page_3_seasonalExpenses_vrboCommission_Apr",
		"page_3_seasonalExpenses_vrboCommission_May",
		"page_3_seasonalExpenses_vrboCommission_Jun",
		"page_3_seasonalExpenses_vrboCommission_Jul",
		"page_3_seasonalExpenses_vrboCommission_Aug",
		"page_3_seasonalExpenses_vrboCommission_Sep",
		"page_3_seasonalExpenses_vrboCommission_Oct",
		"page_3_seasonalExpenses_vrboCommission_Nov",
		"page_3_seasonalExpenses_vrboCommission_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_vrboCommission_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfBookingComCommission_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_bookingComCommission_Jan",
		"page_3_seasonalExpenses_bookingComCommission_Feb",
		"page_3_seasonalExpenses_bookingComCommission_Mar",
		"page_3_seasonalExpenses_bookingComCommission_Apr",
		"page_3_seasonalExpenses_bookingComCommission_May",
		"page_3_seasonalExpenses_bookingComCommission_Jun",
		"page_3_seasonalExpenses_bookingComCommission_Jul",
		"page_3_seasonalExpenses_bookingComCommission_Aug",
		"page_3_seasonalExpenses_bookingComCommission_Sep",
		"page_3_seasonalExpenses_bookingComCommission_Oct",
		"page_3_seasonalExpenses_bookingComCommission_Nov",
		"page_3_seasonalExpenses_bookingComCommission_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_bookingComCommission_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfOtherOTACommission_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_otherOTACommission_Jan",
		"page_3_seasonalExpenses_otherOTACommission_Feb",
		"page_3_seasonalExpenses_otherOTACommission_Mar",
		"page_3_seasonalExpenses_otherOTACommission_Apr",
		"page_3_seasonalExpenses_otherOTACommission_May",
		"page_3_seasonalExpenses_otherOTACommission_Jun",
		"page_3_seasonalExpenses_otherOTACommission_Jul",
		"page_3_seasonalExpenses_otherOTACommission_Aug",
		"page_3_seasonalExpenses_otherOTACommission_Sep",
		"page_3_seasonalExpenses_otherOTACommission_Oct",
		"page_3_seasonalExpenses_otherOTACommission_Nov",
		"page_3_seasonalExpenses_otherOTACommission_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_otherOTACommission_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateOTACommission_seasonalExpenses(monthName) {
	let totalSum = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_airbndCommission_",
		"page_3_seasonalExpenses_vrboCommission_",
		"page_3_seasonalExpenses_bookingComCommission_",
		"page_3_seasonalExpenses_otherOTACommission_",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalSum += numeral(
			document.getElementById(arrayOfElementsId[index] + monthName).value
		).value();
	}
	document.getElementById(
		"page_3_seasonalExpenses_otaCommission_" + monthName
	).value =
		"$" +
		totalSum.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateAverageOfOTACommission_seasonalExpenses();
}

function calculateAverageOfOTACommission_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_otaCommission_Jan",
		"page_3_seasonalExpenses_otaCommission_Feb",
		"page_3_seasonalExpenses_otaCommission_Mar",
		"page_3_seasonalExpenses_otaCommission_Apr",
		"page_3_seasonalExpenses_otaCommission_May",
		"page_3_seasonalExpenses_otaCommission_Jun",
		"page_3_seasonalExpenses_otaCommission_Jul",
		"page_3_seasonalExpenses_otaCommission_Aug",
		"page_3_seasonalExpenses_otaCommission_Sep",
		"page_3_seasonalExpenses_otaCommission_Oct",
		"page_3_seasonalExpenses_otaCommission_Nov",
		"page_3_seasonalExpenses_otaCommission_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_otaCommission_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

// ======
function calculateAverageOfElectricity_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_electricity_Jan",
		"page_3_seasonalExpenses_electricity_Feb",
		"page_3_seasonalExpenses_electricity_Mar",
		"page_3_seasonalExpenses_electricity_Apr",
		"page_3_seasonalExpenses_electricity_May",
		"page_3_seasonalExpenses_electricity_Jun",
		"page_3_seasonalExpenses_electricity_Jul",
		"page_3_seasonalExpenses_electricity_Aug",
		"page_3_seasonalExpenses_electricity_Sep",
		"page_3_seasonalExpenses_electricity_Oct",
		"page_3_seasonalExpenses_electricity_Nov",
		"page_3_seasonalExpenses_electricity_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_electricity_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfWaterAndSewer_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_waterAndSewer_Jan",
		"page_3_seasonalExpenses_waterAndSewer_Feb",
		"page_3_seasonalExpenses_waterAndSewer_Mar",
		"page_3_seasonalExpenses_waterAndSewer_Apr",
		"page_3_seasonalExpenses_waterAndSewer_May",
		"page_3_seasonalExpenses_waterAndSewer_Jun",
		"page_3_seasonalExpenses_waterAndSewer_Jul",
		"page_3_seasonalExpenses_waterAndSewer_Aug",
		"page_3_seasonalExpenses_waterAndSewer_Sep",
		"page_3_seasonalExpenses_waterAndSewer_Oct",
		"page_3_seasonalExpenses_waterAndSewer_Nov",
		"page_3_seasonalExpenses_waterAndSewer_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_waterAndSewer_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfGas_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_gas_Jan",
		"page_3_seasonalExpenses_gas_Feb",
		"page_3_seasonalExpenses_gas_Mar",
		"page_3_seasonalExpenses_gas_Apr",
		"page_3_seasonalExpenses_gas_May",
		"page_3_seasonalExpenses_gas_Jun",
		"page_3_seasonalExpenses_gas_Jul",
		"page_3_seasonalExpenses_gas_Aug",
		"page_3_seasonalExpenses_gas_Sep",
		"page_3_seasonalExpenses_gas_Oct",
		"page_3_seasonalExpenses_gas_Nov",
		"page_3_seasonalExpenses_gas_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_gas_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfTrash_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_trash_Jan",
		"page_3_seasonalExpenses_trash_Feb",
		"page_3_seasonalExpenses_trash_Mar",
		"page_3_seasonalExpenses_trash_Apr",
		"page_3_seasonalExpenses_trash_May",
		"page_3_seasonalExpenses_trash_Jun",
		"page_3_seasonalExpenses_trash_Jul",
		"page_3_seasonalExpenses_trash_Aug",
		"page_3_seasonalExpenses_trash_Sep",
		"page_3_seasonalExpenses_trash_Oct",
		"page_3_seasonalExpenses_trash_Nov",
		"page_3_seasonalExpenses_trash_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_trash_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfInternetOrWifi_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_internetWifi_Jan",
		"page_3_seasonalExpenses_internetWifi_Feb",
		"page_3_seasonalExpenses_internetWifi_Mar",
		"page_3_seasonalExpenses_internetWifi_Apr",
		"page_3_seasonalExpenses_internetWifi_May",
		"page_3_seasonalExpenses_internetWifi_Jun",
		"page_3_seasonalExpenses_internetWifi_Jul",
		"page_3_seasonalExpenses_internetWifi_Aug",
		"page_3_seasonalExpenses_internetWifi_Sep",
		"page_3_seasonalExpenses_internetWifi_Oct",
		"page_3_seasonalExpenses_internetWifi_Nov",
		"page_3_seasonalExpenses_internetWifi_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_internetWifi_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfOtherUtilities_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_internetWifi_Jan",
		"page_3_seasonalExpenses_internetWifi_Feb",
		"page_3_seasonalExpenses_internetWifi_Mar",
		"page_3_seasonalExpenses_internetWifi_Apr",
		"page_3_seasonalExpenses_internetWifi_May",
		"page_3_seasonalExpenses_internetWifi_Jun",
		"page_3_seasonalExpenses_internetWifi_Jul",
		"page_3_seasonalExpenses_internetWifi_Aug",
		"page_3_seasonalExpenses_internetWifi_Sep",
		"page_3_seasonalExpenses_internetWifi_Oct",
		"page_3_seasonalExpenses_internetWifi_Nov",
		"page_3_seasonalExpenses_internetWifi_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_internetWifi_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateUtilities_seasonalExpenses(monthName) {
	let totalSum = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_electricity_",
		"page_3_seasonalExpenses_waterAndSewer_",
		"page_3_seasonalExpenses_gas_",
		"page_3_seasonalExpenses_trash_",
		"page_3_seasonalExpenses_internetWifi_",
		"page_3_seasonalExpenses_otherUtilities_",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalSum += numeral(
			document.getElementById(arrayOfElementsId[index] + monthName).value
		).value();
	}
	document.getElementById(
		"page_3_seasonalExpenses_utilities_" + monthName
	).value =
		"$" +
		totalSum.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateAverageOfUtilities_seasonalExpenses();
}

function calculateAverageOfUtilities_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_utilities_Jan",
		"page_3_seasonalExpenses_utilities_Feb",
		"page_3_seasonalExpenses_utilities_Mar",
		"page_3_seasonalExpenses_utilities_Apr",
		"page_3_seasonalExpenses_utilities_May",
		"page_3_seasonalExpenses_utilities_Jun",
		"page_3_seasonalExpenses_utilities_Jul",
		"page_3_seasonalExpenses_utilities_Aug",
		"page_3_seasonalExpenses_utilities_Sep",
		"page_3_seasonalExpenses_utilities_Oct",
		"page_3_seasonalExpenses_utilities_Nov",
		"page_3_seasonalExpenses_utilities_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_utilities_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

// ======
function calculateSTROccupancyTaxes_seasonalExpenses(monthName) {
	let result =
		numeral(
			document.getElementById(
				"page_3_seasonalIncome_grossMonthlyIncome_" + monthName
			).value
		).value() * 0.12;
	document.getElementById(
		"page_3_seasonalExpenses_strOccupancyTaxes_" + monthName
	).value =
		"$" +
		result.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateAverageOfSTROccupancyTaxes_seasonalExpenses();
}

function calculateAverageOfSTROccupancyTaxes_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_strOccupancyTaxes_Jan",
		"page_3_seasonalExpenses_strOccupancyTaxes_Feb",
		"page_3_seasonalExpenses_strOccupancyTaxes_Mar",
		"page_3_seasonalExpenses_strOccupancyTaxes_Apr",
		"page_3_seasonalExpenses_strOccupancyTaxes_May",
		"page_3_seasonalExpenses_strOccupancyTaxes_Jun",
		"page_3_seasonalExpenses_strOccupancyTaxes_Jul",
		"page_3_seasonalExpenses_strOccupancyTaxes_Aug",
		"page_3_seasonalExpenses_strOccupancyTaxes_Sep",
		"page_3_seasonalExpenses_strOccupancyTaxes_Oct",
		"page_3_seasonalExpenses_strOccupancyTaxes_Nov",
		"page_3_seasonalExpenses_strOccupancyTaxes_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_strOccupancyTaxes_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

// ========
function calculateAverageOfCleaningFees_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_cleaningFees_Jan",
		"page_3_seasonalExpenses_cleaningFees_Feb",
		"page_3_seasonalExpenses_cleaningFees_Mar",
		"page_3_seasonalExpenses_cleaningFees_Apr",
		"page_3_seasonalExpenses_cleaningFees_May",
		"page_3_seasonalExpenses_cleaningFees_Jun",
		"page_3_seasonalExpenses_cleaningFees_Jul",
		"page_3_seasonalExpenses_cleaningFees_Aug",
		"page_3_seasonalExpenses_cleaningFees_Sep",
		"page_3_seasonalExpenses_cleaningFees_Oct",
		"page_3_seasonalExpenses_cleaningFees_Nov",
		"page_3_seasonalExpenses_cleaningFees_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_cleaningFees_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfLandscaping_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_landscaping_Jan",
		"page_3_seasonalExpenses_landscaping_Feb",
		"page_3_seasonalExpenses_landscaping_Mar",
		"page_3_seasonalExpenses_landscaping_Apr",
		"page_3_seasonalExpenses_landscaping_May",
		"page_3_seasonalExpenses_landscaping_Jun",
		"page_3_seasonalExpenses_landscaping_Jul",
		"page_3_seasonalExpenses_landscaping_Aug",
		"page_3_seasonalExpenses_landscaping_Sep",
		"page_3_seasonalExpenses_landscaping_Oct",
		"page_3_seasonalExpenses_landscaping_Nov",
		"page_3_seasonalExpenses_landscaping_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_landscaping_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfSnowRemoval_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_snowRemoval_Jan",
		"page_3_seasonalExpenses_snowRemoval_Feb",
		"page_3_seasonalExpenses_snowRemoval_Mar",
		"page_3_seasonalExpenses_snowRemoval_Apr",
		"page_3_seasonalExpenses_snowRemoval_May",
		"page_3_seasonalExpenses_snowRemoval_Jun",
		"page_3_seasonalExpenses_snowRemoval_Jul",
		"page_3_seasonalExpenses_snowRemoval_Aug",
		"page_3_seasonalExpenses_snowRemoval_Sep",
		"page_3_seasonalExpenses_snowRemoval_Oct",
		"page_3_seasonalExpenses_snowRemoval_Nov",
		"page_3_seasonalExpenses_snowRemoval_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_snowRemoval_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfPestControl_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_pestControl_Jan",
		"page_3_seasonalExpenses_pestControl_Feb",
		"page_3_seasonalExpenses_pestControl_Mar",
		"page_3_seasonalExpenses_pestControl_Apr",
		"page_3_seasonalExpenses_pestControl_May",
		"page_3_seasonalExpenses_pestControl_Jun",
		"page_3_seasonalExpenses_pestControl_Jul",
		"page_3_seasonalExpenses_pestControl_Aug",
		"page_3_seasonalExpenses_pestControl_Sep",
		"page_3_seasonalExpenses_pestControl_Oct",
		"page_3_seasonalExpenses_pestControl_Nov",
		"page_3_seasonalExpenses_pestControl_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_pestControl_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfPoolMaintenance_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_poolMaintenance_Jan",
		"page_3_seasonalExpenses_poolMaintenance_Feb",
		"page_3_seasonalExpenses_poolMaintenance_Mar",
		"page_3_seasonalExpenses_poolMaintenance_Apr",
		"page_3_seasonalExpenses_poolMaintenance_May",
		"page_3_seasonalExpenses_poolMaintenance_Jun",
		"page_3_seasonalExpenses_poolMaintenance_Jul",
		"page_3_seasonalExpenses_poolMaintenance_Aug",
		"page_3_seasonalExpenses_poolMaintenance_Sep",
		"page_3_seasonalExpenses_poolMaintenance_Oct",
		"page_3_seasonalExpenses_poolMaintenance_Nov",
		"page_3_seasonalExpenses_poolMaintenance_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_poolMaintenance_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfHVACMaintenance_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_hvacMaintenance_Jan",
		"page_3_seasonalExpenses_hvacMaintenance_Feb",
		"page_3_seasonalExpenses_hvacMaintenance_Mar",
		"page_3_seasonalExpenses_hvacMaintenance_Apr",
		"page_3_seasonalExpenses_hvacMaintenance_May",
		"page_3_seasonalExpenses_hvacMaintenance_Jun",
		"page_3_seasonalExpenses_hvacMaintenance_Jul",
		"page_3_seasonalExpenses_hvacMaintenance_Aug",
		"page_3_seasonalExpenses_hvacMaintenance_Sep",
		"page_3_seasonalExpenses_hvacMaintenance_Oct",
		"page_3_seasonalExpenses_hvacMaintenance_Nov",
		"page_3_seasonalExpenses_hvacMaintenance_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_hvacMaintenance_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfOtherRegularMaintenance_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_otherRegularMaintenance_Jan",
		"page_3_seasonalExpenses_otherRegularMaintenance_Feb",
		"page_3_seasonalExpenses_otherRegularMaintenance_Mar",
		"page_3_seasonalExpenses_otherRegularMaintenance_Apr",
		"page_3_seasonalExpenses_otherRegularMaintenance_May",
		"page_3_seasonalExpenses_otherRegularMaintenance_Jun",
		"page_3_seasonalExpenses_otherRegularMaintenance_Jul",
		"page_3_seasonalExpenses_otherRegularMaintenance_Aug",
		"page_3_seasonalExpenses_otherRegularMaintenance_Sep",
		"page_3_seasonalExpenses_otherRegularMaintenance_Oct",
		"page_3_seasonalExpenses_otherRegularMaintenance_Nov",
		"page_3_seasonalExpenses_otherRegularMaintenance_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_otherRegularMaintenance_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateRepairsAndMaintenance_seasonalExpenses(monthName) {
	let totalSum = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_cleaningFees_",
		"page_3_seasonalExpenses_landscaping_",
		"page_3_seasonalExpenses_snowRemoval_",
		"page_3_seasonalExpenses_pestControl_",
		"page_3_seasonalExpenses_poolMaintenance_",
		"page_3_seasonalExpenses_hvacMaintenance_",
		"page_3_seasonalExpenses_otherRegularMaintenance_",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalSum += numeral(
			document.getElementById(arrayOfElementsId[index] + monthName).value
		).value();
	}
	document.getElementById(
		"page_3_seasonalExpenses_repairsAndMaintenance_" + monthName
	).value =
		"$" +
		totalSum.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateAverageOfRepairsAndMaintenance_seasonalExpenses();
}

function calculateAverageOfRepairsAndMaintenance_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_repairsAndMaintenance_Jan",
		"page_3_seasonalExpenses_repairsAndMaintenance_Feb",
		"page_3_seasonalExpenses_repairsAndMaintenance_Mar",
		"page_3_seasonalExpenses_repairsAndMaintenance_Apr",
		"page_3_seasonalExpenses_repairsAndMaintenance_May",
		"page_3_seasonalExpenses_repairsAndMaintenance_Jun",
		"page_3_seasonalExpenses_repairsAndMaintenance_Jul",
		"page_3_seasonalExpenses_repairsAndMaintenance_Aug",
		"page_3_seasonalExpenses_repairsAndMaintenance_Sep",
		"page_3_seasonalExpenses_repairsAndMaintenance_Oct",
		"page_3_seasonalExpenses_repairsAndMaintenance_Nov",
		"page_3_seasonalExpenses_repairsAndMaintenance_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_repairsAndMaintenance_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

// =======
function calculateAverageOfPMSSoftware_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_pmsSoftware_Jan",
		"page_3_seasonalExpenses_pmsSoftware_Feb",
		"page_3_seasonalExpenses_pmsSoftware_Mar",
		"page_3_seasonalExpenses_pmsSoftware_Apr",
		"page_3_seasonalExpenses_pmsSoftware_May",
		"page_3_seasonalExpenses_pmsSoftware_Jun",
		"page_3_seasonalExpenses_pmsSoftware_Jul",
		"page_3_seasonalExpenses_pmsSoftware_Aug",
		"page_3_seasonalExpenses_pmsSoftware_Sep",
		"page_3_seasonalExpenses_pmsSoftware_Oct",
		"page_3_seasonalExpenses_pmsSoftware_Nov",
		"page_3_seasonalExpenses_pmsSoftware_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_pmsSoftware_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfPricingSoftware_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_pricingSoftware_Jan",
		"page_3_seasonalExpenses_pricingSoftware_Feb",
		"page_3_seasonalExpenses_pricingSoftware_Mar",
		"page_3_seasonalExpenses_pricingSoftware_Apr",
		"page_3_seasonalExpenses_pricingSoftware_May",
		"page_3_seasonalExpenses_pricingSoftware_Jun",
		"page_3_seasonalExpenses_pricingSoftware_Jul",
		"page_3_seasonalExpenses_pricingSoftware_Aug",
		"page_3_seasonalExpenses_pricingSoftware_Sep",
		"page_3_seasonalExpenses_pricingSoftware_Oct",
		"page_3_seasonalExpenses_pricingSoftware_Nov",
		"page_3_seasonalExpenses_pricingSoftware_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_pricingSoftware_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfAccountingSoftware_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_accountingSoftware_Jan",
		"page_3_seasonalExpenses_accountingSoftware_Feb",
		"page_3_seasonalExpenses_accountingSoftware_Mar",
		"page_3_seasonalExpenses_accountingSoftware_Apr",
		"page_3_seasonalExpenses_accountingSoftware_May",
		"page_3_seasonalExpenses_accountingSoftware_Jun",
		"page_3_seasonalExpenses_accountingSoftware_Jul",
		"page_3_seasonalExpenses_accountingSoftware_Aug",
		"page_3_seasonalExpenses_accountingSoftware_Sep",
		"page_3_seasonalExpenses_accountingSoftware_Oct",
		"page_3_seasonalExpenses_accountingSoftware_Nov",
		"page_3_seasonalExpenses_accountingSoftware_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_accountingSoftware_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfHomeSecuritySoftware_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_homeSecuritySoftware_Jan",
		"page_3_seasonalExpenses_homeSecuritySoftware_Feb",
		"page_3_seasonalExpenses_homeSecuritySoftware_Mar",
		"page_3_seasonalExpenses_homeSecuritySoftware_Apr",
		"page_3_seasonalExpenses_homeSecuritySoftware_May",
		"page_3_seasonalExpenses_homeSecuritySoftware_Jun",
		"page_3_seasonalExpenses_homeSecuritySoftware_Jul",
		"page_3_seasonalExpenses_homeSecuritySoftware_Aug",
		"page_3_seasonalExpenses_homeSecuritySoftware_Sep",
		"page_3_seasonalExpenses_homeSecuritySoftware_Oct",
		"page_3_seasonalExpenses_homeSecuritySoftware_Nov",
		"page_3_seasonalExpenses_homeSecuritySoftware_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_homeSecuritySoftware_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfCableOrInternetTV_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_cableInternetTV_Jan",
		"page_3_seasonalExpenses_cableInternetTV_Feb",
		"page_3_seasonalExpenses_cableInternetTV_Mar",
		"page_3_seasonalExpenses_cableInternetTV_Apr",
		"page_3_seasonalExpenses_cableInternetTV_May",
		"page_3_seasonalExpenses_cableInternetTV_Jun",
		"page_3_seasonalExpenses_cableInternetTV_Jul",
		"page_3_seasonalExpenses_cableInternetTV_Aug",
		"page_3_seasonalExpenses_cableInternetTV_Sep",
		"page_3_seasonalExpenses_cableInternetTV_Oct",
		"page_3_seasonalExpenses_cableInternetTV_Nov",
		"page_3_seasonalExpenses_cableInternetTV_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_cableInternetTV_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfDirectBookingSoftware_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_directBookingSoftware_Jan",
		"page_3_seasonalExpenses_directBookingSoftware_Feb",
		"page_3_seasonalExpenses_directBookingSoftware_Mar",
		"page_3_seasonalExpenses_directBookingSoftware_Apr",
		"page_3_seasonalExpenses_directBookingSoftware_May",
		"page_3_seasonalExpenses_directBookingSoftware_Jun",
		"page_3_seasonalExpenses_directBookingSoftware_Jul",
		"page_3_seasonalExpenses_directBookingSoftware_Aug",
		"page_3_seasonalExpenses_directBookingSoftware_Sep",
		"page_3_seasonalExpenses_directBookingSoftware_Oct",
		"page_3_seasonalExpenses_directBookingSoftware_Nov",
		"page_3_seasonalExpenses_directBookingSoftware_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_directBookingSoftware_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfOtherSubscriptions_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_otherSubscriptions_Jan",
		"page_3_seasonalExpenses_otherSubscriptions_Feb",
		"page_3_seasonalExpenses_otherSubscriptions_Mar",
		"page_3_seasonalExpenses_otherSubscriptions_Apr",
		"page_3_seasonalExpenses_otherSubscriptions_May",
		"page_3_seasonalExpenses_otherSubscriptions_Jun",
		"page_3_seasonalExpenses_otherSubscriptions_Jul",
		"page_3_seasonalExpenses_otherSubscriptions_Aug",
		"page_3_seasonalExpenses_otherSubscriptions_Sep",
		"page_3_seasonalExpenses_otherSubscriptions_Oct",
		"page_3_seasonalExpenses_otherSubscriptions_Nov",
		"page_3_seasonalExpenses_otherSubscriptions_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_otherSubscriptions_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateDuesAndSubscription_seasonalExpenses(monthName) {
	let totalSum = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_pmsSoftware_",
		"page_3_seasonalExpenses_pricingSoftware_",
		"page_3_seasonalExpenses_accountingSoftware_",
		"page_3_seasonalExpenses_homeSecuritySoftware_",
		"page_3_seasonalExpenses_cableInternetTV_",
		"page_3_seasonalExpenses_directBookingSoftware_",
		"page_3_seasonalExpenses_otherSubscriptions_",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalSum += numeral(
			document.getElementById(arrayOfElementsId[index] + monthName).value
		).value();
	}
	document.getElementById(
		"page_3_seasonalExpenses_duesAndSubscription_" + monthName
	).value =
		"$" +
		totalSum.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateAverageOfDuesAndSubscription_seasonalExpenses();
}

function calculateAverageOfDuesAndSubscription_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_duesAndSubscription_Jan",
		"page_3_seasonalExpenses_duesAndSubscription_Feb",
		"page_3_seasonalExpenses_duesAndSubscription_Mar",
		"page_3_seasonalExpenses_duesAndSubscription_Apr",
		"page_3_seasonalExpenses_duesAndSubscription_May",
		"page_3_seasonalExpenses_duesAndSubscription_Jun",
		"page_3_seasonalExpenses_duesAndSubscription_Jul",
		"page_3_seasonalExpenses_duesAndSubscription_Aug",
		"page_3_seasonalExpenses_duesAndSubscription_Sep",
		"page_3_seasonalExpenses_duesAndSubscription_Oct",
		"page_3_seasonalExpenses_duesAndSubscription_Nov",
		"page_3_seasonalExpenses_duesAndSubscription_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_duesAndSubscription_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

// =====

function calculateAverageOfAdvertisingAndMarketing_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_advertisingMarketing_Jan",
		"page_3_seasonalExpenses_advertisingMarketing_Feb",
		"page_3_seasonalExpenses_advertisingMarketing_Mar",
		"page_3_seasonalExpenses_advertisingMarketing_Apr",
		"page_3_seasonalExpenses_advertisingMarketing_May",
		"page_3_seasonalExpenses_advertisingMarketing_Jun",
		"page_3_seasonalExpenses_advertisingMarketing_Jul",
		"page_3_seasonalExpenses_advertisingMarketing_Aug",
		"page_3_seasonalExpenses_advertisingMarketing_Sep",
		"page_3_seasonalExpenses_advertisingMarketing_Oct",
		"page_3_seasonalExpenses_advertisingMarketing_Nov",
		"page_3_seasonalExpenses_advertisingMarketing_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_advertisingMarketing_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

function calculateAverageOfFurnitureRental_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_furnitureRental_Jan",
		"page_3_seasonalExpenses_furnitureRental_Feb",
		"page_3_seasonalExpenses_furnitureRental_Mar",
		"page_3_seasonalExpenses_furnitureRental_Apr",
		"page_3_seasonalExpenses_furnitureRental_May",
		"page_3_seasonalExpenses_furnitureRental_Jun",
		"page_3_seasonalExpenses_furnitureRental_Jul",
		"page_3_seasonalExpenses_furnitureRental_Aug",
		"page_3_seasonalExpenses_furnitureRental_Sep",
		"page_3_seasonalExpenses_furnitureRental_Oct",
		"page_3_seasonalExpenses_furnitureRental_Nov",
		"page_3_seasonalExpenses_furnitureRental_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_furnitureRental_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

function calculateAverageOfSuppliesOrConsumables_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_suppliesConsumables_Jan",
		"page_3_seasonalExpenses_suppliesConsumables_Feb",
		"page_3_seasonalExpenses_suppliesConsumables_Mar",
		"page_3_seasonalExpenses_suppliesConsumables_Apr",
		"page_3_seasonalExpenses_suppliesConsumables_May",
		"page_3_seasonalExpenses_suppliesConsumables_Jun",
		"page_3_seasonalExpenses_suppliesConsumables_Jul",
		"page_3_seasonalExpenses_suppliesConsumables_Aug",
		"page_3_seasonalExpenses_suppliesConsumables_Sep",
		"page_3_seasonalExpenses_suppliesConsumables_Oct",
		"page_3_seasonalExpenses_suppliesConsumables_Nov",
		"page_3_seasonalExpenses_suppliesConsumables_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_suppliesConsumables_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

function calculateAverageOfRunner_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_runner_Jan",
		"page_3_seasonalExpenses_runner_Feb",
		"page_3_seasonalExpenses_runner_Mar",
		"page_3_seasonalExpenses_runner_Apr",
		"page_3_seasonalExpenses_runner_May",
		"page_3_seasonalExpenses_runner_Jun",
		"page_3_seasonalExpenses_runner_Jul",
		"page_3_seasonalExpenses_runner_Aug",
		"page_3_seasonalExpenses_runner_Sep",
		"page_3_seasonalExpenses_runner_Oct",
		"page_3_seasonalExpenses_runner_Nov",
		"page_3_seasonalExpenses_runner_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById("page_3_seasonalExpenses_runner_Avg").value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

function calculateAverageOfLegalAndProfessional_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_legalAndProfessional_Jan",
		"page_3_seasonalExpenses_legalAndProfessional_Feb",
		"page_3_seasonalExpenses_legalAndProfessional_Mar",
		"page_3_seasonalExpenses_legalAndProfessional_Apr",
		"page_3_seasonalExpenses_legalAndProfessional_May",
		"page_3_seasonalExpenses_legalAndProfessional_Jun",
		"page_3_seasonalExpenses_legalAndProfessional_Jul",
		"page_3_seasonalExpenses_legalAndProfessional_Aug",
		"page_3_seasonalExpenses_legalAndProfessional_Sep",
		"page_3_seasonalExpenses_legalAndProfessional_Oct",
		"page_3_seasonalExpenses_legalAndProfessional_Nov",
		"page_3_seasonalExpenses_legalAndProfessional_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_legalAndProfessional_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

function calculateAverageOfGeneralAndAdministrative_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_generalAndAdminstrative_Jan",
		"page_3_seasonalExpenses_generalAndAdminstrative_Feb",
		"page_3_seasonalExpenses_generalAndAdminstrative_Mar",
		"page_3_seasonalExpenses_generalAndAdminstrative_Apr",
		"page_3_seasonalExpenses_generalAndAdminstrative_May",
		"page_3_seasonalExpenses_generalAndAdminstrative_Jun",
		"page_3_seasonalExpenses_generalAndAdminstrative_Jul",
		"page_3_seasonalExpenses_generalAndAdminstrative_Aug",
		"page_3_seasonalExpenses_generalAndAdminstrative_Sep",
		"page_3_seasonalExpenses_generalAndAdminstrative_Oct",
		"page_3_seasonalExpenses_generalAndAdminstrative_Nov",
		"page_3_seasonalExpenses_generalAndAdminstrative_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_generalAndAdminstrative_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

function calculateAverageOfOtherMonthlyExpenses_seasonalExpenses() {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_seasonalExpenses_otherMonthlyExpenses_Jan",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Feb",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Mar",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Apr",
		"page_3_seasonalExpenses_otherMonthlyExpenses_May",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Jun",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Jul",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Aug",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Sep",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Oct",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Nov",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Dec",
	];
	for (let index = 0; index < arrayOfElementsId.length; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	totalAvg = totalAvg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_otherMonthlyExpenses_Avg"
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses();
}

let arrayOfGrossMonthlyIncomeElementsId = [
	"page_3_seasonalIncome_grossMonthlyIncome_Jan",
	"page_3_seasonalIncome_grossMonthlyIncome_Feb",
	"page_3_seasonalIncome_grossMonthlyIncome_Mar",
	"page_3_seasonalIncome_grossMonthlyIncome_Apr",
	"page_3_seasonalIncome_grossMonthlyIncome_May",
	"page_3_seasonalIncome_grossMonthlyIncome_Jun",
	"page_3_seasonalIncome_grossMonthlyIncome_Jul",
	"page_3_seasonalIncome_grossMonthlyIncome_Aug",
	"page_3_seasonalIncome_grossMonthlyIncome_Sep",
	"page_3_seasonalIncome_grossMonthlyIncome_Oct",
	"page_3_seasonalIncome_grossMonthlyIncome_Nov",
	"page_3_seasonalIncome_grossMonthlyIncome_Dec",
];

function calculatePropertyManagement_seasonalExpenses() {
	let result = 0;
	let inputOfPropertyManagement = numeral(
		document.getElementById("page_3_seasonalExpenses_propertyManagement_Avg")
			.value
	).value();

	let arrayOfOutputElementsId = [
		"page_3_seasonalExpenses_propertyManagement_Jan",
		"page_3_seasonalExpenses_propertyManagement_Feb",
		"page_3_seasonalExpenses_propertyManagement_Mar",
		"page_3_seasonalExpenses_propertyManagement_Apr",
		"page_3_seasonalExpenses_propertyManagement_May",
		"page_3_seasonalExpenses_propertyManagement_Jun",
		"page_3_seasonalExpenses_propertyManagement_Jul",
		"page_3_seasonalExpenses_propertyManagement_Aug",
		"page_3_seasonalExpenses_propertyManagement_Sep",
		"page_3_seasonalExpenses_propertyManagement_Oct",
		"page_3_seasonalExpenses_propertyManagement_Nov",
		"page_3_seasonalExpenses_propertyManagement_Dec",
	];

	for (var i = 0; i < arrayOfOutputElementsId.length; i++) {
		result =
			inputOfPropertyManagement *
			numeral(
				document.getElementById(arrayOfGrossMonthlyIncomeElementsId[i]).value
			).value();
		result = Math.round(result);
		document.getElementById(arrayOfOutputElementsId[i]).value = "$" + result;
	}
}

function calculateOperationalExpenses_seasonalExpenses() {
	let result = 0;
	let inputOfPropertyManagement = numeral(
		document.getElementById("page_3_seasonalExpenses_operationalExpenses_Avg")
			.value
	).value();

	let arrayOfOutputElementsId = [
		"page_3_seasonalExpenses_operationalExpenses_Jan",
		"page_3_seasonalExpenses_operationalExpenses_Feb",
		"page_3_seasonalExpenses_operationalExpenses_Mar",
		"page_3_seasonalExpenses_operationalExpenses_Apr",
		"page_3_seasonalExpenses_operationalExpenses_May",
		"page_3_seasonalExpenses_operationalExpenses_Jun",
		"page_3_seasonalExpenses_operationalExpenses_Jul",
		"page_3_seasonalExpenses_operationalExpenses_Aug",
		"page_3_seasonalExpenses_operationalExpenses_Sep",
		"page_3_seasonalExpenses_operationalExpenses_Oct",
		"page_3_seasonalExpenses_operationalExpenses_Nov",
		"page_3_seasonalExpenses_operationalExpenses_Dec",
	];

	for (var i = 0; i < arrayOfOutputElementsId.length; i++) {
		result =
			inputOfPropertyManagement *
			numeral(
				document.getElementById(arrayOfGrossMonthlyIncomeElementsId[i]).value
			).value();
		result = Math.round(result);
		document.getElementById(arrayOfOutputElementsId[i]).value = "$" + result;
	}
}

function calculateCapitalExpenses_seasonalExpenses() {
	let result = 0;
	let inputOfPropertyManagement = numeral(
		document.getElementById("page_3_seasonalExpenses_capitalExpenses_Avg").value
	).value();

	let arrayOfOutputElementsId = [
		"page_3_seasonalExpenses_capitalExpenses_Jan",
		"page_3_seasonalExpenses_capitalExpenses_Feb",
		"page_3_seasonalExpenses_capitalExpenses_Mar",
		"page_3_seasonalExpenses_capitalExpenses_Apr",
		"page_3_seasonalExpenses_capitalExpenses_May",
		"page_3_seasonalExpenses_capitalExpenses_Jun",
		"page_3_seasonalExpenses_capitalExpenses_Jul",
		"page_3_seasonalExpenses_capitalExpenses_Aug",
		"page_3_seasonalExpenses_capitalExpenses_Sep",
		"page_3_seasonalExpenses_capitalExpenses_Oct",
		"page_3_seasonalExpenses_capitalExpenses_Nov",
		"page_3_seasonalExpenses_capitalExpenses_Dec",
	];

	for (var i = 0; i < arrayOfOutputElementsId.length; i++) {
		result =
			inputOfPropertyManagement *
			numeral(
				document.getElementById(arrayOfGrossMonthlyIncomeElementsId[i]).value
			).value();
		result = Math.round(result);
		document.getElementById(arrayOfOutputElementsId[i]).value = "$" + result;
	}
}

function calculateVacancy_seasonalExpenses() {
	let result = 0;
	let inputOfPropertyManagement = numeral(
		document.getElementById("page_3_seasonalExpenses_vacancy_Avg").value
	).value();

	let arrayOfOutputElementsId = [
		"page_3_seasonalExpenses_vacancy_Jan",
		"page_3_seasonalExpenses_vacancy_Feb",
		"page_3_seasonalExpenses_vacancy_Mar",
		"page_3_seasonalExpenses_vacancy_Apr",
		"page_3_seasonalExpenses_vacancy_May",
		"page_3_seasonalExpenses_vacancy_Jun",
		"page_3_seasonalExpenses_vacancy_Jul",
		"page_3_seasonalExpenses_vacancy_Aug",
		"page_3_seasonalExpenses_vacancy_Sep",
		"page_3_seasonalExpenses_vacancy_Oct",
		"page_3_seasonalExpenses_vacancy_Nov",
		"page_3_seasonalExpenses_vacancy_Dec",
	];

	for (var i = 0; i < arrayOfOutputElementsId.length; i++) {
		if (i == 2) {
			result =
				numeral(
					document.getElementById("page_3_seasonalExpenses_vacancy_Feb").value
				).value() *
				numeral(
					document.getElementById(arrayOfGrossMonthlyIncomeElementsId[i]).value
				).value();
			result = Math.round(result);
			document.getElementById(arrayOfOutputElementsId[i]).value = "$" + result;
		} else {
			result =
				inputOfPropertyManagement *
				numeral(
					document.getElementById(arrayOfGrossMonthlyIncomeElementsId[i]).value
				).value();
			result = Math.round(result);
			document.getElementById(arrayOfOutputElementsId[i]).value = "$" + result;
		}
	}
}

function calculateTotalMonthlyExpensesAndAvgOfIt_seasonalExpenses() {
	let arrayOfFixedPropertyExpensesElementsId = [
		"page_3_seasonalExpenses_fixedPropertyExpenses_Jan",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Feb",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Mar",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Apr",
		"page_3_seasonalExpenses_fixedPropertyExpenses_May",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Jun",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Jul",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Aug",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Sep",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Oct",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Nov",
		"page_3_seasonalExpenses_fixedPropertyExpenses_Dec",
	];

	let arrayOfOtaCommissionElementsId = [
		"page_3_seasonalExpenses_otaCommission_Jan",
		"page_3_seasonalExpenses_otaCommission_Feb",
		"page_3_seasonalExpenses_otaCommission_Mar",
		"page_3_seasonalExpenses_otaCommission_Apr",
		"page_3_seasonalExpenses_otaCommission_May",
		"page_3_seasonalExpenses_otaCommission_Jun",
		"page_3_seasonalExpenses_otaCommission_Jul",
		"page_3_seasonalExpenses_otaCommission_Aug",
		"page_3_seasonalExpenses_otaCommission_Sep",
		"page_3_seasonalExpenses_otaCommission_Oct",
		"page_3_seasonalExpenses_otaCommission_Nov",
		"page_3_seasonalExpenses_otaCommission_Dec",
	];

	let arrayOfUtilitiesElementsId = [
		"page_3_seasonalExpenses_utilities_Jan",
		"page_3_seasonalExpenses_utilities_Feb",
		"page_3_seasonalExpenses_utilities_Mar",
		"page_3_seasonalExpenses_utilities_Apr",
		"page_3_seasonalExpenses_utilities_May",
		"page_3_seasonalExpenses_utilities_Jun",
		"page_3_seasonalExpenses_utilities_Jul",
		"page_3_seasonalExpenses_utilities_Aug",
		"page_3_seasonalExpenses_utilities_Sep",
		"page_3_seasonalExpenses_utilities_Oct",
		"page_3_seasonalExpenses_utilities_Nov",
		"page_3_seasonalExpenses_utilities_Dec",
	];
	let arrayOfStrOccupancyElementsId = [
		"page_3_seasonalExpenses_strOccupancyTaxes_Jan",
		"page_3_seasonalExpenses_strOccupancyTaxes_Feb",
		"page_3_seasonalExpenses_strOccupancyTaxes_Mar",
		"page_3_seasonalExpenses_strOccupancyTaxes_Apr",
		"page_3_seasonalExpenses_strOccupancyTaxes_May",
		"page_3_seasonalExpenses_strOccupancyTaxes_Jun",
		"page_3_seasonalExpenses_strOccupancyTaxes_Jul",
		"page_3_seasonalExpenses_strOccupancyTaxes_Aug",
		"page_3_seasonalExpenses_strOccupancyTaxes_Sep",
		"page_3_seasonalExpenses_strOccupancyTaxes_Oct",
		"page_3_seasonalExpenses_strOccupancyTaxes_Nov",
		"page_3_seasonalExpenses_strOccupancyTaxes_Dec",
	];

	let arrayOfRepairsAndMaintenanceElementsId = [
		"page_3_seasonalExpenses_repairsAndMaintenance_Jan",
		"page_3_seasonalExpenses_repairsAndMaintenance_Feb",
		"page_3_seasonalExpenses_repairsAndMaintenance_Mar",
		"page_3_seasonalExpenses_repairsAndMaintenance_Apr",
		"page_3_seasonalExpenses_repairsAndMaintenance_May",
		"page_3_seasonalExpenses_repairsAndMaintenance_Jun",
		"page_3_seasonalExpenses_repairsAndMaintenance_Jul",
		"page_3_seasonalExpenses_repairsAndMaintenance_Aug",
		"page_3_seasonalExpenses_repairsAndMaintenance_Sep",
		"page_3_seasonalExpenses_repairsAndMaintenance_Oct",
		"page_3_seasonalExpenses_repairsAndMaintenance_Nov",
		"page_3_seasonalExpenses_repairsAndMaintenance_Dec",
	];

	let arrayOfDuesAndSubscriptionElementsId = [
		"page_3_seasonalExpenses_duesAndSubscription_Jan",
		"page_3_seasonalExpenses_duesAndSubscription_Feb",
		"page_3_seasonalExpenses_duesAndSubscription_Mar",
		"page_3_seasonalExpenses_duesAndSubscription_Apr",
		"page_3_seasonalExpenses_duesAndSubscription_May",
		"page_3_seasonalExpenses_duesAndSubscription_Jun",
		"page_3_seasonalExpenses_duesAndSubscription_Jul",
		"page_3_seasonalExpenses_duesAndSubscription_Aug",
		"page_3_seasonalExpenses_duesAndSubscription_Sep",
		"page_3_seasonalExpenses_duesAndSubscription_Oct",
		"page_3_seasonalExpenses_duesAndSubscription_Nov",
		"page_3_seasonalExpenses_duesAndSubscription_Dec",
	];

	let arrayOfAdvertisingMarketingElementsId = [
		"page_3_seasonalExpenses_advertisingMarketing_Jan",
		"page_3_seasonalExpenses_advertisingMarketing_Feb",
		"page_3_seasonalExpenses_advertisingMarketing_Mar",
		"page_3_seasonalExpenses_advertisingMarketing_Apr",
		"page_3_seasonalExpenses_advertisingMarketing_May",
		"page_3_seasonalExpenses_advertisingMarketing_Jun",
		"page_3_seasonalExpenses_advertisingMarketing_Jul",
		"page_3_seasonalExpenses_advertisingMarketing_Aug",
		"page_3_seasonalExpenses_advertisingMarketing_Sep",
		"page_3_seasonalExpenses_advertisingMarketing_Oct",
		"page_3_seasonalExpenses_advertisingMarketing_Nov",
		"page_3_seasonalExpenses_advertisingMarketing_Dec",
	];

	let arrayOfFurnitureRentalElementsId = [
		"page_3_seasonalExpenses_furnitureRental_Jan",
		"page_3_seasonalExpenses_furnitureRental_Feb",
		"page_3_seasonalExpenses_furnitureRental_Mar",
		"page_3_seasonalExpenses_furnitureRental_Apr",
		"page_3_seasonalExpenses_furnitureRental_May",
		"page_3_seasonalExpenses_furnitureRental_Jun",
		"page_3_seasonalExpenses_furnitureRental_Jul",
		"page_3_seasonalExpenses_furnitureRental_Aug",
		"page_3_seasonalExpenses_furnitureRental_Sep",
		"page_3_seasonalExpenses_furnitureRental_Oct",
		"page_3_seasonalExpenses_furnitureRental_Nov",
		"page_3_seasonalExpenses_furnitureRental_Dec",
	];

	let arrayOfSuppliesConsumablesElementsId = [
		"page_3_seasonalExpenses_suppliesConsumables_Jan",
		"page_3_seasonalExpenses_suppliesConsumables_Feb",
		"page_3_seasonalExpenses_suppliesConsumables_Mar",
		"page_3_seasonalExpenses_suppliesConsumables_Apr",
		"page_3_seasonalExpenses_suppliesConsumables_May",
		"page_3_seasonalExpenses_suppliesConsumables_Jun",
		"page_3_seasonalExpenses_suppliesConsumables_Jul",
		"page_3_seasonalExpenses_suppliesConsumables_Aug",
		"page_3_seasonalExpenses_suppliesConsumables_Sep",
		"page_3_seasonalExpenses_suppliesConsumables_Oct",
		"page_3_seasonalExpenses_suppliesConsumables_Nov",
		"page_3_seasonalExpenses_suppliesConsumables_Dec",
	];

	let arrayOfRunnerElementsId = [
		"page_3_seasonalExpenses_runner_Jan",
		"page_3_seasonalExpenses_runner_Feb",
		"page_3_seasonalExpenses_runner_Mar",
		"page_3_seasonalExpenses_runner_Apr",
		"page_3_seasonalExpenses_runner_May",
		"page_3_seasonalExpenses_runner_Jun",
		"page_3_seasonalExpenses_runner_Jul",
		"page_3_seasonalExpenses_runner_Aug",
		"page_3_seasonalExpenses_runner_Sep",
		"page_3_seasonalExpenses_runner_Oct",
		"page_3_seasonalExpenses_runner_Nov",
		"page_3_seasonalExpenses_runner_Dec",
	];

	let arrayOfLegalandProfessionalElementsId = [
		"page_3_seasonalExpenses_legalAndProfessional_Jan",
		"page_3_seasonalExpenses_legalAndProfessional_Feb",
		"page_3_seasonalExpenses_legalAndProfessional_Mar",
		"page_3_seasonalExpenses_legalAndProfessional_Apr",
		"page_3_seasonalExpenses_legalAndProfessional_May",
		"page_3_seasonalExpenses_legalAndProfessional_Jun",
		"page_3_seasonalExpenses_legalAndProfessional_Jul",
		"page_3_seasonalExpenses_legalAndProfessional_Aug",
		"page_3_seasonalExpenses_legalAndProfessional_Sep",
		"page_3_seasonalExpenses_legalAndProfessional_Oct",
		"page_3_seasonalExpenses_legalAndProfessional_Nov",
		"page_3_seasonalExpenses_legalAndProfessional_Dec",
	];

	let arrayOfGeneralAndAdminstrativeElementsId = [
		"page_3_seasonalExpenses_generalAndAdminstrative_Jan",
		"page_3_seasonalExpenses_generalAndAdminstrative_Feb",
		"page_3_seasonalExpenses_generalAndAdminstrative_Mar",
		"page_3_seasonalExpenses_generalAndAdminstrative_Apr",
		"page_3_seasonalExpenses_generalAndAdminstrative_May",
		"page_3_seasonalExpenses_generalAndAdminstrative_Jun",
		"page_3_seasonalExpenses_generalAndAdminstrative_Jul",
		"page_3_seasonalExpenses_generalAndAdminstrative_Aug",
		"page_3_seasonalExpenses_generalAndAdminstrative_Sep",
		"page_3_seasonalExpenses_generalAndAdminstrative_Oct",
		"page_3_seasonalExpenses_generalAndAdminstrative_Nov",
		"page_3_seasonalExpenses_generalAndAdminstrative_Dec",
	];

	let arrayOfOtherMonthlyExpensesElementsId = [
		"page_3_seasonalExpenses_otherMonthlyExpenses_Jan",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Feb",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Mar",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Apr",
		"page_3_seasonalExpenses_otherMonthlyExpenses_May",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Jun",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Jul",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Aug",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Sep",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Oct",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Nov",
		"page_3_seasonalExpenses_otherMonthlyExpenses_Dec",
	];

	let arrayOfPropertyManagementElementsId = [
		"page_3_seasonalExpenses_propertyManagement_Jan",
		"page_3_seasonalExpenses_propertyManagement_Feb",
		"page_3_seasonalExpenses_propertyManagement_Mar",
		"page_3_seasonalExpenses_propertyManagement_Apr",
		"page_3_seasonalExpenses_propertyManagement_May",
		"page_3_seasonalExpenses_propertyManagement_Jun",
		"page_3_seasonalExpenses_propertyManagement_Jul",
		"page_3_seasonalExpenses_propertyManagement_Aug",
		"page_3_seasonalExpenses_propertyManagement_Sep",
		"page_3_seasonalExpenses_propertyManagement_Oct",
		"page_3_seasonalExpenses_propertyManagement_Nov",
		"page_3_seasonalExpenses_propertyManagement_Dec",
	];

	let arrayOfOperationalExpensesElementsId = [
		"page_3_seasonalExpenses_operationalExpenses_Jan",
		"page_3_seasonalExpenses_operationalExpenses_Feb",
		"page_3_seasonalExpenses_operationalExpenses_Mar",
		"page_3_seasonalExpenses_operationalExpenses_Apr",
		"page_3_seasonalExpenses_operationalExpenses_May",
		"page_3_seasonalExpenses_operationalExpenses_Jun",
		"page_3_seasonalExpenses_operationalExpenses_Jul",
		"page_3_seasonalExpenses_operationalExpenses_Aug",
		"page_3_seasonalExpenses_operationalExpenses_Sep",
		"page_3_seasonalExpenses_operationalExpenses_Oct",
		"page_3_seasonalExpenses_operationalExpenses_Nov",
		"page_3_seasonalExpenses_operationalExpenses_Dec",
	];

	let arrayOfCapitalExpensesElementsId = [
		"page_3_seasonalExpenses_capitalExpenses_Jan",
		"page_3_seasonalExpenses_capitalExpenses_Feb",
		"page_3_seasonalExpenses_capitalExpenses_Mar",
		"page_3_seasonalExpenses_capitalExpenses_Apr",
		"page_3_seasonalExpenses_capitalExpenses_May",
		"page_3_seasonalExpenses_capitalExpenses_Jun",
		"page_3_seasonalExpenses_capitalExpenses_Jul",
		"page_3_seasonalExpenses_capitalExpenses_Aug",
		"page_3_seasonalExpenses_capitalExpenses_Sep",
		"page_3_seasonalExpenses_capitalExpenses_Oct",
		"page_3_seasonalExpenses_capitalExpenses_Nov",
		"page_3_seasonalExpenses_capitalExpenses_Dec",
	];

	let arrayOfVacancyElementsId = [
		"page_3_seasonalExpenses_vacancy_Jan",
		"page_3_seasonalExpenses_vacancy_Feb",
		"page_3_seasonalExpenses_vacancy_Mar",
		"page_3_seasonalExpenses_vacancy_Apr",
		"page_3_seasonalExpenses_vacancy_May",
		"page_3_seasonalExpenses_vacancy_Jun",
		"page_3_seasonalExpenses_vacancy_Jul",
		"page_3_seasonalExpenses_vacancy_Aug",
		"page_3_seasonalExpenses_vacancy_Sep",
		"page_3_seasonalExpenses_vacancy_Oct",
		"page_3_seasonalExpenses_vacancy_Nov",
		"page_3_seasonalExpenses_vacancy_Dec",
	];

	let arrayOfOutputElementsId = [
		"page_3_seasonalExpenses_totalMonthlyExpenses_Jan",
		"page_3_seasonalExpenses_totalMonthlyExpenses_Feb",
		"page_3_seasonalExpenses_totalMonthlyExpenses_Mar",
		"page_3_seasonalExpenses_totalMonthlyExpenses_Apr",
		"page_3_seasonalExpenses_totalMonthlyExpenses_May",
		"page_3_seasonalExpenses_totalMonthlyExpenses_Jun",
		"page_3_seasonalExpenses_totalMonthlyExpenses_Jul",
		"page_3_seasonalExpenses_totalMonthlyExpenses_Aug",
		"page_3_seasonalExpenses_totalMonthlyExpenses_Sep",
		"page_3_seasonalExpenses_totalMonthlyExpenses_Oct",
		"page_3_seasonalExpenses_totalMonthlyExpenses_Nov",
		"page_3_seasonalExpenses_totalMonthlyExpenses_Dec",
	];

	let result = 0;
	for (var i = 0; i < arrayOfOutputElementsId.length; i++) {
		result =
			numeral(
				document.getElementById(arrayOfFixedPropertyExpensesElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfOtaCommissionElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfUtilitiesElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfStrOccupancyElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfRepairsAndMaintenanceElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfDuesAndSubscriptionElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfAdvertisingMarketingElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfFurnitureRentalElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfSuppliesConsumablesElementsId[i]).value
			).value() +
			numeral(document.getElementById(arrayOfRunnerElementsId[i]).value).value() +
			numeral(
				document.getElementById(arrayOfLegalandProfessionalElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfGeneralAndAdminstrativeElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfOtherMonthlyExpensesElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfPropertyManagementElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfOperationalExpensesElementsId[i]).value
			).value() +
			numeral(
				document.getElementById(arrayOfCapitalExpensesElementsId[i]).value
			).value() +
			numeral(document.getElementById(arrayOfVacancyElementsId[i]).value).value();

		document.getElementById(arrayOfOutputElementsId[i]).value =
			"$" + result.toLocaleString();
	}
	let avg = 0;
	for (let index = 0; index < arrayOfOutputElementsId.length; index++) {
		avg += numeral(
			document.getElementById(arrayOfOutputElementsId[index]).value
		).value();
	}
	avg = avg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_totalMonthlyExpenses_Avg"
	).value =
		"$" +
		avg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	calculateOperatingExpenseRatioAndAvgOfIt_seasonalExpenses();
	page_4_calculateAverageSTRExpenses();
}

let arrayOfMonthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

function calculateOperatingExpenseRatioAndAvgOfIt_seasonalExpenses() {
	let result = 0;
	for (let i = 0; i < arrayOfMonthNames.length; i++) {
		result =
			numeral(
				document.getElementById(
					"page_3_seasonalExpenses_totalMonthlyExpenses_" + arrayOfMonthNames[i]
				).value
			).value() /
			numeral(
				document.getElementById(
					"page_3_seasonalIncome_grossMonthlyIncome_" + arrayOfMonthNames[i]
				).value
			).value();

		document.getElementById(
			"page_3_seasonalExpenses_operatingExpenseRatio_" + arrayOfMonthNames[i]
		).value = Math.round(result * 100) + "%";
	}

	let avg = 0;
	for (var i = 0; i < arrayOfMonthNames.length; i++) {
		avg += numeral(
			document.getElementById(
				"page_3_seasonalExpenses_operatingExpenseRatio_" + arrayOfMonthNames[i]
			).value
		).value();
	}
	avg = avg / 12;
	document.getElementById(
		"page_3_seasonalExpenses_operatingExpenseRatio_Avg"
	).value = Math.round(avg * 100) + "%";

	calculateNetMonthlyCashFlowAndAvgOfIt_netCashFlow();
}

function calculateNetMonthlyCashFlowAndAvgOfIt_netCashFlow() {
	let result = 0;
	for (let i = 0; i < arrayOfMonthNames.length; i++) {
		result =
			numeral(
				document.getElementById(
					"page_3_seasonalIncome_grossTotalIncome_" + arrayOfMonthNames[i]
				).value
			).value() -
			numeral(
				document.getElementById(
					"page_3_seasonalExpenses_totalMonthlyExpenses_" + arrayOfMonthNames[i]
				).value
			).value();

		document.getElementById(
			"page_3_netCashFlow_netMonthlyCashFlow_" + arrayOfMonthNames[i]
		).value = "$" + Math.abs(result).toLocaleString();
	}

	let avg = 0;
	for (var i = 0; i < arrayOfMonthNames.length; i++) {
		avg += numeral(
			document.getElementById(
				"page_3_netCashFlow_netMonthlyCashFlow_" + arrayOfMonthNames[i]
			).value
		).value();
	}
	avg = avg / 12;
	document.getElementById("page_3_netCashFlow_netMonthlyCashFlow_Avg").value =
		"$" +
		avg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}

function calculateAverageOfCohostProfitShare_netCashFlow() {
	let avg = 0;
	for (var i = 0; i < arrayOfMonthNames.length; i++) {
		avg += numeral(
			document.getElementById(
				"page_3_cohostProfitShare_netMonthlyCashFlow_" + arrayOfMonthNames[i]
			).value
		).value();
	}
	avg = avg / 12;
	document.getElementById(
		"page_3_cohostProfitShare_netMonthlyCashFlow_Avg"
	).value = Math.round(avg * 100) + "%";

	calculateNetMonthlyOwnerIncome_netCashFlow();
}

function calculateNetMonthlyOwnerIncome_netCashFlow() {
	let result = 0;
	for (let i = 0; i < arrayOfMonthNames.length; i++) {
		result =
			numeral(
				document.getElementById(
					"page_3_netCashFlow_netMonthlyCashFlow_" + arrayOfMonthNames[i]
				).value
			).value() -
			numeral(
				document.getElementById(
					"page_3_netCashFlow_netMonthlyCashFlow_" + arrayOfMonthNames[i]
				).value
			).value() *
				numeral(
					document.getElementById(
						"page_3_cohostProfitShare_netMonthlyCashFlow_" + arrayOfMonthNames[i]
					).value
				).value();

		document.getElementById(
			"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_" + arrayOfMonthNames[i]
		).value = "$" + Math.round(result);
	}

	let avg = 0;
	for (var i = 0; i < arrayOfMonthNames.length; i++) {
		avg += numeral(
			document.getElementById(
				"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_" + arrayOfMonthNames[i]
			).value
		).value();
	}
	avg = avg / 12;
	document.getElementById(
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Avg"
	).value = "$" + Math.round(avg);

	calculateAllNetIncomeYTD_netCashFlow();
}

function calculateAllNetIncomeYTD_netCashFlow() {
	calculateNetIncomeYTD_netCashFlow("Jan", 1);
	calculateNetIncomeYTD_netCashFlow("Feb", 2);
	calculateNetIncomeYTD_netCashFlow("Mar", 3);
	calculateNetIncomeYTD_netCashFlow("Apr", 4);
	calculateNetIncomeYTD_netCashFlow("May", 5);
	calculateNetIncomeYTD_netCashFlow("Jun", 6);
	calculateNetIncomeYTD_netCashFlow("Jul", 7);
	calculateNetIncomeYTD_netCashFlow("Aug", 8);
	calculateNetIncomeYTD_netCashFlow("Sep", 9);
	calculateNetIncomeYTD_netCashFlow("Oct", 10);
	calculateNetIncomeYTD_netCashFlow("Nov", 11);
	calculateNetIncomeYTD_netCashFlow("Dec", 12);
}

function calculateNetIncomeYTD_netCashFlow(monthName, lengthOfArray) {
	let totalAvg = 0;
	let arrayOfElementsId = [
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Jan",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Feb",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Mar",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Apr",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_May",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Jun",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Jul",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Aug",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Sep",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Oct",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Nov",
		"page_3_netMonthlyOwnerIncome_netMonthlyCashFlow_Dec",
	];
	for (let index = 0; index < lengthOfArray; index++) {
		totalAvg += numeral(
			document.getElementById(arrayOfElementsId[index]).value
		).value();
	}
	document.getElementById(
		"page_3_netIncomeYTD_netMonthlyCashFlow_" + monthName
	).value =
		"$" +
		totalAvg.toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});
}
//#endregion

//   <!-- PAGE 4 SCRIPTS -->
//#region

function page_4_showfixedPropertyExpensesCollapsable() {
	$(".page_4_fixedPropertyExpensesCollapsable").toggle(400);
}
function page_4_showOtaCommissionCollapsable() {
	$(".page_4_otaCommissionCollapsable").toggle(400);
}
function page_4_showUtilitiesCollapsable() {
	$(".page_4_utilitiesCollapsable").toggle(400);
}
function page_4_showRepairsAndMaintenanceCollapsable() {
	$(".page_4_repairsAndMaintenanceCollapsable").toggle(400);
}
function page_4_showDuesAndSubscriptionCollapsable() {
	$(".page_4_duesAndSubscriptionCollapsable").toggle(400);
}
function page_4_showVariableMonthlyExpensesCollapsable() {
	$(".page_4_variableMonthlyExpensesCollapsable").toggle(400);
}

function page_4_calculateMHA() {
	let valueToFind = numeral(
		document.getElementById("page_4_BAH_DutyZipCode").value
	).value();
	if (sortedZipMha_A.includes(valueToFind)) {
		let index = sortedZipMha_A.indexOf(valueToFind);
		let result = sortedZipMha_B[index];
		document.getElementById("page_4_BAH_MHA").value = result;
		document.getElementById("page_4_dutyZipCodeError").style.display = "none";
		page_4_calculateMilitaryHousingArea(result);
		page_4_calculateBAHWithDependents();
		page_4_calculateBAHWithoutDependents();
	} else {
		document.getElementById("page_4_BAH_MHA").value = "NaN";
		document.getElementById("page_4_dutyZipCodeError").style.display = "";
	}
}

function page_4_calculateGrade_L() {
	let valueToFind = document.getElementById("page_4_BAH_Grade").value;
	if (gradeConverter_A.includes(valueToFind)) {
		let index = gradeConverter_A.indexOf(valueToFind);
		let result = gradeConverter_B[index];
		document.getElementById("page_4_BAH_GradeL").value = result;
		page_4_calculateBAHWithDependents();
		page_4_calculateBAHWithoutDependents();
	} else {
		document.getElementById("page_4_BAH_GradeL").value = "";
	}
}

function page_4_calculateMilitaryHousingArea(valueToFind) {
	if (mhaNames_A.includes(valueToFind)) {
		let index = mhaNames_A.indexOf(valueToFind);
		let result = mhaNames_B[index];
		document.getElementById("page_4_BAH_MilitaryHousingArea").value = result;
	} else {
		document.getElementById("page_4_BAH_MilitaryHousingArea").value = "";
	}
}

function page_4_calculateBAHWithDependents() {
	if (
		document.getElementById("page_4_BAH_MHA").value != "" &&
		document.getElementById("page_4_BAH_GradeL").value != ""
	) {
		let rowNum;
		let columnNum;
		rowNum = withTable.findIndex(
			(abc) => abc[0] == document.getElementById("page_4_BAH_MHA").value
		);
		columnNum = withTableHeader.findIndex(
			(abc) => abc == document.getElementById("page_4_BAH_GradeL").value
		);
		document.getElementById("page_4_BAH_WithDepandents").value =
			"$" + withTable[rowNum][columnNum].toLocaleString();
	}
}

function page_4_calculateBAHWithoutDependents() {
	if (
		document.getElementById("page_4_BAH_MHA").value != "" &&
		document.getElementById("page_4_BAH_GradeL").value != ""
	) {
		let rowNum;
		let columnNum;
		rowNum = withoutTable.findIndex(
			(abc) => abc[0] == document.getElementById("page_4_BAH_MHA").value
		);
		columnNum = withoutTableHeader.findIndex(
			(abc) => abc == document.getElementById("page_4_BAH_GradeL").value
		);
		document.getElementById("page_4_BAH_WithOutDepandents").value =
			"$" + withoutTable[rowNum][columnNum].toLocaleString();
	}
}

// page_4_BAH_BasicHousingAllowance
function page_4_calculateBAHOnly() {
	if (document.getElementById("page_4_BAH_Dependants").value == "Yes") {
		document.getElementById("page_4_BAH_BasicHousingAllowance").value =
			document.getElementById("page_4_BAH_WithDepandents").value;
	} else {
		document.getElementById("page_4_BAH_BasicHousingAllowance").value =
			document.getElementById("page_4_BAH_WithOutDepandents").value;
	}
}
// __________________

function page_4_calculateTotalSqFt(index) {
	document.getElementById("page_4_unitMix_totalSqFt_" + index).innerHTML =
		numeral(
			document.getElementById("page_4_unitMix_sqft_" + index).value
		).value() *
		numeral(
			document.getElementById("page_4_unitMix_units_" + index).value
		).value();

	page_4_calculateUnitMixMarketRent(index);
}
function page_4_calculateUnitMixMarketRent(index) {
	document.getElementById("page_4_unitMixMarketRent_name_" + index).innerHTML =
		document.getElementById("page_4_unitMix_name_" + index).value + " - Market";
	document.getElementById("page_4_unitMixMarketRent_sqFt_" + index).innerHTML =
		document.getElementById("page_4_unitMix_sqft_" + index).value;
	document.getElementById("page_4_unitMixMarketRent_units_" + index).innerHTML =
		document.getElementById("page_4_unitMix_units_" + index).value;
}

function page_4_calculateDaysBookedAndMonthlyMarketRentAndRentPerSF(index) {
	let avgBookedRate = numeral(
		document.getElementById("page_4_unitMixMarketRent_avgBookedRate_" + index)
			.value
	).value();
	let meanOccupancy = numeral(
		document.getElementById("page_4_unitMixMarketRent_meanOccupancy_" + index)
			.value
	).value();
	document.getElementById(
		"page_4_unitMixMarketRent_daysBooked_" + index
	).innerHTML = (30 * meanOccupancy).toFixed(0);

	document.getElementById(
		"page_4_unitMixMarketRent_monthlyMarketRent_" + index
	).innerHTML =
		"$" +
		(avgBookedRate * (30 * meanOccupancy)).toLocaleString(undefined, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		});

	if (
		document.getElementById("page_4_unitMixMarketRent_sqFt_" + index).innerHTML ==
			0 ||
		document.getElementById("page_4_unitMixMarketRent_sqFt_" + index).innerHTML ==
			""
	) {
		document.getElementById(
			"page_4_unitMixMarketRent_rentPerSF_" + index
		).innerHTML = 0;
	} else {
		//
		document.getElementById(
			"page_4_unitMixMarketRent_rentPerSF_" + index
		).innerHTML =
			"$" +
			(
				numeral(
					document.getElementById(
						"page_4_unitMixMarketRent_monthlyMarketRent_" + index
					).innerHTML
				).value() /
				numeral(
					document.getElementById("page_4_unitMixMarketRent_sqFt_" + index).innerHTML
				).value()
			).toLocaleString(undefined, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
	}

	let result = 0;
	for (let i = 1; i < 6; i++) {
		result +=
			numeral(
				document.getElementById("page_4_unitMixMarketRent_monthlyMarketRent_" + i)
					.innerHTML
			).value() *
			numeral(
				document.getElementById("page_4_unitMixMarketRent_units_" + i).innerHTML
			).value();
	}
	document.getElementById(
		"page_4_unitMixMarketRent_totalMonthlyRentRoll"
	).innerHTML = "$" + result.toLocaleString();

	document.getElementById("page_4_totalGrossMonthlyRent").value =
		"$" + result.toLocaleString();

	page_4_calculateTotalGrossMonthlyRevenue();
	//
	// 4
}

function toggleUnitMixBreakdown() {
	$("#unitMixBreakdownMainDiv").toggle(500);
}
function toggleSourcesOfIncome() {
	$("#sourcesOfIncomeMainDiv").toggle(500);
}

document.getElementById("page_4_unitMixMarketRent_avgBookedRate_1").value =
	document.getElementById("page_3_seasonalIncome_bookedRate_Avg").value;
document.getElementById("page_4_unitMixMarketRent_meanOccupancy_1").value =
	document.getElementById("page_3_seasonalIncome_occupancy_Avg").value;
page_4_calculateDaysBookedAndMonthlyMarketRentAndRentPerSF("1");

function page_4_CalculateTotalOtherIncome() {
	let totalSum = 0;
	totalSum =
		numeral(
			document.getElementById("page_4_sourcesOfIncome_cleaningFees").value
		).value() +
		numeral(
			document.getElementById("page_4_sourcesOfIncome_damageFees").value
		).value() +
		numeral(
			document.getElementById("page_4_sourcesOfIncome_checkInOrOutFees").value
		).value() +
		numeral(
			document.getElementById("page_4_sourcesOfIncome_petFees").value
		).value() +
		numeral(
			document.getElementById("page_4_sourcesOfIncome_otherAdditionalIncome").value
		).value();

	document.getElementById("page_4_totalOtherIncome").value =
		"$" + totalSum.toLocaleString();

	page_4_calculateTotalGrossMonthlyRevenue();
}

function page_4_calculateTotalGrossMonthlyRevenue() {
	let totalSum = 0;
	totalSum =
		numeral(
			document.getElementById("page_4_totalGrossMonthlyRent").value
		).value() +
		numeral(document.getElementById("page_4_totalOtherIncome").value).value();
	document.getElementById("page_4_totalGrossMonthlyRevenue").value =
		"$" + totalSum.toLocaleString();
	// page_4_totalGrossMonthlyRevenue
}

function page_4_calculateAverageSTRExpenses() {
	document.getElementById(
		"page_4_avgSTRExpenses_fixedPropertyExpenses_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_fixedPropertyExpenses_Avg"
	).value;
	document.getElementById("page_4_avgSTRExpenses_rentOrMortgage_Avg").value =
		document.getElementById("page_3_seasonalExpenses_rentOrMortgage_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_hoaOrCOA_Avg").value =
		document.getElementById("page_3_seasonalExpenses_hoaOrCOA_Avg").value;
	document.getElementById(
		"page_4_avgSTRExpenses_mortgageInsurancePMI_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_mortgageInsurancePMI_Avg"
	).value;
	document.getElementById("page_4_avgSTRExpenses_propertyTaxes_Avg").value =
		document.getElementById("page_3_seasonalExpenses_propertyTaxes_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_homeownerInsurance_Avg").value =
		document.getElementById(
			"page_3_seasonalExpenses_homeownerInsurance_Avg"
		).value;
	document.getElementById("page_4_avgSTRExpenses_strInsurance_Avg").value =
		document.getElementById("page_3_seasonalExpenses_strInsurance_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_otaCommission_Avg").value =
		document.getElementById("page_3_seasonalExpenses_otaCommission_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_airbndCommission_Avg").value =
		document.getElementById("page_3_seasonalExpenses_airbndCommission_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_vrboCommission_Avg").value =
		document.getElementById("page_3_seasonalExpenses_vrboCommission_Avg").value;
	document.getElementById(
		"page_4_avgSTRExpenses_bookingComCommission_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_bookingComCommission_Avg"
	).value;
	document.getElementById("page_4_avgSTRExpenses_otherOTACommission_Avg").value =
		document.getElementById(
			"page_3_seasonalExpenses_otherOTACommission_Avg"
		).value;
	document.getElementById("page_4_avgSTRExpenses_utilities_Avg").value =
		document.getElementById("page_3_seasonalExpenses_utilities_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_electricity_Avg").value =
		document.getElementById("page_3_seasonalExpenses_electricity_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_waterAndSewer_Avg").value =
		document.getElementById("page_3_seasonalExpenses_waterAndSewer_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_gas_Avg").value =
		document.getElementById("page_3_seasonalExpenses_gas_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_trash_Avg").value =
		document.getElementById("page_3_seasonalExpenses_trash_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_internetWifi_Avg").value =
		document.getElementById("page_3_seasonalExpenses_internetWifi_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_otherUtilities_Avg").value =
		document.getElementById("page_3_seasonalExpenses_otherUtilities_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_strOccupancyTaxes_Avg").value =
		document.getElementById(
			"page_3_seasonalExpenses_strOccupancyTaxes_Avg"
		).value;
	document.getElementById(
		"page_4_avgSTRExpenses_repairsAndMaintenance_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_repairsAndMaintenance_Avg"
	).value;
	document.getElementById("page_4_avgSTRExpenses_cleaningFees_Avg").value =
		document.getElementById("page_3_seasonalExpenses_cleaningFees_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_landscaping_Avg").value =
		document.getElementById("page_3_seasonalExpenses_landscaping_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_snowRemoval_Avg").value =
		document.getElementById("page_3_seasonalExpenses_snowRemoval_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_pestControl_Avg").value =
		document.getElementById("page_3_seasonalExpenses_pestControl_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_poolMaintenance_Avg").value =
		document.getElementById("page_3_seasonalExpenses_poolMaintenance_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_hvacMaintenance_Avg").value =
		document.getElementById("page_3_seasonalExpenses_hvacMaintenance_Avg").value;
	document.getElementById(
		"page_4_avgSTRExpenses_otherRegularMaintenance_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_otherRegularMaintenance_Avg"
	).value;
	document.getElementById(
		"page_4_avgSTRExpenses_duesAndSubscription_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_duesAndSubscription_Avg"
	).value;
	document.getElementById("page_4_avgSTRExpenses_pmsSoftware_Avg").value =
		document.getElementById("page_3_seasonalExpenses_pmsSoftware_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_pricingSoftware_Avg").value =
		document.getElementById("page_3_seasonalExpenses_pricingSoftware_Avg").value;
	document.getElementById("page_4_avgSTRExpenses_accountingSoftware_Avg").value =
		document.getElementById(
			"page_3_seasonalExpenses_accountingSoftware_Avg"
		).value;
	document.getElementById(
		"page_4_avgSTRExpenses_homeSecuritySoftware_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_homeSecuritySoftware_Avg"
	).value;
	document.getElementById("page_4_avgSTRExpenses_cableInternetTV_Avg").value =
		document.getElementById("page_3_seasonalExpenses_cableInternetTV_Avg").value;
	document.getElementById(
		"page_4_avgSTRExpenses_directBookingSoftware_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_directBookingSoftware_Avg"
	).value;
	document.getElementById("page_4_avgSTRExpenses_otherSubscriptions_Avg").value =
		document.getElementById(
			"page_3_seasonalExpenses_otherSubscriptions_Avg"
		).value;
	document.getElementById(
		"page_4_avgSTRExpenses_advertisingMarketing_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_advertisingMarketing_Avg"
	).value;
	document.getElementById("page_4_avgSTRExpenses_furnitureRental_Avg").value =
		document.getElementById("page_3_seasonalExpenses_furnitureRental_Avg").value;
	document.getElementById(
		"page_4_avgSTRExpenses_suppliesConsumables_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_suppliesConsumables_Avg"
	).value;
	document.getElementById("page_4_avgSTRExpenses_runner_Avg").value =
		document.getElementById("page_3_seasonalExpenses_runner_Avg").value;
	document.getElementById(
		"page_4_avgSTRExpenses_legalAndProfessional_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_legalAndProfessional_Avg"
	).value;
	document.getElementById(
		"page_4_avgSTRExpenses_generalAndAdminstrative_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_generalAndAdminstrative_Avg"
	).value;
	document.getElementById(
		"page_4_avgSTRExpenses_otherMonthlyExpenses_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_otherMonthlyExpenses_Avg"
	).value;

	// ----------
	let page_4_totalSumOfPropertyManagement = 0;
	for (let index = 0; index < arrayOfMonthNames.length; index++) {
		page_4_totalSumOfPropertyManagement += numeral(
			document.getElementById(
				"page_3_seasonalExpenses_propertyManagement_" + arrayOfMonthNames[index]
			).value
		).value();
	}
	document.getElementById("page_4_avgSTRExpenses_propertyManagement_Avg").value =
		"$" + page_4_totalSumOfPropertyManagement.toLocaleString();
	// ----------

	// ----------
	let page_4_totalSumOfOperationalExpenses = 0;
	for (let index = 0; index < arrayOfMonthNames.length; index++) {
		page_4_totalSumOfOperationalExpenses += numeral(
			document.getElementById(
				"page_3_seasonalExpenses_operationalExpenses_" + arrayOfMonthNames[index]
			).value
		).value();
	}
	document.getElementById(
		"page_4_avgSTRExpenses_operationalExpenses_Avg"
	).value = "$" + page_4_totalSumOfOperationalExpenses.toLocaleString();

	// ----------
	let page_4_totalSumOfCapitalExpenses = 0;
	for (let index = 0; index < arrayOfMonthNames.length; index++) {
		page_4_totalSumOfCapitalExpenses += numeral(
			document.getElementById(
				"page_3_seasonalExpenses_capitalExpenses_" + arrayOfMonthNames[index]
			).value
		).value();
	}
	document.getElementById("page_4_avgSTRExpenses_capitalExpenses_Avg").value =
		"$" + page_4_totalSumOfCapitalExpenses.toLocaleString();

	// ----------
	let page_4_totalSumOfVacancies = 0;
	for (let index = 0; index < arrayOfMonthNames.length; index++) {
		page_4_totalSumOfVacancies += numeral(
			document.getElementById(
				"page_3_seasonalExpenses_vacancy_" + arrayOfMonthNames[index]
			).value
		).value();
	}
	document.getElementById("page_4_avgSTRExpenses_vacancy_Avg").value =
		"$" + page_4_totalSumOfVacancies.toLocaleString();

	document.getElementById(
		"page_4_avgSTRExpenses_totalMonthlyExpenses_Avg"
	).value = document.getElementById(
		"page_3_seasonalExpenses_totalMonthlyExpenses_Avg"
	).value;
}

//#endregion

//  <!-- Output Amortization Chart Data SCRIPTS -->
//#region
var OACD_table_paymentNumber;
var OACD_table_payment;
var OACD_table_principle;
var OACD_table_interest;
var OACD_table_balance;
var OACD_table_equity;

function calculateChartData() {
	let OACD_interestRate = numeral(
		document.getElementById("pg_2_interestRate").value
	).value();
	let OACD_years = numeral(
		document.getElementById("pg_2_loanAmortization").value
	).value();
	let OACD_paymentsPerYear = 12;
	let OACD_loanAmount = numeral(
		document.getElementById("pg_2_adjustedLoanAmount").value
	).value();

	OACD_table_payment = [];
	OACD_table_principle = [];
	OACD_table_interest = [];
	OACD_table_balance = [];
	OACD_table_equity = [];

	// Payment
	for (let index = 0; index < 366; index++) {
		let tablePayment = formulajs.PMT(
			OACD_interestRate / OACD_paymentsPerYear,
			OACD_years * OACD_paymentsPerYear,
			OACD_loanAmount
		);
		OACD_table_payment.push(
			Math.abs(
				tablePayment.toLocaleString(undefined, {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				})
			)
		);
	}

	// Principle
	for (let index = 0; index < 366; index++) {
		let tablePrinciple = formulajs.PPMT(
			OACD_interestRate / OACD_paymentsPerYear,
			index + 1,
			OACD_years * OACD_paymentsPerYear,
			OACD_loanAmount
		);
		if (tablePrinciple != null) {
			OACD_table_principle.push(tablePrinciple);
		} else {
			OACD_table_principle.push(Math.abs(tablePrinciple));
		}
	}

	// Interest
	for (let index = 0; index < 366; index++) {
		let tableInterest = formulajs.IPMT(
			OACD_interestRate / OACD_paymentsPerYear,
			index + 1,
			OACD_years * OACD_paymentsPerYear,
			OACD_loanAmount
		);
		OACD_table_interest.push(Math.abs(tableInterest));
	}

	// Balance
	for (let index = 0; index < 366; index++) {
		if (index == 0) {
			let result = OACD_loanAmount + numeral(OACD_table_principle[index]).value();
			OACD_table_balance.push(result);
		} else {
			let result =
				numeral(OACD_table_balance[index - 1]).value() +
				numeral(OACD_table_principle[index]).value();
			OACD_table_balance.push(result);
		}
	}

	// Equity
	for (let x = 0; x < 366; x++) {
		let totalSum = 0;
		for (let i = 0; i < x + 1; i++) {
			totalSum += OACD_table_principle[i];
		}
		OACD_table_equity.push(0 - totalSum);
	}

	// ________________
}
//#endregion

// <!-- PAGE 5 SCRIPTS -->
//#region

function page_5_runAllCalculateFunction() {
	page_5_calculateAdjustedBAH();
	page_5_calculateTotalMonthlyRent();
	page_5_calculateTotalOtherIncome();
	page_5_calculateTotalGrossMonthlySTRRevenue();
	page_5_calculateAnnualPotentialSTRRevenue();
	page_5_calculateAnnualPotentialBAH();
	page_5_calculateGrossTotalPotentialIncome();

	page_5_calculateMortgagePrinciple();
	page_5_calculateMortgageInterest();
	page_5_calculateMortgageInsurancePMI();
	page_5_calculateTotalDebtService();
	page_5_calculatePropertyTaxes();
	page_5_calculateHomeOwnersInsurance();
	page_5_calculateTotalMortgagePayment();

	page_5_calculateFixedPropertyExpenses();
	page_5_calculateOTACommission();
	page_5_calculateUtilities();
	page_5_calculateSTROccupancyTaxes();
	page_5_calculateRepairsAndMaintenance();
	page_5_calculateDuesAndSubscription();
	page_5_calculateAdvertisingOrMarketing();
	page_5_calculateFurnitureRental();
	page_5_calculateSuppliesOrConsumables();
	page_5_calculateRunner();
	page_5_calculateLegalAndProfessional();
	page_5_calculateGeneralAndAdministrative();
	page_5_calculateOtherMonthlyExpenses();
	page_5_calculatePropertyManagement();
	page_5_calculateOperationalExpenses();
	page_5_calculateCapitalExpenses();
	page_5_calculateVacancy();
	page_5_calculateTotalOperatingExpenses();
	page_5_calculateIncomeVsExpenseRatio();
	page_5_calculateAnnualCashFlow();
	page_5_calculateMonthlyCashFlowPerUnit();
}

function page_5_calculateAdjustedBAH() {
	document.getElementById("page_5_adjustedBAH_Year_1").innerHTML =
		numeral(
			document.getElementById("page_4_BAH_BasicHousingAllowance").value
		).value() *
		numeral(document.getElementById("page_4_BAH_CompensationRate").value).value();

	let constant =
		numeral(
			document.getElementById("page_4_BAH_BasicHousingAllowance").value
		).value() *
		numeral(document.getElementById("page_4_BAH_AnnualGrowthRate").value).value();
	let result = 0;
	for (let index = 1; index < 11; index++) {
		result = numeral(
			document.getElementById("page_5_adjustedBAH_Year_" + index).innerHTML
		).value();

		if (index != 10) {
			document.getElementById("page_5_adjustedBAH_Year_" + (index + 1)).innerHTML =
				"$" + (result + constant).toLocaleString();
		}
	}
}

function page_5_calculateTotalMonthlyRent() {
	document.getElementById("page_5_totalMonthlyRent_Year_1").innerHTML =
		document.getElementById("page_4_totalGrossMonthlyRent").value;

	let constant =
		numeral(
			document.getElementById("page_4_totalGrossMonthlyRent").value
		).value() *
		numeral(
			document.getElementById("page_4_futureSTR_annualIncomeGrowthRate").value
		).value();
	let result = 0;
	for (let index = 1; index < 11; index++) {
		result = numeral(
			document.getElementById("page_5_totalMonthlyRent_Year_" + index).innerHTML
		).value();

		if (index != 10) {
			document.getElementById(
				"page_5_totalMonthlyRent_Year_" + (index + 1)
			).innerHTML = "$" + (result + constant).toLocaleString();
		}
	}
}

function page_5_calculateTotalOtherIncome() {
	document.getElementById("page_5_totalOtherIncome_Year_1").innerHTML =
		document.getElementById("page_4_totalOtherIncome").value;

	let constant =
		numeral(document.getElementById("page_4_totalOtherIncome").value).value() *
		numeral(
			document.getElementById("page_4_futureSTR_annualOtherIncomeGrowthRate").value
		).value();
	let result = 0;
	for (let index = 1; index < 11; index++) {
		result = numeral(
			document.getElementById("page_5_totalOtherIncome_Year_" + index).innerHTML
		).value();

		if (index != 10) {
			document.getElementById(
				"page_5_totalOtherIncome_Year_" + (index + 1)
			).innerHTML = "$" + (result + constant).toLocaleString();
		}
	}
}

function page_5_calculateTotalGrossMonthlySTRRevenue() {
	let totalSum = 0;
	for (let index = 1; index < 11; index++) {
		totalSum =
			numeral(
				document.getElementById("page_5_adjustedBAH_Year_" + index).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_totalMonthlyRent_Year_" + index).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_totalOtherIncome_Year_" + index).innerHTML
			).value();

		document.getElementById(
			"page_5_totalGrossMonthlySTRRevenue_Year_" + index
		).innerHTML = "$" + totalSum.toLocaleString();
	}
}

function page_5_calculateAnnualPotentialSTRRevenue() {
	let totalSum = 0;
	for (let index = 1; index < 11; index++) {
		totalSum =
			(numeral(
				document.getElementById("page_5_totalMonthlyRent_Year_" + index).innerHTML
			).value() +
				numeral(
					document.getElementById("page_5_totalOtherIncome_Year_" + index).innerHTML
				).value()) *
			12;

		document.getElementById(
			"page_5_annualPotentialSTRRevenue_Year_" + index
		).innerHTML = "$" + totalSum.toLocaleString();
	}
}

function page_5_calculateAnnualPotentialBAH() {
	let totalSum = 0;
	for (let index = 1; index < 11; index++) {
		totalSum =
			numeral(
				document.getElementById("page_5_adjustedBAH_Year_" + index).innerHTML
			).value() * 12;

		document.getElementById("page_5_annualPotentialBAH_Year_" + index).innerHTML =
			"$" + totalSum.toLocaleString();
	}
}

function page_5_calculateGrossTotalPotentialIncome() {
	let totalSum = 0;
	for (let index = 1; index < 11; index++) {
		totalSum =
			numeral(
				document.getElementById("page_5_annualPotentialSTRRevenue_Year_" + index)
					.innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_annualPotentialBAH_Year_" + index).innerHTML
			).value();

		document.getElementById(
			"page_5_grossTotalPotentialIncome_Year_" + index
		).innerHTML = "$" + totalSum.toLocaleString();
	}
}

function page_5_calculateMortgagePrinciple() {
	if (
		document.getElementById("pg_2_yearsInterestOnly").value == "1" ||
		document.getElementById("pg_2_yearsInterestOnly").value == "2" ||
		document.getElementById("pg_2_yearsInterestOnly").value == "3"
	) {
		document.getElementById("page_5_mortgagePrincipal_Year_1").innerHTML = 0;
	} else {
		let result = formulajs.PPMT(
			numeral(document.getElementById("pg_2_interestRate").value).value() / 12,
			1,
			numeral(document.getElementById("pg_2_loanAmortization").value).value() * 12,
			numeral(document.getElementById("pg_2_adjustedLoanAmount").value).value()
		);

		document.getElementById("page_5_mortgagePrincipal_Year_1").innerHTML = result;
	}

	if (
		document.getElementById("pg_2_yearsInterestOnly").value == "2" ||
		document.getElementById("pg_2_yearsInterestOnly").value == "3"
	) {
		document.getElementById("page_5_mortgagePrincipal_Year_2").innerHTML = 0;
	} else {
		document.getElementById("page_5_mortgagePrincipal_Year_2").innerHTML =
			OACD_table_principle[31];
	}

	if (document.getElementById("pg_2_yearsInterestOnly").value == "3") {
		document.getElementById("page_5_mortgagePrincipal_Year_3").innerHTML = 0;
	} else {
		document.getElementById("page_5_mortgagePrincipal_Year_3").innerHTML =
			OACD_table_principle[43];
	}

	document.getElementById("page_5_mortgagePrincipal_Year_4").innerHTML =
		OACD_table_principle[55];
	document.getElementById("page_5_mortgagePrincipal_Year_5").innerHTML =
		OACD_table_principle[67];
	document.getElementById("page_5_mortgagePrincipal_Year_6").innerHTML =
		OACD_table_principle[79];
	document.getElementById("page_5_mortgagePrincipal_Year_7").innerHTML =
		OACD_table_principle[91];
	document.getElementById("page_5_mortgagePrincipal_Year_8").innerHTML =
		OACD_table_principle[103];
	document.getElementById("page_5_mortgagePrincipal_Year_9").innerHTML =
		OACD_table_principle[115];
	document.getElementById("page_5_mortgagePrincipal_Year_10").innerHTML =
		OACD_table_principle[127];
}

function page_5_calculateMortgageInterest() {
	let result = formulajs.IPMT(
		numeral(document.getElementById("pg_2_interestRate").value).value() / 12,
		1,
		numeral(document.getElementById("pg_2_loanAmortization").value).value() * 12,
		numeral(document.getElementById("pg_2_adjustedLoanAmount").value).value()
	);
	document.getElementById("page_5_mortgageInterest_Year_1").innerHTML = result;
	document.getElementById("page_5_mortgageInterest_Year_2").innerHTML =
		OACD_table_interest[31];
	document.getElementById("page_5_mortgageInterest_Year_3").innerHTML =
		OACD_table_interest[43];
	document.getElementById("page_5_mortgageInterest_Year_4").innerHTML =
		OACD_table_interest[55];
	document.getElementById("page_5_mortgageInterest_Year_5").innerHTML =
		OACD_table_interest[67];
	document.getElementById("page_5_mortgageInterest_Year_6").innerHTML =
		OACD_table_interest[78];
	document.getElementById("page_5_mortgageInterest_Year_7").innerHTML =
		OACD_table_interest[91];
	document.getElementById("page_5_mortgageInterest_Year_8").innerHTML =
		OACD_table_interest[103];
	document.getElementById("page_5_mortgageInterest_Year_9").innerHTML =
		OACD_table_interest[115];
	document.getElementById("page_5_mortgageInterest_Year_10").innerHTML =
		OACD_table_interest[127];
}

function page_5_calculateMortgageInsurancePMI() {
	for (var i = 1; i < 11; i++) {
		document.getElementById("page_5_mortgageInsurancePMI_Year_" + i).innerHTML =
			numeral(document.getElementById("pg_2_mortgageInsurance").value).value();
	}
}

function page_5_calculateTotalDebtService() {
	for (var i = 1; i < 11; i++) {
		document.getElementById("page_5_totalDebtService_Year_" + i).innerHTML =
			numeral(
				document.getElementById("page_5_mortgagePrincipal_Year_" + i).value
			).value() +
			numeral(
				document.getElementById("page_5_mortgageInterest_Year_" + i).value
			).value() +
			numeral(
				document.getElementById("page_5_mortgageInsurancePMI_Year_" + i).value
			).value();
	}
}

function page_5_calculatePropertyTaxes() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_propertyTaxes_Year_" + i).innerHTML =
				numeral(
					document.getElementById("page_4_futureExpenseAssumption_propertyTaxes")
						.value
				).value() / 12;
		} else {
			document.getElementById("page_5_propertyTaxes_Year_" + i).innerHTML =
				numeral(
					document.getElementById("page_5_mortgagePrincipal_Year_" + (i - 1)).value
				).value() +
				numeral(
					document.getElementById("page_5_mortgagePrincipal_Year_" + (i - 1)).value
				).value() *
					numeral(
						document.getElementById(
							"page_4_futureExpenseAssumption_annualTaxExpenseGrowth"
						).value
					).value();
		}
	}
}

function page_5_calculateHomeOwnersInsurance() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_homeownersInsurance_Year_" + i).innerHTML =
				document.getElementById(
					"page_3_seasonalExpenses_homeownerInsurance_Avg"
				).value;
		} else {
			let result =
				numeral(
					document.getElementById("page_5_homeownersInsurance_Year_" + (i - 1))
						.innerHTML
				).value() +
				numeral(
					document.getElementById("page_5_homeownersInsurance_Year_" + (i - 1))
						.innerHTML
				).value() *
					numeral(
						document.getElementById(
							"page_4_futureExpenseAssumption_annualInsuranceExpenseGrowth"
						).value
					).value();
			document.getElementById("page_5_homeownersInsurance_Year_" + i).innerHTML =
				"$" + result.toFixed(0).toLocaleString();
		}
	}
}

function page_5_calculateTotalMortgagePayment() {
	for (var i = 1; i < 11; i++) {
		let result =
			numeral(
				document.getElementById("page_5_totalDebtService_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_propertyTaxes_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_homeownersInsurance_Year_" + i).innerHTML
			).value();
		document.getElementById("page_5_totalMortgagePayment_Year_" + i).innerHTML =
			result;
	}
}

function page_5_calculateFixedPropertyExpenses() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_fixedPropertyExpenses_Year_" + i).innerHTML =
				document.getElementById(
					"page_4_avgSTRExpenses_fixedPropertyExpenses_Avg"
				).value;
		} else {
			let result =
				numeral(
					document.getElementById("page_5_fixedPropertyExpenses_Year_" + (i - 1))
						.innerHTML
				).value() +
				numeral(
					document.getElementById("page_5_fixedPropertyExpenses_Year_" + (i - 1))
						.innerHTML
				).value() *
					numeral(
						document.getElementById(
							"page_4_futureExpenseAssumption_annualTaxExpenseGrowth"
						).value
					).value();
			document.getElementById("page_5_fixedPropertyExpenses_Year_" + i).innerHTML =
				"$" + result.toFixed(0).toLocaleString();
		}
	}
}

function page_5_calculateOTACommission() {
	for (var i = 1; i < 11; i++) {
		document.getElementById("page_5_otaComission_Year_" + i).innerHTML =
			document.getElementById("page_4_avgSTRExpenses_otaCommission_Avg").value;
	}
}

function page_5_calculateUtilities() {
	for (var i = 1; i < 11; i++) {
		document.getElementById("page_5_utilities_Year_" + i).innerHTML =
			document.getElementById("page_4_avgSTRExpenses_utilities_Avg").value;
	}
}

function page_5_calculateSTROccupancyTaxes() {
	for (var i = 1; i < 11; i++) {
		document.getElementById("page_5_strOccupanceTaxes_Year_" + i).innerHTML =
			document.getElementById("page_4_avgSTRExpenses_strOccupancyTaxes_Avg").value;
	}
}

function page_5_calculateRepairsAndMaintenance() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_repairsAndMaintenance_Year_" + i).innerHTML =
				document.getElementById(
					"page_4_avgSTRExpenses_repairsAndMaintenance_Avg"
				).value;
		} else {
			let result =
				numeral(
					document.getElementById("page_5_repairsAndMaintenance_Year_" + (i - 1))
						.innerHTML
				).value() +
				numeral(
					document.getElementById("page_5_repairsAndMaintenance_Year_" + (i - 1))
						.innerHTML
				).value() *
					0;
			document.getElementById("page_5_repairsAndMaintenance_Year_" + i).innerHTML =
				"$" + result.toFixed(0).toLocaleString();
		}
	}
}

function page_5_calculateDuesAndSubscription() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_duesAndSubscriptions_Year_" + i).innerHTML =
				document.getElementById(
					"page_4_avgSTRExpenses_duesAndSubscription_Avg"
				).value;
		} else {
			document.getElementById("page_5_duesAndSubscriptions_Year_" + i).innerHTML =
				document.getElementById("page_5_duesAndSubscriptions_Year_1").innerHTML;
		}
	}
}

function page_5_calculateAdvertisingOrMarketing() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById(
				"page_5_advertisingOrMarketing_Year_" + i
			).innerHTML = document.getElementById(
				"page_4_avgSTRExpenses_advertisingMarketing_Avg"
			).value;
		} else {
			document.getElementById(
				"page_5_advertisingOrMarketing_Year_" + i
			).innerHTML = document.getElementById(
				"page_5_advertisingOrMarketing_Year_1"
			).innerHTML;
		}
	}
}

function page_5_calculateFurnitureRental() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_furnitureRental_Year_" + i).innerHTML =
				document.getElementById("page_4_avgSTRExpenses_furnitureRental_Avg").value;
		} else {
			document.getElementById("page_5_furnitureRental_Year_" + i).innerHTML =
				document.getElementById("page_5_furnitureRental_Year_1").innerHTML;
		}
	}
}

function page_5_calculateSuppliesOrConsumables() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_suppliesOrConsumables_Year_" + i).innerHTML =
				document.getElementById(
					"page_4_avgSTRExpenses_suppliesConsumables_Avg"
				).value;
		} else {
			document.getElementById("page_5_suppliesOrConsumables_Year_" + i).innerHTML =
				document.getElementById("page_5_suppliesOrConsumables_Year_1").innerHTML;
		}
	}
}

function page_5_calculateRunner() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_runner_Year_" + i).innerHTML =
				document.getElementById("page_4_avgSTRExpenses_runner_Avg").value;
		} else {
			document.getElementById("page_5_runner_Year_" + i).innerHTML =
				document.getElementById("page_5_runner_Year_1").innerHTML;
		}
	}
}

function page_5_calculateLegalAndProfessional() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_legalAndProfessional_Year_" + i).innerHTML =
				document.getElementById(
					"page_4_avgSTRExpenses_legalAndProfessional_Avg"
				).value;
		} else {
			document.getElementById("page_5_legalAndProfessional_Year_" + i).innerHTML =
				document.getElementById("page_5_legalAndProfessional_Year_1").innerHTML;
		}
	}
}

function page_5_calculateGeneralAndAdministrative() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById(
				"page_5_generalAndAdminstrative_Year_" + i
			).innerHTML = document.getElementById(
				"page_4_avgSTRExpenses_generalAndAdminstrative_Avg"
			).value;
		} else {
			document.getElementById(
				"page_5_generalAndAdminstrative_Year_" + i
			).innerHTML = document.getElementById(
				"page_5_generalAndAdminstrative_Year_1"
			).innerHTML;
		}
	}
}

function page_5_calculateOtherMonthlyExpenses() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_otherMonthlyExpenses_Year_" + i).innerHTML =
				document.getElementById(
					"page_4_avgSTRExpenses_otherMonthlyExpenses_Avg"
				).value;
		} else {
			document.getElementById("page_5_otherMonthlyExpenses_Year_" + i).innerHTML =
				document.getElementById("page_5_otherMonthlyExpenses_Year_1").innerHTML;
		}
	}
}

function page_5_calculatePropertyManagement() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_propertyManagement_Year_" + i).innerHTML =
				document.getElementById(
					"page_4_avgSTRExpenses_propertyManagement_Avg"
				).value;
		} else {
			document.getElementById("page_5_propertyManagement_Year_" + i).innerHTML =
				document.getElementById("page_5_propertyManagement_Year_1").innerHTML;
		}
	}
}

function page_5_calculateOperationalExpenses() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_operationalExpenses_Year_" + i).innerHTML =
				document.getElementById(
					"page_4_avgSTRExpenses_operationalExpenses_Avg"
				).value;
		} else {
			document.getElementById("page_5_operationalExpenses_Year_" + i).innerHTML =
				document.getElementById("page_5_operationalExpenses_Year_1").innerHTML;
		}
	}
}

function page_5_calculateCapitalExpenses() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_capitalExpenses_Year_" + i).innerHTML =
				document.getElementById("page_4_avgSTRExpenses_capitalExpenses_Avg").value;
		} else {
			document.getElementById("page_5_capitalExpenses_Year_" + i).innerHTML =
				document.getElementById("page_5_capitalExpenses_Year_1").innerHTML;
		}
	}
}

function page_5_calculateVacancy() {
	for (var i = 1; i < 11; i++) {
		if (i == 1) {
			document.getElementById("page_5_vacancy_Year_" + i).innerHTML =
				document.getElementById("page_4_avgSTRExpenses_vacancy_Avg").value;
		} else {
			document.getElementById("page_5_vacancy_Year_" + i).innerHTML =
				document.getElementById("page_5_vacancy_Year_1").innerHTML;
		}
	}
}

function page_5_calculateTotalOperatingExpenses() {
	for (var i = 1; i < 11; i++) {
		let result =
			numeral(
				document.getElementById("page_5_fixedPropertyExpenses_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_otaComission_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_utilities_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_strOccupanceTaxes_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_repairsAndMaintenance_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_duesAndSubscriptions_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_advertisingOrMarketing_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_furnitureRental_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_suppliesOrConsumables_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_runner_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_legalAndProfessional_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_generalAndAdminstrative_Year_" + i)
					.innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_otherMonthlyExpenses_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_propertyManagement_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_operationalExpenses_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_capitalExpenses_Year_" + i).innerHTML
			).value() +
			numeral(
				document.getElementById("page_5_vacancy_Year_" + i).innerHTML
			).value();

		document.getElementById("page_5_totalOperatingExpenses_Year_" + i).innerHTML =
			"$" + result.toLocaleString();
	}
}

function page_5_calculateIncomeVsExpenseRatio() {
	for (var i = 1; i < 11; i++) {
		let result =
			numeral(
				document.getElementById("page_5_totalOperatingExpenses_Year_" + i).innerHTML
			).value() *
			(12 /
				numeral(
					document.getElementById("page_5_grossTotalPotentialIncome_Year_" + i)
						.innerHTML
				).value());

		document.getElementById("page_5_incomeVsExpenseRatio_Year_" + i).innerHTML =
			(result * 100).toLocaleString(undefined, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}) + "%";
	}
}

function page_5_calculateAnnualCashFlow() {
	for (var i = 1; i < 11; i++) {
		let a =
			numeral(
				document.getElementById("page_5_totalMortgagePayment_Year_" + i).innerHTML
			).value() * 12;
		let b =
			numeral(
				document.getElementById("page_5_totalOperatingExpenses_Year_" + i).innerHTML
			).value() * 12;
		let result =
			numeral(
				document.getElementById("page_5_grossTotalPotentialIncome_Year_" + i)
					.innerHTML
			).value() -
			a -
			b;
		document.getElementById("page_5_annualCashFlow_Year_" + i).innerHTML =
			"$" +
			result.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			});
	}
}

function page_5_calculateMonthlyCashFlowPerUnit() {
	for (var i = 1; i < 11; i++) {
		let result =
			numeral(
				document.getElementById("page_5_annualCashFlow_Year_" + i).innerHTML
			).value() /
			numeral(
				document.getElementById("page_4_totalNoOfUnitsInOperation").value
			).value();
		result = result / 12;
		document.getElementById("page_5_monthlyCashFlowPerUnit_Year_" + i).innerHTML =
			"$" +
			result.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			});
	}
}
//#endregion

// <!-- PAGE 6 SCRIPTS -->
//#region

function page_6_calculateAcquisitionAnalysis() {
	if (document.getElementById("pg_2_purchase_price").value == "") {
		document.getElementById("page_6_acquisitionAnalysis_purchasePrice").value =
			"N/A";
	} else {
		document.getElementById("page_6_acquisitionAnalysis_purchasePrice").value =
			document.getElementById("pg_2_purchase_price").value;
	}
	if (document.getElementById("pg_2_amountForFinancing").value == "") {
		document.getElementById(
			"page_6_acquisitionAnalysis_totalAmountForFinancing"
		).value = "N/A";
	} else {
		document.getElementById(
			"page_6_acquisitionAnalysis_totalAmountForFinancing"
		).value = document.getElementById("pg_2_amountForFinancing").value;
	}

	if (document.getElementById("pg_2_estimatedRepairCost").value == "") {
		document.getElementById(
			"page_6_acquisitionAnalysis_estimatedRepairCosts"
		).value = "N/A";
	} else {
		document.getElementById(
			"page_6_acquisitionAnalysis_estimatedRepairCosts"
		).value = document.getElementById("pg_2_estimatedRepairCost").value;
	}
	document.getElementById("page_6_acquisitionAnalysis_cashPurchase").value =
		document.getElementById("pg_2_cashPurchase").value;
	document.getElementById("page_6_acquisitionAnalysis_financingType").value =
		document.getElementById("pg_2_financingType").value;
	document.getElementById("page_6_acquisitionAnalysis_mortgageType").value =
		document.getElementById("pg_2_mortgageType").value;
	document.getElementById("page_6_acquisitionAnalysis_downPayment").value =
		document.getElementById("pg_2_downPaymentPurchase").value;
	document.getElementById("page_6_acquisitionAnalysis_interestRate").value =
		document.getElementById("pg_2_interestRate").value;
	document.getElementById("page_6_acquisitionAnalysis_amortizationYears").value =
		document.getElementById("pg_2_loanAmortization").value;

	// _______________
	if (document.getElementById("pg_2_cashPurchase").value == "Yes") {
		let sum =
			numeral(getElementById("pg_2_purchase_price").value).value() +
			numeral(getElementById("pg_2_closingCosts").value).value();
		document.getElementById("page_6_acquisitionAnalysis_cashToClose").value =
			"$" + sum.toLocaleString();
	} else {
		if (document.getElementById("pg_2_wrapFeesIntoLoad").value == "Yes") {
			let sum =
				numeral(document.getElementById("pg_2_downPaymentPurchase").value).value() +
				numeral(document.getElementById("pg_2_closingCosts").value).value();
			document.getElementById("page_6_acquisitionAnalysis_cashToClose").value =
				"$" + sum.toLocaleString();
		} else {
			let sum =
				numeral(document.getElementById("pg_2_downPaymentPurchase").value).value() +
				numeral(document.getElementById("pg_2_closingCosts").value).value() +
				numeral(document.getElementById("pg_2_totalLenderFees").value).value();
			document.getElementById("page_6_acquisitionAnalysis_cashToClose").value =
				"$" + sum.toLocaleString();
		}
	}
	// _______________

	document.getElementById("page_6_acquisitionAnalysis_totalProjectCost").value =
		numeral(
			document.getElementById("page_6_acquisitionAnalysis_estimatedRepairCosts")
				.value
		).value() +
		numeral(
			document.getElementById("page_6_acquisitionAnalysis_cashToClose").value
		).value();
}

function page_6_calculateFinancialAnalysis() {
	document.getElementById("page_6_financialAnalysis_adjustedBAH").value =
		document.getElementById("page_5_adjustedBAH_Year_1").innerHTML;

	document.getElementById(
		"page_6_financialAnalysis_annualPotentialSTRRevenue"
	).value = document.getElementById(
		"page_5_grossTotalPotentialIncome_Year_1"
	).innerHTML;

	document.getElementById(
		"page_6_financialAnalysis_grossTotalPotentialIncome"
	).value =
		"$" +
		(
			numeral(
				document.getElementById("page_6_financialAnalysis_adjustedBAH").value
			).value() *
				12 +
			numeral(
				document.getElementById(
					"page_6_financialAnalysis_annualPotentialSTRRevenue"
				).value
			).value()
		).toLocaleString();

	document.getElementById(
		"page_6_financialAnalysis_grossAverageOperatingExpenses"
	).value =
		"$" +
		(
			numeral(
				document.getElementById("page_5_totalOperatingExpenses_Year_1").innerHTML
			).value() * 12
		).toLocaleString();

	document.getElementById(
		"page_6_financialAnalysis_grossMortgageEstimate"
	).value =
		"$" +
		(
			numeral(
				document.getElementById("page_5_totalMortgagePayment_Year_1").innerHTML
			).value() * 12
		).toLocaleString();

	document.getElementById("page_6_financialAnalysis_cashFlow").value =
		document.getElementById("page_5_annualCashFlow_Year_1").innerHTML;

	document.getElementById("page_6_financialAnalysis_netOperatingIncome").value =
		numeral(
			document.getElementById("page_6_financialAnalysis_grossTotalPotentialIncome")
				.value
		).value() -
		(numeral(
			document.getElementById(
				"page_6_financialAnalysis_grossAverageOperatingExpenses"
			).value
		).value() +
			numeral(
				document.getElementById("page_6_financialAnalysis_grossMortgageEstimate")
					.value
			).value());
}

function page_6_calculateEquityAnalysis() {
	document.getElementById("page_6_equityAnalysis_marketCAPRate").value =
		document.getElementById("page_4_marketCAPRate").value;
	document.getElementById("page_6_equityAnalysis_ARV").value =
		document.getElementById("pg_2_afterRepairValue").value;
	document.getElementById("page_6_equityAnalysis_actualAppraisedValue").value =
		document.getElementById("page_4_actualAppraisedValue").value;
	document.getElementById("page_6_equityAnalysis_CAPRateARV").value =
		"$" +
		(
			numeral(
				document.getElementById("page_6_financialAnalysis_netOperatingIncome").value
			).value() /
			numeral(
				document.getElementById("page_6_equityAnalysis_marketCAPRate").value
			).value()
		).toLocaleString();
	document.getElementById("page_6_equityAnalysis_initialEquity").value =
		"$" +
		(
			numeral(
				document.getElementById("page_6_equityAnalysis_actualAppraisedValue").value
			).value() -
			numeral(document.getElementById("pg_2_adjustedLoanAmount").value).value()
		).toLocaleString();
}

function page_6_calculateKeyPerformancesIndicators() {
	if (
		numeral(
			document.getElementById("page_6_acquisitionAnalysis_totalProjectCost").value
		).value() <= 0
	) {
		document.getElementById("page_6_keyPerformanceIndicators_cashOnCash").value =
			"Infinity";
		//
	} else {
		document.getElementById("page_6_keyPerformanceIndicators_cashOnCash").value =
			"$" +
			(
				numeral(
					document.getElementById("page_6_acquisitionAnalysis_totalProjectCost")
						.value
				).value() /
				numeral(
					document.getElementById("page_6_financialAnalysis_netOperatingIncome")
						.value
				).value()
			).toLocaleString();
	}

	document.getElementById(
		"page_6_keyPerformanceIndicators_averageOccupancy"
	).value = document.getElementById("page_3_seasonalIncome_occupancy_Avg").value;

	document.getElementById(
		"page_6_keyPerformanceIndicators_averageDaysBooked"
	).value =
		numeral(
			document.getElementById("page_6_keyPerformanceIndicators_averageOccupancy")
				.value
		).value() * 30;

	document.getElementById(
		"page_6_keyPerformanceIndicators_averageBookedRate"
	).value =
		"$" +
		(
			(numeral(
				document.getElementById("page_4_unitMixMarketRent_avgBookedRate_1").value
			).value() +
				numeral(
					document.getElementById("page_4_unitMixMarketRent_avgBookedRate_2").value
				).value() +
				numeral(
					document.getElementById("page_4_unitMixMarketRent_avgBookedRate_3").value
				).value() +
				numeral(
					document.getElementById("page_4_unitMixMarketRent_avgBookedRate_4").value
				).value() +
				numeral(
					document.getElementById("page_4_unitMixMarketRent_avgBookedRate_5").value
				).value()) /
			numeral(
				document.getElementById("page_4_totalNoOfUnitsInOperation").value
			).value()
		).toLocaleString(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

	document.getElementById(
		"page_6_keyPerformanceIndicators_revenuePerAvailableRoom"
	).value =
		"$" +
		(
			numeral(
				document.getElementById("page_6_keyPerformanceIndicators_averageBookedRate")
					.value
			).value() *
			numeral(
				document.getElementById("page_6_keyPerformanceIndicators_averageOccupancy")
					.value
			).value()
		).toLocaleString(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

	document.getElementById(
		"page_6_keyPerformanceIndicators_monthlyRevenue"
	).value =
		"$" +
		(
			numeral(
				document.getElementById("page_6_keyPerformanceIndicators_averageDaysBooked")
					.value
			).value() *
			numeral(
				document.getElementById("page_6_keyPerformanceIndicators_averageBookedRate")
					.value
			).value()
		).toLocaleString(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

	document.getElementById(
		"page_6_keyPerformanceIndicators_averageAnnualProfitMargin"
	).value =
		1 -
		numeral(
			document.getElementById("page_3_seasonalExpenses_operatingExpenseRatio_Avg")
				.value
		).value();
}
//#endregion
// ________________________________________________________________ //
