import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import Tools from '~/assets/images/icons/tools.svg';
import Language from '~/assets/images/icons/language.svg';
import Feedback from '~/assets/images/icons/feedback.svg';
import Mode from '~/assets/images/icons/mode.svg';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

import { IoIosClose } from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: Tools,
        title: 'Create tools',
    },
    {
        icon: Language,
        title: 'English',
    },
    {
        icon: Feedback,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: Mode,
        title: 'Dark mode',
    },
];

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 1000);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='tiktok' />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <PopperWrapper>
                            <ul
                                className={cx('search-result')}
                                tabIndex='-1'
                                {...attrs}>
                                <li className={cx('result')}>
                                    <div className={cx('result-title')}>
                                        <CiSearch className={cx('ci-search')} />
                                        <span className={cx('desc-result')}>
                                            hong nhung
                                        </span>
                                    </div>
                                </li>
                                <li className={cx('result')}>
                                    <div className={cx('result-title')}>
                                        <CiSearch className={cx('ci-search')} />
                                        <span className={cx('desc-result')}>
                                            hong nhung livestream
                                        </span>
                                    </div>
                                </li>
                                <li className={cx('result')}>
                                    <div className={cx('result-title')}>
                                        <CiSearch className={cx('ci-search')} />
                                        <span className={cx('desc-result')}>
                                            hong nhung mac bikini
                                        </span>
                                    </div>
                                </li>
                                <h4 className={cx('search-title')}>accounts</h4>
                                <li className={cx('result')}>
                                    <AccountItem />
                                </li>
                                <li className={cx('result')}>
                                    <AccountItem />
                                </li>
                                <li className={cx('result')}>
                                    <AccountItem />
                                </li>
                            </ul>
                        </PopperWrapper>
                    )}>
                    <div className={cx('search')}>
                        <input
                            type='text'
                            placeholder='Search accounts and video'
                            spellCheck={false}
                        />

                        <button className={cx('clear')}>
                            <IoIosClose className={cx('close')} />
                            <AiOutlineLoading3Quarters
                                className={cx('loading')}
                            />
                        </button>

                        <button className={cx('search-btn')}>
                            <IoIosSearch />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button medium>Upload</Button>
                    <Button primary medium className={cx('custom-login')}>
                        Log in
                    </Button>

                    <Menu items={MENU_ITEMS}>
                        <button>
                            <BsThreeDotsVertical
                                className={cx('ellipsis-vertical')}
                            />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
