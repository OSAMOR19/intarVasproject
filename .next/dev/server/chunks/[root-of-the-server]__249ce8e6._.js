module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/puzzle.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PuzzleGenerator - Creates simple math puzzles for bot protection
 */ __turbopack_context__.s([
    "generatePuzzle",
    ()=>generatePuzzle,
    "validatePuzzleAnswer",
    ()=>validatePuzzleAnswer
]);
function generatePuzzle() {
    const x = Math.floor(Math.random() * 10) + 1; // Random number 1-10
    const y = Math.floor(Math.random() * 10) + 1; // Random number 1-10
    const question = `What is ${x} + ${y}?`;
    const answer = x + y;
    return {
        question,
        answer
    };
}
function validatePuzzleAnswer(question, userAnswer) {
    try {
        // Extract numbers from question like "What is 4 + 7?"
        const match = question.match(/What is (\d+) \+ (\d+)\?/);
        if (!match) {
            return false;
        }
        const x = parseInt(match[1], 10);
        const y = parseInt(match[2], 10);
        const expectedAnswer = x + y;
        return userAnswer === expectedAnswer;
    } catch (error) {
        return false;
    }
}
}),
"[project]/app/api/send-email/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puzzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/puzzle.ts [app-route] (ecmascript)");
;
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"]("re_Tadpj79T_27eSiFhauRax21Qpv3wVmTgL");
async function POST(req) {
    try {
        const body = await req.json();
        const { fullName, email, phone, subject, message, puzzleQuestion, puzzleAnswer } = body;
        // Validate puzzle answer (bot protection)
        if (!puzzleQuestion || puzzleAnswer === undefined) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Security question is required"
            }, {
                status: 400
            });
        }
        const isPuzzleValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puzzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePuzzleAnswer"])(puzzleQuestion, puzzleAnswer);
        if (!isPuzzleValid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Failed puzzle validation. Please try again."
            }, {
                status: 400
            });
        }
        // NOTE: Using onboarding@resend.dev for testing until intarvas.com domain is verified
        // To verify your domain, visit: https://resend.com/domains
        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "support@intarvas.com",
            reply_to: email,
            subject: subject || "New Contact Form Message from IntarVAS",
            html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Message from ${fullName}</h2>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent from the IntarVAS contact form.<br/>
            Reply directly to this email to respond to ${fullName}.
          </p>
        </div>
      `
        });
        if (error) {
            console.error("Resend error:", error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: error.message
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Email sent successfully!",
            data
        });
    } catch (err) {
        console.error("Server error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: err.message || "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__249ce8e6._.js.map