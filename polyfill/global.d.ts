import { Temporal as TemporalNS } from './script';

declare global {
  const Temporal: typeof TemporalNS;
}
