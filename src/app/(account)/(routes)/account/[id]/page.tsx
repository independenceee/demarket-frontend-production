"use client";

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import CountUp from "react-countup";
import classNames from "classnames/bind";
import { FaFacebookMessenger, FaShare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import {
    ArrowDropdownCircleIcon,
    CreatedAtIcon,
    FollowerIcon,
    NftIcon,
    PolicyIdIcon,
    RatingIcon,
    SelledIcon,
    StakekeyIcon,
    ArrowRightIcon,
    FillDashCircleFillIcon,
} from "@/components/Icons";
import NftContainer from "@/components/NftContainer";
import CopyItem from "@/components/CopyItem";
import AccountContainer from "@/components/AccountContainer";
import styles from "./Account.module.scss";
import images from "@/assets/images";
import LucidContext from "@/contexts/components/LucidContext";
import DemarketContext from "@/contexts/components/DemarketContext";
import { LucidContextType } from "@/types/LucidContextType";
import { DemarketContextType } from "@/types/DemarketContextType";
import AccountContext from "@/contexts/components/AccountContext";
import { AccountContextType } from "@/types/AccountContextType";
import Search from "@/components/Search";
import fetchStakeKeyFromAddress from "@/utils/fetchStakeKeyFromAddress";
import Category from "@/components/Category";
import Link from "next/link";
import { AccountItemType } from "@/types/GenericsType";
import { post } from "@/utils/httpRequest";

type Props = {};
const cx = classNames.bind(styles);

const tabItems = [
    { name: "My assets", slug: "my assets" },
    { name: "Selling", slug: "selling" },
    { name: "Created", slug: "created" },
    { name: "Collection", slug: "collection" },
    { name: "Following", slug: "following" },
    { name: "Follower", slug: "follower" },
    { name: "Like", slug: "like" },
];

const AccountPage = function ({}: Props) {
    const { id: walletAddressPath } = useParams();

    const [stakeKey, setStakeKey] = useState<string>("");
    const [openIntroduce, setOpenIntroduce] = useState<boolean>(true);
    const handleOpenIntroduct = function () {
        setOpenIntroduce(!openIntroduce);
    };

    useEffect(
        function () {
            const fetchStakeKey = async function () {
                setStakeKey(await fetchStakeKeyFromAddress(String(walletAddressPath)));
            };
            fetchStakeKey();
        },
        [walletAddressPath],
    );

    const { walletItem, lucidWallet } = useContext<LucidContextType>(LucidContext);
    const { accounts, currentPageAccounts, loadingAccounts, setCurrentPageAccounts, totalPagesAccounts } =
        useContext<DemarketContextType>(DemarketContext);

    const {
        account,
        loadingAccount,

        assetsFromAddress,
        setAssetsFromAddress,
        currentPageAssetsFromAddress,
        setCurrentPageAssetsFromAddress,
        totalPagesAssetsFromAddress,
        setTotalPagesAssetsFromAddress,
        loadingAssetsFromAddress,
        setLoadingAssetsFromAddress,

        createdAssetsFromAddress,
        setCreatedAssetsFromAddress,
        currentPageCreatedAssetsFromAddress,
        setCurrentPageCreatedAssetsFromAddress,
        totalPagesCreatedAssetsFromAddress,
        setTotalPagesCreatedAssetsFromAddress,
        loadingCreatedAssetsFromAddress,
        setLoadingCreatedAssetsFromAddress,

        sellingAssetsFromAddress,
        setSellingAssetsFromAddress,
        currentPageSellingAssetsFromAddress,
        setCurrentPageSellingAssetsFromAddress,
        totalPagesSellingAssetsFromAddress,
        setTotalPagesSellingAssetsFromAddress,
        loadingSellingAssetsFromAddress,
        setLoadingSellingAssetsFromAddress,

        followers,
        setFollowers,
        currentPageFollowers,
        setCurrentPageFollowers,
        loadingFollowers,
        setLoadingFollowers,
        totalPagesFollowers,
        setTotalPagesFollowers,

        followings,
        setFollowings,
        loadingFollowings,
        setLoadingFollowings,
        currentPageFollowings,
        setCurrentPageFollowings,
        totalPagesFollowings,
        setTotalPagesFollowings,
    } = useContext<AccountContextType>(AccountContext);

    const [accountWalletAddressParams, setAccountWalletAddressParams] = useState<AccountItemType>(null!);

    useEffect(
        function () {
            const fetchAccountFromAddress = async function () {
                try {
                    const account: AccountItemType = await post("/account", {
                        walletAddress: walletItem.walletAddress,
                    });
                    setAccountWalletAddressParams(account);
                } catch (error) {
                    console.log(error);
                }
            };
            if (walletItem.walletAddress) {
                fetchAccountFromAddress();
            }
        },
        [walletItem.walletAddress],
    );
    const [activeTab, setActiveTab] = useState<string>("my assets");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const [searchValue, setSearchValue] = useState<string>("");

    return (
        <main className={cx("wrapper")}>
            <div className={cx("container")}>
                <section className={cx("banner__wrapper")}>
                    <Image className={cx("banner__image")} src={images.background} alt="Background" />
                </section>

                <section className={cx("account__wrapper")}>
                    <div className={cx("account__container")}>
                        <div className={cx("account__image")}>
                            <Image src={images.user} alt="User" className={cx("image")} />
                        </div>
                        {walletItem.walletAddress === walletAddressPath ? (
                            <Link href={`/account/${walletItem.walletAddress}/edit`} className={cx("account__button")}>
                                Edit profile
                            </Link>
                        ) : (
                            <Link href={`#`} className={cx("account__button")}>
                                Follow Account
                            </Link>
                        )}
                    </div>

                    <div className={cx("account__content")}>
                        <div className={cx("account__infomation")}>
                            <h3>{accountWalletAddressParams ? account.userName : stakeKey}</h3>
                            <p>{accountWalletAddressParams && account.description}</p>
                        </div>
                        <div className={cx("account__media")}>
                            <div className={cx("social__links")}>
                                <Link href={"#"}>
                                    <Image src={images.meta} alt="" />
                                </Link>
                                <Link href={""}>
                                    <Image src={images.linkedin} alt="" />
                                </Link>
                                <Link href={""}>
                                    <Image src={images.youtube} alt="" />
                                </Link>
                                <Link href={""}>
                                    <Image src={images.twitter} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={cx("content__wrapper")}>
                    <aside className={cx("content__left")}>
                        <Search searchValue="" setSearchValue={setSearchValue} />
                        <section className={cx("content__filter")}>
                            <header className={cx("content__filter--header")} onClick={handleOpenIntroduct}>
                                <h3 className={cx("content__filter--title")}>Introduce</h3>
                                {!openIntroduce ? (
                                    <ArrowDropdownCircleIcon className={cx("content__filter--icon")} />
                                ) : (
                                    <FillDashCircleFillIcon className={cx("content__filter--icon")} />
                                )}
                            </header>
                            {openIntroduce && (
                                <article className={cx("content__filter--option")}>
                                    <section className={cx("content__filter--group")}>
                                        <h4 className={cx("content__filter--name")}>
                                            <PolicyIdIcon />
                                            <span>Address:</span>
                                        </h4>
                                        <p className={cx("content__filter--description")}>{walletAddressPath}</p>
                                        <CopyItem value="123" />
                                    </section>
                                    <section className={cx("content__filter--group")}>
                                        <h4 className={cx("content__filter--name")}>
                                            <StakekeyIcon />
                                            <span>Stake key: </span>
                                        </h4>
                                        <p className={cx("content__filter--description")}>{stakeKey}</p>
                                        <CopyItem value="123" />
                                    </section>
                                    <section className={cx("content__filter--group")}>
                                        <h4 className={cx("content__filter--name")}>
                                            <NftIcon />
                                            <span>NFTs: </span>
                                        </h4>
                                        <h4 className={cx("content__filter--value")}>
                                            <CountUp start={0} end={assetsFromAddress.length} />
                                        </h4>
                                    </section>
                                    <section className={cx("content__filter--group")}>
                                        <h4 className={cx("content__filter--name")}>
                                            <SelledIcon className={cx("content__filter--icon")} />
                                            <span>NFTs selling:</span>
                                        </h4>
                                        <h4 className={cx("content__filter--value")}>
                                            <CountUp start={0} end={sellingAssetsFromAddress.length} />
                                        </h4>
                                    </section>
                                    <section className={cx("content__filter--group")}>
                                        <h4 className={cx("content__filter--name")}>
                                            <FollowerIcon className={cx("content__filter--icon")} />
                                            <span>Followers:</span>
                                        </h4>
                                        <h4 className={cx("content__filter--value")}>0</h4>
                                    </section>
                                    <section className={cx("content__filter--group")}>
                                        <h4 className={cx("content__filter--name")}>
                                            <RatingIcon className={cx("content__filter--icon")} />
                                            <span>Rating</span>
                                        </h4>
                                        <h4 className={cx("content__filter--value")}>0</h4>
                                    </section>
                                    <section className={cx("content__filter--group")}>
                                        <h4 className={cx("content__filter--name")}>
                                            <CreatedAtIcon className={cx("content__filter--icon")} />
                                            <span>Joinned</span>
                                        </h4>
                                        <h4 className={cx("content__filter--value")}></h4>
                                    </section>
                                </article>
                            )}
                        </section>

                        <Category setSelectedCategory={setSelectedCategory} />
                    </aside>
                    <article className={cx("content__right")}>
                        <nav className={cx("tab__wrapper")}>
                            <ul className={cx("tab__list")}>
                                {tabItems.map(function (tab, index) {
                                    return (
                                        <li
                                            key={index}
                                            onClick={() => setActiveTab(tab.slug)}
                                            className={
                                                activeTab == tab.slug ? cx("tab__item--active") : cx("tab__item")
                                            }
                                        >
                                            {tab.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <section>
                            {activeTab === "my assets" && (
                                <NftContainer nfts={assetsFromAddress} loading={loadingAssetsFromAddress} />
                            )}
                            {activeTab === "selling" && (
                                <NftContainer
                                    nfts={sellingAssetsFromAddress}
                                    loading={loadingSellingAssetsFromAddress}
                                />
                            )}
                            {activeTab === "created" && (
                                <NftContainer
                                    nfts={createdAssetsFromAddress}
                                    loading={loadingCreatedAssetsFromAddress}
                                />
                            )}
                            {activeTab === "collection" && <NftContainer nfts={assetsFromAddress} />}
                            {activeTab === "following" && (
                                <AccountContainer
                                    accounts={followings}
                                    currentPageAccounts={currentPageFollowings}
                                    totalPagesAccounts={totalPagesFollowings}
                                    loadingAccounts={loadingFollowings}
                                    setCurrentPageAccounts={setCurrentPageFollowings}
                                />
                            )}
                            {activeTab === "follower" && (
                                <AccountContainer
                                    accounts={followers}
                                    currentPageAccounts={currentPageFollowers}
                                    totalPagesAccounts={totalPagesFollowers}
                                    loadingAccounts={loadingFollowers}
                                    setCurrentPageAccounts={setCurrentPageFollowers}
                                />
                            )}
                            {activeTab === "like" && <NftContainer nfts={assetsFromAddress} />}
                        </section>
                        <section className={cx("follower__wrapper")}>
                            <header className={cx("follower__header")}>Popular Creators</header>
                            <div className={cx("follower__container")}>
                                <AccountContainer
                                    accounts={accounts}
                                    currentPageAccounts={currentPageAccounts}
                                    totalPagesAccounts={totalPagesAccounts}
                                    loadingAccounts={loadingAccounts}
                                    setCurrentPageAccounts={setCurrentPageAccounts}
                                />
                            </div>
                        </section>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default AccountPage;
