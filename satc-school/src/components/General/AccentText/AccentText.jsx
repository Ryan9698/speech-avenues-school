// Helper function to inject colors into text dynamically. To be used with color object.
export default function AccentText({
  children,
  colorClass = 'text-indigo-700',
}) {
  return <strong className={`font-semibold ${colorClass}`}>{children}</strong>;
}
