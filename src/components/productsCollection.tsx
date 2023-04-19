// import {
//   useLatestProductsQuery,
//   useProductByIdQuery,
// } from "../generated/graphql";
// import { useState } from "react";

function Products() {
  // let [searchParams, setSearchParams] = useState<string>("");
  // const {
  //   data: singlePeoduct,
  //   error: sinleproductError,
  //   loading: SinleProductLoading,
  // } = useProductByIdQuery({
  //   variables: { id: searchParams },
  // });
  // const { loading, error, data } = useLatestProductsQuery();
  //

  // const goToProduct = (id: any) => setSearchParams(id);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error</p>;

  // if (data) {
  //   const latestProducts = data.products?.edges || [];
  return (
    <div>
      <ul role="list" className="grid gap-4 grid-cols-4">
        {/*{latestProducts?.length > 0 &&*/}
        {/*  latestProducts.map(*/}
        {/*    ({ node: { id, name, thumbnail, category } }) => (*/}
        {/*      <li*/}
        {/*        key={id}*/}
        {/*        className="relative bg-white cursor-pointer"*/}
        {/*        onClick={() => {*/}
        {/*          goToProduct(id);*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        /!* @ts-ignore*!/*/}
        {/*        <img src={thumbnail.url} alt="" />*/}
        {/*        <div className="p-2 border-gray-100 border-t">*/}
        {/*          <p className="block text-lg text-gray-900 truncate">*/}
        {/*            {name}*/}
        {/*          </p>*/}
        {/*          <p className="block text-sm font-medium text-gray-500">*/}
        {/*            {category?.name}*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </li>*/}
        {/*    )*/}
        {/*  )}*/}
      </ul>
      Products
      {/*{Object.keys(singlePeoduct ?? {}).length > 0 && (*/}
      {/*  <div>{JSON.stringify(singlePeoduct)}</div>*/}
      {/*)}*/}
    </div>
  );
  // }

  // return null;
}

export default Products;
// useProductByIdQuery
