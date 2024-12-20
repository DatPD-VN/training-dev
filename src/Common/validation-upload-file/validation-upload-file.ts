import { ALLOWED_EXTENSIONS, MAX_SIZE_UPLOAD } from "../../const";

export const validationFileUpload = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  if (!event.target.files) {
    return {
      isValid: false,
      message: "Vui lòng chọn file!",
    };
  }
  const file = event.target.files[0];
  const fileEvent = event.target;

  if (file) {
    if (!ALLOWED_EXTENSIONS.exec(fileEvent.value)) {
      fileEvent.value = "";
      return {
        isValid: false,
        message: "Định dạng file chưa hợp lệ!",
      };
    } else {
      if (file.size > MAX_SIZE_UPLOAD) {
        return {
          isValid: false,
          message: "Lỗi dung lượng file ko được quá 100KB!",
        };
      }
      return {
        isValid: true,
        message: "Upload thành công!",
      };
    }
  }
};
