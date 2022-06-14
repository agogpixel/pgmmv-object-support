/**
 * Exports Cocos2d controllable menu factory function.
 *
 * @module
 */
import type { CCMenuItem } from '@agogpixel/pgmmv-ts/api/cc/menu-item';
import type { CCNode } from '@agogpixel/pgmmv-ts/api/cc/node';
import type { CCSize } from '@agogpixel/pgmmv-ts/api/cc/size';

import type { ControllerService } from '../../controller/service/controller-service.interface';
import { createControllerService } from '../../controller/service/create-controller-service.function';

import type { ControllableMenuConfig } from './controllable-menu-config.interface';
import { ControllableMenuLayoutHorizontalCellAlignment } from './controllable-menu-layout-horizontal-cell-alignment.enum';
import { ControllableMenuLayoutMainAxis } from './controllable-menu-layout-main-axis.enum';
import { ControllableMenuLayoutVerticalCellAlignment } from './controllable-menu-layout-vertical-cell-alignment.enum';
import type { ControllableMenuProtectedApi } from './controllable-menu-protected-api.interface';
import type { ControllableMenu } from './controllable-menu.interface';

////////////////////////////////////////////////////////////////////////////////
// Private Static Properties
////////////////////////////////////////////////////////////////////////////////

// None.

////////////////////////////////////////////////////////////////////////////////
// Public Static Properties
////////////////////////////////////////////////////////////////////////////////

// None.

////////////////////////////////////////////////////////////////////////////////
// Public Static Methods
////////////////////////////////////////////////////////////////////////////////

