export default function Card({ title, children, footer, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-sm p-4 ${className}`}
    >
      <div className="mb-3 text-lg font-semibold text-gray-900">{title}</div>
      <div>{children}</div>
      <div className="mt-4 border-t border-gray-100 pt-3 text-sm text-gray-500">
        {footer}
      </div>
    </div>
  );
}
