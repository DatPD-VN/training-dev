const path: string = "/training-dev/ec";

export const ROUTE_CONFIG = {
  CART: "/cart",
  PRODUCT: "/products",
  DETAIL_PRODUCT: "/products/detail-Product",
  LOGIN: "/login",
  RESETPASS: "/reset-Pass",
  PROFILE: "/profile",
  DATA: "/data-products",
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
  if (link == ROUTE_CONFIG.PROFILE) {
    if (localStorage.getItem("profileData")) {
      return ROUTE.Link;
    } else {
      return Route(ROUTE_CONFIG.PRODUCT)
    }
  } else {
    return ROUTE.Link;
  }

  
}

export default Route;
