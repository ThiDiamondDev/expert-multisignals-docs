const trendIndicators = {
  category: "Trend",
  indicatorsList: [
    "ama",
    "ma1",
    "ma2",
    "ma3",
    "ma4",
    "adx_main",
    "adx_plus",
    "adx_minus",
    "adx_wilder_main",
    "adx_wilder_plus",
    "adx_wilder_minus",
    "bb_upper",
    "bb_base",
    "bb_lower",
    "dema",
    "envelopes_upper",
    "envelopes_lower",
    "frama",
    "tenkan_sen",
    "kijun_sen",
    "senkou_span_a",
    "senkou_span_b",
    "chikou_span",
    "parabolic_sar",
    "std_dev",
    "tema",
    "vidya",
  ],
};

const volumeIndicators = {
  category: "Volume",
  indicatorsList: ["ad", "mfi", "obv", "volumes"],
};

const billWilliamsIndicators = {
  category: "Bill Williams",
  indicatorsList: [
    "ac",
    "alligator_lips",
    "alligator_teeth",
    "alligator_jaws",
    "gator_upper",
    "gator_lower",
    "ao",
    "bwmfi",
    "fractals_up",
    "fractals_down",
  ],
};

const timeseriesIndicators = {
  category: "Timeseries",
  indicatorsList: ["open", "high", "low", "close"],
};

const oscilatorsIndicators = {
  category: "Oscilators",
  indicatorsList: [
    "atr",
    "bears",
    "bulls",
    "cci",
    "chaikin",
    "demarker",
    "force",
    "macd",
    "macd_signal",
    "momentum",
    "osma",
    "rsi",
    "rvi",
    "rvi_signal",
    "stochastic",
    "stochastic_signal",
    "trix",
    "wpr",
  ],
};
const customIndicators = {
  category: "Custom Indicators",
  indicatorsList: [
    "custom1a",
    "custom1b",
    "custom1c",
    "custom1d",
    "custom2a",
    "custom2b",
    "custom2c",
    "custom2d",
    "custom3a",
    "custom3b",
    "custom3c",
    "custom3d",
    "custom4a",
    "custom4b",
    "custom4c",
    "custom4d",
  ],
};

const indicators = [
  trendIndicators,
  volumeIndicators,
  billWilliamsIndicators,
  oscilatorsIndicators,
  timeseriesIndicators,
  customIndicators,
];

export default function IndicatorsList({ styles }) {
  {
    return indicators.map(({ category, indicatorsList }, categoryIndex) => {
      return (
        <div key={categoryIndex + category}>
          <h3 className={"category"}>{category}</h3>
          {indicatorsList.map((name, indicatorIndex) => (
            <div className={"indicator"} key={name + indicatorIndex}>
              {name + "(n)"}
            </div>
          ))}
        </div>
      );
    });
  }
}
