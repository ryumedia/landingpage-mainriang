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
                                            "WhatsApp"
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
                                        className: `inline-flex items-center gap-2 rounded-full border px-5 py-3 font-bold ${branch.mapsUrl.includes("[") ? "cursor-not-allowed border-slate-200 text-slate-400" : "bg-[#057512] text-white hover:bg-[#004f09] hover:-translate-y-0.5"}`,
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
                                        className: `inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition ${branch.pricelistUrl.includes("[") ? "cursor-not-allowed bg-slate-200 text-slate-500" : "bg-[#ff9302] text-white hover:bg-[#d17702] hover:-translate-y-0.5"}`,
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
                        className: "overflow-hidden rounded-[1.5rem]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: branch.photo,
                            alt: `Foto ${branch.name}`,
                            className: "aspect-[4/3] w-full object-cover"
                        }, void 0, false, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
                    lineNumber: 27,
                    columnNumber: 17
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                    fileName: "[project]/components/MobileNav.tsx",
                    lineNumber: 27,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MobileNav.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 right-4 top-[72px] rounded-2xl border border-[#e7e5dc] bg-white p-3 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/logo.png",
                        alt: "Logo Main Riang Preschool",
                        width: 40,
                        height: 40,
                        className: "mb-2 size-10 rounded-2xl object-contain shadow-sm"
                    }, void 0, false, {
                        fileName: "[project]/components/MobileNav.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    links.map(([label, id])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${id}`,
                            onClick: ()=>setOpen(false),
                            className: "block rounded-xl px-4 py-3 font-semibold text-[#52645e] hover:bg-[#f5f2e9]",
                            children: label
                        }, id, false, {
                            fileName: "[project]/components/MobileNav.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        onClick: ()=>setOpen(false),
                        className: "mt-2 block rounded-xl bg-[#702fa0] px-4 py-3 text-center font-bold text-white",
                        children: "Hubungi Kami"
                    }, void 0, false, {
                        fileName: "[project]/components/MobileNav.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MobileNav.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MobileNav.tsx",
        lineNumber: 20,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckBig$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CircleCheckBig>");
"use client";
;
;
function PendaftaranFloat() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#pendaftaran",
        "aria-label": "Menuju halaman Pendaftaran",
        className: "fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#702fa0] px-4 py-3 font-bold text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#53217a] sm:bottom-7 sm:right-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckBig$3e$__["CircleCheckBig"], {
                className: "size-5"
            }, void 0, false, {
                fileName: "[project]/components/PendaftaranFloat.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        className: `group flex flex-col rounded-[2rem] border-[#e7e5dc] bg-[#fffaf1] p-7 transition ${placeholder ? "cursor-not-allowed opacity-70" : "hover:-translate-y-2 hover:shadow-xl"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex size-12 items-center justify-center rounded-2xl bg-[#f1e6fa] text-[#ff9302]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "size-6"
                        }, void 0, false, {
                            fileName: "[project]/components/RegistrationCard.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RegistrationCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-black text-[#28433b]",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/components/RegistrationCard.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RegistrationCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 flex-1 leading-7 text-[#65746f]",
                children: item.description
            }, void 0, false, {
                fileName: "[project]/components/RegistrationCard.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#ff9302] px-5 py-3 font-bold text-white transition group-hover:gap-3 group-hover:bg-[#53217a]",
                children: [
                    "Daftar Sekarang ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/RegistrationCard.tsx",
                        lineNumber: 42,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RegistrationCard.tsx",
                lineNumber: 41,
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
    "coreApproaches",
    ()=>coreApproaches,
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
        address: "Jl. Babakan Radio, Sukaraja, Kec. Cicendo, Kota Bandung, Jawa Barat 40175",
        whatsapp: "6285710905799",
        mapsUrl: "https://maps.app.goo.gl/aSnTgEyDJf1irViDA",
        pricelistUrl: "https://drive.google.com/file/d/1gcrJ5ybiYN8k6qdauJbHeTY3lv16A3s9/view?usp=sharing",
        photo: "/images/cabang-gunung-batu.jpg"
    },
    {
        id: "arcamanik",
        shortName: "Arcamanik",
        name: "Main Riang Preschool Arcamanik",
        address: "Jl. Cicukang, Cisaranten Bina Harapan, Kec. Arcamanik, Kota Bandung, Jawa Barat 40294",
        whatsapp: "6285520925820",
        mapsUrl: "https://maps.app.goo.gl/nhQPtzMfDTwDCLFq6",
        pricelistUrl: "https://drive.google.com/file/d/1qo1HFZEXtabm9UqtjgHuly4CA7f5aJ63/view?usp=sharing",
        photo: "/images/cabang-arcamanik.jpg"
    },
    {
        id: "cileunyi",
        shortName: "Cileunyi",
        name: "Main Riang Preschool Cileunyi",
        address: "Komplek Bumi Sanggar Mebel 2 Blok A 11-12, Cileunyi Kulon, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat 40622",
        whatsapp: "628131274868",
        mapsUrl: "https://maps.app.goo.gl/efinqovsNzHuGPzp7",
        pricelistUrl: "https://drive.google.com/file/d/1pyS7kHmbbTeFFEuaeVVVWvTLIZsVpHLW/view?usp=sharing",
        photo: "/images/cabang-cileunyi.jpg"
    }
];
const registrations = [
    {
        title: "Siswa Baru",
        description: "Daftarkan putra-putri Anda sebagai siswa baru di Main Riang Preschool.",
        icon: "UserPlus",
        url: "https://mainriang.app/siswa-baru"
    },
    {
        title: "Trial Class",
        description: "Ikuti kelas percobaan agar anak mengenal suasana belajar di Main Riang.",
        icon: "FlaskConical",
        url: "https://mainriang.app/trial-class"
    },
    {
        title: "Kelas Tematik",
        description: "Jelajahi berbagai kelas tematik seru yang memperkaya pengalaman belajar anak.",
        icon: "Palette",
        url: "https://mainriang.app/tematik"
    }
];
const schoolPrograms = [
    {
        title: "Daycare Class",
        description: "Program untuk anak mulai usia 2-6 tahun dan bisa terintegrasi dengan Playgroup dan TK.",
        items: [
            "CCTV",
            "Water Heater",
            "Mainan Edukatif",
            "Kamar Nyaman dan Bersih",
            "Fullday: 08.00 -17.00",
            "Halfday: 08.00 - 13.00 atau 12.00 - 17.00"
        ]
    },
    {
        title: "Playgroup Class",
        description: "Program untuk anak mulai usia 2-4 tahun dan tersedia kelas pagi (08.00-09.30) dan siang (10.30-12.00).",
        items: [
            "PG 1: Setiap Jumat (pagi)",
            "PG 2: Senin dan Rabu (pagi atau siang)",
            "PG 2: Selasa dan Kamis (pagi atau siang)",
            "PG 3 : Senin, Rabu, dan Jum'at (pagi)",
            "PG 3 : Selasa, Kamis dan Jum'at (pagi)",
            "PG 5 : Senin - Jum'at (pagi)"
        ]
    },
    {
        title: "TK Class",
        description: "Program 2 Kelas (TK A dan TK B) untuk anak mulai usia 4-6 tahun dan hanya tersedia kelas pagi (08.00-11.00).",
        items: [
            "5 Hari (Senin - Jum'at)",
            "Mainan Edukatif Montessori",
            "Disediakan Media Pembelajaran",
            "CCTV",
            "Semester Program",
            "Annual Program"
        ]
    }
];
const testimonials = [
    {
        photo: "/images/momwindi.webp",
        parentName: "Mom Windi",
        childName: "Mema",
        message: "Setelah sharing dengan teman. Saya memutuskan untuk mendaftarkan Alkeema ke Mainriang. Guru gurunya baik banget. Kegiatan yang dilakukan berdasarkan assesment Psikolog."
    },
    {
        photo: "/images/momnadhifa.webp",
        parentName: "Mom Nadhifa",
        childName: "Arrasya",
        message: "Alhamdulillah, Happy anaknya. Hari pertama sudah bisa langsung ditinggal karena banyak kegiatan. Malah seneng dianya.. he.. he.."
    },
    {
        photo: "/images/momnurul.webp",
        parentName: "Mom Nurul",
        childName: "Abim",
        message: "So far, aku sebagai orang tua merasa puas, karena kita difasilitasi konsultasi dengan Psikolog untuk mengetahui tumbuh kembang anak dan ini murni fokus di Montessori ya..."
    }
];
const trilogi = [
    {
        number: "01",
        title: "ISLAMIC BEHAVIOUR",
        description: "Membentuk karakter anak yang saleh, berakhlak mulia, serta menanamkan kesadaran dan kecintaan mendalam terhadap ajaran agama Islam sejak dini."
    },
    {
        number: "02",
        title: "5 AREA MONTESSORI",
        description: "Mengembangkan potensi anak secara holistik terstruktur berdasarkan area Practical Life, Sensorial, Language, Mathematics, dan Cultural Studies."
    },
    {
        number: "03",
        title: "GEMBIRA BERAKSI",
        description: "Mengasah kreativitas, imajinasi, kemandirian, serta kecerdasan sosial-emosional melalui ekspresi seni, prakarya, musik, dan gerak aktif."
    }
];
const coreApproaches = [
    {
        icon: "Heart",
        title: "Islamic Behaviour",
        description: "Kurikulum dirancang untuk membiasakan anak bersikap jujur, sabar, amanah, serta memiliki rasa persaudaraan yang tinggi terhadap sesama teman. -Setiap anak terlahir hebat tergantung bagaimana lingkungannya membentuknya-.",
        details: [
            "Pembiasaan Praktik Ibadah",
            "Hafalan Surat Pendek & Doa",
            "Metode Belajar IQRO",
            "Sirah Nabawiyah"
        ],
        image: "/images/approach-islamic-behaviour.jpg"
    },
    {
        icon: "Brain",
        title: "5 Area Montessori",
        description: "Pembelajaran melalui lima area Montessori yang menumbuhkan kemandirian, konsentrasi, dan kecintaan belajar.",
        details: [
            "Practical Life : Membantu anak mengembangkan keterampilan hidup sehari-hari dan kemandirian melalui aktivitas praktis.",
            "Sensorial : Membantu anak mengembangkan kemampuan indra, fokus, dan pengamatan.",
            "Language : Membantu anak mengembangkan kemampuan bahasa, komunikasi, dan ekspresi.",
            "Mathematics : Membantu anak mengembangkan kemampuan berhitung, logika, dan pemecahan masalah.",
            "Cultural : Membantu anak mengenal lingkungan, budaya, dan kehidupan sosial."
        ],
        image: "/images/approach-5-area-montessori.jpg"
    },
    {
        icon: "Lightbulb",
        title: "Gembira Beraksi",
        description: "Proyek kreatif dan kegiatan bermakna yang membuat anak belajar sambil bermain dengan gembira dan percaya diri.",
        details: [
            "Pengembangan Motorik & Kognitif",
            "Kreativitas Tanpa Batas",
            "Gerak & Musik",
            "Keterampilan Sosial"
        ],
        image: "/images/approach-gembira-beraksi.jpg"
    }
];
const gallery = [
    {
        title: "Montessori Activity",
        photo: "/images/montessori.jpg"
    },
    {
        title: "Outdoor Activity",
        photo: "/images/outdoor2.jpeg"
    },
    {
        title: "Islamic Activity",
        photo: "/images/pray.jpg"
    },
    {
        title: "Art & Creativity",
        photo: "/images/art.jpg"
    },
    {
        title: "Practical Life",
        photo: "/images/practical-life.jpg"
    },
    {
        title: "Classroom",
        photo: "/images/classroom.jpg"
    },
    {
        title: "Playground",
        photo: "/images/playground.jpeg"
    },
    {
        title: "Daycare",
        photo: "/images/outdoor.jpg"
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