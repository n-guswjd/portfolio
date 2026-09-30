import { useState } from "react";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";

const CONTACT = {
  email: "nguswjd02@gmail.com",
  github: "github.com/n-guswjd",
  kakao: "https://open.kakao.com/",
};

function Row({ label, value, mono = false, children }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-primary-100 bg-white/70 px-4 py-3">
      <span className="w-12 shrink-0 text-sm text-subtext">{label}</span>
      <span
        className={`flex-1 truncate text-sm font-semibold text-ink ${
          mono ? "font-mono" : ""
        }`}
      >
        {value}
      </span>
      {children}
    </div>
  );
}

function ContactView() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 rounded-2xl border border-primary-200 bg-primary-50 px-5 py-3">
        <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-primary-500" />
        <p className="text-sm font-semibold text-primary-700">
          프론트엔드 포지션 제안 환영
        </p>
      </div>

      <Row label="Email" value={CONTACT.email} mono>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-200"
        >
          {copied ? "복사됨" : "복사"}
        </button>
      </Row>

      <Row label="GitHub" value={CONTACT.github} mono>
        <a
          href={`https://${CONTACT.github}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
        >
          바로가기
          <ArrowUpRight size={16} />
        </a>
      </Row>

      <Row label="Kakao" value="카카오톡 오픈프로필">
        <button
          type="button"
          disabled
          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-400 disabled:cursor-not-allowed"
        >
          대화하기
          <MessageCircle size={16} />
        </button>
      </Row>

      <a
        href={`mailto:${CONTACT.email}`}
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary-500 py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-primary-600"
      >
        <Mail size={20} />
        이메일 앱으로 바로 보내기
      </a>

      <p className="mt-2 text-center text-sm text-subtext">
        메일 또는 카카오톡으로 연락 주시면 24시간 내에 답변드립니다.
      </p>
    </div>
  );
}

export default ContactView;
