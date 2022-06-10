import type { ControllableMenuLayoutHorizontalCellAlignment } from './controllable-menu-layout-horizontal-cell-alignment.enum';
import type { ControllableMenuLayoutMainAxis } from './controllable-menu-layout-main-axis.enum';
import type { ControllableMenuLayoutVerticalCellAlignment } from './controllable-menu-layout-vertical-cell-alignment.enum';

export interface ControllableMenuLayout {
  mainAxis: ControllableMenuLayoutMainAxis;
  horizontalCellAlignment?: ControllableMenuLayoutHorizontalCellAlignment;
  verticalCellAlignment?: ControllableMenuLayoutVerticalCellAlignment;
  maxCells?: number[];
  padding?: number;
}
