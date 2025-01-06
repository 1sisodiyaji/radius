import mongoose, { Schema, model, models } from "mongoose";

export interface LocationData {
  city: string;
  country: string;
  region: string;
  regionName: string;
  countryCode: string;
  lat: number;
  lon: number;
  timezone: string;
  query: string; 
  zip?: string;
  isp?: string;
}

export interface Tracking {
  _id?: mongoose.Types.ObjectId;
  blogId: mongoose.Types.ObjectId;
  ip: string;
  deviceModel: string;
  browser: string;
  os: string;
  userAgent?: string;
  location?: LocationData;
  timing: { firstHit: Date; lastHit: Date };
  hitCount: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const LocationSchema = new Schema<LocationData>({
  city: { type: String, default: "Unknown" },
  country: { type: String, default: "Unknown" },
  region: { type: String, default: "Unknown" },
  regionName: { type: String, default: "Unknown" },
  countryCode: { type: String, default: "Unknown" },
  lat: { type: Number, default: 0 },
  lon: { type: Number, default: 0 },
  timezone: { type: String, default: "Unknown" },
  query: { type: String , default: "Unknown"},
  zip: { type: String ,default: "000000"},
  isp: { type: String ,default: "radius"}, 
});

const TrackingSchema = new Schema<Tracking>(
  {
    blogId:  { type: Schema.Types.ObjectId, ref: "Blogs", required: true },
    ip: { type: String, index: true },
    deviceModel: { type: String, default: "Unknown Device" },
    browser: { type: String, default: "Unknown Browser" },
    os: { type: String, default: "Unknown OS"},
    userAgent: { type: String,default: "Unknown Agent" },
    location: { type: LocationSchema, default: {} },
    timing: {
      firstHit: { type: Date, required: true ,default: Date.now },
      lastHit: { type: Date, required: true ,default: Date.now },
    },
    hitCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Tracking = models?.Tracking || model<Tracking>("Tracking", TrackingSchema);

export default Tracking;
