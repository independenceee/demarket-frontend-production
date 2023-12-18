"use client";

import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import NavbarItem from "@/layouts/components/Header/HeaderOption";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ClipLoader } from "react-spinners";
import Search from "@/layouts/components/Search";
import { CartContextType } from "@/types/CartContextType";
import CartContext from "@/contexts/components/CartContext";
import Cart from "@/components/Cart";
import { AccountContextType } from "@/types/AccountContextType";
import AccountContext from "@/contexts/components/AccountContext";
import { publicRouters } from "@/routes";
import Logo from "@/components/Logo";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import Avatar from "@/components/Avatar";
import { ModalContextType } from "@/types/ModalContextType";
import ModalContext from "@/contexts/components/ModalContext";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
const cx = classNames.bind(styles);
type Props = {
    selectedRouter: string;
    setSelectedRouter: React.Dispatch<React.SetStateAction<string>>;
};

const Header = function ({ selectedRouter, setSelectedRouter }: Props) {
    const { cartItem } = useContext<CartContextType>(CartContext);
    const { account, loadingAccount } = useContext<AccountContextType>(AccountContext);
    const { isShowingCart, isShowingSearch, toggleShowingSearch, toggleShowingCart } =
        useContext<ModalContextType>(ModalContext);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("container")}>
                <Logo />
                <nav className={cx("navbar")}>
                    {publicRouters.map(function (publicRouter, index: number) {
                        return (
                            <NavbarItem
                                key={index}
                                text={publicRouter.name}
                                redirect={publicRouter.redirect}
                                isActive={Boolean(selectedRouter === publicRouter.name)}
                                setSelected={setSelectedRouter}
                            />
                        );
                    })}
                </nav>
                <div className={cx("button__wrapper")}>
                    <div className={cx("button__other")}>
                        <div className={cx("icon__container")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={toggleShowingSearch} />
                        </div>
                        <div className={cx("icon__container")}>
                            <FontAwesomeIcon icon={faCartShopping} onClick={toggleShowingCart} />
                            <span>{cartItem.totalQuantity}</span>
                        </div>
                        {loadingAccount && (
                            <ClipLoader size={20} color="#36d7b7" loading={loadingAccount} speedMultiplier={1} />
                        )}
                        {account && <Avatar account={account} />}
                    </div>

                    <ConnectWallet />

                    {/* <Button>
                        <FontAwesomeIcon icon={faBars} />
                        {/* <FontAwesomeIcon icon={faXmark} /> */}
                    {/* </Button> */}
                </div>
            </div>

            <Modal isShowing={isShowingSearch} toggle={toggleShowingSearch}>
                <Search />
            </Modal>

            <Modal isShowing={isShowingCart} toggle={toggleShowingCart}>
                <Cart />
            </Modal>
        </header>
    );
};

export default Header;
