import { handleFileUpload } from "./HandleFileUpload";

export const HandleonFileChange = (e: React.ChangeEvent<HTMLInputElement>, userId?:string) => {
  const files = e.target.files;
  if (!files || !userId) return;

  handleFileUpload(files, userId);
};