function formatDuration(seconds) {
  if (!seconds) return "now";
  const units = [
    ["year",   365 * 24 * 3600],
    ["day",    24 * 3600],
    ["hour",   3600],
    ["minute", 60],
    ["second", 1]
  ];
  const parts = [];
  for (const [name, value] of units) {
    const amount = Math.floor(seconds / value);
    if (amount) {
      parts.push(`${amount} ${name}${amount > 1 ? "s" : ""}`);
      seconds %= value;
    }
  }
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return parts.join(" and ");

  return parts.slice(0, -1).join(", ") + " and " + parts.at(-1);
}
console.log(formatDuration(23423423))