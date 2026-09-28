import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DKqOLaMj.mjs";
import { t as supabase } from "./client-B94yzxQV.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-Ci-K-q7t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		...opts,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
function RegisterPage() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [message, setMessage] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		setMessage("");
		const result = mode === "signin" ? await supabase.auth.signInWithPassword({
			email,
			password
		}) : await supabase.auth.signUp({
			email,
			password
		});
		setMessage(result.error?.message ?? (mode === "signin" ? "Signed in." : "Check your email to confirm your account."));
		setBusy(false);
	}
	async function google() {
		const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
		if (result.error) setMessage(result.error.message);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "grid min-h-svh md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative min-h-80",
			style: {
				background: "var(--clr-purple)",
				color: "var(--clr-white)"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-gutter absolute bottom-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "meta",
					style: { color: "var(--clr-orange)" },
					children: "Your campus pass"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-5xl font-semibold md:text-7xl",
					style: { color: "var(--clr-white)" },
					children: [
						"Step into",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"what's next."
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center p-6 md:p-14",
			style: { background: "var(--clr-white)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "meta",
						style: { color: "var(--clr-purple)" },
						children: "IIC.MLRIT account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl font-semibold",
						style: { color: "var(--clr-black)" },
						children: mode === "signin" ? "Welcome back." : "Join the community."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "lg",
						className: "mt-8 w-full",
						onClick: google,
						children: "Continue with Google"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-7 flex items-center gap-4 text-xs uppercase",
						style: { color: "rgba(33,37,41,0.45)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							"or use email",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "meta",
									style: { color: "var(--clr-black)" },
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: email,
									onChange: (e) => setEmail(e.target.value),
									type: "email",
									required: true,
									className: "mt-2 h-12 w-full border border-input bg-transparent px-4 outline-none focus:border-primary",
									style: { color: "var(--clr-black)" }
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "meta",
									style: { color: "var(--clr-black)" },
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: password,
									onChange: (e) => setPassword(e.target.value),
									type: "password",
									required: true,
									minLength: 6,
									className: "mt-2 h-12 w-full border border-input bg-transparent px-4 outline-none focus:border-primary",
									style: { color: "var(--clr-black)" }
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "w-full",
								style: {
									background: "var(--clr-purple)",
									color: "var(--clr-white)"
								},
								disabled: busy,
								children: busy ? "Please wait" : mode === "signin" ? "Sign in" : "Create account"
							})
						]
					}),
					message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						className: "mt-5 text-sm",
						style: { color: "rgba(33,37,41,0.6)" },
						children: message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
						className: "mt-7 font-display text-sm font-semibold underline underline-offset-4",
						style: { color: "var(--clr-black)" },
						children: mode === "signin" ? "New here? Create an account" : "Already registered? Sign in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-sm",
						style: { color: "rgba(33,37,41,0.5)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "underline",
							children: "Return to events"
						})
					})
				]
			})
		})]
	});
}
//#endregion
export { RegisterPage as component };
