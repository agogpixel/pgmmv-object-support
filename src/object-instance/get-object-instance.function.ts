/**
 * Exports get object instance function.
 *
 * @module object-instance/get-object-instance.function
 */

/**
 * Get object instance with specified ID.
 *
 * @param instanceId Instance ID.
 * @returns Object instance.
 */
export function getObjectInstance(instanceId: number) {
  return Agtk.objectInstances.get(instanceId);
}
