import { FormEvent } from "react";
import { AppService } from "@/services/carrier";
import { IAppProps } from "@/models/app";

export const onAppSubmit = async (
  e: FormEvent<HTMLFormElement>,
  selectedRadio: string | null,
  selectedCheckbox: string[],
  currentAnchor: string,
) => {
  e.preventDefault();

  if (!selectedRadio || selectedCheckbox.length < 1) return;

  const formData = new FormData(e.currentTarget);

  const data: IAppProps = {
    name: formData.get("name") as string,
    old: formData.get("old") as string,
    contact: {
      email: formData.get("mail") as string,
      discord: formData.get("discord") as string,
    },
    position: selectedRadio as string,
    job: currentAnchor,
    experience: formData.get("experience") as string,
    interest: selectedCheckbox,
  };

  await AppService(data);
};
