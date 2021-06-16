import React, { useState } from 'react';

import clsx from 'clsx';

import { Collapse } from 'reactstrap';

import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Database,
  Users,
  Award,
  UserCheck,
  ChevronRight,
  Briefcase,
  Settings,
  Columns,
  Filter,
  DollarSign
} from 'react-feather';

import { SidebarWidget } from '../../layout-components';

const SidebarMenu = (props) => {
  const { setSidebarToggleMobile } = props;

  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [pagesOpen, setPagesOpen] = useState(false);
  const togglePages = (event) => {
    setPagesOpen(!pagesOpen);
    event.preventDefault();
  };

  return (
    <>
      <PerfectScrollbar>
        <div className="sidebar-navigation">
          <SidebarWidget />
          <div className="sidebar-header">
            <span>Navigation</span>
          </div>
          <ul>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Homepage">
                <span className="sidebar-icon">
                  <Award />
                </span>
                Homepage
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRight />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Overview">
                <span className="sidebar-icon">
                  <Database />
                </span>
                Overview
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRight />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Accounts">
                <span className="sidebar-icon">
                  <Users />
                </span>
                Accounts
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRight />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Wallets">
                <span className="sidebar-icon">
                  <Briefcase />
                </span>
                Wallets
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRight />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/BuySell">
                <span className="sidebar-icon">
                  <DollarSign />
                </span>
                Buy / Sell
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRight />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Transactions">
                <span className="sidebar-icon">
                  <Filter />
                </span>
                Transactions
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRight />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Profile">
                <span className="sidebar-icon">
                  <UserCheck />
                </span>
                Profile
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRight />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Settings">
                <span className="sidebar-icon">
                  <Settings />
                </span>
                Settings
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRight />
                </span>
              </NavLink>
            </li>
          </ul>
          <div className="sidebar-header">
            <span>Others</span>
          </div>
          <ul>
            <li>
              <a
                href="#/"
                onClick={togglePages}
                className={clsx({ active: pagesOpen })}>
                <span className="sidebar-icon">
                  <Columns />
                </span>
                <span className="sidebar-item-label">User Pages</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRight />
                </span>
              </a>
              <Collapse isOpen={pagesOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/PageLoginCover">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/PageRegisterCover">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/PageRecoverCover">
                      Recover Password
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/PageError404">
                      Error 404
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
