const path: string = "/training-dev/ec";

export const ROUTE_CONFIG = {
  CART: "/Cart",
  PRODUCT: "/Products",
  DETAIL_PRODUCT: "/Products/DetailProduct",
  LOGIN: "/login",
  RESETPASS: "/ressetPass",
};

function Route(link: string) {
    const ROUTE = {
        Link: `${path}${link}`,
    };

    return ROUTE.Link;
}

export default Route;
