"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import instance from "@/libs/api";
import { useI18n } from "@/lib/i18n";

type SubjectOpt = { value: string; label: string };

export default function ContactForm({
  subjectOptions,
}: {
  subjectOptions: SubjectOpt[];
}) {
  const { t } = useI18n();
  const [pending, setPending] = useState(false);

  const [contact, setContact] = useState({
    fullName: "",
    subject: subjectOptions?.[0]?.value ?? "general",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target as any;
    if (name === "phone") {
      const raw = value.replace(/\D/g, "").slice(0, 10);
      const formatted = raw
        .replace(/^(\d{3})(\d{3})(\d{0,4})$/, "($1) $2 $3")
        .trim();
      setContact((prev) => ({ ...prev, phone: formatted }));
    } else {
      setContact((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const payload = {
      name: contact.fullName,
      email: contact.email,
      subject: contact.subject,
      phone: contact.phone.replace(/\D/g, ""),
      message: contact.message,
      channel: "slipyme",
    };
    try {
      const res = await instance.post("/api/contact", payload);
      toast.success(res?.data?.message ?? t("contact.success"));
      setContact({
        fullName: "",
        subject: subjectOptions?.[0]?.value ?? "general",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      toast.error(err?.response?.data?.error ?? t("contact.error"));
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="md:max-w-lg space-y-5">
      <div>
        <h2 className="text-xl font-bold">{t("general.contact")}</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t("contact.description")}
        </p>
      </div>

      <form onSubmit={onSave} className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="text-sm font-medium">
            {t("contact.name.label")} <span className="text-red-500">*</span>
          </label>
          <input
            name="fullName"
            id="fullName"
            value={contact.fullName}
            onChange={handleChange}
            placeholder={t("contact.name.placeholder")}
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-sm font-medium">
            {t("contact.subjects.label")}
          </label>
          <select
            id="subject"
            name="subject"
            value={contact.subject}
            onChange={handleChange}
          >
            {subjectOptions.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              {t("contact.mail.label")} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={contact.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="flex-1 space-y-1.5">
            <label htmlFor="phone" className="text-sm font-medium">
              {t("contact.phone.label")}
            </label>
            <input
              name="phone"
              id="phone"
              inputMode="tel"
              value={contact.phone}
              onChange={handleChange}
              placeholder="5xx xxx xxxx"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-medium">
            {t("contact.message.label")} <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={contact.message}
            onChange={handleChange}
            placeholder={t("contact.message.placeholder")}
            required
          />
        </div>

        <button type="submit" disabled={pending}>
          {pending ? t("contact.sending") : t("contact.button")}
        </button>
      </form>
    </div>
  );
}
