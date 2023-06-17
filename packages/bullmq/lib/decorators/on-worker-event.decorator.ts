import { SetMetadata } from '@nestjs/common';
import { WorkerListener } from 'bullmq';
import { ON_WORKER_EVENT_METADATA } from '../bull.constants';

export interface OnWorkerEventMetadata {
  eventName: keyof WorkerListener;
}

/**
 * @publicApi
 * 
 * Registers a worker event listener.
 * Class that contains worker event listeners must be annotated
 * with the "Processor" decorator.
 */
export const OnWorkerEvent = (
  eventName: keyof WorkerListener,
): MethodDecorator =>
  SetMetadata(ON_WORKER_EVENT_METADATA, {
    eventName: eventName,
  } as OnWorkerEventMetadata);
