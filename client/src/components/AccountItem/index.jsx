import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import Avatar1 from '~/assets/images/avatar-1.jpg';

import { FaCheckCircle } from 'react-icons/fa';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('circle')}>
                <img className={cx('avatar')} src={Avatar1} alt='hoa' />
            </span>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span className={cx('username')}>@hongnhungnguen123</span>
                    <FaCheckCircle className={cx('fa-check')} />
                </p>
                <span className={cx('nick-name')}>@nguyenvana</span>
            </div>
        </div>
    );
};

export default AccountItem;
