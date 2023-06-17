import { FactoryProvider, ModuleMetadata, Type } from '@nestjs/common';
import { QueueBaseOptions } from 'bullmq';

/**
 * @publicApi
 */
export interface RegisterFlowProducerOptions extends QueueBaseOptions {
  /**
   * Flow name
   *
   * By default Flow name and set to "default"
   */
  name?: string;

  /**
   * Shared configuration key
   *
   * By default configKey and set to "default"
   */
  configKey?: string;
}

/**
 * @publicApi
 */
export interface RegisterFlowProducerOptionsFactory {
  createRegisterQueueOptions():
    | Promise<RegisterFlowProducerOptions>
    | RegisterFlowProducerOptions;
}

/**
 * @publicApi
 */
export interface RegisterFlowProducerAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  /**
   * Flow name.
   *
   * By default Flow name and set to "default"
   */
  name?: string;

  /**
   * Shared configuration key.
   */
  configKey?: string;

  /**
   * Existing Provider to be used.
   */
  useExisting?: Type<RegisterFlowProducerOptionsFactory>;

  /**
   * Type (class name) of provider (instance to be registered and injected).
   */
  useClass?: Type<RegisterFlowProducerOptionsFactory>;

  /**
   * Factory function that returns an instance of the provider to be injected.
   */
  useFactory?: (
    ...args: any[]
  ) => Promise<RegisterFlowProducerOptions> | RegisterFlowProducerOptions;

  /**
   * Optional list of providers to be injected into the context of the Factory function.
   */
  inject?: FactoryProvider['inject'];
}
