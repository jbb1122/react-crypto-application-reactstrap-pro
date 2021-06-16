import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Badge,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

import { Settings, UserCheck, Briefcase, LogOut } from 'react-feather';

import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import CountUp from 'react-countup';
const HeaderUserbox = () => {
  return (
    <>
      <UncontrolledDropdown className="user-box position-relative mr-2">
        <DropdownToggle
          color="link"
          className="p-0 text-left d-flex align-items-center">
          <div className="d-block p-0 avatar-icon-wrapper">
            <Badge color="warning" className="badge-circle p-top-a">
              Idle
            </Badge>
            <div className="avatar-icon rounded">
              <img src={avatar3} alt="..." />
            </div>
          </div>
          <div className="d-none d-xl-block pl-2">
            <span className="text-success">
              <small>Account verified</small>
            </span>
            <div className="font-weight-bold">Satoshi Nakamoto</div>
          </div>
          <span className="pl-1 pl-xl-3">
            <FontAwesomeIcon
              icon={['fas', 'angle-down']}
              className="opacity-5"
            />
          </span>
        </DropdownToggle>
        <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
          <div className="d-flex p-4">
            <div className="avatar-icon rounded mr-3">
              <img src={avatar3} alt="..." />
            </div>
            <div>
              <h6 className="font-weight-bold mb-1 text-black">
                Satoshi Nakamoto
              </h6>
              <p className="text-black-50 mb-0">satoshi.nakamoto@example.com</p>
            </div>
          </div>
          <div className="divider" />
          <div className="divider" />
          <div className="bg-secondary d-flex align-items-center flex-column py-4">
            <div className="display-3 mb-0 text-center font-weight-bold">
              <small className="opacity-6">$</small>
              <span className="pl-1">
                <CountUp
                  start={0}
                  end={458.695}
                  duration={6}
                  separator=""
                  delay={1}
                  decimals={3}
                  decimal=","
                  prefix=""
                  suffix=""
                />
                <small>
                  <sup>.65</sup>
                </small>
              </span>
            </div>
            <small className="text-center font-weight-bold opacity-6 text-uppercase">
              Total balance
            </small>
          </div>
          <div className="divider" />
          <Nav className="nav-neutral-first nav-pills-rounded flex-column p-3">
            <NavItem>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon mr-2">
                  <Settings />
                </div>
                <span className="font-size-md">Settings</span>
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon mr-2">
                  <UserCheck />
                </div>
                <span className="font-size-md">Profile</span>
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon mr-2">
                  <Briefcase />
                </div>
                <span className="font-size-md">Wallets</span>
              </NavLinkStrap>
            </NavItem>
          </Nav>
          <div className="divider" />
          <Nav className="nav-neutral-danger nav-pills-rounded flex-column p-3">
            <NavItem>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon">
                  <LogOut />
                </div>
                <span>Log out</span>
              </NavLinkStrap>
            </NavItem>
          </Nav>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default HeaderUserbox;
