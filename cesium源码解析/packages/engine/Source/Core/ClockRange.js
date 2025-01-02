/**
 * Constants used by {@link Clock#tick} to determine behavior
 * when {@link Clock#startTime} or {@link Clock#stopTime} is reached.
 *
 * @enum {number}
 *
 * @see Clock
 * @see ClockStep
 */
const ClockRange = {
  /**
   * {@link Clock#tick} 将始终朝着当前方向前进.
   *
   * @type {number}
   * @constant
   */
  UNBOUNDED: 0,

  /**
   * When {@link Clock#startTime} or {@link Clock#stopTime} is reached,
   * {@link Clock#tick} will not advance {@link Clock#currentTime} any further.
   *
   * @type {number}
   * @constant
   */
  CLAMPED: 1,

  /**
   * When {@link Clock#stopTime} is reached, {@link Clock#tick} will advance
   * {@link Clock#currentTime} to the opposite end of the interval.  When
   * time is moving backwards, {@link Clock#tick} will not advance past
   * {@link Clock#startTime}
   *
   * @type {number}
   * @constant
   */
  LOOP_STOP: 2,
};
export default Object.freeze(ClockRange);
