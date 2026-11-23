import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  //   CheckCircle2,
  Loader2,
  CheckCircle2Icon,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Configuration EmailJS manquante.");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        {
          publicKey: PUBLIC_KEY,
        },
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur EmailJS :", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white px-6 py-28 dark:bg-slate-900 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600 dark:text-blue-400">
            Restons en contact
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Parlons de votre
            <span className="text-blue-600 dark:text-blue-400"> projet.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            Vous avez une idée, un projet ou une opportunité ? Je serais ravi
            d'échanger avec vous et de donner vie à vos ambitions digitales.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="grid gap-10 lg:grid-cols-5">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between rounded-3xl bg-slate-950 p-8 text-white lg:col-span-2">
            <div>
              <h3 className="text-2xl font-bold">Entrons en contact</h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Je reste disponible pour discuter de projets, collaborations et
                nouvelles opportunités.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="mt-1 break-all text-sm text-slate-400">
                      Votre adresse email
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Localisation</p>
                    <p className="mt-1 text-sm text-slate-400">À compléter</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <MessageCircle size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Disponibilité</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Ouvert aux opportunités et collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-12">
              <p className="mb-4 text-sm font-semibold">Retrouvez-moi sur</p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/Choco-Alex"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/alex-brondon-kom-tagne-7352b7240"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-slate-950/50 lg:col-span-3">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Envoyez-moi un message
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Tous les champs sont obligatoires.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Votre nom
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    autoComplete="name"
                    placeholder="Ex : Jean Dupont"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Votre email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="exemple@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Sujet
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={150}
                  placeholder="Objet de votre message"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Votre message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={6}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                />
              </div>

              {/* SUCCESS MESSAGE */}
              {status === "success" && (
                <div
                  role="status"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500/10 p-4 text-sm text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2Icon size={19} />
                  Message envoyé avec succès ! Merci pour votre confiance.
                </div>
              )}

              {/* ERROR MESSAGE */}
              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400"
                >
                  Une erreur est survenue. Votre message n'a pas pu être envoyé.
                  Veuillez réessayer.
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
