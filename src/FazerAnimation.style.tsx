import { createStyles, makeStyles } from '@material-ui/styles';

/**
 * Style props interface helper
 */
export interface FazerAnimationStyleProps {
  bodyColor: string;
  longfazersColor: string;
}

/**
 * Style used by the FazerAnimation component
 */
export const useStyles = makeStyles(() =>
  createStyles({
    title: {
      position: 'absolute',
      fontSize: 12,
      textTransform: 'uppercase',
      left: 'auto',
      top: '58%',
      marginLeft: -20,
    },
    body: {
      position: 'absolute',
      top: '50%',
      marginLeft: -75,
      left: '50%',
      animation: '$speeder .4s linear infinite',
    },
    body_fazers: {
      height: 5,
      width: 35,
      background: (props: FazerAnimationStyleProps) => props.bodyColor,
      position: 'absolute',
      top: -19,
      left: 60,
      borderRadius: '2px 10px 1px 0',
    },
    base: {
      position: 'absolute',
      width: '0',
      height: '0',
      borderTop: '6px solid transparent',
      borderRight: (props: FazerAnimationStyleProps) => `100px solid ${props.bodyColor}`,
      borderBottom: '6px solid transparent',
      '&:before': {
        content: '""',
        height: 22,
        width: 22,
        borderRadius: '50%',
        background: (props: FazerAnimationStyleProps) => props.bodyColor,
        position: 'absolute',
        right: -110,
        top: -16,
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        width: '0',
        height: '0',
        borderTop: '0 solid transparent',
        borderRight: (props: FazerAnimationStyleProps) => `55px solid ${props.bodyColor}`,
        borderBottom: '16px solid transparent',
        top: -16,
        right: -98,
      },
    },

    face: {
      position: 'absolute',
      height: 12,
      width: 20,
      background: (props: FazerAnimationStyleProps) => props.bodyColor,
      borderRadius: '20px 20px 0 0',
      transform: 'rotate(-40deg)',
      right: -125,
      top: -15,
      '&:after': {
        content: '""',
        height: 12,
        width: 12,
        background: (props: FazerAnimationStyleProps) => props.bodyColor,
        right: 4,
        top: 7,
        position: 'absolute',
        transform: 'rotate(40deg)',
        transformOrigin: '50% 50%',
        borderRadius: '0 0 0 2px',
      },
    },

    body_fazer: {
      width: 30,
      height: 1,
      background: (props: FazerAnimationStyleProps) => props.bodyColor,
      position: 'absolute',
      animation: '$fazer1 .2s linear infinite',
    },
    body_fazer_2: {
      top: 3,
      animation: '$fazer2 .4s linear infinite',
    },
    body_fazer_3: {
      top: 1,
      animation: '$fazer3 .4s linear infinite',
      animationDelay: '-1s',
    },
    body_fazer_4: {
      top: 4,
      animation: '$fazer4 1s linear infinite',
      animationDelay: '-1s',
    },

    '@keyframes fazer1': {
      '0%': {
        left: '0',
      },
      '100%': {
        left: -80,
        opacity: '0',
      },
    },
    '@keyframes fazer2': {
      '0%': {
        left: '0',
      },
      '100%': {
        left: -100,
        opacity: '0',
      },
    },
    '@keyframes fazer3': {
      '0%': {
        left: '0',
      },
      '100%': {
        left: -50,
        opacity: '0',
      },
    },
    '@keyframes fazer4': {
      '0%': {
        left: '0',
      },
      '100%': {
        left: -150,
        opacity: '0',
      },
    },
    '@keyframes speeder': {
      '0%': {
        transform: 'translate(2px, 1px) rotate(0deg)',
      },
      '10%': {
        transform: 'translate(-1px, -3px) rotate(-1deg)',
      },
      '20%': {
        transform: 'translate(-2px, 0px) rotate(1deg)',
      },
      '30%': {
        transform: 'translate(1px, 2px) rotate(0deg)',
      },
      '40%': {
        transform: 'translate(1px, -1px) rotate(1deg)',
      },
      '50%': {
        transform: 'translate(-1px, 3px) rotate(-1deg)',
      },
      '60%': {
        transform: 'translate(-1px, 1px) rotate(0deg)',
      },
      '70%': {
        transform: 'translate(3px, 1px) rotate(-1deg)',
      },
      '80%': {
        transform: 'translate(-2px, -1px) rotate(1deg)',
      },
      '90%': {
        transform: 'translate(2px, 1px) rotate(0deg)',
      },
      '100%': {
        transform: 'translate(1px, -2px) rotate(-1deg)',
      },
    },

    longfazers: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
    },
    longfazer: {
      position: 'absolute',
      height: 2,
      width: '20%',
      background: (props: FazerAnimationStyleProps) => props.longfazersColor,
    },
    longfazer_1: {
      top: '20%',
      animation: '$lf .6s linear infinite',
      animationDelay: '-5s',
    },
    longfazer_2: {
      top: '40%',
      animation: '$lf2 .8s linear infinite',
      animationDelay: '-1s',
    },
    longfazer_3: {
      top: '60%',
      animation: '$lf3 .6s linear infinite',
    },
    longfazer_4: {
      top: '80%',
      animation: '$lf4 .5s linear infinite',
      animationDelay: '-3s',
    },

    '@keyframes lf': {
      '0%': {
        left: '200%',
      },
      '100%': {
        left: '-200%',
        opacity: '0',
      },
    },
    '@keyframes lf2': {
      '0%': {
        left: '200%',
      },
      '100%': {
        left: '-200%',
        opacity: '0',
      },
    },
    '@keyframes lf3': {
      '0%': {
        left: '200%',
      },
      '100%': {
        left: '-100%',
        opacity: '0',
      },
    },
    '@keyframes lf4': {
      '0%': {
        left: '200%',
      },
      '100%': {
        left: '-100%',
        opacity: '0',
      },
    },
  }),
);
