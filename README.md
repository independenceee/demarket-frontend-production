.button\_\_wrapper {
display: flex;
align-items: center;
gap: 5px;
padding: 13px 14px;
font-size: 14px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0px;
border: 1px solid #7000ff;
border-radius: 8px;
transition: all 0.2s ease 0s;
cursor: pointer;

    &:hover {
        background: linear-gradient(
            90deg,
            #8f04a6 0%,
            #c0f 0%,
            #7000ff 39.36%,
            rgba(44, 0, 219, 0.91) 63.12%,
            rgba(4, 0, 203, 0.89) 79.64%,
            #1400ff 99.32%
        );
        color: #fff;
        border-color: transparent;
    }

}

.wrapper\_\_nowallet {
background-color: #fffff3;
border-radius: 4px;
color: #000;
box-shadow: 0px 60px 24px rgba(23, 23, 20, 0.01), 0px 34px 20px rgba(21, 21, 18, 0.02),
0px 15px 15px rgba(26, 26, 22, 0.03), 0px 4px 8px rgba(20, 20, 16, 0.04), 0px 0px 0px rgba(32, 32, 27, 0.04);

    display: flex;
    flex-direction: column;
    left: 50%;
    max-height: 85vh;

    width: 90vw;
    max-width: 710px;
    overflow: hidden;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);

    .nowallet__content {
        padding: 32px 56px;

        p {
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 175%;
            color: #000;
            overflow-wrap: anywhere;
            white-space: pre-wrap;
        }
    }
    .nowallet__button {
        align-items: center;
        border-top: 1px solid #ccc;
        bottom: 0;
        display: flex;
        gap: 16px;
        height: auto;
        justify-content: flex-end;
        left: 0;
        padding: 16px 56px;
        position: sticky;
        right: 0;

        .button__ok {
            display: flex;
            align-items: center;
            color: #000;
            background: transparent;
            border: 1px solid rgba(0, 0, 0, 0.16);
            border-radius: 8px;
            cursor: pointer;
            padding: 4px 24px;
            height: 48px;
            width: auto;

            &:hover {
                background: #ebebe0;
            }
        }

        .button__cancel {
            display: flex;
            align-items: center;
            color: #fff;
            background: #d02f2d;
            border: 1px solid rgba(0, 0, 0, 0.16);
            border-radius: 8px;
            cursor: pointer;
            padding: 4px 24px;
            height: 48px;
            width: auto;

            &:hover {
                background: #ae2726;
            }
        }
    }

}

.wallet-wrapper {
width: 448px;
z-index: 50;
background: #fff;
border-radius: 4px;

    .wallet-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 24px;

        .wallet-title {
            font-weight: bold;
            font-size: 20px;
        }
        .wallet-close {
            font-weight: bold;
            font-size: 20px;
            width: 32px;
            height: 32px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;

            &:hover {
                background: rgba(0, 0, 0, 0.06);
            }
        }
    }

    .wallet-list {
        padding: 8px 24px 40px;
    }

}

// navbar-begin
.wrapper {
width: 100%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 10px #000;
background: #fff;
padding: 0 5%;
z-index: 1000;
}

.checkbox\_\_wrapper {
display: none;
}

// logo-begin
.logo\_\_wrapper {
flex: 1;
display: flex;
align-items: center;
color: #fff;
text-transform: uppercase;

    .logo__container {
        width: 200px;
        height: auto;

        .logo__image {
            display: block;
            width: 100%;
            height: 100%;
            visibility: visible;
            object-fit: cover;
        }
    }

}
// logo-end

// search-begin
.search\_\_wrapper {
flex: 1;
position: relative;

    .search__container {
        .search__input {
            width: 100%;
            height: 40px;
            border: none;
            outline: none;
            background: rgba(0, 0, 0, 0.16);
            border-radius: 30px;
            font-size: 16px;

            padding-left: 15px;
            padding-right: 40px;
        }
        .search__button {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 30px;
            border: none;
            position: absolute;
            top: 0;
            right: 0;
            transform: scale(0.9);
            background: #fff;
            .search__icon {
                width: 30px;
                height: 30px;
            }
        }
    }

}
// search-end

// navbar-begin
.navbar\_\_list {
flex: 2;
display: flex;
justify-content: space-evenly;
align-items: center;
list-style: none;

    .navbar__item {
        list-style: none;

        .navbar__link {
            text-decoration: none;
            color: #000;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 17px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

            &:before {
                background-color: #000;
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            a:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

}
// navbar-end

// menu-begin
.menu\_\_wrapper {
font-size: 2rem;
display: none;
}
// menu-end

// navbar-end

// reponsive-begin
@media (max-width: 1000px) {
// search-begin
.search**wrapper {
.search**container {
.search**input {
}
.search**button {
position: absolute;
.search\_\_icon {
}
}
}
}
// search-end

    // navbar-begin
    .navbar__list {
        position: fixed;
        z-index: 1000;
        top: 80px;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        height: calc(100vh - 80px);
        width: 50%;
        flex-direction: column;
        align-items: center;
        transition: right 0.5s linear;
        .navbar__item {
            .navbar__link {
            }
        }
    }
    // menu-start
    .menu__wrapper {
        display: block;
        // width: 100px;
        text-align: center;
    }
    // menu-end
    .checkbox__wrapper:checked ~ ul {
        right: 0;
    }

}

@media (max-width: 600px) {
.navbar**list {
position: fixed;
z-index: 1000;
top: 80px;
right: 0;
background: rgba(0, 0, 0, 0.7);
height: calc(100vh - 80px);
width: 100%;
flex-direction: column;
align-items: center;
transition: right 0.5s linear;
.navbar**item {
.navbar\_\_link {
}
}
}
}
// reponsive-end
