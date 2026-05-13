"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/Button";
import api from "@/lib/api";
import { useI18n } from "@/lib/i18n";
import { FiSend } from "react-icons/fi";

type SubjectOpt = { value: string; label: string };

export function ContactForm({
  subjectOptions,
}: {
  subjectOptions: SubjectOpt[];
}) {
  const { t } = useI18n();
  const [pending, setPending] = useState(false);

  const initial = {
    fullName: "",
    subject: subjectOptions?.[0]?.value ?? "general",
    email: "",
    phone: "",
    message: "",
  };

  const [contact, setContact] = useState(initial);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
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

  const onSubmit = async (e: FormEvent) => {
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
      const res = await api.post("/api/contact", payload);
      toast.success(res?.data?.message ?? t("contact.success"));
      setContact(initial);
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { error?: string } } })?.response?.data
          ?.error ?? t("contact.error");
      toast.error(message);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="typo-section-title">{t("general.contact")}</h2>
        <p className="typo-body mt-2">{t("contact.description")}</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="fullName">
            {t("contact.name.label")} <span>*</span>
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
          <label htmlFor="subject">{t("contact.subjects.label")}</label>
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
            <label htmlFor="email">
              {t("contact.mail.label")} <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={contact.email}
              onChange={handleChange}
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="flex-1 space-y-1.5">
            <label htmlFor="phone">{t("contact.phone.label")}</label>
            <input
              name="phone"
              id="phone"
              inputMode="tel"
              value={contact.phone}
              onChange={handleChange}
              placeholder="(5xx) xxx xxxx"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message">
            {t("contact.message.label")} <span>*</span>
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

        <Button
          type="submit"
          disabled={pending}
          loading={pending}
          icon={FiSend}
          iconPosition="right"
          className="w-full sm:w-auto"
        >
          {pending ? t("contact.sending") : t("contact.button")}
        </Button>
      </form>
    </div>
  );
}
