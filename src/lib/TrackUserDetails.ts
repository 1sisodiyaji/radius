import { UAParser } from "ua-parser-js";
import fetch from "node-fetch";
import { NextRequest } from "next/server";

// Define the structure of the location data
interface LocationData {
  city: string;
  country: string;
  region: string;
  regionName: string;
  countryCode: string;
  lat: number;
  lon: number;
  timezone: string;
  query: string; // IP address used in the lookup
}

export async function getLoginDetails(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "8.8.8.8";
    const userAgent = request.headers.get("user-agent") || "";

    const response = await fetch(`http://ip-api.com/json/${ip}`);
    console.log("Location data" + response)
    const locationData = await response.json() as LocationData;
    const parser = new UAParser(userAgent);
    const deviceDetails = parser.getResult();
    const deviceModel = deviceDetails.device?.model || "Unknown Device";
    const browser = deviceDetails.browser.name;
    const os = deviceDetails.os.name;
    return {
      ip,
      userAgent,
      browser,
      os,
      deviceModel,
      locationData
    };
  } catch (error) {
    console.error("Error fetching login details:", error);
    throw new Error("Failed to retrieve login details");
  }
}
