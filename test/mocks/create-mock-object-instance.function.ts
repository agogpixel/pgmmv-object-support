import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

export function createMockObjectInstance() {
  const switches = JSON.parse(JSON.stringify(Agtk.constants.objects.switches)) as Record<string, number>;
  const variables = JSON.parse(JSON.stringify(Agtk.constants.objects.variables)) as Record<string, number>;

  const switchValues: Record<number, boolean> = {};
  for (const s in switches) {
    switchValues[switches[s]] = false;
  }

  const variableValues: Record<number, number> = {};
  for (const v in variables) {
    variableValues[variables[v]] = -1;
  }

  return {
    switches: {
      get(id) {
        return {
          getValue() {
            return switchValues[id];
          },

          setValue(v) {
            switchValues[id] = v;
          }
        };
      },

      getIdByName(arg1) {
        const id = switches[arg1];

        if (id === undefined) {
          return -1;
        }

        return id;
      }
    },

    variables: {
      get(id) {
        return {
          getValue() {
            return variableValues[id];
          },

          setValue(v) {
            variableValues[id] = v;
          }
        };
      },

      getIdByName(arg1) {
        const id = variables[arg1];

        if (id === undefined) {
          return -1;
        }

        return id;
      }
    }
  } as AgtkObjectInstance;
}
