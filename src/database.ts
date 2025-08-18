import * as mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/SmartMidrasha";
if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable.");
}
const connectDBIfNotConnected = async () => {
    if (mongoose.connection.readyState >= 1) return;
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};
export default connectDBIfNotConnected