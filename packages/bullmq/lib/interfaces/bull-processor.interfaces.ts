import {
  BullQueueProcessorCallback,
  BullQueueSeparateProcessor,
} from '../bull.types';

/**
 * @publicApi
 */
export interface BullQueueAdvancedProcessor {
  concurrency?: number;
  callback: BullQueueProcessorCallback;
}

/**
 * @publicApi
 */
export interface BullQueueAdvancedSeparateProcessor {
  concurrency?: number;
  path: BullQueueSeparateProcessor;
}
