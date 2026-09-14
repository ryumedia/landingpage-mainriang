(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/BranchTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BranchTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BranchTabs() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["branches"][0].id);
    const branch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["branches"].find((item)=>item.id === active) ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["branches"][0];
    const wa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whatsappUrl"])(branch);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[2rem] border border-[#e7e5dc] bg-white p-3 shadow-[0_20px_60px_rgba(60,34,90,.08)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tablist",
                "aria-label": "Pilih cabang Main Riang",
                className: "flex gap-2 overflow-x-auto rounded-2xl bg-[#f5f2e9] p-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["branches"].map((item)=>{
                    const selected = item.id === active;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "tab",
                        "aria-selected": selected,
                        onClick: ()=>setActive(item.id),
                        className: `min-w-max rounded-xl px-5 py-3 text-sm font-bold transition ${selected ? "bg-[#702fa0] text-white shadow-md" : "text-[#52645e] hover:bg-white"}`,
                        children: item.shortName
                    }, item.id, false, {
                        fileName: "[project]/components/BranchTabs.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/BranchTabs.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                className: "grid gap-8 p-5 sm:p-8 md:grid-cols-[1fr_.9fr] md:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex rounded-full bg-[#f1e6fa] px-3 py-1 text-xs font-bold uppercase tracking-[.14em] text-[#702fa0]",
                                children: "Cabang Main Riang"
                            }, void 0, false, {
                                fileName: "[project]/components/BranchTabs.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-4 text-2xl font-black tracking-tight text-[#28433b] sm:text-3xl",
                                children: branch.name
                            }, void 0, false, {
                                fileName: "[project]/components/BranchTabs.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex gap-3 text-[#65746f]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "mt-1 size-5 shrink-0 text-[#702fa0]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BranchTabs.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: branch.address
                                    }, void 0, false, {
                                        fileName: "[project]/components/BranchTabs.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BranchTabs.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-7 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: wa,
                                        "aria-label": `Hubungi ${branch.name} via WhatsApp`,
                                        className: `inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition ${wa === "#" ? "cursor-not-allowed bg-slate-200 text-slate-500" : "bg-[#702fa0] text-white hover:bg-[#53217a] hover:-translate-y-0.5"}`,
                                        onClick: (e)=>{
                                            if (wa === "#") e.preventDefault();
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                className: "size-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BranchTabs.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            "Hubungi via WhatsApp"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BranchTabs.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: branch.mapsUrl.includes("[") ? "#" : branch.mapsUrl,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: `inline-flex items-center gap-2 rounded-full border px-5 py-3 font-bold ${branch.mapsUrl.includes("[") ? "cursor-not-allowed border-slate-200 text-slate-400" : "border-[#e2d3f2] text-[#702fa0] hover:bg-[#faf5ff]"}`,
                                        onClick: (e)=>{
                                            if (branch.mapsUrl.includes("[")) e.preventDefault();
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "size-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BranchTabs.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            "Lihat Peta"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BranchTabs.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: branch.pricelistUrl.includes("[") ? "#" : branch.pricelistUrl,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": `Lihat pricelist ${branch.name}`,
                                        className: `inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition ${branch.pricelistUrl.includes("[") ? "cursor-not-allowed bg-slate-200 text-slate-500" : "bg-[#28433b] text-white hover:bg-[#1c332c] hover:-translate-y-0.5"}`,
                                        onClick: (e)=>{
                                            if (branch.pricelistUrl.includes("[")) e.preventDefault();
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "size-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BranchTabs.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            "Pricelist"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BranchTabs.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BranchTabs.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BranchTabs.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "placeholder-image flex min-h-56 items-center justify-center rounded-[1.5rem] p-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto flex size-16 items-center justify-center rounded-2xl bg-white/75 text-3xl shadow-sm",
                                    children: "🏡"
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchTabs.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 font-bold text-[#28433b]",
                                    children: "Foto / peta cabang"
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchTabs.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-[#65746f]",
                                    children: "Ganti placeholder ini dengan foto atau Google Maps cabang."
                                }, void 0, false, {
                                    fileName: "[project]/components/BranchTabs.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BranchTabs.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BranchTabs.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, branch.id, true, {
                fileName: "[project]/components/BranchTabs.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BranchTabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(BranchTabs, "EoM2Qt0kV5TD7PL6Wup+K2IjcZo=");
_c = BranchTabs;
var _c;
__turbopack_context__.k.register(_c, "BranchTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MobileNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const links = [
    [
        "About Main Riang",
        "about"
    ],
    [
        "Visi & Misi",
        "visi-misi"
    ],
    [
        "Trilogi Main Riang",
        "trilogi"
    ],
    [
        "School Program",
        "school-program"
    ],
    [
        "Cabang",
        "cabang"
    ],
    [
        "Contact",
        "contact"
    ]
];
function MobileNav() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": open ? "Tutup menu" : "Buka menu",
                "aria-expanded": open,
                onClick: ()=>setOpen(!open),
                className: "rounded-xl p-2 text-[#28433b] hover:bg-[#f3f1e9]",
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                    fileName: "[project]/components/MobileNav.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                    fileName: "[project]/components/MobileNav.tsx",
                    lineNumber: 26,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MobileNav.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 right-4 top-[72px] rounded-2xl border border-[#e7e5dc] bg-white p-3 shadow-2xl",
                children: [
                    links.map(([label, id])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${id}`,
                            onClick: ()=>setOpen(false),
                            className: "block rounded-xl px-4 py-3 font-semibold text-[#52645e] hover:bg-[#f5f2e9]",
                            children: label
                        }, id, false, {
                            fileName: "[project]/components/MobileNav.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        onClick: ()=>setOpen(false),
                        className: "mt-2 block rounded-xl bg-[#702fa0] px-4 py-3 text-center font-bold text-white",
                        children: "Hubungi Kami"
                    }, void 0, false, {
                        fileName: "[project]/components/MobileNav.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MobileNav.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MobileNav.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(MobileNav, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = MobileNav;
var _c;
__turbopack_context__.k.register(_c, "MobileNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PendaftaranFloat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PendaftaranFloat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
function PendaftaranFloat() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#pendaftaran",
        "aria-label": "Menuju halaman Pendaftaran",
        className: "fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#702fa0] px-4 py-3 font-bold text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#53217a] sm:bottom-7 sm:right-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                className: "size-5"
            }, void 0, false, {
                fileName: "[project]/components/PendaftaranFloat.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden sm:inline",
                children: "Pendaftaran"
            }, void 0, false, {
                fileName: "[project]/components/PendaftaranFloat.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PendaftaranFloat.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = PendaftaranFloat;
var _c;
__turbopack_context__.k.register(_c, "PendaftaranFloat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RegistrationCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegistrationCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
"use client";
;
;
const icons = {
    UserPlus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"],
    FlaskConical: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
    Palette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
};
function RegistrationCard({ item }) {
    const Icon = icons[item.icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"];
    const placeholder = item.url.includes("[");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: placeholder ? "#" : item.url,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": `Daftar ${item.title}`,
        onClick: (e)=>{
            if (placeholder) e.preventDefault();
        },
        className: `group flex-col rounded-[2rem] border-[#e7e5dc] bg-[#fffaf1] p-7 transition ${placeholder ? "cursor-not-allowed opacity-70" : "hover:-translate-y-2 hover:shadow-xl"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex size-12 items-center justify-center rounded-2xl bg-[#f1e6fa] text-[#702fa0]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "size-6"
                }, void 0, false, {
                    fileName: "[project]/components/RegistrationCard.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RegistrationCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-6 text-2xl font-black text-[#28433b]",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/components/RegistrationCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 flex-1 leading-7 text-[#65746f]",
                children: item.description
            }, void 0, false, {
                fileName: "[project]/components/RegistrationCard.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#702fa0] px-5 py-3 font-bold text-white transition group-hover:gap-3 group-hover:bg-[#53217a]",
                children: [
                    "Daftar Sekarang ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/RegistrationCard.tsx",
                        lineNumber: 40,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RegistrationCard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RegistrationCard.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = RegistrationCard;
var _c;
__turbopack_context__.k.register(_c, "RegistrationCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "branches",
    ()=>branches,
    "gallery",
    ()=>gallery,
    "registrations",
    ()=>registrations,
    "schoolPrograms",
    ()=>schoolPrograms,
    "testimonials",
    ()=>testimonials,
    "trilogi",
    ()=>trilogi,
    "whatsappUrl",
    ()=>whatsappUrl
]);
const branches = [
    {
        id: "gunungBatu",
        shortName: "Gunung Batu",
        name: "Main Riang Preschool Gunung Batu",
        address: "[ALAMAT GUNUNG BATU]",
        whatsapp: "[NOMOR_WA_GUNUNG_BATU]",
        mapsUrl: "[LINK_GOOGLE_MAPS_GUNUNG_BATU]",
        pricelistUrl: "[LINK_PRICELIST_GUNUNG_BATU]"
    },
    {
        id: "arcamanik",
        shortName: "Arcamanik",
        name: "Main Riang Preschool Arcamanik",
        address: "[ALAMAT ARCAMANIK]",
        whatsapp: "[NOMOR_WA_ARCAMANIK]",
        mapsUrl: "[LINK_GOOGLE_MAPS_ARCAMANIK]",
        pricelistUrl: "[LINK_PRICELIST_ARCAMANIK]"
    },
    {
        id: "cileunyi",
        shortName: "Cileunyi",
        name: "Main Riang Preschool Cileunyi",
        address: "[ALAMAT CILEUNYI]",
        whatsapp: "[NOMOR_WA_CILEUNYI]",
        mapsUrl: "[LINK_GOOGLE_MAPS_CILEUNYI]",
        pricelistUrl: "[LINK_PRICELIST_CILEUNYI]"
    }
];
const registrations = [
    {
        title: "Siswa Baru",
        description: "Daftarkan putra-putri Anda sebagai siswa baru di Main Riang Preschool.",
        icon: "UserPlus",
        url: "https://mainriang.id/siswa-baru"
    },
    {
        title: "Trial Class",
        description: "Ikuti kelas percobaan agar anak mengenal suasana belajar di Main Riang.",
        icon: "FlaskConical",
        url: "https://mainriang.id/trial-class"
    },
    {
        title: "Kelas Tematik",
        description: "Jelajahi berbagai kelas tematik seru yang memperkaya pengalaman belajar anak.",
        icon: "Palette",
        url: "https://mainriang.id/tematik"
    }
];
const schoolPrograms = [
    {
        title: "Playgroup",
        description: "Program untuk anak usia dini dengan pengalaman belajar yang hangat dan bertahap.",
        items: [
            "Adaptasi sekolah",
            "Social interaction",
            "Practical life",
            "Motor skills",
            "Language development",
            "Sensorial activities",
            "Islamic habits"
        ]
    },
    {
        title: "TK A",
        description: "Mendorong kemandirian, bahasa, eksplorasi, dan perkembangan sosial-emosional.",
        items: [
            "Kemandirian",
            "Bahasa",
            "Numerasi awal",
            "Sensorial",
            "Practical life",
            "Social emotional development",
            "Islamic character"
        ]
    },
    {
        title: "TK B",
        description: "Mempersiapkan anak menghadapi tahap belajar berikutnya dengan percaya diri.",
        items: [
            "School readiness",
            "Academic readiness",
            "Independence",
            "Problem solving",
            "Communication",
            "Leadership",
            "Islamic character"
        ]
    }
];
const testimonials = [
    {
        photo: "[FOTO_ORANG_TUA_1]",
        parentName: "[NAMA ORANG TUA 1]",
        childName: "[NAMA ANAK 1]",
        message: "[ISI TESTIMONI 1]"
    },
    {
        photo: "[FOTO_ORANG_TUA_2]",
        parentName: "[NAMA ORANG TUA 2]",
        childName: "[NAMA ANAK 2]",
        message: "[ISI TESTIMONI 2]"
    },
    {
        photo: "[FOTO_ORANG_TUA_3]",
        parentName: "[NAMA ORANG TUA 3]",
        childName: "[NAMA ANAK 3]",
        message: "[ISI TESTIMONI 3]"
    }
];
const trilogi = [
    {
        number: "01",
        title: "[TRILOGI 1]",
        description: "[DESKRIPSI TRILOGI 1]"
    },
    {
        number: "02",
        title: "[TRILOGI 2]",
        description: "[DESKRIPSI TRILOGI 2]"
    },
    {
        number: "03",
        title: "[TRILOGI 3]",
        description: "[DESKRIPSI TRILOGI 3]"
    }
];
const gallery = [
    {
        title: "Montessori Activity",
        photo: "[FOTO_GALLERY_1]"
    },
    {
        title: "Outdoor Activity",
        photo: "[FOTO_GALLERY_2]"
    },
    {
        title: "Islamic Activity",
        photo: "[FOTO_GALLERY_3]"
    },
    {
        title: "Art & Creativity",
        photo: "[FOTO_GALLERY_4]"
    },
    {
        title: "Practical Life",
        photo: "[FOTO_GALLERY_5]"
    },
    {
        title: "Classroom",
        photo: "[FOTO_GALLERY_6]"
    },
    {
        title: "Playground",
        photo: "[FOTO_GALLERY_7]"
    },
    {
        title: "Daycare",
        photo: "[FOTO_GALLERY_8]"
    }
];
function whatsappUrl(branch) {
    const number = branch.whatsapp.replace(/\D/g, "");
    if (!number || branch.whatsapp.includes("[")) return "#";
    const message = encodeURIComponent(`Assalamu'alaikum, saya ingin mendapatkan informasi pendaftaran Main Riang Preschool Cabang ${branch.shortName}.`);
    return `https://wa.me/${number}?text=${message}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0xstnr6._.js.map