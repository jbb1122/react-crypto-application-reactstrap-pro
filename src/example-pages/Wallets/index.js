import React from 'react';

import { Container } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import WalletsChart from '../../example-components/Wallets/WalletsChart';
import WalletsPageTitleActions from '../../example-components/Wallets/WalletsPageTitleActions';
export default function Wallets() {
  return (
    <>
      <PageTitle
        titleHeading="Wallets"
        titleDescription="This is your wallets overview last updated today.">
        <WalletsPageTitleActions />
      </PageTitle>
      <Container>
        <WalletsChart />
      </Container>
    </>
  );
}
