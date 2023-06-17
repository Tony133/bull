import { getQueueToken } from '@nestjs/bull-shared';
import { Inject } from '@nestjs/common';

/**
 * @publicApi
 * 
 * Injects Bull's queue instance with the given name
 * @param name queue name
 */
export const InjectQueue = (name?: string): ParameterDecorator =>
  Inject(getQueueToken(name));
