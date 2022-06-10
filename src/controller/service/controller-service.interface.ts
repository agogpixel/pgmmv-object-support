export interface ControllerService {
  getOperationKeyvalue(operatioKeyId: number, controllerId?: number): number;

  getPcKeyValue(keyCode: number): number;

  isConnected(controllerId?: number): boolean;

  isOperationKeyJustPressed(operatioKeyId: number, controllerId?: number): boolean;

  isOperationKeyJustReleased(operatioKeyId: number, controllerId?: number): boolean;

  isOperationKeyPressed(operatioKeyId: number, controllerId?: number): boolean;

  isOperationKeyReleased(operatioKeyId: number, controllerId?: number): boolean;

  isPcKeyJustPressed(keyCode: number): boolean;

  isPcKeyJustReleased(keyCode: number): boolean;

  isPcKeyPressed(keyCode: number): boolean;

  isPcKeyReleased(keyCode: number): boolean;

  operationKeys: {
    getAValue(controllerId?: number): number;
    getBValue(controllerId?: number): number;
    getCancelValue(controllerId?: number): number;
    getDownValue(controllerId?: number): number;
    getHomeValue(controllerId?: number): number;
    getL1Value(controllerId?: number): number;
    getL2Value(controllerId?: number): number;
    getLeftClickValue(controllerId?: number): number;
    getLeftValue(controllerId?: number): number;
    getLeftStickDownValue(controllerId?: number): number;
    getLeftStickLeftValue(controllerId?: number): number;
    getLeftStickRightValue(controllerId?: number): number;
    getLeftStickUpValue(controllerId?: number): number;
    getOkValue(controllerId?: number): number;
    getR1Value(controllerId?: number): number;
    getR2Value(controllerId?: number): number;
    getRightClickValue(controllerId?: number): number;
    getRightValue(controllerId?: number): number;
    getRightStickDownValue(controllerId?: number): number;
    getRightStickLeftValue(controllerId?: number): number;
    getRightStickRightValue(controllerId?: number): number;
    getRightStickUpValue(controllerId?: number): number;
    getSelectValue(controllerId?: number): number;
    getStartValue(controllerId?: number): number;
    getUpValue(controllerId?: number): number;
    getXValue(controllerId?: number): number;
    getYValue(controllerId?: number): number;

    isAPressed(controllerId?: number): boolean;
    isBPressed(controllerId?: number): boolean;
    isCancelPressed(controllerId?: number): boolean;
    isDownPressed(controllerId?: number): boolean;
    isHomePressed(controllerId?: number): boolean;
    isL1Pressed(controllerId?: number): boolean;
    isL2Pressed(controllerId?: number): boolean;
    isLeftClickPressed(controllerId?: number): boolean;
    isLeftPressed(controllerId?: number): boolean;
    isLeftStickDownPressed(controllerId?: number): boolean;
    isLeftStickLeftPressed(controllerId?: number): boolean;
    isLeftStickRightPressed(controllerId?: number): boolean;
    isLeftStickUpPressed(controllerId?: number): boolean;
    isOkPressed(controllerId?: number): boolean;
    isR1Pressed(controllerId?: number): boolean;
    isR2Pressed(controllerId?: number): boolean;
    isRightClickPressed(controllerId?: number): boolean;
    isRightPressed(controllerId?: number): boolean;
    isRightStickDownPressed(controllerId?: number): boolean;
    isRightStickLeftPressed(controllerId?: number): boolean;
    isRightStickRightPressed(controllerId?: number): boolean;
    isRightStickUpPressed(controllerId?: number): boolean;
    isSelectPressed(controllerId?: number): boolean;
    isStartPressed(controllerId?: number): boolean;
    isUpPressed(controllerId?: number): boolean;
    isXPressed(controllerId?: number): boolean;
    isYPressed(controllerId?: number): boolean;

    isAReleased(controllerId?: number): boolean;
    isBReleased(controllerId?: number): boolean;
    isCancelReleased(controllerId?: number): boolean;
    isDownReleased(controllerId?: number): boolean;
    isHomeReleased(controllerId?: number): boolean;
    isL1Released(controllerId?: number): boolean;
    isL2Released(controllerId?: number): boolean;
    isLeftClickReleased(controllerId?: number): boolean;
    isLeftReleased(controllerId?: number): boolean;
    isLeftStickDownReleased(controllerId?: number): boolean;
    isLeftStickLeftReleased(controllerId?: number): boolean;
    isLeftStickRightReleased(controllerId?: number): boolean;
    isLeftStickUpReleased(controllerId?: number): boolean;
    isOkReleased(controllerId?: number): boolean;
    isR1Released(controllerId?: number): boolean;
    isR2Released(controllerId?: number): boolean;
    isRightClickReleased(controllerId?: number): boolean;
    isRightReleased(controllerId?: number): boolean;
    isRightStickDownReleased(controllerId?: number): boolean;
    isRightStickLeftReleased(controllerId?: number): boolean;
    isRightStickRightReleased(controllerId?: number): boolean;
    isRightStickUpReleased(controllerId?: number): boolean;
    isSelectReleased(controllerId?: number): boolean;
    isStartReleased(controllerId?: number): boolean;
    isUpReleased(controllerId?: number): boolean;
    isXReleased(controllerId?: number): boolean;
    isYReleased(controllerId?: number): boolean;

    isAJustPressed(controllerId?: number): boolean;
    isBJustPressed(controllerId?: number): boolean;
    isCancelJustPressed(controllerId?: number): boolean;
    isDownJustPressed(controllerId?: number): boolean;
    isHomeJustPressed(controllerId?: number): boolean;
    isL1JustPressed(controllerId?: number): boolean;
    isL2JustPressed(controllerId?: number): boolean;
    isLeftClickJustPressed(controllerId?: number): boolean;
    isLeftJustPressed(controllerId?: number): boolean;
    isLeftStickDownJustPressed(controllerId?: number): boolean;
    isLeftStickLeftJustPressed(controllerId?: number): boolean;
    isLeftStickRightJustPressed(controllerId?: number): boolean;
    isLeftStickUpJustPressed(controllerId?: number): boolean;
    isOkJustPressed(controllerId?: number): boolean;
    isR1JustPressed(controllerId?: number): boolean;
    isR2JustPressed(controllerId?: number): boolean;
    isRightClickJustPressed(controllerId?: number): boolean;
    isRightJustPressed(controllerId?: number): boolean;
    isRightStickDownJustPressed(controllerId?: number): boolean;
    isRightStickLeftJustPressed(controllerId?: number): boolean;
    isRightStickRightJustPressed(controllerId?: number): boolean;
    isRightStickUpJustPressed(controllerId?: number): boolean;
    isSelectJustPressed(controllerId?: number): boolean;
    isStartJustPressed(controllerId?: number): boolean;
    isUpJustPressed(controllerId?: number): boolean;
    isXJustPressed(controllerId?: number): boolean;
    isYJustPressed(controllerId?: number): boolean;

    isAJustReleased(controllerId?: number): boolean;
    isBJustReleased(controllerId?: number): boolean;
    isCancelJustReleased(controllerId?: number): boolean;
    isDownJustReleased(controllerId?: number): boolean;
    isHomeJustReleased(controllerId?: number): boolean;
    isL1JustReleased(controllerId?: number): boolean;
    isL2JustReleased(controllerId?: number): boolean;
    isLeftClickJustReleased(controllerId?: number): boolean;
    isLeftJustReleased(controllerId?: number): boolean;
    isLeftStickDownJustReleased(controllerId?: number): boolean;
    isLeftStickLeftJustReleased(controllerId?: number): boolean;
    isLeftStickRightJustReleased(controllerId?: number): boolean;
    isLeftStickUpJustReleased(controllerId?: number): boolean;
    isOkJustReleased(controllerId?: number): boolean;
    isR1JustReleased(controllerId?: number): boolean;
    isR2JustReleased(controllerId?: number): boolean;
    isRightClickJustReleased(controllerId?: number): boolean;
    isRightJustReleased(controllerId?: number): boolean;
    isRightStickDownJustReleased(controllerId?: number): boolean;
    isRightStickLeftJustReleased(controllerId?: number): boolean;
    isRightStickRightJustReleased(controllerId?: number): boolean;
    isRightStickUpJustReleased(controllerId?: number): boolean;
    isSelectJustReleased(controllerId?: number): boolean;
    isStartJustReleased(controllerId?: number): boolean;
    isUpJustReleased(controllerId?: number): boolean;
    isXJustReleased(controllerId?: number): boolean;
    isYJustReleased(controllerId?: number): boolean;
  };

  pcKeys: {
    getAValue(): number;
    getDValue(): number;
    getDownValue(): number;
    getLeftClickValue(): number;
    getLeftValue(): number;
    getMiddleClickValue(): number;
    getMousePointerValue(): number;
    getRightClickValue(): number;
    getRightValue(): number;
    getSValue(): number;
    getUpValue(): number;
    getWValue(): number;
    getWheelDownValue(): number;
    getWheelUpValue(): number;

    isAPressed(): boolean;
    isDPressed(): boolean;
    isDownPressed(): boolean;
    isLeftClickPressed(): boolean;
    isLeftPressed(): boolean;
    isMiddleClickPressed(): boolean;
    isMousePointerPressed(): boolean;
    isRightClickPressed(): boolean;
    isRightPressed(): boolean;
    isSPressed(): boolean;
    isUpPressed(): boolean;
    isWPressed(): boolean;
    isWheelDownPressed(): boolean;
    isWheelUpPressed(): boolean;

    isAReleased(): boolean;
    isDReleased(): boolean;
    isDownReleased(): boolean;
    isLeftClickReleased(): boolean;
    isLeftReleased(): boolean;
    isMiddleClickReleased(): boolean;
    isMousePointerReleased(): boolean;
    isRightClickReleased(): boolean;
    isRightReleased(): boolean;
    isSReleased(): boolean;
    isUpReleased(): boolean;
    isWReleased(): boolean;
    isWheelDownReleased(): boolean;
    isWheelUpReleased(): boolean;

    isAJustPressed(): boolean;
    isDJustPressed(): boolean;
    isDownJustPressed(): boolean;
    isLeftClickJustPressed(): boolean;
    isLeftJustPressed(): boolean;
    isMiddleClickJustPressed(): boolean;
    isMousePointerJustPressed(): boolean;
    isRightClickJustPressed(): boolean;
    isRightJustPressed(): boolean;
    isSJustPressed(): boolean;
    isUpJustPressed(): boolean;
    isWJustPressed(): boolean;
    isWheelDownJustPressed(): boolean;
    isWheelUpJustPressed(): boolean;

    isAJustReleased(): boolean;
    isDJustReleased(): boolean;
    isDownJustReleased(): boolean;
    isLeftClickJustReleased(): boolean;
    isLeftJustReleased(): boolean;
    isMiddleClickJustReleased(): boolean;
    isMousePointerJustReleased(): boolean;
    isRightClickJustReleased(): boolean;
    isRightJustReleased(): boolean;
    isSJustReleased(): boolean;
    isUpJustReleased(): boolean;
    isWJustReleased(): boolean;
    isWheelDownJustReleased(): boolean;
    isWheelUpJustReleased(): boolean;
  };
}
