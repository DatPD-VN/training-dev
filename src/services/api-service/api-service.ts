import axios from "axios";

export const API_URL = "http://localhost:8000/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

async function axiosAPI(endpoint: string, method = "GET", body : object | null = null) {
  try {
    const response = await axiosInstance({
      url: endpoint,
      method,
      data: body,
    });
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {}
}

export const registerUser = (user: object | null) =>
  axiosAPI("/register", "POST", user);
export const loginUser = (user: object | null) =>
  axiosAPI("/login", "POST", user);

export const getMembers = () => axiosAPI("/list_members");
export const getAllGroups = () => axiosAPI("/groups");
export const createGroupApi = (data: object | null) =>
  axiosAPI("/create_group", "POST", data);
export const getSearch = (data: object | null) =>
  axiosAPI("/search", "POST", data);
export const getSearchUser = (data: object | null) =>
  axiosAPI("/searchUser", "POST", data);
export const getMessagesGroup = (data: number) =>
  axiosAPI(`/groups/${data}/messages`);
export const getMessagesUser = (data: number) =>
  axiosAPI(`/messages/${data}`);
export const sendMessagesUser = (data: object | null) =>
  axiosAPI(`/send_message`, "POST", data);
export const checkUpdateMessages = (data: object | null) =>
  axiosAPI(`/checkUpdate`, "POST", data);
export const sendMessagesGroup = (groupId: number, data: object | null) =>
  axiosAPI(`/groups/${groupId}/messages`, "POST", data);
export const delMemberToGroup = (groupId: number, userId: number) =>
  axiosAPI(`/groups/${groupId}/members/${userId}`, "DELETE");
export const delGroup = (groupId: number) =>
  axiosAPI(`/groups/${groupId}`, "DELETE");
export const addMemberToGroup = (groupId: number, data: object | null) =>
  axiosAPI(`/groups/${groupId}/add_members`, "POST", data);
