/*! KID.js 
    v1.0.3 (c) soso
    MIT License
    https://github.com/Generalsimus/JSkid
*/
var kid_css = {
        0: {
            padding: '10px 0',
            boxSizing: 'border-box'
        },
        1: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0 50px',
            boxSizing: 'border-box'

        },
        2: {
            width: 'calc(100%/3)',
            padding: '10px',
            boxSizing: 'border-box;'
        },
        3: {
            marginTop: '10px',
            "& a:hover": {
                textDecoration: "underline"
            }
        },
        4: {
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        },
        5: {
            position: 'absolute',
            width: '100%',
            padding: '10px',
            boxSizing: 'border-box;',
            left: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center'
        },
        6: {
            content: '""',
            width: '15px',
            height: '15px',
            paddingRight: '5px',
            backgroundRepeat: 'no-repeat'
        },
        7: {
            backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9InJnYmEoMjU1LCAwLCAwLCAwLjI4KSIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBkPSJNNDkuNTcgMjQuNzlDNDkuNTcgMzguNDUgMzguNDUgNDkuNTcgMjQuNzkgNDkuNTdDMTEuMTIgNDkuNTcgMCAzOC40NSAwIDI0Ljc5QzAgMTEuMTIgMTEuMTIgMCAyNC43OSAwQzM4LjQ1IDAgNDkuNTcgMTEuMTIgNDkuNTcgMjQuNzlaTTQ0LjMgMjQuNzlDNDQuMyAxNC4wMyAzNS41NCA1LjI3IDI0Ljc5IDUuMjdDMTQuMDMgNS4yNyA1LjI3IDE0LjAzIDUuMjcgMjQuNzlDNS4yNyAzNS41NCAxNC4wMyA0NC4zIDI0Ljc5IDQ0LjNDMzUuNTQgNDQuMyA0NC4zIDM1LjU0IDQ0LjMgMjQuNzlaIi8+PHBhdGggZD0iTTM3LjcgMjQuMDJMMjYuNTYgMjQuMDJMMjYuNTYgMTAuNjNDMjYuNTYgOS41IDI1LjY1IDguNTkgMjQuNTIgOC41OUMyMy40IDguNTkgMjIuNDggOS41IDIyLjQ4IDEwLjYzTDIyLjQ4IDI2LjA2QzIyLjQ4IDI3LjE5IDIzLjQgMjguMSAyNC41MiAyOC4xTDM3LjcgMjguMUMzOC44MyAyOC4xIDM5Ljc0IDI3LjE5IDM5Ljc0IDI2LjA2QzM5Ljc0IDI0LjkzIDM4LjgzIDI0LjAyIDM3LjcgMjQuMDJaIi8+PC9zdmc+)'
        },
        8: {
            backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9InJnYmEoMjU1LCAwLCAwLCAwLjI4KSIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBkPSJNMTkuODQgOS41M0MyMC4wNSA5LjggMjAuMDUgMTAuMTkgMTkuODQgMTAuNDdDMTcuMjggMTMuODcgMTMuODIgMTUuOTYgMTAgMTUuOTZDNi4xOCAxNS45NiAyLjcxIDEzLjg3IDAuMTYgMTAuNDdDLTAuMDUgMTAuMTkgLTAuMDUgOS44IDAuMTYgOS41MkMyLjcxIDYuMTMgNi4xOCA0LjA0IDEwIDQuMDRDMTMuODIgNC4wNCAxNy4yOCA2LjEzIDE5Ljg0IDkuNTNaTTE0LjE5IDEwLjI3QzE0LjM1IDcuNzMgMTIuMjYgNS42NCA5LjcyIDUuOEM3LjYzIDUuOTMgNS45MyA3LjYzIDUuOCA5LjcyQzUuNjQgMTIuMjYgNy43NCAxNC4zNSAxMC4yNyAxNC4xOUMxMi4zNiAxNC4wNiAxNC4wNiAxMi4zNiAxNC4xOSAxMC4yN1pNMTAuMTQgMTIuMjVDOC43OCAxMi4zNCA3LjY1IDExLjIyIDcuNzQgOS44NUM3LjgxIDguNzIgOC43MiA3LjgxIDkuODUgNy43NEMxMS4yMiA3LjY1IDEyLjM1IDguNzcgMTIuMjYgMTAuMTRDMTIuMTkgMTEuMjcgMTEuMjcgMTIuMTkgMTAuMTQgMTIuMjVaIi8+PC9zdmc+)'
        },
        9: {
            backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9InJnYmEoMjU1LCAwLCAwLCAwLjI4KSIgdmlld0JveD0iMCAwIDE1IDE1Ij48cGF0aCBkPSJNMy43MiA2LjQ4QzMuODQgNi41OSAzLjkgNi43MyAzLjkgNi45TDMuOSAxMi45QzMuOSAxMy4wNiAzLjg0IDEzLjIgMy43MiAxMy4zMkMzLjYgMTMuNDQgMy40NiAxMy40OSAzLjMgMTMuNDlMMC42IDEzLjQ5QzAuNDQgMTMuNDkgMC4zIDEzLjQ0IDAuMTggMTMuMzJDMC4wNiAxMy4yIDAgMTMuMDYgMCAxMi45TDAgNi45QzAgNi43MyAwLjA2IDYuNTkgMC4xOCA2LjQ4QzAuMyA2LjM2IDAuNDQgNi4zIDAuNiA2LjNMMy4zIDYuM0MzLjQ2IDYuMyAzLjYgNi4zNiAzLjcyIDYuNDhaTTIuNCAxMS43QzIuNCAxMS41MyAyLjM0IDExLjM5IDIuMjIgMTEuMjdDMi4xIDExLjE1IDEuOTYgMTEuMSAxLjggMTEuMUMxLjYzIDExLjEgMS40OSAxMS4xNSAxLjM3IDExLjI3QzEuMjYgMTEuMzkgMS4yIDExLjUzIDEuMiAxMS43QzEuMiAxMS44NiAxLjI2IDEyLjAxIDEuMzcgMTIuMTJDMS40OSAxMi4yNCAxLjYzIDEyLjMgMS44IDEyLjNDMS45NiAxMi4zIDIuMSAxMi4yNCAyLjIyIDEyLjEyQzIuMzQgMTIuMDEgMi40IDExLjg2IDIuNCAxMS43WiIvPjxwYXRoIGQ9Ik0xNC40OCA4LjI5QzE0LjgyIDcuOSAxNC45OSA3LjQzIDE0Ljk5IDYuOUMxNC45OSA2LjQxIDE0LjgyIDUuOTkgMTQuNDYgNS42M0MxNC4xIDUuMjggMTMuNjggNS4xIDEzLjIgNS4xTDEwLjYgNS4xQzEwLjYyIDUuMDEgMTAuNjUgNC45NCAxMC42NyA0Ljg3QzEwLjcgNC44MSAxMC43MyA0Ljc0IDEwLjc4IDQuNjdDMTAuODIgNC41OSAxMC44NSA0LjU0IDEwLjg3IDQuNUMxMC45OCA0LjI5IDExLjA3IDQuMTEgMTEuMTMgMy45N0MxMS4xOSAzLjg0IDExLjI1IDMuNjUgMTEuMzEgMy40MUMxMS4zNyAzLjE3IDExLjQgMi45NCAxMS40IDIuN0MxMS40IDIuNTUgMTEuMzkgMi40MyAxMS4zOSAyLjMzQzExLjM5IDIuMjQgMTEuMzcgMi4xIDExLjM0IDEuOTFDMTEuMzIgMS43MiAxMS4yOCAxLjU3IDExLjIzIDEuNDRDMTEuMTggMS4zMiAxMS4xMSAxLjE4IDExLjAxIDEuMDJDMTAuOSAwLjg3IDEwLjc4IDAuNzQgMTAuNjMgMC42NEMxMC40OSAwLjU1IDEwLjMgMC40NiAxMC4wNyAwLjRDOS44NCAwLjMzIDkuNTggMC4zIDkuMyAwLjNDOS4xMyAwLjMgOC45OSAwLjM2IDguODcgMC40OEM4Ljc1IDAuNiA4LjY0IDAuNzYgOC41NiAwLjk1QzguNDcgMS4xMyA4LjQxIDEuMyA4LjM3IDEuNDNDOC4zNCAxLjU3IDguMyAxLjc2IDguMjYgMi4wMUM4LjIgMi4yNyA4LjE2IDIuNDYgOC4xMyAyLjU3QzguMSAyLjY5IDguMDUgMi44NCA3Ljk3IDMuMDNDNy44OCAzLjIxIDcuNzkgMy4zNiA3LjY3IDMuNDhDNy40NyAzLjY4IDcuMTUgNC4wNiA2LjczIDQuNkM2LjQyIDUgNi4xMSA1LjM4IDUuNzggNS43M0M1LjQ2IDYuMDkgNS4yMiA2LjI4IDUuMDcgNi4yOUM0LjkxIDYuMyA0Ljc4IDYuMzYgNC42NyA2LjQ4QzQuNTUgNi42IDQuNSA2LjczIDQuNSA2Ljg5TDQuNSAxMi44OUM0LjUgMTMuMDYgNC41NiAxMy4yIDQuNjggMTMuMzFDNC43OSAxMy40MyA0Ljk0IDEzLjQ5IDUuMSAxMy40OUM1LjMyIDEzLjUgNS44MSAxMy42NCA2LjU4IDEzLjkxQzcuMDYgMTQuMDcgNy40NCAxNC4xOSA3LjcxIDE0LjI4QzcuOTggMTQuMzYgOC4zNiAxNC40NSA4Ljg1IDE0LjU1QzkuMzMgMTQuNjUgOS43OCAxNC42OSAxMC4yIDE0LjY5TDEwLjM1IDE0LjY5TDExLjA3IDE0LjY5TDExLjQgMTQuNjlDMTIuMjQgMTQuNjggMTIuODUgMTQuNDQgMTMuMjUgMTMuOTZDMTMuNjEgMTMuNTMgMTMuNzcgMTIuOTcgMTMuNzEgMTIuMjdDMTMuOTUgMTIuMDQgMTQuMTIgMTEuNzQgMTQuMjIgMTEuMzlDMTQuMzIgMTEuMDEgMTQuMzIgMTAuNjQgMTQuMjIgMTAuMjlDMTQuNSA5LjkxIDE0LjY0IDkuNDggMTQuNjIgOS4wMUMxNC42MiA4LjgxIDE0LjU3IDguNTcgMTQuNDggOC4yOVoiLz48L3N2Zz4=)'
        },
        10: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            fontSize: '10px',
            fontFamily: "'Open Sans', sans-serif"

        },
        11: {
            content: '""',
            background: 'linear-gradient(to top, rgb(0, 0, 0)-10%, rgba(255, 255, 255, 0)25%)',
            width: '100%',
            height: '100%',
            position: 'absolute',
            transition: 'background-color .3s ease-in-out'
        },
        12: {
            backgroundColor: 'rgba(0, 0, 0, 0.45)'
        },
        13: {
            content: '""',
            position: 'absolute',
            background: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSJyZ2JhKDI1NSwgMCwgMCwgMC4yOCkiPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTI1NiwwQzExNC42MTcsMCwwLDExNC42MTUsMCwyNTZzMTE0LjYxNywyNTYsMjU2LDI1NnMyNTYtMTE0LjYxNSwyNTYtMjU2UzM5Ny4zODMsMCwyNTYsMHogTTM0NC40OCwyNjkuNTdsLTEyOCw4MCAgYy0yLjU5LDEuNjE3LTUuNTM1LDIuNDMtOC40OCwyLjQzYy0yLjY2OCwwLTUuMzQtMC42NjQtNy43NTgtMi4wMDhDMTk1LjE1NiwzNDcuMTcyLDE5MiwzNDEuODIsMTkyLDMzNlYxNzYgIGMwLTUuODIsMy4xNTYtMTEuMTcyLDguMjQyLTEzLjk5MmM1LjA4Ni0yLjgzNiwxMS4zMDUtMi42NjQsMTYuMjM4LDAuNDIybDEyOCw4MGM0LjY3NiwyLjkzLDcuNTIsOC4wNTUsNy41MiwxMy41NyAgUzM0OS4xNTYsMjY2LjY0MSwzNDQuNDgsMjY5LjU3eiIvPjwvc3ZnPgo=)',
            backgroundRepeat: 'no-repeat',
            width: '80px',
            height: '80px',
            transform: 'scale(0)',
            transition: 'all .2s ease-in-out'
        },
        14: {
            transform: 'scale(1)'
        },
        15: {
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap'
        },
        16: {

            width: '65%',
            padding: '10px',
            boxSizing: 'border-box'
        },
        17: {
            width: '35%',
            padding: '10px',
            overflow: 'hidden',
            boxSizing: 'border-box'
        },
        18: {
            height: '35px',
            border: '1px solid#ffffff0f',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px',
            boxShadow: '0 0px 5px#ffffff14',
            marginBottom: '20px',
            color: 'white',
            width: '100%',
            boxSizing: 'border-box'
        },
        19: {
            display: 'flex',

            padding: '6px',
            '&:hover': {
                background: '#26282e'
            }
        },
        20: {
            width: 'calc(100% * 0.2)'
        },
        21: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 'calc(100%*0.8)',
            position: 'relative',
            padding: '0 15px',
            boxSizing: 'border-box;'
        },
        22: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        },
        23: {
            color: '#ffffffa8',
            display: 'block',
            fontSize: '15px',
            '&:hover': {
                color: 'white'
            }
        },
        24: {
            margin: '0 !important',
        },
        25: {
            marginTop: '20px'
        },
        26: {
            height: "calc(100% - 57px)",
            overflow: "auto",
            position: "relative"
        },
        27: {
            margin: 0
        },
        28: {
            minHeight: '100px',
            '&::-webkit-scrollbar': {
                width: '6px'
            },
            '&::-webkit-scrollbar-track': {
                background: 'rgba(48, 52,66,1)',
                borderRadius: '2px'
            },
            '&::-webkit-scrollbar-thumb': {
                background: 'rgba(24, 26, 33,0.4)'
            },
            '&::-webkit-scrollbar-thumb:hover': {
                background: 'rgba(24, 26, 33,0.6)'
            }
        },
        29: {
            margin: '0 10px',
            width: '50px',
            height: '50px',
            margin: '0 10px 0 0',
            color: 'rgba(255, 255, 255, 0.31)'
        },
        30: {
            fontSize: 'small',
            marginLeft: '10px'
        },
        31: {
            width: '100%',

            display: 'flex',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.102)',
            borderBottom: '1px solid red'
        },
        32: {
            display: 'flex'
        },
        33: {
            minWidth: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            '&>svg': {
                width: '25px',
                height: '25px',
                fill: 'rgba(255, 0, 0, 0.61)'
            }
        },
        34: {
            borderRight: '1px solid #4d1f23',
            borderTop: '1px solid rgba(0,0,0,0)',
            cursor: 'pointer',
            '& *': {
                transition: 'all .1s ease-in-out'
            },
            '&.active': {
                borderTopColor: 'rgba(255, 0, 0, 1)'
            },
            '&.active>svg&:hover>svg': {
                fill: 'rgba(255, 0, 0, 1)',
            }
        },
        35: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginBottom: '20px'
        },
        36: {
            width: '200px',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.2)',
            margin: '15px 0'
        },
        37: {
            width: '15px',
            height: '15px',
            fill: '#888888',
            margin: '0 6px'
        },
        38: {
            margin: '0 5px',
            display: 'flex',
            '& svg': {
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                borderRadius: '3px'
            }
        },
        39: {
            display: 'flex',
            alignItems: 'center',
            '&>:nth-child(1) svg': {
                background: '#3B5998'
            },
            '&>:nth-child(2) svg': {
                background: '#55ACEE'
            },
            '&>:nth-child(3) svg': {
                background: '#BD081C'
            },
            '&>:nth-child(4) svg': {
                background: '#35465C'
            }
        },
        40: {
            padding: '15px',
            background: '#ffffff08',
            border: '1px solid #181a21',
            '&[type=submit]': {
                cursor: 'pointer'
            }
        },
        41: {
            display: 'flex',
            alignItems: 'center'
        },
        42: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '15px 15px 0 0',
            minWidth: '50px'
        },
        43: {
            display: 'inline-block',
            width: '100%',
            '& p input:not([type=checkbox])& textarea': {
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.059)',
                resize: 'vertical'
            },
            '& button': {
                padding: '10px',
                background: '#26272e',
                border: 'none',
                float: 'right',
                cursor: 'pointer'
            }
        },
        44: {
            display: 'flex'
        },
        45: {
            padding: '7px 10px',
            background: '#26272e',
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px',
            margin: '20px 0px 10px 0',
            fontFamily: 'none'
        },
        46: {
            '& li': {
                margin: '20px 0'
            }
        },
        47: {
            alignItems: 'center',
            marginBottom: '10px'

        },
        48: {
            textAlign: 'center',
            fontsize: 'larger'
        },
        49: {
            width: 'calc(100% - 60px)'
        },
        50: ['@media only screen and (max-width: 600px)', {
            0: {
                width: 'calc(100% / 1)',
                padding: '5px 40px'
            },
            1: {
                padding: '20px 45px'
            },
            2: {
                width: '100%'
            }
        }],
        51: ['@media only screen and (max-width: 950px) ', {
            1: {
                padding: '20px 55px',
            },
            2: {
                width: 'calc(100%/2)',
            },
            16: {
                width: 'calc(100%*0.6)',
            },
            17: {
                width: 'calc(100%*0.4)',
            },
            59: {

                '& a': {

                    fontSize: '25px'
                }
            },
            78: {
                paddingTop: '5px',
                paddingBottom: '5px',
                "& h1": {
                    margin: 0
                }
            }
        }],
        52: ['@media only screen and (max-width: 930px)', {
            0: {
                width: 'calc(100% / 2)',
                padding: '5px 10px'
            },
            16: {
                width: '100%',
            },
            17: {
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap'

            },
            19: {
                width: '50%',
                boxSizing: 'border-box'
            },
            20: {
                width: '30%'
            },
            21: {
                width: '70%'
            },
            26: {
                display: "flex",
                flexWrap: 'wrap'
            },
            46: {
                overflow: 'hidden'

            },
            53: {
                height: '205px !important'

            }
        }],
        53: {

        },
        54: {
            // display: 'flex',
            // flexWrap: 'wrap'
        },
        55: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '32px',
            textAlign: 'center',
            boxShadow: '0 0px 6px #ffffff1a',
            border: '1px solid#ffffff1f',
        },
        56: ['@media only screen and (max-width: 450px) ', {
            0: {
                padding: '5px 10px'
            },
            1: {
                padding: '20px 30px',
            },
            20: {
                width: '30%'
            },
            21: {
                width: '70%'
            },
            58: {
                padding: '20px'
            },
            64: {
                width: '30%'
            },
            65: {
                width: '70%'
            },
            78: {
                padding: '10px 30px',
                paddingBottom: 0,
                "& h1": {
                    fontSize: '25px'
                }
            }
        }],
        57: ['@media only screen and (max-width: 1000px) ', {
            16: {
                width: 'calc(100%*0.65)',
            },
            17: {
                width: 'calc(100%*0.35)',
            },
            58: {
                padding: '20px 50px'
            },
            59: {
                width: '60%'
            },
            60: {
                width: '40%'
            },
            76: {
                padding: '5px 30px'
            }
        }],
        58: {
            width: '100%',
            display: 'flex',
            padding: '20px 100px',
            boxSizing: 'border-box',
            position: "relative",
            flexWrap: 'wrap'
        },
        59: {
            width: '65%'
        },
        60: {
            width: '35%',
            background: '#14161c',
            position: "relative",
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                width: '10px !important'
            },
            '&::-webkit-scrollbar-track': {
                borderRadius: '0 !important'
            }
        },
        61: {
            opacity: 0,
            pointerEvents: 'none',
            position: 'fixed',
            minWidth: '100%',
            minHeight: '100%',
            background: ' #000000e8',
            left: 0,
            top: 0,
            zIndex: 1
        },
        62: {
            position: 'relative',
            zIndex: 2
        },
        63: {
            display: 'flex',
            padding: '5px',
            marginBottom: '-5px',
            cursor: 'pointer',
            transition: 'none',
            '&:hover': {
                background: '#26282e'
            }
        },
        64: {
            width: '30%',
            boxSizing: 'border-box',
            display: 'flex'
        },
        65: {
            width: '70%',
            marginLeft: '5px'

        },
        66: {

            width: ' 100%',
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        67: {
            fontSize: '14px'
        },
        68: {
            fontSize: 'small',
            display: 'flex',
            alignItems: 'center'
        },
        70: {
            whiteSpace: 'pre'
        },
        71: ['@media only screen and (max-width: 850px) ', {
            59: {
                width: '100%'
            },
            60: {
                width: '100%',
                height: '200px !important',
                display: 'flex',
                flexWrap: 'wrap'
            },
            63: {
                width: '50%',
                boxSizing: 'border-box'
            }
        }],
        72: {
            padding: '25px 50px'
        },
        73: {
            display: 'flex'
        },
        74: {
            border: 0,
            width: '100%',
            background: '#101117',
            paddingLeft: '44px',
            outline: 0
        },
        75: {
            padding: '10px',
            background: '#101117',
            border: 'none',
            cursor: "pointer",
            display: 'flex',
            "& svg": {
                width: '22px',
                height: '22px',
                fill: '#6f7073'
            }
        },
        76: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '0 70px',
            "& li": {
                fontWeight: 'bold',
                margin: '0 auto',
                minWidth: '25px',
                lineHeight: 1.8,
                textAlign: 'center'
            }
        },
        77: ['@media only screen and (max-width: 670px) ', {
            63: {
                width: '100%'
            },
            64: {
                width: '20%'
            },
            65: {
                width: '80%'
            }
        }],
        78: {
            alignItems: 'center',
            '& svg': {
                width: '35px',
                height: '35px',
                margin: '0 10px',
                fill: 'rgb(140, 13, 16)'
            },
            // "& h1": {
            //     margin: 0
            // }
        },
        79: ['@media only screen and (max-width: 320px) ', {
            78: {
                alignItems: 'center',
                '& svg': {
                    width: '30px',
                    height: '30px'
                },
                "& h1": {
                    fontSize: '20px'
                }
            }
        }],
        80: ['@media only screen and (max-width: 760px) ', {
            19: {
                width: '100%'
            },
            20: {
                width: '20%'
            },
            21: {
                width: '80%'
            },
            84: {
                display: 'none'
            },
            87: {
                display: 'inline-block'
            },
            90: {
                display: 'flex'
            }
        }],
        81: {
            display: 'flex',
            justifyContent: 'center',
            padding: '25px 0'
        },
        82: {
            padding: '20px 30px',
            background: 'black',
            cursor: 'pointer',
            "&:hover": {
                opacity: .5
            }
        },
        83: {
            "& img": {
                transform: 'scale(0)',
                zIndex: -1,
            }
        },
        84: {
            display: 'flex',
            alignItems: 'center'
        },
        85: {
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #3a161c',
            margin: '2px',
            borderRadius: '2px',
            cursor: 'pointer',
            "&:hover": {
                background: '#1f1920'
            }
        },
        86: {
            display: 'flex',
            width: '100%',
            padding: '10px 0',
            justifyContent: 'center',
            alignItems: 'center'
        },
        87: {
            position: 'relative',
            display: 'none',
            verticalAlign: 'middle',
            margin: '10px',
            "&:before&:after": {
                content: '""',
                position: 'absolute',
                pointerEvents: 'none',
            },
            "&:after": {
                content: '"\\25BC"',
                height: '1em',
                fontSize: ' .625em',
                lineHeight: 1,
                right: '1.2em',
                top: '50%',
                marginTop: '-.5em',
                color: 'rgba(0,0,0,.4)'
            },
            "&:before": {
                width: '2em',
                right: 0,
                top: 0,
                bottom: 0,
                borderRadius: '0 3px 3px 0',
                backgroundColor: 'rgba(0,0,0,.15)'
            },
            "& option": {

            }
        },
        88: {
            backgroundColor: '#521419',
            color: '#fff',
            fontSize: 'inherit',
            padding: '.5em 2.5em .5em 1em',
            border: 0,
            margin: 0,
            borderRadius: '3px',
            textIndent: '0.01px',
            _appearance: 'button',
            "&[disabled]": {
                color: 'rgba(0,0,0,.3)',
            },
            "&[disabled]::after": {
                color: 'rgba(0,0,0,.1)'
            }
        },
        89: {
            border: '0 !important',
            cursor: 'default !important',
            background: 'none !important'
        },
        90: {
            height: '34px',
            width: '45px',
            background: '#521419',
            borderRadius: '2px',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            "& svg": {
                width: '15px',
                height: '15px',
                fill: 'red'
            }
        },
        91: {
            display: 'inline-block',
            position: 'relative',
            width: '80px',
            height: '80px',
            "& div": {
                position: 'absolute',
                border: '4px solid #fff',
                opacity: 1,
                borderRadius: '50%',
                animation: 'lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite'
            }
        },
        92: {
            animationDelay: '-0.5s !important'
        },
        93: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        94: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        95: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0
        }







    },
    kid_group = {},
    kid_cssselector = 'kid_css_';

