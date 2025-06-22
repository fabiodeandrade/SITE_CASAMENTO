// app/api/rsvp/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxj_92O8j_Cu1oDYbYPqA2qUS8nIMHZ18V8-W-mTrE3qYAJTNZDbr3lyf_wv-0K966d/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ result: "error", error: error.message }, { status: 500 });
  }
}
