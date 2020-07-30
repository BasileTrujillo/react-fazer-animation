import React from 'react';
import clsx from 'clsx';
import { FazerAnimationStyleProps, useStyles } from './FazerAnimation.style';

/**
 * Proptypes definition
 */
export type FazerAnimationProps = {
  bodyColor?: string;
  longfazersColor?: string;
  title?: string;
};

/**
 * The Fazer animation component
 * @param {FazerAnimationProps} props Component props
 * @constructor
 */
const FazerAnimation: React.FunctionComponent<FazerAnimationProps> = (props: FazerAnimationProps) => {
  const classes = useStyles({
    bodyColor: props.bodyColor,
    longfazersColor: props.longfazersColor,
  } as FazerAnimationStyleProps);

  return (
    <>
      <div className={classes.body}>
        <span className={classes.body_fazers}>
          <span className={classes.body_fazer} />
          <span
            className={clsx({
              [classes.body_fazer]: true,
              [classes.body_fazer_2]: true,
            })}
          />
          <span
            className={clsx({
              [classes.body_fazer]: true,
              [classes.body_fazer_3]: true,
            })}
          />
          <span
            className={clsx({
              [classes.body_fazer]: true,
              [classes.body_fazer_4]: true,
            })}
          />
        </span>
        <div>
          {' '}
          {/* base */}
          <span className={classes.base} />
          <div className={classes.face} />
        </div>
      </div>
      <div className={classes.longfazers}>
        <span
          className={clsx({
            [classes.longfazer]: true,
            [classes.longfazer_1]: true,
          })}
        />
        <span
          className={clsx({
            [classes.longfazer]: true,
            [classes.longfazer_2]: true,
          })}
        />
        <span
          className={clsx({
            [classes.longfazer]: true,
            [classes.longfazer_3]: true,
          })}
        />
        <span
          className={clsx({
            [classes.longfazer]: true,
            [classes.longfazer_4]: true,
          })}
        />
      </div>
      <h1 className={classes.title}>{props.title}</h1>
    </>
  );
};

/**
 * Default props
 */
FazerAnimation.defaultProps = {
  bodyColor: '#000',
  longfazersColor: '#000',
  title: '',
};

export default FazerAnimation;
