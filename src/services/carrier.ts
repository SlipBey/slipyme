import instance from "@/libs/utils/config";
import { IAppProps } from "@/models/app";
import { toast } from "react-toastify";

const STORAGE_KEY = "forumapp";

const getLastFormSubmissionTime = () => {
  const storedTime = localStorage.getItem(STORAGE_KEY);
  return storedTime ? parseInt(storedTime, 10) : 0;
};

const setLastFormSubmissionTime = (time: number) => {
  localStorage.setItem(STORAGE_KEY, time.toString());
};

export const AppService = async (app: IAppProps) => {
  try {
    const currentTime = new Date().getTime();
    const lastFormSubmissionTime = getLastFormSubmissionTime();

    if (currentTime - lastFormSubmissionTime >= 5 * 60 * 1000) {
      await instance.post("/app", app);
      setLastFormSubmissionTime(currentTime);
      toast.success("Başarıyla başvuru gönderildi!");
    } else {
      toast.warn("Çok fazla istek atıyorsun!");
    }
  } catch (error) {
    toast.error("Hata! Lütfen daha sonra tekrar deneyiniz.");
  }
};
