const path: string = "/training-dev/ec";

export const ROUTE_CONFIG = {
  CART: "/cart",
  PRODUCT: "/products",
  DETAIL_PRODUCT: "/products/detail-product",
  LOGIN: "/login",
  REGISTER: "/register",
  RESET_PASS: "/reset-pass",
  PROFILE: "/profile",
  DATA: "/data-products",
  ORDER: "/order",
  HISTORY: "/order-history",
  ADD_PRODUCT: "/add-product",
  CHAT: "/chat",
};

export const appCheck: {
  path: string;
}[] = [
  {
    path: "training-dev/ec/login",
  },
  {
    path: "training-dev/ec/register",
  },
  {
    path: "training-dev/ec/reset-Pass",
  },
];

export const hiddenFooter: {
  path: string;
}[] = [
  {
    path: "training-dev/ec/chat",
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
      return Route(ROUTE_CONFIG.PRODUCT);
    }
  } else {
    return ROUTE.Link;
  }
}

export default Route;
