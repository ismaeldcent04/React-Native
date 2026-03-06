"use dom";

interface Props {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
}

export default function DateInput({ label, value, onChange }: Props) {
  const formatted = value.toISOString().split("T")[0];

  return (
    <div style={{ flex: 1 }}>
      <label style={{ fontSize: 12, color: "#6b7280" }}>{label}</label>

      <input
        type="date"
        value={formatted}
        onChange={(e) => onChange(new Date(e.target.value))}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          marginTop: "4px",
        }}
      />
    </div>
  );
}