var kid_style = kid_t(document.head, [{
    style: [],
}]).z;


function kid_csap(s) {
    kid_style.insertAdjacentHTML("afterbegin", s)
}




kid_map([80, 79, 56, 77, 71, 50, 52, 51, 57], function (v) {


    var a = kid_css[v]
    var css = '';

    kid_map(a[1], function (v, i) {

        css = css + kid_k(i[0] == '*' ? i.slice(1) : '.' + kid_c(i), v);

    })
    kid_csap(a[0] + '{' + css + '}')
})

function kid_type(a) {
    return Object.prototype.toString.call(a).match(/(\w)\w+/g)[1]
}

function kid_map(val, fun) {

    if (val.length && typeof val.length == "number") {
        var array = [];
        for (var i = 0; i < val.length; i++) {
            var v = fun(val[i], i, val)

            v ? array.push(v) : 0;

        }
    } else {
        for (var i in val) {
            var v = fun(val[i], i, val)
            v ? val[i] = v : 0;
        }
    }

    return array ? array : val;
}


// csssis dasagenireblad

function kid_c(s, r) {
    var d = '',
        c = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
    s = String(s)
    for (var l = 0; l < s.length; l++) {
        d = d + c[s[l]];
    }
    return (r ? r : kid_cssselector) + d;

}

