export const accounts = [
  { name: "Operating account", kind: "Checking ···· 4821", balance: "$184,290.54" },
  { name: "Tax reserve", kind: "Savings ···· 1650", balance: "$42,500.00" },
  { name: "Payroll", kind: "Checking ···· 9372", balance: "$28,740.18" },
];
export const transactions = [
  ["Today", "Figma, Inc.", "Software", "-$240.00", "Operating account", "Complete"],
  ["Today", "Acme Cloud", "Software", "-$89.00", "Operating account", "Complete"],
  ["Nov 3", "Stripe payout", "Customer payment", "+$8,420.50", "Operating account", "Complete"],
  ["Nov 2", "WeWork", "Office", "-$650.00", "Operating account", "Complete"],
  ["Nov 1", "Northstar Labs", "Invoice payment", "+$4,200.00", "Operating account", "Complete"],
  ["Oct 31", "AWS", "Cloud services", "-$428.17", "Operating account", "Complete"],
  ["Oct 30", "Gusto Payroll", "Payroll", "-$12,840.00", "Payroll", "Complete"],
];
export const chartData = [
  { day: "Oct 7", balance: 226 }, { day: "Oct 10", balance: 234 }, { day: "Oct 13", balance: 230 },
  { day: "Oct 16", balance: 244 }, { day: "Oct 19", balance: 238 }, { day: "Oct 22", balance: 253 },
  { day: "Oct 25", balance: 249 }, { day: "Oct 28", balance: 266 }, { day: "Oct 31", balance: 262 },
  { day: "Nov 3", balance: 276 }, { day: "Nov 4", balance: 279 },
];
export const routes = [
  ["dashboard", "Home", "⌂"], ["tasks", "Tasks", "◷"], ["command", "Ask Northline", "✳"],
  ["accounts", "Accounts", "▣"], ["accounts/treasury", "Treasury", "◈"], ["accounts/credit", "Credit", "▤"], ["capital", "Capital", "↗"],
  ["transactions", "Transactions", "⇄"], ["insights", "Insights", "◔"], ["cards", "Cards", "▱"], ["issue-card", "Issue a card", "＋"],
  ["team-spend", "Team spend", "♧"], ["team-spend/budgets", "Budgets", "◫"], ["expenses", "Reimbursements", "↗"], ["team-spend/policies", "Policies", "☷"],
  ["payments", "Payments", "⇢"], ["bill-pay", "Bill Pay", "▤"], ["payments/recipients", "Recipients", "♙"], ["taxes", "Taxes", "▧"], ["payments/wire-drawdowns", "Wire drawdowns", "⇢"], ["payments/authorizations", "ACH authorizations", "✓"], ["checkbooks", "Checkbooks", "▤"],
  ["invoicing", "Invoicing", "▧"], ["invoicing/series", "Recurring series", "⟳"], ["invoicing/customers", "Customers", "♙"], ["invoicing/catalog", "Catalog", "▦"], ["accounting", "Accounting", "⊞"],
  ["settings", "Settings", "⚙"], ["settings/profile", "Profile", "♙"], ["settings/users", "Users & roles", "♧"], ["settings/documents", "Documents", "▤"], ["settings/billing", "Billing", "▣"], ["settings/notifications", "Notifications", "◉"], ["settings/security", "Security", "◈"], ["settings/referrals", "Referrals", "↗"],
  ["send-money", "Send money", "↗"], ["transfer", "Transfer", "⇄"], ["deposit", "Deposit", "↓"],
] as const;
