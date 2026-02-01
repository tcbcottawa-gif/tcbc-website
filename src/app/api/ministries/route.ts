import { NextResponse } from "next/server";
import { getMinistries } from "../../../../sanity/lib/api";

export async function GET() {
  try {
    const ministries = await getMinistries();
    return NextResponse.json(ministries, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error("Failed to fetch ministries:", error);
    return NextResponse.json(
      { error: "Failed to fetch ministries" },
      { status: 500 }
    );
  }
}
