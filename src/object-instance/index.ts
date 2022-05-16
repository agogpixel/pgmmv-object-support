/**
 * Exports object instance support APIs and implementations.
 *
 * @module object-instance
 */
import * as switches from './switches';
import * as variables from './variables';

export * from './get-object-instance.function';
export * from './get-parent-object-instance.function';

/**
 * Object instance switch accessors.
 */
export const objectInstanceSwitchAccessors = switches;

/**
 * Object instance variable accessors.
 */
export const objectInstanceVariableAccessors = variables;
