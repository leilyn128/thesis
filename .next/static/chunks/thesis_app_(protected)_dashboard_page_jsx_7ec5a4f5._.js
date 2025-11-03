(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/thesis/app/(protected)/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PieSection",
    ()=>PieSection,
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/lib/supabaseClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DashboardPage() {
    _s();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [budgetData, setBudgetData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [breakdownData, setBreakdownData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // === Watch for Auth Session ===
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then({
                "DashboardPage.useEffect": (param)=>{
                    let { data: { session } } = param;
                    setSession(session);
                    if (session) {
                        fetchBudgetData();
                        fetchBreakdownData();
                    }
                }
            }["DashboardPage.useEffect"]);
            const { data: listener } = __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "DashboardPage.useEffect": (_event, session)=>{
                    setSession(session);
                    if (session) {
                        fetchBudgetData();
                        fetchBreakdownData();
                    }
                }
            }["DashboardPage.useEffect"]);
            return ({
                "DashboardPage.useEffect": ()=>{
                    listener.subscription.unsubscribe();
                }
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], []);
    // === Fetch Yearly Total Income ===
    async function fetchBudgetData() {
        setLoading(true);
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("yearly_budget").select("year,total_income").order("year", {
                ascending: true
            });
            if (error) throw error;
            setBudgetData((data || []).map((d)=>({
                    year: Number(d.year),
                    totalIncome: Number(d.total_income) || 0
                })));
        } catch (err) {
            console.error("❌ Error fetching yearly_budget:", err.message);
        } finally{
            setLoading(false);
        }
    }
    // === Fetch Breakdown (Income vs Appropriations, grouped per year) ===
    async function fetchBreakdownData() {
        try {
            console.log("🔍 Fetching barangay_budget_breakdown…");
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("barangay_budget_breakdown").select("year, category, subcategory, description, amount").order("year", {
                ascending: true
            });
            if (error) throw error;
            if (!(data === null || data === void 0 ? void 0 : data.length)) {
                console.warn("⚠️ No breakdown data found.");
                return;
            }
            console.log("✅ Data fetched:", data.length, "rows");
            // 🔹 Group per year (make sure year is treated as number)
            const grouped = {};
            data.forEach((row)=>{
                var _row_category, _row_subcategory, _row_description;
                const year = Number(row.year);
                if (isNaN(year)) return;
                if (!grouped[year]) {
                    grouped[year] = {
                        income: {},
                        appropriations: {}
                    };
                }
                const cleanAmount = Number(String(row.amount).replace(/[,₱p\s]/gi, "")) || 0;
                // 🔹 Determine which group (Income or Appropriations)
                const cat = ((_row_category = row.category) === null || _row_category === void 0 ? void 0 : _row_category.toLowerCase().includes("income")) ? "income" : "appropriations";
                // 🔹 Label (subcategory > description)
                const label = ((_row_subcategory = row.subcategory) === null || _row_subcategory === void 0 ? void 0 : _row_subcategory.trim()) || ((_row_description = row.description) === null || _row_description === void 0 ? void 0 : _row_description.trim()) || "Uncategorized";
                grouped[year][cat][label] = (grouped[year][cat][label] || 0) + cleanAmount;
            });
            console.log("📊 Grouped Data Preview:", grouped);
            setBreakdownData(grouped);
        } catch (err) {
            console.error("❌ Breakdown fetch error:", err.message);
        }
    }
    // === File Upload for yearly_budget ===
    async function handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        setUploading(true);
        try {
            const fileName = file.name.toLowerCase();
            let rows = [];
            if (fileName.endsWith(".csv")) {
                const text = await file.text();
                const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(text, {
                    header: true,
                    skipEmptyLines: true
                });
                rows = parsed.data;
            } else if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
                const data = await file.arrayBuffer();
                const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](data, {
                    type: "array"
                });
                const sheet = workbook.Sheets[workbook.SheetNames[0]];
                rows = __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(sheet);
            } else {
                alert("Please upload a CSV or Excel file (.xlsx/.xls).");
                return;
            }
            const headers = Object.keys(rows[0] || {}).map((h)=>h.trim().toLowerCase());
            const yearHeader = headers.find((h)=>h.includes("year")) || "year";
            const incomeHeader = headers.find((h)=>h.includes("income")) || "total_income";
            for (const row of rows){
                const year = Number(String(row[yearHeader]).trim());
                const incomeStr = String(row[incomeHeader]).replace(/[₱pP\s]/g, "").replace(/,/g, "").replace(/[^\d.-]/g, "").trim();
                const total_income = parseFloat(incomeStr) || 0;
                if (!year || isNaN(year) || total_income <= 0) continue;
                await __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("yearly_budget").upsert({
                    year,
                    total_income
                }, {
                    onConflict: [
                        "year"
                    ]
                });
            }
            fetchBudgetData();
            alert("✅ Data uploaded successfully.");
        } catch (err) {
            console.error("❌ Upload error:", err.message);
            alert("Error uploading file.");
        } finally{
            setUploading(false);
            event.target.value = null;
        }
    }
    // === UI ===
    if (!session) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold text-gray-700",
            children: "Please log in first"
        }, void 0, false, {
            fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
            lineNumber: 190,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
        lineNumber: 189,
        columnNumber: 7
    }, this);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "p-6",
        children: "Loading budget data..."
    }, void 0, false, {
        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
        lineNumber: 194,
        columnNumber: 23
    }, this);
    const total = budgetData.reduce((sum, d)=>sum + d.totalIncome, 0);
    const avg = budgetData.length ? total / budgetData.length : 0;
    const max = Math.max(...budgetData.map((d)=>d.totalIncome), 0);
    const min = Math.min(...budgetData.map((d)=>d.totalIncome), 0);
    const currency = (val)=>new Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP"
        }).format(val);
    const selectedData = breakdownData[selectedYear] || {};
    const COLORS = [
        "#4F46E5",
        "#10B981",
        "#F59E0B",
        "#EF4444",
        "#3B82F6",
        "#8B5CF6",
        "#14B8A6"
    ];
    const toPieData = (obj)=>Object.entries(obj || {}).map((param)=>{
            let [name, value] = param;
            return {
                name,
                value
            };
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold",
                children: "Barangay Budget Dashboard"
            }, void 0, false, {
                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 mb-4",
                children: "Visual overview of total income (2015–2022)"
            }, void 0, false, {
                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "inline-block bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700",
                    children: [
                        uploading ? "Uploading..." : "Upload CSV or Excel (Year and Total Income)",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".csv, .xlsx, .xls",
                            className: "hidden",
                            onChange: handleFileUpload
                        }, void 0, false, {
                            fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        label: "Total Income",
                        value: currency(total),
                        color: "indigo"
                    }, void 0, false, {
                        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        label: "Average Income",
                        value: currency(avg),
                        color: "green"
                    }, void 0, false, {
                        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        label: "Highest Income",
                        value: currency(max),
                        color: "yellow"
                    }, void 0, false, {
                        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        label: "Lowest Income",
                        value: currency(min),
                        color: "red"
                    }, void 0, false, {
                        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: "Yearly Income Trend"
                    }, void 0, false, {
                        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: 350,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                            data: budgetData,
                            onClick: (e)=>(e === null || e === void 0 ? void 0 : e.activeLabel) && setSelectedYear(e.activeLabel),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: "#E5E7EB"
                                }, void 0, false, {
                                    fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "year"
                                }, void 0, false, {
                                    fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                    tickFormatter: (val)=>"".concat((val / 1_000_000).toFixed(1), "M")
                                }, void 0, false, {
                                    fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    formatter: (v)=>currency(v),
                                    labelFormatter: (y)=>"Year: ".concat(y)
                                }, void 0, false, {
                                    fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    dataKey: "totalIncome",
                                    stroke: "#4F46E5",
                                    strokeWidth: 3,
                                    dot: {
                                        r: 5
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: selectedYear ? "Budget Breakdown (".concat(selectedYear, ")") : "Select a Year for Details"
                    }, void 0, false, {
                        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    !selectedYear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "Click a year to view breakdown."
                    }, void 0, false, {
                        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                        lineNumber: 249,
                        columnNumber: 27
                    }, this),
                    selectedYear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row gap-8 justify-center mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PieSection, {
                                title: "Income Breakdown",
                                data: selectedData.income,
                                colors: COLORS,
                                currency: currency
                            }, void 0, false, {
                                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PieSection, {
                                title: "Appropriations Breakdown",
                                data: selectedData.appropriations,
                                colors: COLORS,
                                currency: currency
                            }, void 0, false, {
                                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "7fhPpKeDBEtKtGVSUcYMDfpzktU=");
_c = DashboardPage;
// === Helper Components ===
function Card(param) {
    let { label, value, color } = param;
    const colors = {
        indigo: "bg-indigo-50 text-indigo-700",
        green: "bg-green-50 text-green-700",
        yellow: "bg-yellow-50 text-yellow-700",
        red: "bg-red-50 text-red-700"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 rounded-lg text-center ".concat(colors[color]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: label
            }, void 0, false, {
                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-semibold",
                children: value
            }, void 0, false, {
                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                lineNumber: 273,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_c1 = Card;
function PieSection(param) {
    let { title, data, colors, currency } = param;
    const formatted = Object.entries(data || {}).map((param)=>{
        let [name, value] = param;
        return {
            name,
            value
        };
    });
    const total = formatted.reduce((sum, d)=>sum + d.value, 0);
    const renderCustomLabel = (props)=>{
        var _formatted_index;
        const { cx, cy, midAngle, outerRadius, percent, index } = props;
        if (!formatted[index]) return null // 🧩 safety check
        ;
        const RADIAN = Math.PI / 180;
        const radius = outerRadius * 1.35;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        const percentText = (percent * 100).toFixed(2);
        const color = colors[index % colors.length];
        const name = ((_formatted_index = formatted[index]) === null || _formatted_index === void 0 ? void 0 : _formatted_index.name) || "Unknown";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: x,
            y: y,
            fill: color,
            textAnchor: x > cx ? "start" : "end",
            dominantBaseline: "central",
            fontSize: 12,
            fontWeight: "500",
            children: [
                name,
                ": ",
                percentText,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
            lineNumber: 294,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full lg:w-1/2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold text-gray-700 mb-2 text-center",
                children: title
            }, void 0, false, {
                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 360,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                            data: formatted,
                            dataKey: "value",
                            nameKey: "name",
                            cx: "50%",
                            cy: "50%",
                            outerRadius: 110,
                            labelLine: {
                                stroke: "#8884d8",
                                strokeWidth: 1,
                                cursor: "pointer"
                            },
                            label: renderCustomLabel,
                            children: formatted.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                    fill: colors[index % colors.length],
                                    cursor: "pointer"
                                }, "cell-".concat(index), false, {
                                    fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            formatter: (v)=>currency(v)
                        }, void 0, false, {
                            fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/thesis/app/(protected)/dashboard/page.jsx",
        lineNumber: 309,
        columnNumber: 5
    }, this);
}
_c2 = PieSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DashboardPage");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "PieSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=thesis_app_%28protected%29_dashboard_page_jsx_7ec5a4f5._.js.map