function kid_k(r, c) {
    var s = '',
        l = '';




    for (var a in c) {

        ((a[0] == '_' || c[a][0] == '_') ? ['-webkit-', '-moz-', '-ms-', '-o-', ''] : ['']).map(function (v) {


            a[0] == '&' ? kid_map(a.slice(1).split('&'), function (v) {
                // console.log([r + v,c[a]])
                l = l + kid_k(r + v, c[a]);
            }) : (s = s + (a[0] == '_' ? v : '') + a.split(/(?=[A-Z])/).join('-').replace(/_/g, '').toLowerCase() + ':' + (c[a][0] == '_' ? v + c[a].substring(1) : c[a]) + ';');

        })


    }

    return l + r + '{' + s + '}';

}





function kid_t(p, s) {

    // var alllf='qwertyuiopasdfghjklzxcvbnm';
    function rt(t, k) {

        var l = k ? k : m;
        if (t) {

            for (let n in l) {

                // alllf=alllf.replace(n, "")

                t[n] = l[n];
            }
        }
        // console.log(alllf)
        return t;
    }

    //   methodebis sia ...........................                
    var m = {
        g: function (a) {
            return this.getAttribute(a);
        },
        m: function (a) {
            kid_map(a, function (v) {
                p.setAttribute(v[0], v[1])
            })

            return p;
        },
        q: function (s) {
            return s instanceof Array ? kid_map(this.querySelectorAll(s[0]), rt) : rt(this.querySelector(s));
        },

        c: function (j) {
            p = this;

            function v(j) {
                switch (Object.prototype.toString.call(j)) {
                    case '[object Array]':
                        kid_map(j, v);
                        break;
                    case '[object Number]':
                        var c = kid_c(j);

                        kid_csap(kid_k('.' + c, kid_css[j]))
                        p.classList.add(c);
                        break;
                    case '[object String]':
                        p.classList.add(j);
                        break;
                    case '[object Object]':
                        kid_map(j, function (j, i) {
                            var c = kid_c(i);

                            kid_csap(kid_k('.' + c + j, kid_css[i]))

                            p.classList.add(c);
                        });
                        break;
                }
            }

            v(j)

            return p;


        },
        h: function (l) {
            var c = this.children
            return typeof l == 'number' ? c[l] : c
        },
        i: function (i) {
            i ? i instanceof Object ? kid_t(this, i) : this.innerHTML = i : 0;
            return i ? this : this.innerHTML
        },
        y: function (o) {
            return o ? Object.assign(this.style, o) : this.style;
        },
        e: function (s) {
            for (var l in s) {
                l.split('_').forEach(function (v) {
                    p.addEventListener(v, s[l]);
                })
            }
        },
        o: function (s, z) {
            z = this;
            for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
                z = z.parentElement
            }

            return z;
        },

        n: function (s, z) {
            z = this;
            for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
                z = z.nextElementSibling
            }

            return rt(z);
        },
        p: function (s, z) {
            z = this;
            for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {

                z = z.previousElementSibling
            }
            return rt(z);
        },
        a: function (s) {

            this.appendChild(s)
            return s;
        },
        r: function () {
            this.o().removeChild(this)
        },
        f: function (t) {
            p.parentElement.replaceChild(t, p)
            return p;
        },

        b: function (t) {
            var b = this;

            function addb(t) {
                if (t instanceof Array) {

                    t.map(function (v) {
                        if (v instanceof Object) {
                            addb(v)
                        } else {
                            kid_group[v] ? kid_group[v].push(b) : kid_group[v] = [b];
                        }

                    })

                } else if (typeof t == "number") {
                    kid_group[t] = b;

                } else {
                    for (var h in t) {
                        kid_group[h] = t[h];

                    }
                }
            }


            addb(t)


            return b;
        },
        w: function (a) {


            kid_map(a, function (v, k) {

                kid_map(v, function (s, b) {
                    var l = 0,
                        o = 0;

                    function c() {


                        if (window.innerWidth <= s && !l) {

                            if (k == 'in') {
                                l = kid_group[b].o()[kid_group[b].n() ? 'insertBefore' : 'a'].bind(kid_group[b].o())
                                p.appendChild(kid_group[b])
                            }
                            console.log('resizes dros appen chaildi ar mushaobs kargad in da outi araaa damatebuli')
                        } else if (l) {
                            l(kid_group[b])
                            l = 0;
                        }
                    }
                    c();

                    window.addEventListener("resize", c)

                })

            })





        },
        l: function (f) {
            return f(this);
        },
        x: function (o) {

            window.onload = function () {
                kid_map(o, function (v, i) {
                    function g() {

                        p.y()[i] = v()
                    }
                    // window.onresize = g;
                    window.addEventListener("resize", g)
                    g()
                })
            }

        },
        u: function (o) {
            this.o().insertBefore(o, this);
        }
    }


    rt(p)
    // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm


    s instanceof Array ? kid_map(s, function (r, h, k, l) {

        if (r.for) {

            for (var f = (typeof r.for[0] == "number" ? 1 : 0); f <= (typeof r.for[0] == "number" ? r.for[0] : r.for.length - 1); f++) {
                var x = Object.assign({}, r)
                delete x.for;

                r.for[f] && Array.isArray(x.c) && Array.isArray(r.for[f].c) ? r.for[f].c = x.c.concat(r.for[f].c).filter(function (o, v, a) {
                    return a.indexOf(o) === v
                }) : 0;

                var se = r.for[f] ? rt(x, r.for[f]) : x;


                kid_t(p, [se])
            }
            return;
        }

        k = Object.keys(r)[0]
        l = r[k]



        var tags = {
            d: 'div',
            s: "span"
        }

        var o = document.createElement(tags[k] ? tags[k] : k);





        p.a(o);
        var z = kid_t(o, l)

        // z.className = cl(i, 'tager_pro_unic_name_')


        r.c ? z.m([
            ['ClASSID', String(JSON.stringify(r.c))]
        ]) : 0;

        // i++;


        p.z = z

        for (var a in r) {
            // if(a=='c'){
            //     Object.assign(z.style,kid_css[r.c])
            //     console.log(kid_css[r.c])
            // }else
            if (![k].includes(a)) {

                if (typeof z[a] == 'function') {
                    z[a](r[a])
                } else {
                    z.m([
                        [a, r[a]]
                    ])
                }
            };
        }



    }) : p.i(s);


    // typeof s === 'string' ? p.i(s) : s.forEach();

    return p;

}

