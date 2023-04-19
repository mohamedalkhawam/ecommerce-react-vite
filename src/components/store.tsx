// import React, { useEffect, useState } from "react";
import Products from "../components/productsCollection";
// import {
//   useCheckoutFetchByTokenQuery,
//   useGetShopNameQuery,
// } from "../generated/graphql";
// import { getUserToken } from "../mutations";
// import { useMutation, gql } from "@apollo/client";

function Store() {
  //   const { loading: appNameLoading, data: appName } = useGetShopNameQuery();
  // const getUserTokenQuery = gql`
  //   ${getUserToken}
  // `;
  //   const [token, setToken] = useState("hello");
  // const [mutateFunction, { data, loading, error }] =
  //   useMutation(getUserTokenQuery);
  // useEffect(() => {
  //   mutateFunction().then((res) => {
  //     setToken(res.data.tokenCreate.token ?? "");
  //     localStorage.setItem("token", res.data.tokenCreate.token);
  //   });
  // }, []);
  //   const { data: checkoutData, loading: checkoutLoading } =
  // useCheckoutFetchByTokenQuery({
  //   variables: { checkoutToken: token },
  //   skip: !token,
  // });

  return (
    <div className="p-10 w-full flex items-center justify-center">
      <div className="p-10 w-full flex flex-col items-center justify-center">
        <header>
          {/* <h1>
            Dashboard
            {!appNameLoading ? (
              <span> {appName?.shop.name}</span>
            ) : (
              <span> loading...</span>
            )}
          </h1> */}
        </header>
        <main className="w-full flex items-center justify-center bg-black">
          <div>
            <Products />
          </div>
        </main>
        <div>
          <div>checkout</div>
          {/* {JSON.stringify(checkoutData?.checkout?.lines ?? {})} */}
          {/* {token} */}
        </div>
      </div>
    </div>
  );
}

export default Store;
