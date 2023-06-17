import { FactoryProvider, ModuleMetadata, Type } from '@nestjs/common';
import { QueueOptions } from 'bullmq';
import { BullQueueProcessor } from '../bull.types';

/**
 * @publicApi
 */
export interface RegisterQueueOptions extends QueueOptions {
  /**
   * Queue name
   *
   * By default Queue name and set to "default"
   */
  name?: string;

  /**
   * Shared configuration key
   *
   * By default configKey and set to "default"
   */
  configKey?: string;

  /**
   * Additional queue processors
   */
  processors?: BullQueueProcessor[];
}

/**
 * @publicApi
 */
export interface RegisterQueueOptionsFactory {
  createRegisterQueueOptions():
    | Promise<RegisterQueueOptions>
    | RegisterQueueOptions;
}

/**
 * @publicApi
 */
export interface RegisterQueueAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  /**
   * Queue name.
   *
   * By default Queue name and set to "default"
   */
  name?: string;

  /**
   * Shared configuration key.
   */
  configKey?: string;

  /**
   * Existing Provider to be used.
   */
  useExisting?: Type<RegisterQueueOptionsFactory>;

  /**
   * Type (class name) of provider (instance to be registered and injected).
   */
  useClass?: Type<RegisterQueueOptionsFactory>;

  /**
   * Factory function that returns an instance of the provider to be injected.
   */
  useFactory?: (
    ...args: any[]
  ) => Promise<RegisterQueueOptions> | RegisterQueueOptions;

  /**
   * Optional list of providers to be injected into the context of the Factory function.
   */
  inject?: FactoryProvider['inject'];
}
