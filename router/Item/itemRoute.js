import express from "express";
import { addItem, getAllItems, updateItemQuantity, deleteItem,} from "../../controller/itemController.js";

const router = express.Router();

router.post("/", addItem);         
router.get("/", getAllItems);       
router.put("/:id", updateItemQuantity); 
router.delete("/:id", deleteItem);

export default router;
