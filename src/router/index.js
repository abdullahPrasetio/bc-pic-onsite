import { createBrowserHistory } from 'history'
import {
    Home,
    Login,
    NotFoundMember,
    ProjectUnitCreate,
    ProjectUnitEdit,
    SiteIndex,
    SiteShow,
    Unauthenticated,
} from 'pages'
import React from 'react'
import { Router, Switch } from 'react-router-dom'
import GuestRoute from './GuestRoute'
import MemberRoute from './MemberRoute'
export default function Routers() {
    const history = createBrowserHistory({ basename: process.env.PUBLIC_URL })
    return (
        <Router history={history}>
            <Switch>
                <GuestRoute component={Login} path="/login" />
                <GuestRoute component={Unauthenticated} path="/private" />
                <MemberRoute exact component={Home} path="/" />
                <MemberRoute exact component={SiteIndex} path="/sites" />
                <MemberRoute
                    exact
                    component={SiteShow}
                    path="/sites/show/:id"
                />
                <MemberRoute
                    exact
                    component={ProjectUnitCreate}
                    path="/units/create/:id"
                />

                <MemberRoute
                    exact
                    component={ProjectUnitEdit}
                    path="/units/edit/:id"
                />

                <MemberRoute component={NotFoundMember} path="/oops/404" />
            </Switch>
        </Router>
    )
}
