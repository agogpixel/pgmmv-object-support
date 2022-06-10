import * as operationKeys from './operation-keys';
import * as pcKeys from './pc-keys';

export * from './get-controller-max-id.function';
export * from './get-controller-operation-key-pressed.function';
export * from './get-controller-operation-key-value.function';
export * from './get-controller-pc-key-pressed.function';
export * from './get-controller-pc-key-value.function';
export * from './is-controller-connected.function';
export * from './service';

export const controllerOperationKeyAccessors = operationKeys;
export const controllerPcKeyAccessors = pcKeys;