function kid_xhr(call, link, method) {

    var xhr = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : (XMLHttpRequest && new XMLHttpRequest());

    xhr.open(method ? method : 'POST', link ? link : window.location);

    xhr.onload = function () {
        call ? call(JSON.parse(xhr.response ? xhr.response : 0)) : 0;

    }
    xhr.run = function (t) {
        if (typeof t == "string") {
            this.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
        }
        this.send(t);
    }
    return xhr;
}



function kid_time(date) {
    const times = [
        ["second", 1],
        ["minute", 60],
        ["hour", 3600],
        ["day", 86400],
        ["week", 604800],
        ["month", 2592000],
        ["year", 31536000]
    ]

    var diff = Math.round((new Date() - new Date(date)) / 1000)
    for (var t = 0; t < times.length; t++) {
        if (diff < times[t][1]) {
            if (t == 0) {
                return "Just now"
            } else {
                diff = Math.round(diff / times[t - 1][1])
                return diff + " " + times[t - 1][0] + (diff == 1 ? " ago" : "s ago")
            }
        }
    }
}

function kid_number(n) {
    return n > 1000000000 ? (n / 1000000000).toFixed(1) + 'B' : n > 1000000 ? (n / 1000000).toFixed(1) + 'M' : n > 1000 ? (n / 1000).toFixed(1) + 'K' : n + '';
}
///////////////////////////////////////////////////////





