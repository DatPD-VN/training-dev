import { atom, selector } from 'recoil';

const defaultData =  [
    {
        id: 1,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2sdfew3cmnu5b_tn.webp",
      titleProduct: "Áo Thun AM 1 In Nhiều Họa Tiết TỔNG HỢP Form Rộng ",
      priceProduct: 29000,
      saleProduct: "-42%",
      shipProduct: true,
      isVoucher: false,
      voucherProduct: "10% Giảm",
    },
    {
        id: 2,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lz0equeputmb88_tn.webp",
      titleProduct:
        "💕Dreamy💕Tất cổ cao nữ chất liệu cotton, họa tiết hình thêu dễ thương",
      priceProduct: 17000,
      saleProduct: "-52%",
      shipProduct: false,
      isVoucher: true,
      voucherProduct: "10% Giảm",
    },
    {
        id: 3,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-ls9f6xwhk0igf3_tn.webp",
      titleProduct:
        "[ free ship ] Giày Nike_AF1 Lông Chuột, Giày Thể Thao AF1 Màu Lông Chuột Bản Trung Da Lộn Đế Air Kiểu Dáng BaSic.[ Hot ]",
      priceProduct: 52000,
      saleProduct: "-42%",
      shipProduct: true,
      isVoucher: false,
      voucherProduct: "10% Giảm",
    },
    {
        id: 4,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/sg-11134301-7rced-ltp3d2vvinqdd3_tn.webp",
      titleProduct:
        "Tai nghe không dây đơn KY2 Tai nghe OWS dẫn truyền không khí Tai nghe HiFi Tai nghe nghe thể thao khử tiếng ồn cho tất cả các điện thoại thông minh",
      priceProduct: 29000,
      saleProduct: "-42%",
      shipProduct: true,
      isVoucher: true,
      voucherProduct: "10% Giảm",
    },
    {
        id: 5,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rd45-lun0zz9gy26194_tn.webp",
      titleProduct:
        "Son môi Gương Lip Glaze Dài Mặc Ống Trong Suốt Thủy Tinh Son Bóng",
      priceProduct: 12000,
      saleProduct: "-42%",
      shipProduct: true,
      isVoucher: false,
      voucherProduct: "10% Giảm",
    },
    {
        id: 6,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lynprdwznsf5fa_tn.webp",
      titleProduct: "Áo Thun AM NƠ NEED Tay Lỡ 2 Màu Siêu Cute",
      priceProduct: 22000,
      saleProduct: "-42%",
      shipProduct: true,
      isVoucher: true,
      voucherProduct: "10% Giảm",
    },
    {
        id: 7,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lv8q5cowvmf186_tn.webp",
      titleProduct:
        "DÉP QUAI NGANG CHỮ H GIÁ RẺ SIÊU ĐẸP ĐI ÊM CHÂN TÔN DÁNG.DÉP QUAI NGANG NAM NỮ SÀNH ĐIỆU",
      priceProduct: 10000,
      saleProduct: "-42%",
      shipProduct: false,
      isVoucher: true,
      voucherProduct: "20% Giảm",
    },
    {
        id: 8,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-ls9f6xwhk0igf3_tn.webp",
      titleProduct:
        "[ free ship ] Giày Nike_AF1 Lông Chuột, Giày Thể Thao AF1 Màu Lông Chuột Bản Trung Da Lộn Đế Air Kiểu Dáng BaSic.[ Hot ]",
      priceProduct: 52000,
      saleProduct: "-42%",
      shipProduct: true,
      isVoucher: false,
      voucherProduct: "10% Giảm",
    },
    {
        id: 9,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/sg-11134301-7rced-ltp3d2vvinqdd3_tn.webp",
      titleProduct:
        "Tai nghe không dây đơn KY2 Tai nghe OWS dẫn truyền không khí Tai nghe HiFi Tai nghe nghe thể thao khử tiếng ồn cho tất cả các điện thoại thông minh",
      priceProduct: 29000,
      saleProduct: "-42%",
      shipProduct: false,
      isVoucher: true,
      voucherProduct: "10% Giảm",
    },
    {
        id: 10,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2sdfew3cmnu5b_tn.webp",
      titleProduct: "Áo Thun AM 1 In Nhiều Họa Tiết TỔNG HỢP Form Rộng",
      priceProduct: 29000,
      saleProduct: "-42%",
      shipProduct: true,
      isVoucher: true,
      voucherProduct: "10% Giảm",
    },
    {
        id: 11,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lz0equeputmb88_tn.webp",
      titleProduct:
        "💕Dreamy💕Tất cổ cao nữ chất liệu cotton, họa tiết hình thêu dễ thương",
      priceProduct: 17000,
      saleProduct: "-52%",
      shipProduct: false,
      isVoucher: true,
      voucherProduct: "10% Giảm",
    },
    {
        id: 12,
      imgProduct:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-ls9f6xwhk0igf3_tn.webp",
      titleProduct:
        "[ free ship ] Giày Nike_AF1 Lông Chuột, Giày Thể Thao AF1 Màu Lông Chuột Bản Trung Da Lộn Đế Air Kiểu Dáng BaSic.[ Hot ]",
      priceProduct: 520000,
      saleProduct: "-42%",
      shipProduct: true,
      isVoucher: true,
      voucherProduct: "10% Giảm",
    },
  ];

const listTodoState : any  = atom({
    key: 'listTodo',
    default: defaultData ,
});


export const newListState = selector({
    key: 'newList',
    get: ({ get }) => {
        const list : any  = get(listTodoState);
        return list;
    },
    set: ({ get, set }, newValue) => {
        const list : any =  get(listTodoState);
        const newTodo = {
        id: new Date().getTime(),
        content: newValue,
        status: 'new',
        };

        set(listTodoState , [...list, newTodo]);
    },
});



