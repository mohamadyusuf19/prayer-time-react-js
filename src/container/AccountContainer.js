import React from "react";
import Layout from "../components/layout/Layout";
import Account from "../components/account/Account";

const AccountContainer = () => {
  window.scrollTo(0, 0);
  return (
    <Layout>
      <Account />
    </Layout>
  );
};

export default AccountContainer;