kid_dom = {
    0: function (v) {

        return [{
            i: kid_time(v[3]),
            c: [{
                7: ':before'
            }]
        }, {
            i: kid_number(v[6] ? v[6] : 0),
            c: [{
                8: ':before'
            }]
        }, {
            i: kid_number(v[4] ? v[4] : 0),
            c: [{
                9: ':before'
            }]
        }]
    },
    1: function (v) {
        return [{
            d: [{
                d: [{
                    a: [{
                        img: 0,
                        alt: v[0],
                        src: v[2]
                    }],
                    c: 4,
                    href: v[1]
                }],
                c: 20
            }, {
                d: [{
                        a: v[0],
                        href: v[1],
                        c: 23
                    },
                    {
                        d: [{
                            d: 0,
                            for: kid_dom[0](v),
                            c: [10, 24, {
                                6: ':before'
                            }]
                        }],
                        c: 22
                    }
                ],
                c: 21
            }],
            c: 19
        }]
    },
    2: function () {
        return [{
            d: [{
                d: [{
                    d: 0,
                    for: [{
                            i: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M60.42 81.25C60.42 82.4 59.48 83.33 58.33 83.33L41.67 83.33C40.52 83.33 39.58 82.4 39.58 81.25C39.58 80.1 40.52 79.17 41.67 79.17L58.33 79.17C59.48 79.17 60.42 80.1 60.42 81.25ZM60.42 89.58C60.42 90.73 59.48 91.67 58.33 91.67L41.67 91.67C40.52 91.67 39.58 90.73 39.58 89.58C39.58 88.43 40.52 87.5 41.67 87.5L58.33 87.5C59.48 87.5 60.42 88.43 60.42 89.58ZM54.43 99.09C53.79 99.67 52.84 100 51.87 100L48.14 100C47.16 100 46.22 99.67 45.58 99.09L40.63 95.83L59.38 95.83L54.43 99.09ZM75 38.34C75 53.21 61.61 63.27 61.61 75L53.32 75C53.31 67.26 56.95 60.88 60.49 54.72C63.66 49.2 66.67 43.98 66.67 38.34C66.67 27.54 58.02 22.62 49.99 22.62C41.97 22.62 33.33 27.54 33.33 38.34C33.33 43.98 36.34 49.2 39.51 54.72C43.05 60.88 46.7 67.26 46.67 75L38.39 75C38.39 63.27 25 53.21 25 38.34C25 22.83 37.49 14.29 49.99 14.29C62.49 14.29 75 22.83 75 38.34ZM91.67 41.17L81.09 41.17C81.17 40.25 81.25 39.31 81.25 38.34C81.25 37.35 81.18 36.4 81.1 35.46L91.67 35.46L91.67 41.17ZM47.3 8.15L47.3 0L53.01 0L53.01 8.18C52 8.09 51 8.04 49.99 8.04C49.09 8.04 48.2 8.08 47.3 8.15ZM27.37 5.46L32.4 2.76L36.73 10.82C34.98 11.57 33.3 12.49 31.7 13.55L27.37 5.46ZM75.81 20.77L83.9 14.97L87.23 19.61L78.68 25.75C77.88 23.96 76.91 22.3 75.81 20.77ZM67.6 2.76L72.63 5.46L68.29 13.55C66.7 12.49 65.02 11.58 63.27 10.82L67.6 2.76ZM21.32 25.75L12.76 19.62L16.09 14.97L24.18 20.77C23.08 22.3 22.12 23.95 21.32 25.75ZM88.24 55.65L86.1 60.95L76 56.86C76.87 55.2 77.7 53.48 78.43 51.68L88.24 55.65ZM14 60.91L11.66 55.7L21.41 51.31C22.13 53.12 22.95 54.83 23.82 56.49L14 60.91ZM8.33 41.17L8.33 35.46L18.9 35.46C18.82 36.4 18.75 37.35 18.75 38.34C18.75 39.31 18.83 40.25 18.91 41.17L8.33 41.17Z"></path></svg>',
                            b: 4

                        },
                        {
                            i: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M93.57 59.92C93.57 63 92.81 65.88 91.29 68.56C91.41 69.4 91.47 70.26 91.47 71.14C91.47 75.18 90.27 78.74 87.87 81.81C87.91 87.37 86.21 91.76 82.77 94.98C79.33 98.2 74.8 99.81 69.16 99.81L61.42 99.81C57.58 99.81 53.79 99.36 50.05 98.46C46.32 97.56 41.99 96.25 37.07 94.53C32.43 92.93 29.67 92.13 28.79 92.13L11.52 92.13C9.4 92.13 7.59 91.38 6.09 89.88C4.59 88.38 3.84 86.57 3.84 84.45L3.84 46.07C3.84 43.95 4.59 42.14 6.09 40.64C7.59 39.14 9.4 38.39 11.52 38.39L27.95 38.39C29.39 37.43 32.13 34.33 36.17 29.09C38.49 26.09 40.63 23.53 42.59 21.41C43.55 20.41 44.26 18.7 44.72 16.29C45.18 13.87 45.79 11.34 46.55 8.7C47.31 6.06 48.55 3.9 50.27 2.22C51.82 0.74 53.62 0 55.66 0C59.02 0 62.04 0.65 64.72 1.95C67.4 3.25 69.44 5.28 70.84 8.04C72.24 10.8 72.94 14.52 72.94 19.19C72.94 22.91 71.98 26.75 70.06 30.71L80.62 30.71C84.77 30.71 88.37 32.23 91.41 35.27C94.45 38.31 95.97 41.89 95.97 46.01C95.97 49.57 94.99 52.82 93.03 55.78C93.39 57.1 93.57 58.48 93.57 59.92ZM19.2 80.62C19.2 79.58 18.82 78.68 18.06 77.92C17.3 77.16 16.4 76.78 15.36 76.78C14.32 76.78 13.42 77.16 12.66 77.92C11.9 78.68 11.52 79.58 11.52 80.62C11.52 81.66 11.9 82.56 12.66 83.32C13.42 84.07 14.32 84.46 15.36 84.46C16.4 84.46 17.3 84.07 18.06 83.32C18.82 82.56 19.2 81.66 19.2 80.62ZM88.3 46.07C88.3 44.03 87.51 42.24 85.95 40.7C84.4 39.16 82.62 38.39 80.62 38.39L59.5 38.39C59.5 36.07 60.46 32.88 62.38 28.82C64.3 24.76 65.26 21.56 65.26 19.2C65.26 15.28 64.62 12.38 63.34 10.5C62.06 8.62 59.5 7.68 55.67 7.68C54.62 8.72 53.86 10.42 53.38 12.78C52.91 15.14 52.3 17.65 51.56 20.31C50.82 22.97 49.63 25.16 47.99 26.87C47.11 27.79 45.57 29.61 43.37 32.33C43.21 32.53 42.75 33.13 41.99 34.13C41.23 35.13 40.6 35.95 40.1 36.59C39.6 37.23 38.91 38.08 38.03 39.14C37.15 40.2 36.35 41.08 35.63 41.78C34.91 42.48 34.14 43.19 33.32 43.91C32.5 44.63 31.7 45.17 30.92 45.53C30.14 45.89 29.43 46.07 28.79 46.07L26.87 46.07L26.87 84.45L28.79 84.45C29.31 84.45 29.94 84.51 30.68 84.63C31.42 84.75 32.08 84.88 32.66 85.02C33.24 85.16 34 85.38 34.94 85.68C35.88 85.98 36.58 86.21 37.04 86.37C37.5 86.53 38.21 86.78 39.17 87.12C40.13 87.46 40.71 87.67 40.91 87.75C49.35 90.67 56.18 92.13 61.42 92.13L68.68 92.13C76.36 92.13 80.2 88.79 80.2 82.11C80.2 81.07 80.1 79.95 79.9 78.76C81.1 78.12 82.05 77.07 82.75 75.61C83.45 74.15 83.8 72.68 83.8 71.2C83.8 69.72 83.44 68.34 82.72 67.06C84.84 65.06 85.89 62.68 85.89 59.93C85.89 58.93 85.7 57.82 85.3 56.6C84.9 55.38 84.4 54.43 83.8 53.75C85.08 53.71 86.15 52.77 87.01 50.93C87.86 49.09 88.29 47.47 88.3 46.07Z"></path></svg>',
                            c: [localStorage.getItem('video_' + kid_group.post.ID) == 'l' ? 'active' : undefined]
                        },
                        {
                            i: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M6.43 40.08C6.43 37 7.19 34.12 8.71 31.44C8.59 30.6 8.53 29.74 8.53 28.86C8.53 24.82 9.73 21.26 12.13 18.19C12.09 12.63 13.79 8.24 17.23 5.02C20.67 1.8 25.2 0.19 30.84 0.19L38.58 0.19C42.42 0.19 46.21 0.64 49.95 1.54C53.68 2.44 58.01 3.75 62.93 5.47C67.57 7.07 70.33 7.87 71.21 7.87L88.48 7.87C90.6 7.87 92.41 8.62 93.91 10.12C95.41 11.62 96.16 13.43 96.16 15.55L96.16 53.93C96.16 56.05 95.41 57.86 93.91 59.36C92.41 60.86 90.6 61.61 88.48 61.61L72.05 61.61C70.61 62.57 67.87 65.67 63.83 70.91C61.51 73.91 59.37 76.47 57.41 78.59C56.45 79.59 55.74 81.3 55.28 83.71C54.82 86.13 54.21 88.66 53.45 91.3C52.69 93.94 51.45 96.1 49.73 97.78C48.18 99.26 46.38 100 44.34 100C40.98 100 37.96 99.35 35.28 98.05C32.6 96.75 30.56 94.72 29.16 91.96C27.76 89.2 27.06 85.48 27.06 80.81C27.06 77.09 28.02 73.25 29.94 69.29L19.38 69.29C15.23 69.29 11.63 67.77 8.59 64.73C5.55 61.69 4.03 58.11 4.03 53.99C4.03 50.43 5.01 47.18 6.97 44.22C6.61 42.9 6.43 41.52 6.43 40.08ZM80.8 19.38C80.8 20.42 81.18 21.32 81.94 22.08C82.7 22.84 83.6 23.22 84.64 23.22C85.68 23.22 86.58 22.84 87.34 22.08C88.1 21.32 88.48 20.42 88.48 19.38C88.48 18.34 88.1 17.44 87.34 16.68C86.58 15.93 85.68 15.54 84.64 15.54C83.6 15.54 82.7 15.93 81.94 16.68C81.18 17.44 80.8 18.34 80.8 19.38ZM11.7 53.93C11.7 55.97 12.49 57.76 14.05 59.3C15.6 60.84 17.38 61.61 19.38 61.61L40.5 61.61C40.5 63.93 39.54 67.12 37.62 71.18C35.7 75.24 34.74 78.44 34.74 80.8C34.74 84.72 35.38 87.62 36.66 89.5C37.94 91.38 40.5 92.32 44.33 92.32C45.38 91.28 46.14 89.58 46.62 87.22C47.09 84.86 47.7 82.35 48.44 79.69C49.18 77.03 50.37 74.84 52.01 73.13C52.89 72.21 54.43 70.39 56.63 67.67C56.79 67.47 57.25 66.87 58.01 65.87C58.77 64.87 59.4 64.05 59.9 63.41C60.4 62.77 61.09 61.92 61.97 60.86C62.85 59.8 63.65 58.92 64.37 58.22C65.09 57.52 65.86 56.81 66.68 56.09C67.5 55.37 68.3 54.83 69.08 54.47C69.86 54.11 70.57 53.93 71.21 53.93L73.13 53.93L73.13 15.55L71.21 15.55C70.69 15.55 70.06 15.49 69.32 15.37C68.58 15.25 67.92 15.12 67.34 14.98C66.76 14.84 66 14.62 65.06 14.32C64.12 14.02 63.42 13.79 62.96 13.63C62.5 13.47 61.79 13.22 60.83 12.88C59.87 12.54 59.29 12.33 59.09 12.25C50.65 9.33 43.82 7.87 38.58 7.87L31.32 7.87C23.64 7.87 19.8 11.21 19.8 17.89C19.8 18.93 19.9 20.05 20.1 21.24C18.9 21.88 17.95 22.93 17.25 24.39C16.55 25.85 16.2 27.32 16.2 28.8C16.2 30.28 16.56 31.66 17.28 32.94C15.16 34.94 14.11 37.32 14.11 40.07C14.11 41.07 14.3 42.18 14.7 43.4C15.1 44.62 15.6 45.57 16.2 46.25C14.92 46.29 13.85 47.23 12.99 49.07C12.14 50.91 11.71 52.53 11.7 53.93Z"></path></svg>',
                            c: [localStorage.getItem('video_' + kid_group.post.ID) == 'd' ? 'active' : undefined]
                        }
                    ],
                    e: {
                        click_touchend: function () {

                            var l = this,
                                n = l.o().q(".active"),
                                c = l.o().h();
                            o = l.classList.contains("active"),
                                s = 'video_' + kid_group.post.ID;

                            l.classList.add("active");
                            var n = l == c[0] ? (function () {
                                console.log('ligth');

                                kid_group[3].y().opacity = o ? 0 : 1;
                                kid_group[3].y().pointerEvents = o ? 'none' : 'auto'

                                return o ? c[0] : 0;

                            })() : (function () {
                                console.log('change emoji');

                                kid_xhr(function (r) {
                                    console.log(r);
                                    console.log('send xhr');

                                }).run('method=' + (o ? 0 : localStorage.getItem(s) ? 2 : 1) + '&v=' + (l.n() ? 'l' : 'd') + '&post=' + kid_group.post.ID)


                                o ? localStorage.removeItem(s) : localStorage.setItem(s, l.n() ? 'l' : 'd');

                                return o ? l : (l.n() || l.p());
                            })();
                            console.log(n)
                            n ? n.classList.remove('active') : 0;



                        }
                    },
                    c: [33, 34]
                }],
                c: 32
            }, {
                d: [{
                        d: kid_group.post.comment_count + ' Comments',
                        c: 33
                    },
                    {
                        d: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M93.24 24.89C88.77 19.41 82.71 15.08 75.06 11.9C67.4 8.72 59.04 7.13 49.96 7.13C43.2 7.13 36.73 8.07 30.56 9.95C24.39 11.82 19.07 14.36 14.61 17.56C10.15 20.75 6.6 24.56 3.96 28.96C1.32 33.37 0 37.99 0 42.82C0 48.39 1.68 53.62 5.05 58.49C8.41 63.36 13.01 67.45 18.85 70.76C18.44 72.24 17.96 73.66 17.4 74.99C16.84 76.33 16.34 77.43 15.89 78.28C15.45 79.14 14.84 80.09 14.08 81.13C13.32 82.17 12.74 82.9 12.35 83.33C11.96 83.76 11.32 84.47 10.43 85.45C9.54 86.44 8.96 87.08 8.7 87.37C8.66 87.39 8.51 87.56 8.25 87.88C7.99 88.19 7.86 88.35 7.86 88.35L7.53 88.85C7.34 89.13 7.26 89.31 7.28 89.38C7.3 89.45 7.26 89.64 7.17 89.94C7.07 90.23 7.08 90.46 7.19 90.61L7.19 90.66C7.34 91.33 7.67 91.87 8.17 92.28C8.67 92.69 9.24 92.85 9.87 92.78C12.29 92.48 14.41 92.07 16.23 91.55C25.97 89.06 34.52 84.56 41.88 78.06C44.67 78.36 47.36 78.5 49.96 78.5C59.03 78.5 67.4 76.91 75.06 73.74C82.71 70.56 88.77 66.23 93.23 60.74C97.7 55.26 99.93 49.29 99.93 42.82C99.93 36.35 97.7 30.37 93.24 24.89Z"></path></svg>',
                        c: 33
                    }
                ],
                c: 32
            }],
            c: 31
        }]
    },
    3: function (g) {




        return [{
                h2: 0,
                l: function (z) {
                    z.i(g.post.post_title);
                },
                c: 27
            }, {
                d: [{
                        d: 0,
                        l: function (z) {

                            z.i([{
                                d: [{
                                    img: 0,
                                    alt: g.post_author[0],
                                    src: g.post_author[1]
                                }],
                                c: 42
                            }, {
                                s: g.post_author[0]
                            }])

                        },
                        c: 41
                    },
                    {
                        d: [{
                                d: 0,
                                l: function (z) {
                                    z.i(kid_group.post_meta[0].toLocaleString().replace(/,/g, ' ') + ' Views')
                                }
                            },
                            {
                                d: 0,
                                l: function (z) {
                                    z.m([
                                        ['style', 'background: linear-gradient(90deg, #898a8d  ' + kid_group.post_meta[1] / (kid_group.post_meta[1] + kid_group.post_meta[2]) * 100 + '%, #780f13 0%);']
                                    ])


                                },
                                c: 36
                            },
                            {
                                d: [{
                                        d: 0,
                                        l: function (z) {
                                            z.i('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M6.2 10.79C6.4 10.99 6.5 11.22 6.5 11.5L6.5 21.49C6.5 21.76 6.4 22 6.2 22.19C6 22.39 5.77 22.49 5.5 22.49L1 22.49C0.73 22.49 0.49 22.39 0.3 22.19C0.1 22 0 21.76 0 21.49L0 11.5C0 11.22 0.1 10.99 0.3 10.79C0.49 10.59 0.73 10.5 1 10.5L5.5 10.5C5.77 10.5 6 10.59 6.2 10.79ZM4 19.49C4 19.22 3.9 18.99 3.7 18.79C3.5 18.59 3.27 18.49 3 18.49C2.72 18.49 2.48 18.59 2.29 18.79C2.1 18.99 2 19.22 2 19.49C2 19.77 2.1 20.01 2.29 20.2C2.48 20.4 2.72 20.49 3 20.49C3.27 20.49 3.5 20.4 3.7 20.2C3.9 20.01 4 19.77 4 19.49Z"></path><path d="M24.13 13.82C24.7 13.17 24.99 12.39 24.99 11.5C24.99 10.68 24.69 9.98 24.1 9.39C23.51 8.79 22.8 8.5 21.99 8.5L17.67 8.5C17.71 8.35 17.75 8.23 17.79 8.12C17.83 8.02 17.89 7.9 17.96 7.78C18.04 7.65 18.09 7.56 18.12 7.5C18.31 7.14 18.45 6.85 18.55 6.62C18.65 6.39 18.75 6.08 18.84 5.68C18.94 5.29 18.99 4.89 18.99 4.5C18.99 4.25 18.99 4.04 18.99 3.89C18.98 3.73 18.95 3.5 18.91 3.19C18.86 2.87 18.8 2.61 18.72 2.41C18.64 2.2 18.52 1.96 18.34 1.7C18.17 1.44 17.96 1.23 17.72 1.07C17.48 0.91 17.16 0.77 16.78 0.66C16.4 0.55 15.97 0.5 15.49 0.5C15.22 0.5 14.99 0.6 14.79 0.8C14.58 1 14.41 1.27 14.26 1.58C14.11 1.89 14.01 2.16 13.96 2.39C13.9 2.62 13.83 2.94 13.76 3.34C13.67 3.78 13.6 4.09 13.55 4.29C13.5 4.48 13.41 4.73 13.28 5.04C13.14 5.36 12.98 5.61 12.79 5.79C12.45 6.14 11.92 6.76 11.21 7.67C10.7 8.33 10.18 8.96 9.64 9.56C9.09 10.15 8.7 10.46 8.45 10.48C8.19 10.5 7.97 10.61 7.78 10.8C7.59 10.99 7.5 11.22 7.5 11.48L7.5 21.49C7.5 21.76 7.6 21.99 7.79 22.19C7.99 22.38 8.23 22.48 8.5 22.49C8.86 22.5 9.68 22.73 10.96 23.18C11.77 23.45 12.39 23.65 12.85 23.79C13.3 23.94 13.93 24.09 14.74 24.25C15.56 24.41 16.31 24.49 16.99 24.49L17.26 24.49L18.44 24.49L19.01 24.49C20.39 24.47 21.42 24.06 22.08 23.27C22.69 22.55 22.94 21.61 22.85 20.44C23.26 20.06 23.54 19.57 23.69 18.98C23.87 18.34 23.87 17.73 23.69 17.15C24.17 16.51 24.4 15.8 24.36 15.01C24.37 14.68 24.29 14.28 24.13 13.82Z"></path></svg>' + (kid_group.post_meta[1] ? kid_group.post_meta[1] : 0))
                                        },
                                        c: 68
                                    },
                                    {
                                        d: 0,
                                        l: function (z) {
                                            z.i('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M5.5 14.5L1 14.5C0.73 14.5 0.49 14.41 0.3 14.21C0.1 14.01 0 13.78 0 13.5L0 3.51C0 3.24 0.1 3 0.3 2.81C0.49 2.61 0.73 2.51 1 2.51L5.5 2.51C5.77 2.51 6 2.61 6.2 2.81C6.4 3 6.5 3.24 6.5 3.51L6.5 13.5C6.5 13.78 6.4 14.01 6.2 14.21C6 14.41 5.77 14.5 5.5 14.5ZM3.7 4.8C3.5 4.6 3.27 4.51 3 4.51C2.72 4.51 2.48 4.6 2.29 4.8C2.1 4.99 2 5.23 2 5.51C2 5.78 2.1 6.01 2.29 6.21C2.48 6.41 2.72 6.51 3 6.51C3.27 6.51 3.5 6.41 3.7 6.21C3.9 6.01 4 5.78 4 5.51C4 5.23 3.9 4.99 3.7 4.8Z"></path><path d="M24.13 11.18C24.7 11.83 24.99 12.61 24.99 13.5C24.99 14.32 24.69 15.02 24.1 15.61C23.51 16.21 22.8 16.5 21.99 16.5L17.67 16.5C17.71 16.65 17.75 16.77 17.79 16.88C17.83 16.98 17.89 17.1 17.96 17.22C18.04 17.35 18.09 17.44 18.12 17.5C18.31 17.86 18.45 18.15 18.55 18.38C18.65 18.61 18.75 18.92 18.84 19.32C18.94 19.71 18.99 20.11 18.99 20.5C18.99 20.75 18.99 20.96 18.99 21.11C18.98 21.27 18.95 21.5 18.91 21.81C18.86 22.13 18.8 22.39 18.72 22.59C18.64 22.8 18.52 23.04 18.34 23.3C18.17 23.56 17.96 23.77 17.72 23.93C17.48 24.09 17.16 24.23 16.78 24.34C16.4 24.45 15.97 24.5 15.49 24.5C15.22 24.5 14.99 24.4 14.79 24.2C14.58 24 14.41 23.73 14.26 23.42C14.11 23.11 14.01 22.84 13.96 22.61C13.9 22.38 13.83 22.06 13.76 21.66C13.67 21.22 13.6 20.91 13.55 20.71C13.5 20.52 13.41 20.27 13.28 19.96C13.14 19.64 12.98 19.39 12.79 19.21C12.45 18.86 11.92 18.24 11.21 17.33C10.7 16.67 10.18 16.04 9.64 15.44C9.09 14.85 8.7 14.54 8.45 14.52C8.19 14.5 7.97 14.39 7.78 14.2C7.59 14.01 7.5 13.78 7.5 13.52L7.5 3.51C7.5 3.24 7.6 3.01 7.79 2.81C7.99 2.62 8.23 2.52 8.5 2.51C8.86 2.5 9.68 2.27 10.96 1.82C11.77 1.55 12.39 1.35 12.85 1.21C13.3 1.06 13.93 0.91 14.74 0.75C15.56 0.59 16.31 0.51 16.99 0.51L17.26 0.51L18.44 0.51L19.01 0.51C20.39 0.53 21.42 0.94 22.08 1.73C22.69 2.45 22.94 3.39 22.85 4.56C23.26 4.94 23.54 5.43 23.69 6.02C23.87 6.66 23.87 7.27 23.69 7.85C24.17 8.49 24.4 9.2 24.36 9.99C24.37 10.32 24.29 10.72 24.13 11.18Z"></path></svg>' + (kid_group.post_meta[2] ? kid_group.post_meta[2] : 0))
                                        },
                                        c: 68
                                    }
                                ],
                                c: [35, {
                                    37: " svg"
                                }]
                            }
                        ]
                    }
                ],
                c: 35
            },
            {
                d: 0,
                w: {
                    'in': {
                        1: 930
                    }
                },
                // w: [1, 930, 'in']
            }, {
                d: [{
                        h2: 0,
                        l: function (z) {

                            z.i('Comments "' + g.post.post_title + '"')



                        }
                    },
                    {
                        d: [{
                            d: 0,
                            for: [{
                                    i: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z"></path></svg>'
                                },
                                {
                                    i: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M28 8.557a9.913 9.913 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.738 9.738 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.893 9.893 0 0 1-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z"></path></svg>'
                                },
                                {
                                    i: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M16.539 4.5c-6.277 0-9.442 4.5-9.442 8.253 0 2.272.86 4.293 2.705 5.046.303.125.574.005.662-.33.061-.231.205-.816.27-1.06.088-.331.053-.447-.191-.736-.532-.627-.873-1.439-.873-2.591 0-3.338 2.498-6.327 6.505-6.327 3.548 0 5.497 2.168 5.497 5.062 0 3.81-1.686 7.025-4.188 7.025-1.382 0-2.416-1.142-2.085-2.545.397-1.674 1.166-3.48 1.166-4.689 0-1.081-.581-1.983-1.782-1.983-1.413 0-2.548 1.462-2.548 3.419 0 1.247.421 2.091.421 2.091l-1.699 7.199c-.505 2.137-.076 4.755-.039 5.019.021.158.223.196.314.077.13-.17 1.813-2.247 2.384-4.324.162-.587.929-3.631.929-3.631.46.876 1.801 1.646 3.227 1.646 4.247 0 7.128-3.871 7.128-9.053.003-3.918-3.317-7.568-8.361-7.568z"></path></svg>'
                                },
                                {
                                    i: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M20.775 21.962c-.37.177-1.08.33-1.61.345-1.598.043-1.907-1.122-1.92-1.968v-6.217h4.007V11.1H17.26V6.02h-2.925s-.132.044-.144.15c-.17 1.556-.895 4.287-3.923 5.378v2.578h2.02v6.522c0 2.232 1.647 5.404 5.994 5.33 1.467-.025 3.096-.64 3.456-1.17l-.96-2.846z"></path></svg>'
                                },

                            ],
                            e: {
                                click: function () {
                                    var h = this;

                                    kid_map([
                                        "https://www.facebook.com/sharer/sharer.php?u=" + location.href,
                                        "https://twitter.com/share?url=" + location.href + "&text=" + encodeURIComponent(document.title),
                                        "http://pinterest.com/pin/create/link/?url=" + location.href,
                                        "http://www.tumblr.com/share?v=3&u=" + location.href + "&t=" + encodeURIComponent(document.title)
                                    ], function (v, i) {
                                        if (h.o().h(i) == h)
                                            window.open(v, "", "width=800,height=600");
                                    })

                                }
                            },
                            c: 38
                        }],
                        c: 39
                    }
                ],
                c: 35
            }
        ]
    },
    5: function (z, coom) {
        var emoji = [
                ['🙂', ':)'],
                ['😉', ';)'],
                ['😀', ':D'],
                ['😦', ':('],
                ['😥', ":'("],
                ['😐', ':|'],
                ['😮', ':o'],
                ['😛', ':P'],
                ['😡', '>:('],
                ['😎', '8-)'],
                ['❤', '<3'],
                ['😕', ':?'],
                ['🐱', '=^-^='],
                ['👿', ':evil:'],
                ['😈', ':twisted:'],
                ['😳', ':oops:'],
                ['🙄', ':roll:'],
                ['💡', ':idea:'],
                ['❗', ':!:'],
                ['❓', ':?:'],
                ['🐻', ':bear:'],
                ['⭐', ':star:'],
                ['➡', ':arrow:']
            ],
            chil = {
                0: z
            },
            op = 0;

        kid_map(coom, function (v) {

            kid_map(emoji, function (e) {
                v.comment_content = v.comment_content.replace(e[1], e[0]);
            });




            var dom = kid_t(chil[v.comment_parent], [{
                li: [{
                    d: [{
                        img: 0,
                        alt: v.comment_author,
                        src: v.avatar
                    }],
                    c: [42, 29]
                }, {
                    d: [{
                        d: [{
                            s: v.comment_author
                        }, {
                            s: kid_time(v.comment_date),
                            c: 30
                        }],
                        c: [44, 47]
                    }, {
                        d: v.comment_content,
                        c: 70
                    }, {
                        button: 'REPLY',
                        e: {
                            click: function () {


                                op ? op.i(' ') : 0;
                                if (this.i() == 'REPLY') {
                                    op ? op.p().i('REPLY') : 0
                                    op = this.n().i([kid_group.com_form(v.comment_ID)])
                                    this.i('Cancel')
                                } else if (this.i() == 'Cancel') {
                                    this.i('REPLY')
                                }




                            }
                        },
                        c: 45
                    }, {
                        d: 0
                    }, {
                        ul: 0
                    }],
                    c: 49
                }],
                c: 44,
                id: 'comment-' + v.comment_ID
            }])


            chil[v.comment_ID] = dom.q('ul');



        })

    },
    6: function () {
        return {
            d: [{
                form: [{
                    input: 0,
                    placeholder: "Search " + location.hostname,
                    name: 's',
                    value: kid_group.search ? kid_group.search : '',
                    spellcheck: false,
                    b: 222,
                    c: 74
                }, {
                    button: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 339.921 339.921"><path d="M335.165,292.071l-81.385-84.077c-5.836-6.032-13.13-8.447-16.29-5.363   c-3.171,3.062-10.47,0.653-16.306-5.379l-1.164-1.207c36.425-47.907,32.89-116.499-10.851-160.24   c-47.739-47.739-125.142-47.739-172.875,0c-47.739,47.739-47.739,125.131,0,172.87c44.486,44.492,114.699,47.472,162.704,9.045   l0.511,0.533c5.825,6.032,7.995,13.402,4.814,16.469c-3.166,3.068-1.012,10.443,4.83,16.464l81.341,84.11   c5.836,6.016,15.452,6.195,21.49,0.354l22.828-22.088C340.827,307.735,340.99,298.125,335.165,292.071z M182.306,181.81   c-32.852,32.857-86.312,32.857-119.159,0.011c-32.852-32.852-32.847-86.318,0-119.164c32.847-32.852,86.307-32.847,119.148,0.005   C215.152,95.509,215.152,148.964,182.306,181.81z"/>',
                    type: "submit",
                    c: 75
                }],
                autocomplete: "off",
                c: 73
            }],
            c: 72
        };
    },
    7: {
        ul: 0,
        c: 76,
        l: function (z) {

            kid_map('abcdefghijklmnopqrstuvwxyz', function (v) {

                kid_t(z, [{
                    li: [{
                        a: v.toUpperCase(),
                        href: location.origin + "/?s=" + v + '&char=' + v
                    }]
                }])
            })
        }
    },
    8: function (z) {
        try {
            var v = z.parentElement.nextElementSibling;
            v ? z.nextElementSibling.style.display = 'flex' : 0

        } catch (e) {

        }

        kid_t(z.nextElementSibling, []).i('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444.819 444.819"><path d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561   L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416   C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848   c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693   C444.819,130.287,441.295,121.629,434.252,114.203z"></path></svg>').e({
            click: function (e) {
                e.preventDefault();
                this.classList.toggle('active');
                console.log(this);
                (this.classList.contains('active') ? (function () {
                    v.classList.remove('op')
                    setTimeout(function () {
                        v.style.height = 'auto'
                    }, 250);
                    v.style.height = v.scrollHeight + 'px'
                })() : (function () {
                    v.setAttribute('style', '')
                    v.style.height = v.scrollHeight + 'px'
                    v.classList.add('op')
                })())


            }
        })


    },
    9: function (z) {
        console.log(z)
        z.previousElementSibling.classList.toggle('gg');
    },
    10: function (v) {
        return {
            d: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M344.48,269.57l-128,80  c-2.59,1.617-5.535,2.43-8.48,2.43c-2.668,0-5.34-0.664-7.758-2.008C195.156,347.172,192,341.82,192,336V176  c0-5.82,3.156-11.172,8.242-13.992c5.086-2.836,11.305-2.664,16.238,0.422l128,80c4.676,2.93,7.52,8.055,7.52,13.57  S349.156,266.641,344.48,269.57z"></path></svg>',
            i: [{
                h1: v ? 'Most Liked Videos' : 'Most Viewed Videos'
            }],
            c: [1, 78]
        }
    },
    11: function (j) {

        var i = 1;
        return {
            d: [{
                d: 'Show More',
                e: {
                    click: function () {

                        var co = document.cookie.match("\\binc_get_token=([^;]*)\\b"),
                            m = this,
                            v = m.o().p(),
                            g = kid_t(v, kid_dom[13]).z;

                        i++;

                        kid_xhr(function (r) {
                            if (r.success) {
                                r.data[1] == i ? m.o().r() : 0;

                                kid_post(v, r.data[0], (j == 'random' ? 0 : 2));
                                g.r();
                            }

                        }, "/wp-admin/admin-ajax.php").run('action=get_inc_data&inc_get_token=' + (co ? co[1] : 0) + '&paged=' + i + "&method=" + j + (j == 'random' ? '&id=' + kid_group.post.ID : ''))

                    }
                },
                c: 82
            }],
            c: 81
        }
    },
    12: function (l, p) {

        return {
            d: [{
                ul: 0,
                l: function (z) {
                    var oo = z.o().o();

                    function gg(i, v, g) {
                        var co = document.cookie.match("\\binc_get_token=([^;]*)\\b");
                        window.scrollTo(0, 0);

                        kid_xhr(function (r) {

                            if (r.success) {

                                kid_post(v, r.data[0], 2);
                                g.r();


                                kid_t(oo, [kid_dom[12](l, i)]);
                                z.o().r();


                            }

                        }, "/wp-admin/admin-ajax.php").run('action=get_inc_data&inc_get_token=' + (co ? co[1] : 0) + '&paged=' + i + '&s=' + (kid_group.search ? kid_group.search : ''))
                    }

                    window.onpopstate = function (e) {
                        var g = oo.p();
                        g.i(' ');

                        gg((e.state ? e.state.page : 1), g, kid_t(g, kid_dom[13]).z)
                    }

                    function clpage(v) {
                        history.pushState({
                            page: v
                        }, "title 1", "?page=" + v + (kid_group.search ? '&s=' + kid_group.search : ''))
                        var g = oo.p();
                        g.i(' ');
                        gg(v, g, kid_t(g, kid_dom[13]).z)
                    }


                    if (l < 2) {
                        return
                    }

                    var sl = kid_t(z.o(), [{
                        d: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400.004 400.004"><path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757   c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072   c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315   C400.004,190.438,392.251,182.686,382.688,182.686z"/></svg>',
                        c: 90
                    }, {
                        div: [{
                            select: 0,
                            e: {
                                change: function () {

                                    clpage(this.value)
                                }
                            },
                            c: 88
                        }],
                        c: 87
                    }, {
                        d: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401 401"><path class="shp0" d="M18.31 218.31L341.88 218.31L264.68 295.53C257.91 302.29 257.91 313.25 264.68 320.01C271.44 326.78 282.41 326.78 289.16 320.01L395.93 213.24C402.69 206.48 402.69 195.52 395.93 188.76L289.16 81.98C285.78 78.6 281.35 76.91 276.92 76.91C272.49 76.91 268.06 78.6 264.67 81.98C257.91 88.74 257.91 99.71 264.67 106.47L341.88 183.68L18.31 183.69C8.75 183.69 1 191.44 1 201C1 210.56 8.75 218.31 18.31 218.31Z"/></svg>',
                        c: 90
                    }]).z.p().h(0)

                    for (var i = 1; i <= l; i++) {
                        sl.i([{
                            option: 'PAGE ' + i,
                            value: 'page' + i
                        }]);




                        if (i < 4 || i > l - 3 || (i > p - 2 && i < p + 3)) {
                            z.i([{
                                li: i,
                                e: {
                                    click: function () {

                                        clpage(this.i())
                                    }
                                },
                                y: ((p ? p : 1) == i ? {
                                    border: '1px solid #ff005b',
                                    color: '#e00f59'
                                } : {}),
                                c: 85
                            }])



                        } else if (i == p - 2 || i == p + 3) {
                            z.i([{
                                li: '. . .',
                                c: [85, 89]
                            }]);
                        }


                    }

                    sl.value = 'page' + (p ? p : 1)


                },
                c: 84
            }],
            c: 86
        }

    },
    13: [{
        d: [{
            d: [{
                d: 0,
                c: 92
            }, {
                d: 0
            }],
            c: 91
        }],
        c: 93
    }],
    14: {
        d: 'Show More',
        e: {
            click: function () {
                console.log('this.o()')
                this.o().i(kid_dom[13])
            }
        },
        c: 94
    }



}




