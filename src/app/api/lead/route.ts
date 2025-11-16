import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function clean(v?: string | null) {
  if (!v) return null;
  const s = String(v).trim();
  return s.length ? s : null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name    = clean(body.name);
    const email   = clean(body.email);
    const phone   = clean(body.phone);
    const service = clean(body.service);
    const message = clean(body.message);
    const source  = clean(body.source) ?? "home-contact";

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: "Name and at least one contact (email or phone) are required." },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: { name, email, phone, service, message, source },
    });

    // Telegram (best effort)
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat  = process.env.TELEGRAM_CHAT_ID;
    if (token && chat) {
      const text =
        `📩 *New Lead*\n` +
        `*Name:* ${name}\n` +
        (phone ? `*Phone:* ${phone}\n` : "") +
        (email ? `*Email:* ${email}\n` : "") +
        (service ? `*Service:* ${service}\n` : "") +
        (message ? `*Message:* ${message}\n` : "") +
        `*Source:* ${source}\n` +
        `*When:* ${new Date(lead.createdAt).toLocaleString()}`;

      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chat, text, parse_mode: "Markdown" }),
      }).catch(() => {});
    }

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");

  // Protect the API
  if (key !== process.env.ADMIN_API_KEY) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("GET leads error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
