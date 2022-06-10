import { isControllerConnected } from '../is-controller-connected.function';
import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';
import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';
import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';
import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';
import * as operationKeys from '../operation-keys';
import * as pcKeys from '../pc-keys';

import type { ControllerServiceProtectedApi } from './controller-service-protected-api.interface';
import type { ControllerService } from './controller-service.interface';

export function createControllerService(internal?: ControllerServiceProtectedApi) {
  const self = {} as ControllerService;
  const internalApi = internal || ({} as ControllerServiceProtectedApi);

  internalApi.pressedOperationKeys = ~~0;

  internalApi.pressedPcKeys = ~~0;

  self.getOperationKeyvalue = getControllerOperationKeyValue;

  self.getPcKeyValue = getControllerPcKeyValue;

  self.isConnected = isControllerConnected;

  self.isOperationKeyJustPressed = function (operationKeyId, controllerId) {
    const pressed = getControllerOperationKeyPressed(operationKeyId, controllerId);

    const keyBits = 1 << operationKeyId;
    const isAlreadyPressed = !!(internalApi.pressedOperationKeys & keyBits);

    if (!isAlreadyPressed && pressed) {
      internalApi.pressedOperationKeys = internalApi.pressedOperationKeys | keyBits;
      return true;
    }

    return false;
  };

  self.isOperationKeyJustReleased = function (operationKeyId, controllerId) {
    const pressed = getControllerOperationKeyPressed(operationKeyId, controllerId);

    const keyBits = 1 << operationKeyId;
    const isPreviouslyPressed = !!(internalApi.pressedOperationKeys & keyBits);

    if (isPreviouslyPressed && !pressed) {
      internalApi.pressedOperationKeys = internalApi.pressedOperationKeys & ~keyBits;
      return true;
    }

    return false;
  };

  self.isOperationKeyPressed = getControllerOperationKeyPressed;

  self.isOperationKeyReleased = function (operatioKeyId, controllerId) {
    return !self.isOperationKeyPressed(operatioKeyId, controllerId);
  };

  self.isPcKeyJustPressed = function (keyCode) {
    const pressed = getControllerPcKeyPressed(keyCode);

    const keyBits = 1 << keyCode;
    const isAlreadyPressed = !!(internalApi.pressedPcKeys & keyBits);

    if (!isAlreadyPressed && pressed) {
      internalApi.pressedPcKeys = internalApi.pressedPcKeys | keyBits;
      return true;
    }

    return false;
  };

  self.isPcKeyJustReleased = function (keyCode) {
    const pressed = getControllerPcKeyPressed(keyCode);

    const keyBits = 1 << keyCode;
    const isPreviouslyPressed = !!(internalApi.pressedPcKeys & keyBits);

    if (isPreviouslyPressed && !pressed) {
      internalApi.pressedPcKeys = internalApi.pressedPcKeys & ~keyBits;
      return true;
    }

    return false;
  };

  self.isPcKeyPressed = getControllerPcKeyPressed;

  self.isPcKeyReleased = function (keyCode) {
    return !self.isPcKeyPressed(keyCode);
  };

  self.operationKeys = {
    getAValue: operationKeys.getAValue,
    getBValue: operationKeys.getBValue,
    getCancelValue: operationKeys.getCancelValue,
    getDownValue: operationKeys.getDownValue,
    getHomeValue: operationKeys.getHomeValue,
    getL1Value: operationKeys.getL1Value,
    getL2Value: operationKeys.getL2Value,
    getLeftClickValue: operationKeys.getLeftClickValue,
    getLeftValue: operationKeys.getLeftValue,
    getLeftStickDownValue: operationKeys.getLeftStickDownValue,
    getLeftStickLeftValue: operationKeys.getLeftStickLeftValue,
    getLeftStickRightValue: operationKeys.getLeftStickRightValue,
    getLeftStickUpValue: operationKeys.getLeftStickUpValue,
    getOkValue: operationKeys.getOkValue,
    getR1Value: operationKeys.getR1Value,
    getR2Value: operationKeys.getR2Value,
    getRightClickValue: operationKeys.getRightClickValue,
    getRightValue: operationKeys.getRightValue,
    getRightStickDownValue: operationKeys.getRightStickDownValue,
    getRightStickLeftValue: operationKeys.getRightStickLeftValue,
    getRightStickRightValue: operationKeys.getRightStickRightValue,
    getRightStickUpValue: operationKeys.getRightStickUpValue,
    getSelectValue: operationKeys.getSelectValue,
    getStartValue: operationKeys.getStartValue,
    getUpValue: operationKeys.getUpValue,
    getXValue: operationKeys.getXValue,
    getYValue: operationKeys.getYValue,

    isAPressed: operationKeys.getAPressed,
    isBPressed: operationKeys.getBPressed,
    isCancelPressed: operationKeys.getCancelPressed,
    isDownPressed: operationKeys.getDownPressed,
    isHomePressed: operationKeys.getHomePressed,
    isL1Pressed: operationKeys.getL1Pressed,
    isL2Pressed: operationKeys.getL2Pressed,
    isLeftClickPressed: operationKeys.getLeftClickPressed,
    isLeftPressed: operationKeys.getLeftPressed,
    isLeftStickDownPressed: operationKeys.getLeftStickDownPressed,
    isLeftStickLeftPressed: operationKeys.getLeftStickLeftPressed,
    isLeftStickRightPressed: operationKeys.getLeftStickRightPressed,
    isLeftStickUpPressed: operationKeys.getLeftStickUpPressed,
    isOkPressed: operationKeys.getOkPressed,
    isR1Pressed: operationKeys.getR1Pressed,
    isR2Pressed: operationKeys.getR2Pressed,
    isRightClickPressed: operationKeys.getRightClickPressed,
    isRightPressed: operationKeys.getRightPressed,
    isRightStickDownPressed: operationKeys.getRightStickDownPressed,
    isRightStickLeftPressed: operationKeys.getRightStickLeftPressed,
    isRightStickRightPressed: operationKeys.getRightStickRightPressed,
    isRightStickUpPressed: operationKeys.getRightStickUpPressed,
    isSelectPressed: operationKeys.getSelectPressed,
    isStartPressed: operationKeys.getStartPressed,
    isUpPressed: operationKeys.getUpPressed,
    isXPressed: operationKeys.getXPressed,
    isYPressed: operationKeys.getYPressed,

    isAReleased: function (controllerId) {
      return !operationKeys.getAPressed(controllerId);
    },
    isBReleased: function (controllerId) {
      return !operationKeys.getBPressed(controllerId);
    },
    isCancelReleased: function (controllerId) {
      return !operationKeys.getCancelPressed(controllerId);
    },
    isDownReleased: function (controllerId) {
      return !operationKeys.getDownPressed(controllerId);
    },
    isHomeReleased: function (controllerId) {
      return !operationKeys.getHomePressed(controllerId);
    },
    isL1Released: function (controllerId) {
      return !operationKeys.getL1Pressed(controllerId);
    },
    isL2Released: function (controllerId) {
      return !operationKeys.getL2Pressed(controllerId);
    },
    isLeftClickReleased: function (controllerId) {
      return !operationKeys.getLeftClickPressed(controllerId);
    },
    isLeftReleased: function (controllerId) {
      return !operationKeys.getLeftPressed(controllerId);
    },
    isLeftStickDownReleased: function (controllerId) {
      return !operationKeys.getLeftStickDownPressed(controllerId);
    },
    isLeftStickLeftReleased: function (controllerId) {
      return !operationKeys.getLeftStickLeftPressed(controllerId);
    },
    isLeftStickRightReleased: function (controllerId) {
      return !operationKeys.getLeftStickRightPressed(controllerId);
    },
    isLeftStickUpReleased: function (controllerId) {
      return !operationKeys.getLeftStickUpPressed(controllerId);
    },
    isOkReleased: function (controllerId) {
      return !operationKeys.getOkPressed(controllerId);
    },
    isR1Released: function (controllerId) {
      return !operationKeys.getR1Pressed(controllerId);
    },
    isR2Released: function (controllerId) {
      return !operationKeys.getR2Pressed(controllerId);
    },
    isRightClickReleased: function (controllerId) {
      return !operationKeys.getRightClickPressed(controllerId);
    },
    isRightReleased: function (controllerId) {
      return !operationKeys.getRightPressed(controllerId);
    },
    isRightStickDownReleased: function (controllerId) {
      return !operationKeys.getRightStickDownPressed(controllerId);
    },
    isRightStickLeftReleased: function (controllerId) {
      return !operationKeys.getRightStickLeftPressed(controllerId);
    },
    isRightStickRightReleased: function (controllerId) {
      return !operationKeys.getRightStickRightPressed(controllerId);
    },
    isRightStickUpReleased: function (controllerId) {
      return !operationKeys.getRightStickUpPressed(controllerId);
    },
    isSelectReleased: function (controllerId) {
      return !operationKeys.getSelectPressed(controllerId);
    },
    isStartReleased: function (controllerId) {
      return !operationKeys.getStartPressed(controllerId);
    },
    isUpReleased: function (controllerId) {
      return !operationKeys.getUpPressed(controllerId);
    },
    isXReleased: function (controllerId) {
      return !operationKeys.getXPressed(controllerId);
    },
    isYReleased: function (controllerId) {
      return !operationKeys.getYPressed(controllerId);
    },

    isAJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyA, controllerId);
    },
    isBJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyB, controllerId);
    },
    isCancelJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyCancel, controllerId);
    },
    isDownJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyDown, controllerId);
    },
    isHomeJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyHome, controllerId);
    },
    isL1JustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyL1, controllerId);
    },
    isL2JustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyL2, controllerId);
    },
    isLeftClickJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyLeftClick, controllerId);
    },
    isLeftJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyLeft, controllerId);
    },
    isLeftStickDownJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyLeftStickDown, controllerId);
    },
    isLeftStickLeftJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyLeftStickLeft, controllerId);
    },
    isLeftStickRightJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyLeftStickRight, controllerId);
    },
    isLeftStickUpJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyLeftStickUp, controllerId);
    },
    isOkJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyOk, controllerId);
    },
    isR1JustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyR1, controllerId);
    },
    isR2JustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyR2, controllerId);
    },
    isRightClickJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyRightClick, controllerId);
    },
    isRightJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyRight, controllerId);
    },
    isRightStickDownJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyRightStickDown, controllerId);
    },
    isRightStickLeftJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyRightStickLeft, controllerId);
    },
    isRightStickRightJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyRightStickRight, controllerId);
    },
    isRightStickUpJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyRightStickUp, controllerId);
    },
    isSelectJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeySelect, controllerId);
    },
    isStartJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyStart, controllerId);
    },
    isUpJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyUp, controllerId);
    },
    isXJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyX, controllerId);
    },
    isYJustPressed: function (controllerId) {
      return self.isOperationKeyJustPressed(Agtk.constants.controllers.OperationKeyY, controllerId);
    },

    isAJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyA, controllerId);
    },
    isBJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyB, controllerId);
    },
    isCancelJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyCancel, controllerId);
    },
    isDownJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyDown, controllerId);
    },
    isHomeJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyHome, controllerId);
    },
    isL1JustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyL1, controllerId);
    },
    isL2JustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyL2, controllerId);
    },
    isLeftClickJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyLeftClick, controllerId);
    },
    isLeftJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyLeft, controllerId);
    },
    isLeftStickDownJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyLeftStickDown, controllerId);
    },
    isLeftStickLeftJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyLeftStickLeft, controllerId);
    },
    isLeftStickRightJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyLeftStickRight, controllerId);
    },
    isLeftStickUpJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyLeftStickUp, controllerId);
    },
    isOkJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyOk, controllerId);
    },
    isR1JustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyR1, controllerId);
    },
    isR2JustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyR2, controllerId);
    },
    isRightClickJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyRightClick, controllerId);
    },
    isRightJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyRight, controllerId);
    },
    isRightStickDownJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyRightStickDown, controllerId);
    },
    isRightStickLeftJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyRightStickLeft, controllerId);
    },
    isRightStickRightJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyRightStickRight, controllerId);
    },
    isRightStickUpJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyRightStickUp, controllerId);
    },
    isSelectJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeySelect, controllerId);
    },
    isStartJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyStart, controllerId);
    },
    isUpJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyUp, controllerId);
    },
    isXJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyX, controllerId);
    },
    isYJustReleased: function (controllerId) {
      return self.isOperationKeyJustReleased(Agtk.constants.controllers.OperationKeyY, controllerId);
    }
  };

  self.pcKeys = {
    getAValue: pcKeys.getAValue,
    getDValue: pcKeys.getDValue,
    getDownValue: pcKeys.getDownValue,
    getLeftClickValue: pcKeys.getLeftClickValue,
    getLeftValue: pcKeys.getLeftValue,
    getMiddleClickValue: pcKeys.getMiddleClickValue,
    getMousePointerValue: pcKeys.getMousePointerValue,
    getRightClickValue: pcKeys.getRightClickValue,
    getRightValue: pcKeys.getRightValue,
    getSValue: pcKeys.getSValue,
    getUpValue: pcKeys.getUpValue,
    getWValue: pcKeys.getWValue,
    getWheelDownValue: pcKeys.getWheelDownValue,
    getWheelUpValue: pcKeys.getWheelUpValue,

    isAPressed: pcKeys.getAPressed,
    isDPressed: pcKeys.getDPressed,
    isDownPressed: pcKeys.getDownPressed,
    isLeftClickPressed: pcKeys.getLeftClickPressed,
    isLeftPressed: pcKeys.getLeftPressed,
    isMiddleClickPressed: pcKeys.getMiddleClickPressed,
    isMousePointerPressed: pcKeys.getMousePointerPressed,
    isRightClickPressed: pcKeys.getRightClickPressed,
    isRightPressed: pcKeys.getRightPressed,
    isSPressed: pcKeys.getSPressed,
    isUpPressed: pcKeys.getUpPressed,
    isWPressed: pcKeys.getWPressed,
    isWheelDownPressed: pcKeys.getWheelDownPressed,
    isWheelUpPressed: pcKeys.getWheelUpPressed,

    isAReleased: function () {
      return !pcKeys.getAPressed();
    },
    isDReleased: function () {
      return !pcKeys.getDPressed();
    },
    isDownReleased: function () {
      return !pcKeys.getDownPressed();
    },
    isLeftClickReleased: function () {
      return !pcKeys.getLeftClickPressed();
    },
    isLeftReleased: function () {
      return !pcKeys.getLeftPressed();
    },
    isMiddleClickReleased: function () {
      return !pcKeys.getMiddleClickPressed();
    },
    isMousePointerReleased: function () {
      return !pcKeys.getMousePointerPressed();
    },
    isRightClickReleased: function () {
      return !pcKeys.getRightClickPressed();
    },
    isRightReleased: function () {
      return !pcKeys.getRightPressed();
    },
    isSReleased: function () {
      return !pcKeys.getSPressed();
    },
    isUpReleased: function () {
      return !pcKeys.getUpPressed();
    },
    isWReleased: function () {
      return !pcKeys.getWPressed();
    },
    isWheelDownReleased: function () {
      return !pcKeys.getWheelDownPressed();
    },
    isWheelUpReleased: function () {
      return !pcKeys.getWheelUpPressed();
    },

    isAJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_A);
    },
    isDJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_D);
    },
    isDownJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_Down);
    },
    isLeftClickJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_LeftClick);
    },
    isLeftJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_Left);
    },
    isMiddleClickJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_MiddleClick);
    },
    isMousePointerJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_MousePointer);
    },
    isRightClickJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_RightClick);
    },
    isRightJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_Right);
    },
    isSJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_S);
    },
    isUpJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_Up);
    },
    isWJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_W);
    },
    isWheelDownJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_WhellDown);
    },
    isWheelUpJustPressed: function () {
      return self.isPcKeyJustPressed(Agtk.constants.controllers.ReservedKeyCodePc_WheelUp);
    },

    isAJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_A);
    },
    isDJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_D);
    },
    isDownJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_Down);
    },
    isLeftClickJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_LeftClick);
    },
    isLeftJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_Left);
    },
    isMiddleClickJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_MiddleClick);
    },
    isMousePointerJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_MousePointer);
    },
    isRightClickJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_RightClick);
    },
    isRightJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_Right);
    },
    isSJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_S);
    },
    isUpJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_Up);
    },
    isWJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_W);
    },
    isWheelDownJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_WhellDown);
    },
    isWheelUpJustReleased: function () {
      return self.isPcKeyJustReleased(Agtk.constants.controllers.ReservedKeyCodePc_WheelUp);
    }
  };

  return self;
}
