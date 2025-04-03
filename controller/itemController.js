import Item from "../model/item.model.js";
import itemValidation from "../validator/item.validator.js";

export const addItem = async (req, res) => {
  try {
    const { error } = itemValidation.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const newItem = new Item(req.body);
    await newItem.save();

    res.status(201).json({ message: "Item added successfully", item: newItem });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

export const updateItemQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (quantity < 0) return res.status(400).json({ message: "Quantity cannot be negative" });

    const item = await Item.findByIdAndUpdate(id, { quantity }, { new: true });
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.status(200).json({ message: "Item updated successfully", item });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};
