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
    path: `${Route(ROUTE_CONFIG.LOGIN)}`,
  },
  {
    path: Route(ROUTE_CONFIG.RESETPASS),
  },
];


function Route(link: string) {
  const ROUTE = {
    Link: `${path}${link}`,
  };

  return ROUTE.Link;
}

export default Route;
