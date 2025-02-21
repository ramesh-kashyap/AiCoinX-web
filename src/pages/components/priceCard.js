import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example chart data
const chartData = [
  { label: "Point 1", price: 3.15 },
  { label: "Point 2", price: 3.20 },
  { label: "Point 3", price: 3.25 },
  { label: "Point 4", price: 3.40 },
  { label: "Point 5", price: 3.48 },
];

function PriceCard() {
  return (
    <div className="container  relative overflow-hidden flex justify-start items-start text-white ">
      <div className="w-[582px] h-[582px] rounded-full bg-g300/10 absolute -top-48 -left-20 blur-[575px]"></div>
    <div style={styles.pageContainer}  className="relative z-20 w-full">
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Buy NEAR</h1>
      </div>

      <div style={styles.content}>
        {/* NEAR Info */}
        <div style={styles.nearInfo}>
          <h2 style={styles.nearTitle}>NEAR Protocol (NEAR)</h2>
          <div style={styles.priceRow}>
            <span style={styles.price}>$3.48</span>
            <span style={styles.priceChange}>+7.55% (24h)</span>
          </div>
        </div>

        {/* Chart */}
        <div style={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00c08b" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00c08b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="label" hide />
              <YAxis hide />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#00c08b"
                fillOpacity={1}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Time Range Tabs */}
        <div style={styles.tabsRow}>
          {["1D", "1W", "1M", "3M", "1Y", "All"].map((range) => (
            <button key={range} style={styles.tabButton}>
              {range}
            </button>
          ))}
        </div>

        {/* NEAR Wallet Card */}
        <div style={styles.walletCard}>
          <div>
            <p style={styles.walletLabel}>NEAR Wallet</p>
            <p style={styles.walletSub}>Current Balance</p>
          </div>
          <div style={styles.walletBalance}>0 NEAR</div>
        </div>

        {/* Buy NEAR Button */}
        <button style={styles.buyButton}>Buy NEAR</button>
      </div>
    </div>

    </div>
  );
}

// Inline styles for a quick demo
const styles = {
  pageContainer: {
    backgroundColor: "#fff",
    color: "#000",
    minHeight: "100vh",
    margin: 0,
    fontFamily: "sans-serif",
  },
  header: {
    padding: "1rem",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },
  headerTitle: {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  content: {
    padding: "1rem",
  },
  nearInfo: {
    textAlign: "center",
    marginBottom: "1rem",
  },
  nearTitle: {
    margin: "0.5rem 0",
    fontSize: "1.1rem",
  },
  priceRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    gap: "0.5rem",
  },
  price: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  priceChange: {
    fontSize: "0.9rem",
    color: "#00c08b",
  },
  chartContainer: {
    width: "100%",
    height: "200px",
  },
  tabsRow: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "1rem 0",
  },
  tabButton: {
    background: "transparent",
    border: "none",
    color: "#000",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
  },
  walletCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #eee",
    borderRadius: "0.5rem",
    padding: "1rem",
    marginBottom: "1rem",
  },
  walletLabel: {
    margin: 0,
    fontWeight: "600",
  },
  walletSub: {
    margin: 0,
    fontSize: "0.85rem",
    color: "#666",
  },
  walletBalance: {
    fontWeight: "bold",
  },
  buyButton: {
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    padding: "1rem",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default PriceCard;
