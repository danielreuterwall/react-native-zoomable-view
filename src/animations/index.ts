import { Animated, Easing } from 'react-native';
import { Vec2D } from 'src/typings';

export function getBoundaryCrossedAnim(
  animValue: Animated.Value,
  toValue: number
) {
  return Animated.spring(animValue, {
    overshootClamping: true,
    toValue,
    useNativeDriver: true,
  });
}

export function getPanMomentumDecayAnim(
  animValue: Animated.Value | Animated.ValueXY,
  velocity: number | Vec2D
) {
  return Animated.decay(animValue, {
    velocity,
    deceleration: 0.994,
    useNativeDriver: true,
  });
}

export function getZoomToAnimation(animValue: Animated.Value, toValue: number, config?: Partial<Animated.TimingAnimationConfig>) {
  const animationConfig = Object.assign({
    easing: Easing.out(Easing.ease),
    toValue,
    useNativeDriver: true
  }, config);
  return Animated.timing(animValue, animationConfig);
}
