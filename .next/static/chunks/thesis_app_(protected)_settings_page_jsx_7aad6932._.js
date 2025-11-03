(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/thesis/app/(protected)/settings/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/lib/supabaseClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/thesis/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SettingsPage() {
    _s();
    const [oldPassword, setOldPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewData, setPreviewData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]) // 👈 for displaying uploaded file contents
    ;
    // ✅ Change password
    const handleChangePassword = async (e)=>{
        e.preventDefault();
        setMessage("");
        if (newPassword !== confirmPassword) {
            setMessage("❌ New passwords do not match.");
            return;
        }
        const { data: { user }, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (userError || !user) {
            setMessage("⚠️ User not found. Please log in again.");
            return;
        }
        const { error: signInError } = await __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email: user.email,
            password: oldPassword
        });
        if (signInError) {
            setMessage("❌ Old password is incorrect.");
            return;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.updateUser({
            password: newPassword
        });
        if (error) setMessage("❌ " + error.message);
        else setMessage("✅ Password updated successfully!");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };
    // ✅ Export data as CSV
    // ✅ Export data as Excel (.xlsx)
    const handleExportExcel = async ()=>{
        setLoading(true);
        setMessage("");
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select("*");
        setLoading(false);
        if (error) {
            setMessage("❌ Failed to export data: " + error.message);
            return;
        }
        if (!data || data.length === 0) {
            setMessage("⚠️ No data available to export.");
            return;
        }
        // ✅ Format amount to show ₱ and two decimal places
        const formattedData = data.map((t)=>({
                Date: t.date,
                Type: t.type,
                Category: t.category,
                Amount: "₱ ".concat(Number(t.amount).toLocaleString("en-PH", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })),
                Remarks: t.remarks || ""
            }));
        // ✅ Create Excel sheet
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(formattedData);
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "Transactions");
        // ✅ Generate filename like "transactions_2025-10-22.xlsx"
        const today = new Date().toISOString().split("T")[0];
        const filename = "transactions_".concat(today, ".xlsx");
        // ✅ Save Excel file
        __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](workbook, filename);
        setMessage("✅ Transactions exported to Excel successfully!");
    };
    const handleImportExcel = async (e)=>{
        const file = e.target.files[0];
        if (!file) return;
        const fileExt = file.name.split(".").pop();
        const timestamp = Date.now();
        const storageFileName = "import_".concat(timestamp, "_").concat(file.name) // unique storage name
        ;
        setLoading(true);
        setMessage("Uploading file...");
        // Step 1️⃣ Upload to Supabase Storage
        const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("imports").upload(storageFileName, file, {
            upsert: false
        }) // do NOT overwrite
        ;
        if (uploadError) {
            setMessage("❌ Upload failed: " + uploadError.message);
            setLoading(false);
            return;
        }
        // Step 2️⃣ Get public URL
        const { data: publicData } = __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("imports").getPublicUrl(storageFileName);
        const fileUrl = publicData.publicUrl;
        // Step 3️⃣ Parse Excel file
        try {
            var _file_name_match;
            const response = await fetch(fileUrl);
            const arrayBuffer = await response.arrayBuffer();
            const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](arrayBuffer, {
                type: "array"
            });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(sheet);
            // Step 4️⃣ Normalize data
            const normalizedData = jsonData.map((row)=>({
                    account_name: row["Account Name"] || row["account_name"] || "",
                    debit: row["Debit"] || row["debit"] || 0,
                    credit: row["Credit"] || row["credit"] || 0
                }));
            setPreviewData(normalizedData);
            setMessage("✅ File uploaded successfully!");
            // Step 5️⃣ Determine Year
            const detectedYear = ((_file_name_match = file.name.match(/20\d{2}/)) === null || _file_name_match === void 0 ? void 0 : _file_name_match[0]) || new Date().getFullYear();
            // Step 6️⃣ Insert into trial_balance
            const formattedData = normalizedData.map((row)=>({
                    ...row,
                    year: detectedYear
                }));
            const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("trial_balance").insert(formattedData);
            if (insertError) {
                console.error(insertError);
                setMessage("❌ Failed to insert into trial_balance: " + insertError.message);
            } else {
                setMessage("✅ Imported ".concat(formattedData.length, " rows into trial_balance (").concat(detectedYear, ")"));
            }
        } catch (err) {
            console.error(err);
            setMessage("❌ Failed to read Excel file.");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 space-y-6 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-8 text-green-700",
                children: "⚙️ Settings"
            }, void 0, false, {
                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-2xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "👤 Account Settings"
                            }, void 0, false, {
                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleChangePassword,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm mb-2 font-medium",
                                                children: "Old Password"
                                            }, void 0, false, {
                                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                value: oldPassword,
                                                onChange: (e)=>setOldPassword(e.target.value),
                                                required: true,
                                                className: "w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                                            }, void 0, false, {
                                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm mb-2 font-medium",
                                                children: "New Password"
                                            }, void 0, false, {
                                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                value: newPassword,
                                                onChange: (e)=>setNewPassword(e.target.value),
                                                required: true,
                                                className: "w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                                            }, void 0, false, {
                                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm mb-2 font-medium",
                                                children: "Confirm New Password"
                                            }, void 0, false, {
                                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                value: confirmPassword,
                                                onChange: (e)=>setConfirmPassword(e.target.value),
                                                required: true,
                                                className: "w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                                            }, void 0, false, {
                                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50",
                                        children: loading ? "Processing..." : "Change Password"
                                    }, void 0, false, {
                                        fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-2xl shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "📂 Data Management"
                            }, void 0, false, {
                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleExportExcel,
                                        disabled: loading,
                                        className: "w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50",
                                        children: loading ? "Exporting..." : "📤 Export Transactions (Excel)"
                                    }, void 0, false, {
                                        fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "w-full block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-yellow-500 text-white py-2 text-center rounded-lg hover:bg-yellow-600 transition cursor-pointer",
                                                children: "📥 Import Data (Excel)"
                                            }, void 0, false, {
                                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: ".xlsx,.csv",
                                                onChange: handleImportExcel,
                                                className: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-3",
                                children: 'Files are uploaded to your Supabase "imports" storage bucket.'
                            }, void 0, false, {
                                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$thesis$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 text-sm ".concat(message.startsWith("✅") ? "text-green-600" : message.startsWith("⚠️") ? "text-yellow-600" : "text-red-600"),
                children: message
            }, void 0, false, {
                fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
                lineNumber: 252,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/thesis/app/(protected)/settings/page.jsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(SettingsPage, "eEtl80FIRNMawD3MoLgn3HMmXWM=");
_c = SettingsPage;
var _c;
__turbopack_context__.k.register(_c, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=thesis_app_%28protected%29_settings_page_jsx_7aad6932._.js.map