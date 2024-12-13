const path: string = "/training-dev/ec";

export const ROUTE_CONFIG = {
  CART: "/cart",
  PRODUCT: "/products",
  DETAIL_PRODUCT: "/products/detail-Product",
  LOGIN: "/login",
  RESETPASS: "/reset-Pass",
  PROFILE: "/profile",
};

export const appCheck: {
  path: string;
}[] = [
  {
    path: "training-dev/ec/login",
  },
  {
    path: "training-dev/ec/reset-Pass",
  },
];


function Route(link: string) {
  const ROUTE = {
    Link: `${path}${link}`,
  };
  return ROUTE.Link;
}

export default Route;
