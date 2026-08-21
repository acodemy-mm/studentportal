import React, { type CSSProperties, type ReactNode } from "react";

const FONT = "Poppins, system-ui, sans-serif";
const INK = "#1B2430";
const MUTED = "#6B7280";
const LINE = "#EEF1F6";
const WHITE = "#ffffff";
const SOFT = "#E8F1FF";
const BRAND = "#002c76";

export const canvasTokensLight = {
  text: {
    primary: INK,
    secondary: MUTED,
    tertiary: "#9CA3AF",
    quaternary: "#9CA3AF",
  },
  stroke: {
    primary: LINE,
    secondary: LINE,
    tertiary: LINE,
  },
};

export function mergeStyle(
  base: CSSProperties,
  override?: CSSProperties,
): CSSProperties {
  return { ...base, ...(override || {}) };
}

export function useCanvasState<T>(
  _key: string,
  initial: T,
): [T, (value: T) => void] {
  return React.useState(initial);
}

export function Stack({
  children,
  gap,
  style,
}: {
  children?: ReactNode;
  gap?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: gap ?? 12,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Row({
  children,
  gap,
  align,
  justify,
  wrap,
  style,
}: {
  children?: ReactNode;
  gap?: number;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "space-between";
  wrap?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: gap ?? 8,
        alignItems: align === "start" ? "flex-start" : align === "end" ? "flex-end" : align || "stretch",
        justifyContent:
          justify === "start"
            ? "flex-start"
            : justify === "end"
              ? "flex-end"
              : justify === "space-between"
                ? "space-between"
                : justify === "center"
                  ? "center"
                  : "flex-start",
        flexWrap: wrap ? "wrap" : "nowrap",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Grid({
  children,
  columns,
  gap,
  align,
  style,
}: {
  children?: ReactNode;
  columns: number | string;
  gap?: number;
  align?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          typeof columns === "number" ? `repeat(${columns}, minmax(0, 1fr))` : columns,
        gap: gap ?? 12,
        alignItems: align || "stretch",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Divider({ style }: { style?: CSSProperties }) {
  return (
    <div
      style={{
        height: 1,
        background: LINE,
        width: "100%",
        ...style,
      }}
    />
  );
}

export function Spacer() {
  return <div style={{ flex: 1 }} />;
}

export function Table({
  headers,
  rows,
  columnAlign,
  rowTone,
  framed,
  striped,
  stickyHeader,
  style,
  emptyMessage,
}: {
  headers: ReactNode[];
  rows: ReactNode[][];
  columnAlign?: Array<string | undefined>;
  rowTone?: Array<string | undefined>;
  framed?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  style?: CSSProperties;
  emptyMessage?: ReactNode;
}) {
  return (
    <div
      style={{
        overflow: "auto",
        background: WHITE,
        borderRadius: framed === false ? 0 : 8,
        border: framed === false ? "none" : `1px solid ${LINE}`,
        ...style,
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: FONT,
          fontSize: 13,
        }}
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  textAlign: (columnAlign?.[i] as any) || "left",
                  padding: "10px 12px",
                  background: SOFT,
                  color: BRAND,
                  fontWeight: 600,
                  fontSize: 12,
                  position: stickyHeader ? "sticky" : undefined,
                  top: stickyHeader ? 0 : undefined,
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={headers.length} style={{ padding: 16, color: MUTED }}>
                {emptyMessage || ""}
              </td>
            </tr>
          ) : (
            rows.map((row, ri) => (
              <tr
                key={ri}
                style={{
                  background: striped && ri % 2 === 1 ? "#FAFBFD" : WHITE,
                }}
              >
                {headers.map((_, ci) => (
                  <td
                    key={ci}
                    style={{
                      padding: "10px 12px",
                      color: INK,
                      verticalAlign: "middle",
                      textAlign: (columnAlign?.[ci] as any) || "left",
                    }}
                  >
                    {rowTone && ci === 0 && rowTone[ri] ? (
                      <span
                        style={{
                          display: "inline-block",
                          width: 6,
                          height: 6,
                          borderRadius: 99,
                          marginRight: 8,
                          background:
                            rowTone[ri] === "success"
                              ? "#1F8A65"
                              : rowTone[ri] === "danger"
                                ? "#C62828"
                                : "#9CA3AF",
                        }}
                      />
                    ) : null}
                    {row[ci]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const TONE: Record<string, string> = {
  primary: INK,
  secondary: MUTED,
  tertiary: "#9CA3AF",
  quaternary: "#9CA3AF",
};

export function Text({
  children,
  tone,
  size,
  as,
  weight,
  italic,
  style,
}: {
  children?: ReactNode;
  tone?: string;
  size?: "body" | "small";
  as?: "p" | "span";
  weight?: string;
  italic?: boolean;
  style?: CSSProperties;
}) {
  const Tag = as || "p";
  return (
    <Tag
      style={{
        margin: 0,
        fontFamily: FONT,
        fontSize: size === "small" ? 12 : 14,
        lineHeight: size === "small" ? "16px" : "20px",
        color: TONE[tone || "primary"] || INK,
        fontWeight:
          weight === "bold"
            ? 700
            : weight === "semibold"
              ? 600
              : weight === "medium"
                ? 500
                : 400,
        fontStyle: italic ? "italic" : undefined,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export function H1({ children, style }: { children?: ReactNode; style?: CSSProperties }) {
  return (
    <h1
      style={{
        margin: 0,
        fontFamily: FONT,
        fontSize: 24,
        lineHeight: "30px",
        fontWeight: 600,
        color: INK,
        ...style,
      }}
    >
      {children}
    </h1>
  );
}

export function H2({ children, style }: { children?: ReactNode; style?: CSSProperties }) {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: FONT,
        fontSize: 18,
        lineHeight: "24px",
        fontWeight: 600,
        color: INK,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

export function Card({
  children,
  style,
}: {
  children?: ReactNode;
  variant?: string;
  size?: string;
  stickyHeader?: boolean;
  collapsible?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        background: WHITE,
        border: `1px solid ${LINE}`,
        borderRadius: 8,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  trailing,
  style,
}: {
  children?: ReactNode;
  trailing?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px",
        fontFamily: FONT,
        fontSize: 13,
        fontWeight: 600,
        color: INK,
        borderBottom: `1px solid ${LINE}`,
        ...style,
      }}
    >
      <div style={{ flex: 1 }}>{children}</div>
      {trailing}
    </div>
  );
}

export function CardBody({
  children,
  style,
}: {
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return <div style={{ padding: 14, ...style }}>{children}</div>;
}

export function Button({
  children,
  variant,
  disabled,
  type,
  style,
  onClick,
}: {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
  onClick?: () => void;
}) {
  const primary = variant === "primary";
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 14px",
        borderRadius: 6,
        fontFamily: FONT,
        fontSize: 13,
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        background: primary ? BRAND : WHITE,
        color: primary ? WHITE : INK,
        border: primary ? `1px solid ${BRAND}` : `1px solid ${LINE}`,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function Callout({
  children,
  tone,
  title,
  style,
}: {
  children?: ReactNode;
  tone?: string;
  title?: ReactNode;
  icon?: ReactNode;
  style?: CSSProperties;
}) {
  const bg = tone === "success" ? "#E8F6F1" : tone === "warning" ? "#FFF8E8" : SOFT;
  const color = tone === "success" ? "#1F8A65" : BRAND;
  return (
    <div
      style={{
        padding: "10px 14px",
        borderRadius: 8,
        background: bg,
        color,
        fontFamily: FONT,
        fontSize: 13,
        ...style,
      }}
    >
      {title ? <div style={{ fontWeight: 600, marginBottom: 4 }}>{title}</div> : null}
      {children}
    </div>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  disabled,
  type,
  style,
}: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  style?: CSSProperties;
}) {
  return (
    <input
      type={type || "text"}
      value={value || ""}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      style={{
        height: 32,
        padding: "0 10px",
        borderRadius: 6,
        border: `1px solid ${LINE}`,
        fontFamily: FONT,
        fontSize: 13,
        color: INK,
        background: WHITE,
        outline: "none",
        boxSizing: "border-box",
        ...style,
      }}
    />
  );
}

export function TextArea({
  value,
  onChange,
  placeholder,
  disabled,
  rows,
  style,
}: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  style?: CSSProperties;
}) {
  return (
    <textarea
      value={value || ""}
      disabled={disabled}
      placeholder={placeholder}
      rows={rows || 3}
      onChange={(e) => onChange?.(e.target.value)}
      style={{
        padding: 10,
        borderRadius: 6,
        border: `1px solid ${LINE}`,
        fontFamily: FONT,
        fontSize: 13,
        color: INK,
        background: WHITE,
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        resize: "vertical",
        ...style,
      }}
    />
  );
}

export function Select({
  value,
  onChange,
  options,
  placeholder,
  disabled,
  style,
}: {
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: string; disabled?: boolean }[];
  placeholder?: string;
  disabled?: boolean;
  style?: CSSProperties;
}) {
  return (
    <select
      value={value || ""}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
      style={{
        height: 32,
        padding: "0 8px",
        borderRadius: 6,
        border: `1px solid ${LINE}`,
        fontFamily: FONT,
        fontSize: 13,
        color: INK,
        background: WHITE,
        outline: "none",
        ...style,
      }}
    >
      {placeholder && !value ? <option value="">{placeholder}</option> : null}
      {options.map((o) => (
        <option key={o.value} value={o.value} disabled={o.disabled}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function IconButton({
  children,
  onClick,
  disabled,
  title,
  style,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  variant?: string;
  size?: string;
  style?: CSSProperties;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      style={{
        border: "none",
        background: "transparent",
        cursor: disabled ? "not-allowed" : "pointer",
        padding: 4,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

type ChartTone = "success" | "danger" | "warning" | "info" | "neutral";
type ChartSeries = { name: string; data: number[]; tone?: ChartTone };
type ChartPoint = { label: string; value: number; tone?: ChartTone };

const CHART_PALETTE = ["#002c76", "#1F8A65", "#C45C26", "#3B82F6", "#7C3AED", "#0D9488"];
const CHART_TONE: Record<string, string> = {
  success: "#1F8A65",
  danger: "#C62828",
  warning: "#C45C26",
  info: "#3B82F6",
  neutral: "#6B7280",
};

function chartColor(i: number, tone?: string) {
  if (tone && CHART_TONE[tone]) return CHART_TONE[tone];
  return CHART_PALETTE[i % CHART_PALETTE.length];
}

function chartMax(series: ChartSeries[]) {
  let m = 0;
  series.forEach((s) =>
    s.data.forEach((v) => {
      if (v > m) m = v;
    }),
  );
  return m || 1;
}

function ChartLegend({ items }: { items: { name: string; color: string }[] }) {
  if (items.length < 2) return null;
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        flexWrap: "wrap",
        marginTop: 8,
        fontFamily: FONT,
        fontSize: 12,
        color: MUTED,
      }}
    >
      {items.map((it) => (
        <span key={it.name} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 99,
              background: it.color,
              display: "inline-block",
            }}
          />
          {it.name}
        </span>
      ))}
    </div>
  );
}

export function BarChart({
  categories,
  series,
  height,
  stacked,
  horizontal,
  valueSuffix,
  showValues,
  style,
}: {
  categories: string[];
  series: ChartSeries[];
  height?: number;
  stacked?: boolean;
  horizontal?: boolean;
  normalized?: boolean;
  valueSuffix?: string;
  valuePrefix?: string;
  showValues?: boolean;
  beginAtZero?: boolean;
  yMin?: number;
  yMax?: number;
  style?: CSSProperties;
}) {
  const h = height || 220;
  const max = chartMax(series);
  const suffix = valueSuffix || "";
  const printValues = showValues !== false && series.length === 1 && categories.length <= 8;
  const grouped = series.length > 1 && !stacked;

  if (horizontal) {
    const rowH = Math.max(28, (h - 24) / Math.max(categories.length, 1));
    const labelW = 140;
    const plotW = 320;
    return (
      <div style={style}>
        <svg width="100%" height={categories.length * rowH + 8} viewBox={`0 0 ${labelW + plotW + 48} ${categories.length * rowH + 8}`}>
          {categories.map((cat, i) => {
            const y = i * rowH + 4;
            const val = series[0]?.data[i] || 0;
            const bw = (val / max) * plotW;
            const color =
              series.length === 1 ? chartColor(i, series[0]?.tone) : chartColor(0, series[0]?.tone);
            return (
              <g key={cat}>
                <text x={labelW - 8} y={y + rowH / 2} textAnchor="end" dominantBaseline="middle" fill={INK} fontSize="11" fontFamily={FONT}>
                  {cat.length > 22 ? `${cat.slice(0, 20)}…` : cat}
                </text>
                <rect x={labelW} y={y + 6} width={Math.max(bw, 2)} height={rowH - 12} rx={3} fill={color} />
                {printValues ? (
                  <text x={labelW + bw + 6} y={y + rowH / 2} dominantBaseline="middle" fill={MUTED} fontSize="11" fontFamily={FONT}>
                    {val}
                    {suffix}
                  </text>
                ) : null}
              </g>
            );
          })}
        </svg>
        <ChartLegend
          items={series.map((s, i) => ({ name: s.name, color: chartColor(i, s.tone) }))}
        />
      </div>
    );
  }

  const n = Math.max(categories.length, 1);
  const vbW = Math.max(420, n * 72);
  const padL = 36;
  const padB = 36;
  const padT = 16;
  const padR = 12;
  const plotH = h - padT - padB;
  const plotW = vbW - padL - padR;
  const slot = plotW / n;
  const barW = grouped ? Math.max(6, (slot * 0.7) / series.length) : Math.max(10, slot * 0.55);

  return (
    <div style={style}>
      <svg width="100%" height={h} viewBox={`0 0 ${vbW} ${h}`}>
        {[0, 0.5, 1].map((t) => {
          const y = padT + plotH * (1 - t);
          return (
            <g key={t}>
              <line x1={padL} y1={y} x2={vbW - padR} y2={y} stroke={LINE} />
              <text x={padL - 6} y={y} textAnchor="end" dominantBaseline="middle" fill={MUTED} fontSize="10" fontFamily={FONT}>
                {Math.round(max * t)}
              </text>
            </g>
          );
        })}
        {categories.map((cat, i) => {
          const x0 = padL + i * slot + slot / 2;
          return (
            <g key={cat}>
              {series.map((s, si) => {
                const val = s.data[i] || 0;
                const bh = (val / max) * plotH;
                const x = grouped
                  ? x0 - (series.length * barW) / 2 + si * barW
                  : x0 - barW / 2;
                const color =
                  series.length === 1 ? chartColor(i, s.tone) : chartColor(si, s.tone);
                return (
                  <g key={s.name}>
                    <rect x={x} y={padT + plotH - bh} width={barW} height={Math.max(bh, 1)} rx={3} fill={color} />
                    {printValues ? (
                      <text
                        x={x + barW / 2}
                        y={padT + plotH - bh - 6}
                        textAnchor="middle"
                        fill={MUTED}
                        fontSize="10"
                        fontFamily={FONT}
                      >
                        {val}
                        {suffix}
                      </text>
                    ) : null}
                  </g>
                );
              })}
              <text
                x={x0}
                y={h - 10}
                textAnchor="middle"
                fill={INK}
                fontSize="11"
                fontFamily={FONT}
              >
                {cat.length > 12 ? `${cat.slice(0, 10)}…` : cat}
              </text>
            </g>
          );
        })}
      </svg>
      <ChartLegend
        items={series.map((s, i) => ({ name: s.name, color: chartColor(i, s.tone) }))}
      />
    </div>
  );
}

export function LineChart({
  categories,
  series,
  height,
  fill,
  showValues,
  style,
}: {
  categories: string[];
  series: ChartSeries[];
  height?: number;
  fill?: boolean;
  valueSuffix?: string;
  valuePrefix?: string;
  showValues?: boolean;
  showHoverGuide?: boolean;
  beginAtZero?: boolean;
  yMin?: number;
  yMax?: number;
  style?: CSSProperties;
}) {
  const h = height || 220;
  const max = chartMax(series);
  const n = Math.max(categories.length, 1);
  const vbW = Math.max(420, n * 72);
  const padL = 36;
  const padB = 36;
  const padT = 16;
  const padR = 16;
  const plotH = h - padT - padB;
  const plotW = vbW - padL - padR;

  function xy(i: number, val: number) {
    const x = padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
    const y = padT + plotH * (1 - val / max);
    return [x, y] as const;
  }

  return (
    <div style={style}>
      <svg width="100%" height={h} viewBox={`0 0 ${vbW} ${h}`}>
        {[0, 0.5, 1].map((t) => {
          const y = padT + plotH * (1 - t);
          return (
            <g key={t}>
              <line x1={padL} y1={y} x2={vbW - padR} y2={y} stroke={LINE} />
              <text x={padL - 6} y={y} textAnchor="end" dominantBaseline="middle" fill={MUTED} fontSize="10" fontFamily={FONT}>
                {Math.round(max * t)}
              </text>
            </g>
          );
        })}
        {series.map((s, si) => {
          const color = chartColor(si, s.tone);
          const pts = s.data.map((v, i) => xy(i, v));
          const line = pts.map((p) => p.join(",")).join(" ");
          const area = `${pts[0][0]},${padT + plotH} ${line} ${pts[pts.length - 1][0]},${padT + plotH}`;
          return (
            <g key={s.name}>
              {fill ? <polyline points={area} fill={color} fillOpacity={0.12} stroke="none" /> : null}
              <polyline points={line} fill="none" stroke={color} strokeWidth={2} />
              {pts.map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r={3.5} fill={WHITE} stroke={color} strokeWidth={2} />
                  {showValues ? (
                    <text x={x} y={y - 8} textAnchor="middle" fill={MUTED} fontSize="10" fontFamily={FONT}>
                      {s.data[i]}
                    </text>
                  ) : null}
                </g>
              ))}
            </g>
          );
        })}
        {categories.map((cat, i) => {
          const [x] = xy(i, 0);
          return (
            <text key={cat} x={x} y={h - 10} textAnchor="middle" fill={INK} fontSize="11" fontFamily={FONT}>
              {cat}
            </text>
          );
        })}
      </svg>
      <ChartLegend
        items={series.map((s, i) => ({ name: s.name, color: chartColor(i, s.tone) }))}
      />
    </div>
  );
}

function polar(cx: number, cy: number, r: number, angle: number) {
  const a = ((angle - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
}

function slicePath(cx: number, cy: number, r: number, inner: number, start: number, end: number) {
  const large = end - start > 180 ? 1 : 0;
  const [x1, y1] = polar(cx, cy, r, start);
  const [x2, y2] = polar(cx, cy, r, end);
  if (inner <= 0) {
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
  }
  const [ix1, iy1] = polar(cx, cy, inner, start);
  const [ix2, iy2] = polar(cx, cy, inner, end);
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${inner} ${inner} 0 ${large} 0 ${ix1} ${iy1} Z`;
}

export function PieChart({
  data,
  size,
  donut,
  style,
}: {
  data: ChartPoint[];
  size?: number;
  donut?: boolean;
  style?: CSSProperties;
}) {
  const d = size || 180;
  const cx = d / 2;
  const cy = d / 2;
  const r = d / 2 - 8;
  const inner = donut ? r * 0.55 : 0;
  const total = data.reduce((sum, p) => sum + p.value, 0) || 1;
  let angle = 0;
  const slices = data.map((p, i) => {
    const start = angle;
    const sweep = (p.value / total) * 360;
    angle += sweep;
    return {
      ...p,
      start,
      end: angle,
      color: chartColor(i, p.tone),
    };
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        flexWrap: "wrap",
        ...style,
      }}
    >
      <svg width={d} height={d} viewBox={`0 0 ${d} ${d}`}>
        {slices.map((s) =>
          s.end - s.start >= 359.9 ? (
            <g key={s.label}>
              <circle cx={cx} cy={cy} r={r} fill={s.color} />
              {donut ? <circle cx={cx} cy={cy} r={inner} fill={WHITE} /> : null}
            </g>
          ) : (
            <path key={s.label} d={slicePath(cx, cy, r, inner, s.start, s.end)} fill={s.color} />
          ),
        )}
        {donut ? (
          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill={INK} fontSize="16" fontFamily={FONT} fontWeight={600}>
            {Math.round(total)}
          </text>
        ) : null}
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: FONT, fontSize: 12, color: INK }}>
        {slices.map((s) => (
          <span key={s.label} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                background: s.color,
                display: "inline-block",
              }}
            />
            {s.label} · {s.value} ({Math.round((s.value / total) * 100)}%)
          </span>
        ))}
      </div>
    </div>
  );
}