export function createControllableMenu(config?: ControllableMenuConfig, internal?: ControllableMenuProtectedApi) {
  // Public API container.
  const self = new cc.MenuPassive() as ControllableMenu;

  // Protected API container.
  const internalApi = internal || ({} as ControllableMenuProtectedApi);

  // Configuration API container (only used for initialization).
  const configApi = config || ({} as ControllableMenuConfig);

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  // None.

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   *
   * @param direction
   * @returns
   * @private
   */
  function seekHorizontal(direction: -1 | 1) {
    if (
      !internalApi.enabled ||
      internalApi.selectedIndex < 0 ||
      !internalApi.layoutMap ||
      !internalApi.layoutReverseMap
    ) {
      return;
    }

    const positionString = internalApi.layoutReverseMap[internalApi.selectedIndex];
    const p = positionString.split(',').map(function (s) {
      return parseInt(s);
    });

    let px = p[0];
    const py = p[1];

    let node: CCNode | undefined = undefined;

    do {
      px = (px + direction) % internalApi.maxColumns;

      const candidateIndex = internalApi.layoutMap[`${px},${py}`];

      if (candidateIndex !== undefined) {
        node = self.getChildren()[candidateIndex];
        internalApi.selectedIndex = candidateIndex;
        internalApi.onSelected(self, node as CCMenuItem, candidateIndex);
      }
    } while (node === undefined);
  }

  /**
   *
   * @param direction
   * @returns
   * @private
   */
  function seekVertical(direction: -1 | 1) {
    if (
      !internalApi.enabled ||
      internalApi.selectedIndex < 0 ||
      !internalApi.layoutMap ||
      !internalApi.layoutReverseMap
    ) {
      return;
    }

    const positionString = internalApi.layoutReverseMap[internalApi.selectedIndex];
    const p = positionString.split(',').map(function (s) {
      return parseInt(s);
    });

    const px = p[0];
    let py = p[1];

    let node: CCNode | undefined = undefined;

    do {
      py = (py + direction) % internalApi.maxRows;

      const candidateIndex = internalApi.layoutMap[`${px},${py}`];

      if (candidateIndex !== undefined) {
        node = self.getChildren()[candidateIndex];
        internalApi.selectedIndex = candidateIndex;
        internalApi.onSelected(self, node as CCMenuItem, candidateIndex);
      }
    } while (node === undefined);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Protected Properties
  //////////////////////////////////////////////////////////////////////////////

  internalApi.controllerService = createControllerService();

  internalApi.controlSchema = configApi.controlSchema || {
    cancel: [Agtk.constants.controllers.OperationKeyCancel],
    enableMouse: true,
    nextHorizontal: [Agtk.constants.controllers.OperationKeyRight],
    nextVertical: [Agtk.constants.controllers.OperationKeyDown],
    ok: [Agtk.constants.controllers.OperationKeyOk],
    previousHorizontal: [Agtk.constants.controllers.OperationKeyLeft],
    previousVertical: [Agtk.constants.controllers.OperationKeyUp]
  };

  internalApi.enabled = !!configApi.enabled;
  internalApi.maxColumns = 0;
  internalApi.maxRows = 0;
  internalApi.maxMenuItemSize = cc.size(0, 0);
  internalApi.selectedIndex = -1;

  internalApi.onCancel =
    configApi.onCancel ||
    function (menu) {
      menu.removeAllChildren();

      const parent = menu.getParent();

      if (parent) {
        parent.removeChild(menu);
      }
    };

  internalApi.onOk =
    configApi.onOk ||
    function (menu, menuItem) {
      menuItem.activate();

      menu.removeAllChildren();

      const parent = menu.getParent();

      if (parent) {
        parent.removeChild(menu);
      }
    };

  internalApi.onSelected =
    configApi.onSelected ||
    function () {
      return;
    };

  //////////////////////////////////////////////////////////////////////////////
  // Protected Methods
  //////////////////////////////////////////////////////////////////////////////

  // None.

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  // None.

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  self.alignItemsHorizontally = function () {
    self.alignItemsHorizontallyWithPadding(self.getPadding());
  };

  self.alignItemsHorizontallyWithPadding = function (padding) {
    self.setMainAxis(ControllableMenuLayoutMainAxis.Horizontal).setMaxCells(undefined).setPadding(padding);

    internalApi.layoutMap = {};
    internalApi.layoutReverseMap = {};

    const children = self.getChildren();

    if (!children || !children.length) {
      self.setContentSize(0, 0);
      internalApi.maxColumns = 0;
      internalApi.maxRows = 0;
      internalApi.maxMenuItemSize = cc.size(0, 0);
      internalApi.selectedIndex = -1;
      return;
    }

    const processedMenuItems = processMenuItems(children);
    const maxMenuItemHeight = processedMenuItems.maxMenuItemHeight;
    const maxMenuItemWidth = processedMenuItems.maxMenuItemWidth;
    const menuItems = processedMenuItems.menuItems;

    const numMenuItems = menuItems.length;
    const contentHeight = maxMenuItemHeight;
    const contentWidth = numMenuItems * maxMenuItemWidth + (numMenuItems - 1) * padding;

    let x = -contentWidth / 2;
    let column = 0;

    for (let i = 0; i < numMenuItems; i++) {
      const menuItem = menuItems[i];
      const menuItemIndex = menuItem.index;
      const menuItemSize = menuItem.size;
      const menuItemNode = menuItem.node;

      let cx = 0;
      let cy = 0;

      switch (internalApi.layout.horizontalCellAlignment) {
        case ControllableMenuLayoutHorizontalCellAlignment.Left:
          cx = x + maxMenuItemWidth / 2 - (maxMenuItemWidth - menuItemSize.width) / 2;
          break;
        case ControllableMenuLayoutHorizontalCellAlignment.Right:
          cx = x + maxMenuItemWidth / 2 + (maxMenuItemWidth - menuItemSize.width) / 2;
        case ControllableMenuLayoutHorizontalCellAlignment.Center:
        default:
          cx = x + maxMenuItemWidth / 2;
          break;
      }

      switch (internalApi.layout.verticalCellAlignment) {
        case ControllableMenuLayoutVerticalCellAlignment.Bottom:
          cy = -((maxMenuItemHeight - menuItemSize.height) / 2);
          break;
        case ControllableMenuLayoutVerticalCellAlignment.Top:
          cy = (maxMenuItemHeight - menuItemSize.height) / 2;
          break;
        case ControllableMenuLayoutVerticalCellAlignment.Center:
        default:
          cy = 0;
          break;
      }

      menuItemNode.setVisible(true);
      menuItemNode.setPosition(cx, cy);
      x += maxMenuItemWidth + padding;

      const positionString = `${column++},0`;
      internalApi.layoutMap[positionString] = menuItemIndex;
      internalApi.layoutReverseMap[menuItemIndex] = positionString;
    }

    self.setContentSize(contentWidth, contentHeight);
    internalApi.maxColumns = column;
    internalApi.maxRows = 1;
    internalApi.maxMenuItemSize = cc.size(maxMenuItemWidth, maxMenuItemHeight);
    internalApi.selectedIndex = numMenuItems > 0 ? menuItems[0].index : -1;
  };

  self.alignItemsInColumns = function (...maxCells: number[]) {
    const cellsPerRow: number[] = [];

    for (let i = 0; i < maxCells.length; ++i) {
      const maxCell = maxCells[i];

      if (maxCell >= 0) {
        cellsPerRow.push(maxCell);
      }
    }

    self.setMainAxis(ControllableMenuLayoutMainAxis.Horizontal).setMaxCells(cellsPerRow);

    internalApi.layoutMap = {};
    internalApi.layoutReverseMap = {};

    const children = self.getChildren();

    if (!cellsPerRow.length || !children || !children.length) {
      self.setContentSize(0, 0);
      internalApi.maxColumns = 0;
      internalApi.maxRows = 0;
      internalApi.maxMenuItemSize = cc.size(0, 0);
      internalApi.selectedIndex = -1;
      return;
    }

    const padding = self.getPadding();

    const processedMenuItems = processMenuItems(children);
    const maxMenuItemHeight = processedMenuItems.maxMenuItemHeight;
    const maxMenuItemWidth = processedMenuItems.maxMenuItemWidth;
    const menuItems = processedMenuItems.menuItems;

    const numMenuItems = menuItems.length;
    const layout: typeof menuItems[] = [];

    let isExcess = false;
    let menuItemIndex = 0;
    let maxRowWidth = 0;
    let rowIndex = 0;
    let columnIndex = 0;
    let maxColumns = 0;
    let maxRows = 0;

    do {
      const menuItem = menuItems[menuItemIndex];

      if (rowIndex >= cellsPerRow.length) {
        isExcess = true;
      }

      if (isExcess) {
        menuItem.node.setVisible(false);
        ++menuItemIndex;
        continue;
      }

      if (columnIndex >= cellsPerRow[rowIndex]) {
        columnIndex = 0;
        ++rowIndex;
        continue;
      }

      if (layout.length < rowIndex + 1) {
        layout.push([]);
      }

      const row = layout[rowIndex];
      row.push(menuItem);
      menuItem.node.setVisible(true);

      const rowWidth = (columnIndex + 1) * maxMenuItemWidth + columnIndex * padding;
      maxRowWidth = Math.max(rowWidth, maxRowWidth);

      const positionString = `${columnIndex},${rowIndex}`;
      internalApi.layoutMap[positionString] = menuItemIndex;
      internalApi.layoutReverseMap[menuItemIndex] = positionString;

      maxRows = Math.max(rowIndex + 1, maxRows);
      maxColumns = Math.max(columnIndex + 1, maxColumns);

      ++columnIndex;
      ++menuItemIndex;
    } while (menuItemIndex < numMenuItems);

    const maxColumnHeight = maxRows * maxMenuItemHeight + (maxRows - 1) * padding;
    let y = maxColumnHeight / 2;

    for (let rowIndex = 0; rowIndex < layout.length; ++rowIndex) {
      const row = layout[rowIndex];
      let x = -(maxRowWidth / 2);

      for (let columnIndex = 0; columnIndex < row.length; ++columnIndex) {
        const menuItem = row[columnIndex];
        const menuItemSize = menuItem.size;
        const menuItemNode = menuItem.node;

        let cx = 0;
        let cy = 0;

        switch (internalApi.layout.horizontalCellAlignment) {
          case ControllableMenuLayoutHorizontalCellAlignment.Left:
            cx = x + maxMenuItemWidth / 2 - (maxMenuItemWidth - menuItemSize.width) / 2;
            break;
          case ControllableMenuLayoutHorizontalCellAlignment.Right:
            cx = x + maxMenuItemWidth / 2 + (maxMenuItemWidth - menuItemSize.width) / 2;
          case ControllableMenuLayoutHorizontalCellAlignment.Center:
          default:
            cx = x + maxMenuItemWidth / 2;
            break;
        }

        switch (internalApi.layout.verticalCellAlignment) {
          case ControllableMenuLayoutVerticalCellAlignment.Bottom:
            cy = y - maxMenuItemHeight / 2 - (maxMenuItemHeight - menuItemSize.height) / 2;
            break;
          case ControllableMenuLayoutVerticalCellAlignment.Top:
            cy = y - maxMenuItemHeight / 2 + (maxMenuItemHeight - menuItemSize.height) / 2;
            break;
          case ControllableMenuLayoutVerticalCellAlignment.Center:
          default:
            cy = y - maxMenuItemHeight / 2;
            break;
        }

        menuItemNode.setPosition(cx, cy);
        x += maxMenuItemWidth + padding;
      }

      y -= maxMenuItemHeight + padding;
    }

    self.setContentSize(maxRowWidth, maxColumnHeight);
    internalApi.maxColumns = maxColumns;
    internalApi.maxRows = maxRows;
    internalApi.maxMenuItemSize = cc.size(maxMenuItemWidth, maxMenuItemHeight);
    internalApi.selectedIndex = numMenuItems > 0 ? menuItems[0].index : -1;
  };

  self.alignItemsInRows = function (...maxCells: number[]) {
    const cellsPerColumn: number[] = [];

    for (let i = 0; i < maxCells.length; ++i) {
      const maxCell = maxCells[i];

      if (maxCell >= 0) {
        cellsPerColumn.push(maxCell);
      }
    }

    self.setMainAxis(ControllableMenuLayoutMainAxis.Vertical).setMaxCells(cellsPerColumn);

    internalApi.layoutMap = {};
    internalApi.layoutReverseMap = {};

    const children = self.getChildren();

    if (!cellsPerColumn.length || !children || !children.length) {
      self.setContentSize(0, 0);
      internalApi.maxColumns = 0;
      internalApi.maxRows = 0;
      internalApi.maxMenuItemSize = cc.size(0, 0);
      internalApi.selectedIndex = -1;
      return;
    }

    const padding = self.getPadding();

    const processedMenuItems = processMenuItems(children);
    const maxMenuItemHeight = processedMenuItems.maxMenuItemHeight;
    const maxMenuItemWidth = processedMenuItems.maxMenuItemWidth;
    const menuItems = processedMenuItems.menuItems;

    const numMenuItems = menuItems.length;
    const layout: typeof menuItems[] = [];

    let isExcess = false;
    let menuItemIndex = 0;
    let maxColumnHeight = 0;
    let rowIndex = 0;
    let columnIndex = 0;
    let maxColumns = 0;
    let maxRows = 0;

    do {
      const menuItem = menuItems[menuItemIndex];

      if (columnIndex >= cellsPerColumn.length) {
        isExcess = true;
      }

      if (isExcess) {
        menuItem.node.setVisible(false);
        ++menuItemIndex;
        continue;
      }

      if (rowIndex >= cellsPerColumn[columnIndex]) {
        rowIndex = 0;
        ++columnIndex;
        continue;
      }

      if (layout.length < columnIndex + 1) {
        layout.push([]);
      }

      const column = layout[columnIndex];
      column.push(menuItem);
      menuItem.node.setVisible(true);

      const columnHeight = (rowIndex + 1) * maxMenuItemHeight + rowIndex * padding;
      maxColumnHeight = Math.max(columnHeight, maxColumnHeight);

      const positionString = `${columnIndex},${rowIndex}`;
      internalApi.layoutMap[positionString] = menuItemIndex;
      internalApi.layoutReverseMap[menuItemIndex] = positionString;

      maxRows = Math.max(rowIndex + 1, maxRows);
      maxColumns = Math.max(columnIndex + 1, maxColumns);

      ++rowIndex;
      ++menuItemIndex;
    } while (menuItemIndex < numMenuItems);

    const maxRowWidth = maxColumns * maxMenuItemWidth + (maxColumns - 1) * padding;
    let x = -(maxRowWidth / 2);

    for (let columnIndex = 0; columnIndex < layout.length; ++columnIndex) {
      const column = layout[columnIndex];
      let y = maxColumnHeight / 2;

      for (let rowIndex = 0; rowIndex < column.length; ++rowIndex) {
        const menuItem = column[rowIndex];
        const menuItemSize = menuItem.size;
        const menuItemNode = menuItem.node;

        let cx = 0;
        let cy = 0;

        switch (internalApi.layout.horizontalCellAlignment) {
          case ControllableMenuLayoutHorizontalCellAlignment.Left:
            cx = x + maxMenuItemWidth / 2 - (maxMenuItemWidth - menuItemSize.width) / 2;
            break;
          case ControllableMenuLayoutHorizontalCellAlignment.Right:
            cx = x + maxMenuItemWidth / 2 + (maxMenuItemWidth - menuItemSize.width) / 2;
          case ControllableMenuLayoutHorizontalCellAlignment.Center:
          default:
            cx = x + maxMenuItemWidth / 2;
            break;
        }

        switch (internalApi.layout.verticalCellAlignment) {
          case ControllableMenuLayoutVerticalCellAlignment.Bottom:
            cy = y - maxMenuItemHeight / 2 - (maxMenuItemHeight - menuItemSize.height) / 2;
            break;
          case ControllableMenuLayoutVerticalCellAlignment.Top:
            cy = y - maxMenuItemHeight / 2 + (maxMenuItemHeight - menuItemSize.height) / 2;
            break;
          case ControllableMenuLayoutVerticalCellAlignment.Center:
          default:
            cy = y - maxMenuItemHeight / 2;
            break;
        }

        menuItemNode.setPosition(cx, cy);
        y -= maxMenuItemHeight + padding;
      }

      x += maxMenuItemWidth + padding;
    }

    self.setContentSize(maxRowWidth, maxColumnHeight);
    internalApi.maxColumns = maxColumns;
    internalApi.maxRows = maxRows;
    internalApi.maxMenuItemSize = cc.size(maxMenuItemWidth, maxMenuItemHeight);
    internalApi.selectedIndex = numMenuItems > 0 ? menuItems[0].index : -1;
  };

  self.alignItemsVertically = function () {
    self.alignItemsVerticallyWithPadding(self.getPadding());
  };

  self.alignItemsVerticallyWithPadding = function (padding) {
    self.setMainAxis(ControllableMenuLayoutMainAxis.Vertical).setMaxCells(undefined).setPadding(padding);

    internalApi.layoutMap = {};
    internalApi.layoutReverseMap = {};

    const children = self.getChildren();

    if (!children || !children.length) {
      self.setContentSize(0, 0);
      internalApi.maxColumns = 0;
      internalApi.maxRows = 0;
      internalApi.maxMenuItemSize = cc.size(0, 0);
      internalApi.selectedIndex = -1;
      return;
    }

    const processedMenuItems = processMenuItems(children);
    const maxMenuItemHeight = processedMenuItems.maxMenuItemHeight;
    const maxMenuItemWidth = processedMenuItems.maxMenuItemWidth;
    const menuItems = processedMenuItems.menuItems;

    const numMenuItems = menuItems.length;
    const contentHeight = numMenuItems * maxMenuItemHeight + (numMenuItems - 1) * padding;
    const contentWidth = maxMenuItemWidth;

    let y = contentHeight / 2;
    let row = 0;

    for (let i = 0; i < numMenuItems; i++) {
      const menuItem = menuItems[i];
      const menuItemIndex = menuItem.index;
      const menuItemSize = menuItem.size;
      const menuItemNode = menuItem.node;

      let cx = 0;
      let cy = 0;

      switch (internalApi.layout.horizontalCellAlignment) {
        case ControllableMenuLayoutHorizontalCellAlignment.Left:
          cx = -((maxMenuItemWidth - menuItemSize.width) / 2);
          break;
        case ControllableMenuLayoutHorizontalCellAlignment.Right:
          cx = (maxMenuItemWidth - menuItemSize.width) / 2;
        case ControllableMenuLayoutHorizontalCellAlignment.Center:
        default:
          cx = 0;
          break;
      }

      switch (internalApi.layout.verticalCellAlignment) {
        case ControllableMenuLayoutVerticalCellAlignment.Bottom:
          cy = y - maxMenuItemHeight / 2 - (maxMenuItemHeight - menuItemSize.height) / 2;
          break;
        case ControllableMenuLayoutVerticalCellAlignment.Top:
          cy = y - maxMenuItemHeight / 2 + (maxMenuItemHeight - menuItemSize.height) / 2;
          break;
        case ControllableMenuLayoutVerticalCellAlignment.Center:
        default:
          cy = y - maxMenuItemHeight / 2;
          break;
      }

      menuItemNode.setVisible(true);
      menuItemNode.setPosition(cx, cy);
      y -= maxMenuItemHeight + padding;

      const positionString = `0,${row++}`;
      internalApi.layoutMap[positionString] = menuItemIndex;
      internalApi.layoutReverseMap[menuItemIndex] = positionString;
    }

    self.setContentSize(contentWidth, contentHeight);
    internalApi.maxColumns = 1;
    internalApi.maxRows = row;
    internalApi.maxMenuItemSize = cc.size(maxMenuItemWidth, maxMenuItemHeight);
    internalApi.selectedIndex = numMenuItems > 0 ? menuItems[0].index : -1;
  };

  self.getControlSchema = function () {
    return internalApi.controlSchema;
  };

  self.getHorizontalCellAlignment = function () {
    return internalApi.layout.horizontalCellAlignment || ControllableMenuLayoutHorizontalCellAlignment.Center;
  };

  self.getMainAxis = function () {
    return internalApi.layout.mainAxis;
  };

  self.getMaxCells = function () {
    return internalApi.layout.maxCells;
  };

  self.getPadding = function () {
    const padding = internalApi.layout.padding;
    return typeof padding === 'number' ? padding : cc.DEFAULT_PADDING;
  };

  self.getVerticalCellAlignment = function () {
    return internalApi.layout.verticalCellAlignment || ControllableMenuLayoutVerticalCellAlignment.Center;
  };

  self.isEnabled = function () {
    return internalApi.enabled;
  };

  self.refresh = function () {
    const mainAxis = internalApi.layout.mainAxis;
    const maxCells = internalApi.layout.maxCells;

    switch (mainAxis) {
      case ControllableMenuLayoutMainAxis.Horizontal:
        if (Array.isArray(maxCells) && maxCells.length > 0) {
          // eslint-disable-next-line prefer-spread
          self.alignItemsInColumns.apply(self, maxCells);
        } else {
          self.alignItemsHorizontally();
        }
        break;
      case ControllableMenuLayoutMainAxis.Vertical:
      default:
        if (Array.isArray(maxCells) && maxCells.length > 0) {
          // eslint-disable-next-line prefer-spread
          self.alignItemsInRows.apply(self, maxCells);
        } else {
          self.alignItemsVertically();
        }
        break;
    }

    return self;
  };

  self.setEnabled = function (enabled) {
    internalApi.enabled = enabled;
    return self;
  };

  self.setHorizontalCellAlignment = function (alignment) {
    internalApi.layout.horizontalCellAlignment = alignment;
    return self;
  };

  self.setLayout = function (layout) {
    internalApi.layout = layout;
    return self;
  };

  self.setMainAxis = function (axis) {
    internalApi.layout.mainAxis = axis;
    return self;
  };

  self.setMaxCells = function (maxCells) {
    maxCells = Array.isArray(maxCells) && maxCells.length > 0 ? maxCells : undefined;
    internalApi.layout.maxCells = maxCells;
    return self;
  };

  self.setPadding = function (padding) {
    internalApi.layout.padding = padding;
    return self;
  };

  self.setVerticalCellAlignment = function (alignment) {
    internalApi.layout.verticalCellAlignment = alignment;
    return self;
  };

  self.update = function () {
    if (!internalApi.enabled) {
      return;
    }

    const controlSchema = internalApi.controlSchema;
    const controllerService = internalApi.controllerService;

    if (isInputActive(controllerService, controlSchema.cancel)) {
      internalApi.onCancel(self);
      return;
    }

    if (isInputActive(controllerService, controlSchema.ok)) {
      internalApi.onOk(self, self.getChildren()[internalApi.selectedIndex] as CCMenuItem, internalApi.selectedIndex);
      return;
    }

    if (isInputActive(controllerService, controlSchema.nextVertical)) {
      seekVertical(1);
      return;
    }

    if (isInputActive(controllerService, controlSchema.previousVertical)) {
      seekVertical(-1);
      return;
    }

    if (isInputActive(controllerService, controlSchema.nextHorizontal)) {
      seekHorizontal(1);
      return;
    }

    if (isInputActive(controllerService, controlSchema.previousHorizontal)) {
      seekHorizontal(-1);
      return;
    }

    if (controlSchema.enableMouse) {
      // TODO: Mouse inputs...
    }
  };

  //////////////////////////////////////////////////////////////////////////////
  // Initialize
  //////////////////////////////////////////////////////////////////////////////

  if (Array.isArray(configApi.menuItems) && configApi.menuItems.length > 0) {
    self.initWithItems(configApi.menuItems[0], configApi.menuItems.slice(1));
  }

  return self
    .setLayout(
      configApi.layout || {
        mainAxis: ControllableMenuLayoutMainAxis.Vertical
      }
    )
    .refresh();
}

////////////////////////////////////////////////////////////////////////////////
// Private Static Methods
////////////////////////////////////////////////////////////////////////////////

/**
 *
 * @param items
 * @returns
 * @static
 * @private
 */
function processMenuItems(items: CCNode[]) {
  let maxMenuItemWidth = 0;
  let maxMenuItemHeight = 0;

  const menuItems: { index: number; size: CCSize; node: CCNode }[] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item) {
      const itemSize = item.getContentSize();
      maxMenuItemWidth = Math.max(itemSize.width, maxMenuItemWidth);
      maxMenuItemHeight = Math.max(itemSize.height, maxMenuItemHeight);
      menuItems.push({ index: i, size: itemSize, node: item });
    }
  }

  return {
    maxMenuItemHeight,
    maxMenuItemWidth,
    menuItems
  };
}

/**
 *
 * @param controllerService
 * @param keyIds
 * @returns
 */
function isInputActive(controllerService: ControllerService, keyIds: number[]) {
  let isActive = false;

  for (let i = 0; i < keyIds.length; ++i) {
    const keyId = keyIds[i];

    controllerService.isOperationKeyJustReleased(keyId);

    if (controllerService.isOperationKeyJustPressed(keyId)) {
      isActive = true;
    }
  }

  return isActive;
}
