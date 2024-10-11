import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    primary = false,
    outline = false,
    children,
    medium,
    small,
    big,
    disable,
    rounded,
    className,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        medium,
        small,
        big,
        disable,
        rounded,
        [className]: className,
        ...passProps,
    });

    const props = {
        onClick,
        ...passProps,
    };

    // if (disable) {
    //     delete props.disable;
    // }

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
};

export default Button;
