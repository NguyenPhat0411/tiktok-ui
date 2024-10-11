import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

const MenuItem = ({ key, data }) => {
    return (
        <li className={cx('menu-list')} key={key}>
            <Link className={cx('menu-list-row')} to={data.to}>
                <img src={data.icon} alt='' />
                <span className={cx('menu-list-desc')}>{data.title}</span>
            </Link>
        </li>
    );
};

export default MenuItem;
