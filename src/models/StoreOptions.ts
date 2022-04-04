import { Schema, model } from "mongoose";

export interface IOptions {
    slider: boolean;
    slider_image: string[];
    bestProducts: boolean;
    ourBrands: boolean;
    whatsapp: boolean;
    primaryColor: string;
    bgColor: string;
    storeId: string;
    popup: boolean;
    popupImage: string;

}



const OptionSchema = new Schema<IOptions>({
    slider: { type: Boolean, required: true, default: false },
    slider_image: { type: [String], required: true, default: [] },
    bestProducts: { type: Boolean, required: true, default: false },
    ourBrands: { type: Boolean, required: true, default: false },
    whatsapp: { type: Boolean, required: true, default: false },
    primaryColor: { type: String, required: true, default: "#0000ff" },
    bgColor: { type: String, required: true, default: "#ffffff" },
    storeId: { type: String, required: true, default: "" },
    popup: { type: Boolean, required: true, default: false },
    popupImage: { type: String, default: "" }
});


export const Options = model<IOptions>("Options", OptionSchema);

// Store.collection.dropIndexes();