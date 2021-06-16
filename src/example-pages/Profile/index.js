import React from 'react';

import { Container } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import ProfileUserActions from '../../example-components/Profile/ProfileUserActions';
import ProfileUserDetails from '../../example-components/Profile/ProfileUserDetails';
import ProfilePageTitleActions from '../../example-components/Profile/ProfilePageTitleActions';
export default function Profile() {
  return (
    <>
      <PageTitle
        titleHeading="My Profile"
        titleDescription="Manage all aspects of your profile data using this example page.">
        <ProfilePageTitleActions />
      </PageTitle>
      <Container>
        <ProfileUserActions />
        <ProfileUserDetails />
      </Container>
    </>
  );
}
