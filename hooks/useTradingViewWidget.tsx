"use client";

import { useEffect, useRef } from "react";
import { CANDLE_CHART_WIDGET_CONFIG } from "../lib/constants";

export default function useTradingViewWidget(
  scriptUrl: string,
  config: Record<string, unknown>,
  height: number = 600
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded) return;
    containerRef.current.innerHTML = `<div class='tradingview-widget-container__widget style="width:100%; height:${height}"'></div>`;

    const script = document.createElement("script");
    script.src = scriptUrl; //"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);

  return containerRef;
}
