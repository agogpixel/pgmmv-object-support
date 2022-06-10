import { CCMenuItem } from '@agogpixel/pgmmv-ts/api/cc/menu-item';

import type { ControllableMenuControlSchema } from './controllable-menu-control-schema.interface';
import type { ControllableMenuLayout } from './controllable-menu-layout.interface';

export interface ControllableMenuConfig {
  controlSchema?: ControllableMenuControlSchema;
  enabled?: boolean;
  layout?: ControllableMenuLayout;
  menuItems?: CCMenuItem[];
}
