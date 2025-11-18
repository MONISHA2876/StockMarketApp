import TradingViewWidget from "@/components/TradingViewWidget";
import {
  MARKET_OVERVIEW_WIDGET_CONFIG,
  HEATMAP_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
} from "@/lib/constants";

export default function Home() {
  const baseURL = `https://s3.tradingview.com/external-embedding/embed-widget-`;
  return (
    <div className="flex home-wrapper">
      <section className="grid w-full gap-8 home-section max-w-[1560px] mx-auto md:grid-cols-2 xl:grid-cols-3 mt-8 px-4">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptURL={`${baseURL}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
          />
        </div>
        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptURL={`${baseURL}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section max-w-[1560px] mx-auto md:grid-cols-2 xl:grid-cols-3 mt-8 px-4">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title=""
            scriptURL={`${baseURL}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart"
          />
        </div>
        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title=""
            scriptURL={`${baseURL}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
          />
        </div>
      </section>
    </div>
  );
}
