import { useState, useEffect, useCallback } from "react";
import { fetchAnalyticsMetrics } from "@/lib/data/mock-api";
import type { AnalyticsMetric, MockApiResponse } from "@/types";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface MetricState {
  value: number;
  glitching: boolean;
}

const formatNumber = (n: number): string => n.toString().padStart(7, "0");

const AnalyticsPreview = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const [apiState, setApiState] = useState<MockApiResponse<AnalyticsMetric>>({
    data: null,
    loading: true,
    error: null,
  });

  const [delivered, setDelivered] = useState<MetricState>({ value: 0, glitching: false });
  const [opened, setOpened] = useState<MetricState>({ value: 0, glitching: false });
  const [clicked, setClicked] = useState<MetricState>({ value: 0, glitching: false });

  // Load initial values from mock API
  useEffect(() => {
    fetchAnalyticsMetrics()
      .then((data) => {
        setApiState({ data, loading: false, error: null });
        setDelivered({ value: data.delivered, glitching: false });
        setOpened({ value: data.opened, glitching: false });
        setClicked({ value: data.clicked, glitching: false });
      })
      .catch((err: Error) => {
        setApiState({ data: null, loading: false, error: err.message });
      });
  }, []);

  const glitchUpdate = useCallback(
    (
      setter: React.Dispatch<React.SetStateAction<MetricState>>,
      increment: () => number
    ) => {
      setter((prev) => ({ ...prev, glitching: true }));
      setTimeout(() => {
        setter((prev) => ({
          value: prev.value + increment(),
          glitching: false,
        }));
      }, 100);
    },
    []
  );

  // Live updates — only after initial data loaded
  useEffect(() => {
    if (!apiState.data) return;

    const fastInterval = setInterval(() => {
      glitchUpdate(setDelivered, () => Math.floor(Math.random() * 40) + 10);
      glitchUpdate(setOpened, () => Math.floor(Math.random() * 25) + 5);
    }, 1500);

    const slowInterval = setInterval(() => {
      glitchUpdate(setClicked, () => Math.floor(Math.random() * 12) + 3);
    }, 5000);

    return () => {
      clearInterval(fastInterval);
      clearInterval(slowInterval);
    };
  }, [apiState.data, glitchUpdate]);

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-surface"
      aria-label="Analytics preview"
    >
      <div className="container">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-carbon tracking-tight mb-4">
            Real-time delivery metrics
          </h2>
          <p className="text-muted-foreground text-lg">
            Every email tracked. Every event captured.
          </p>
        </div>

        <div
          className={`max-w-lg mx-auto border border-trace bg-background p-8 md:p-12 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {apiState.loading && (
            <div className="space-y-8 font-mono" aria-busy="true" aria-label="Loading metrics">
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
            </div>
          )}

          {apiState.error && (
            <p className="text-center text-sm text-destructive py-4" role="alert">
              {apiState.error}
            </p>
          )}

          {apiState.data && (
            <div className="space-y-8 font-mono">
              <MetricRow
                label="DELIVERED"
                value={formatNumber(delivered.value)}
                glitching={delivered.glitching}
              />
              <MetricRow
                label="OPENED"
                value={formatNumber(opened.value)}
                glitching={opened.glitching}
              />
              <MetricRow
                label="CLICKED"
                value={formatNumber(clicked.value)}
                glitching={clicked.glitching}
                accent
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface MetricRowProps {
  label: string;
  value: string;
  glitching: boolean;
  accent?: boolean;
}

const MetricRow = ({ label, value, glitching, accent }: MetricRowProps) => (
  <div className="flex items-baseline justify-between">
    <span className="text-xs tracking-widest text-muted-foreground">{label}</span>
    <span
      className={`text-2xl md:text-3xl font-medium tabular-nums ${
        accent ? "text-[hsl(150_70%_35%)]" : "text-carbon"
      } ${glitching ? "animate-glitch" : ""}`}
    >
      {value}
    </span>
  </div>
);

const SkeletonRow = () => (
  <div className="flex items-baseline justify-between">
    <div className="h-3 w-16 bg-trace animate-pulse rounded-none" />
    <div className="h-7 w-28 bg-trace animate-pulse rounded-none" />
  </div>
);

export default AnalyticsPreview;
