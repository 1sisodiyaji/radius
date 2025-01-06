import { NextRequest, NextResponse } from "next/server";
import Blogs from "@/model/Blog";
import { connectToDatabase } from "@/lib/ConnectDB";
import { getLoginDetails } from "@/lib/TrackUserDetails";
import Tracking, { LocationData } from "@/model/Tracking";


interface DeviceDetails {
  browser: string;
  os: string;
  userAgent: string;
}

export async function GET(request: NextRequest,{params,
}: {
  params: Promise<{ slug: string }>
}) {

    const slug = (await params).slug;

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }
  try {
    await connectToDatabase();
    
    const blog = await Blogs.findOne({ slug});

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const { ip,userAgent,browser,os, deviceModel, locationData } = await getLoginDetails(request) as unknown as {
      ip: string;
      userAgent: string;
      browser: string;
      os:string;
      deviceModel: DeviceDetails;
      locationData: LocationData; 
    };
    await Tracking.create(
      { blogId: blog._id, ip, deviceModel },
      {
        $set: {
          browser: browser,
          os: os,
          userAgent: userAgent,
          location: locationData,
        },
        $setOnInsert: {
          blogId: blog._id,
          timestamps: { firstHit: new Date(), lastHit: new Date() },
        },
        $inc: { hitCount: 1 },
        $currentDate: { "timestamps.lastHit": true },
      },
      { upsert: true }
    );

    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}
