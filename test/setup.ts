import { createMockObjectInstance } from './mocks/create-mock-object-instance.function';

console.log('Jest Setup');

(global as Record<string, unknown>)['Agtk'] = {
  constants: {
    objects: {
      switches: {
        InvincibleId: 1,
        FreeMoveId: 2,
        LockTargetId: 3,
        PortalTouchedId: 4,
        CriticalDamagedId: 5,
        DisabledId: 6,
        SlipOnSlopeId: 7,
        AffectOtherObjectsId: 8,
        AffectedByOtherObjectsId: 9,
        FollowConnectedPhysicsId: 10,
        DisplayAfterimageId: 11
      },
      variables: {
        ObjectIDId: 1,
        HPId: 2,
        MaxHPId: 3,
        MinimumAttackId: 4,
        MaximumAttackId: 5,
        DamageRatioId: 6,
        AttackAttributeId: 7,
        AreaAttributeId: 8,
        XId: 9,
        YId: 10,
        VelocityXId: 11,
        VelocityYId: 12,
        PlayerIDId: 13,
        DamageValueId: 14,
        CriticalRatioId: 15,
        CriticalIncidenceId: 16,
        InvincibleDurationId: 17,
        FixedAnimationFrameId: 18,
        InstanceIDId: 19,
        InstanceCountId: 20,
        SingleInstanceIDId: 21,
        ControllerIDId: 22,
        HorizontalMoveId: 23,
        VerticalMoveId: 24,
        HorizontalAccelId: 25,
        VerticalAccelId: 26,
        HorizontalMaxMoveId: 27,
        VerticalMaxMoveId: 28,
        HorizontalDecelId: 29,
        VerticalDecelId: 30,
        DurationToTakeOverAccelerationMoveSpeedId: 31,
        ScalingXId: 32,
        ScalingYId: 33,
        DispPriorityId: 34,
        InitialJumpSpeedId: 35,
        DamageVariationValueId: 36,
        DisplayDirectionId: 37,
        ParentObjectInstanceIDId: 38
      }
    }
  },

  objectInstances: {
    get() {
      return createMockObjectInstance();
    }
  }
};