//////////////////////////////////////////////////////////
function kid_post(z, posts, stl) {

    kid_map(posts, function (v) {
        kid_t(z, [{
            d: [{
                d: [{
                    a: [{
                        img: 0,
                        alt: v[0],
                        src: v[2],
                        e: {
                            load: function () {
                                this.style.transform = 'scale(1)'



                            }
                        }
                    }, {
                        d: [{
                            d: 0,
                            for: kid_dom[0](v),
                            c: [10, {
                                6: ':before'
                            }]
                        }],
                        c: 5
                    }],
                    title: v[0],
                    href: v[1],
                    c: [4, 83, {
                        11: ':before',
                        12: ':hover:before',
                        13: ':after',
                        14: ':hover:after'
                    }]
                }]
            }, {
                d: [{
                    a: v[0],
                    href: v[1],
                    title: v[0],
                }],
                c: 3
            }],
            c: stl ? stl : 0
        }])



    })

}





window.addEventListener('scroll', function (e) {
    var d = document.querySelector('.header'),
        h = d.offsetHeight,
        y = window.scrollY - h;

    if (y > 0) {
        Object.assign(d.style, {
            position: 'fixed',
            transform: 'translateY(-' + Math.max(100 - y / h * 100, 0) + '%)',
            transition: 'none',
            // opacity: 0.8,
            background: 'rgba(61, 67, 88, 0.53)',
            zIndex: 888
        })
    } else {
        d.setAttribute("style", "");
    }

});