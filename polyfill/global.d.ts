import { Temporal as TemporalNS } from './index';

declare global {
  const Temporal: typeof TemporalNS;
}
