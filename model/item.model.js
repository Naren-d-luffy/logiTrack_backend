import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  quantity: {type: Number, required: true, min: 0,},
  category: {type: String, required: true, trim: true, },
  dateAdded: { type: Date, default: Date.now, },
}, { timestamps: true });


export default mongoose.model('Item', ItemSchema);