import React from 'react'
import { Route } from 'react-router-dom'
import Context from './Components/Context'
import Exchange from './Components/Pages/Exchange/Exchange'
import Login from './Components/Pages/Login/Login'
import Market from './Components/Pages/Market/Market'
import Overview from './Components/Pages/Overview/Overview'
import Regist from './Components/Pages/Regist/Regist'
import Transictions from './Components/Pages/Transaction/Transictions'
import Wallets from './Components/Pages/Wallets/Wallets'
import { CSSTransition } from 'react-transition-group'
import { Box } from '@chakra-ui/react'
import Errorpage from './Components/Pages/404/Erorpage'

const Pages = () => {
    const routes = [
        { path: '/', Component: Login },
        { path: '/Regist', Component: Regist },
        { path: '/Exchange', Component: Exchange },
        { path: '/Market', Component: Market },
        { path: '/Wallets', Component: Wallets },
        { path: '/Transictions', Component: Transictions },
        { path: '/Overview', Component: Overview },
        { path: '/Context', Component: Context },
        { path: '*', Component: Errorpage },
    ]

    return (
        <div>
            <Route path='/' element={<Login />}>
                {routes.map(route => (
                    <Box.Link
                        key={route.path}
                        to={route.path}
                        activeClassName="active"
                    >
                    </Box.Link>
                ))}

                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        {({ match }) => (
                            <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="page"
                                unmountOnExit
                            >
                                <div className="page">
                                    <Component />
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </Route>
        </div>
    )
}

export default Pages