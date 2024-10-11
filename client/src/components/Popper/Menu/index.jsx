import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const Menu = ({ children, items }) => {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={(attrs) => (
                <PopperWrapper>
                    <ul className={cx('content')} tabIndex='-1' {...attrs}>
                        {renderItems()}
                    </ul>
                </PopperWrapper>
            )}>
            {children}
        </Tippy>
    );
};

export default Menu;
