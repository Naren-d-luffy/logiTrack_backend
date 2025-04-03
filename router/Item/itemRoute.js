import express from "express";
import { addItem, getAllItems, updateItemQuantity, deleteItem,} from "../../controller/itemController.js";
import {verifyAdmin} from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",verifyAdmin, addItem);         
router.get("/",verifyAdmin, getAllItems);       
router.put("/:id",verifyAdmin, updateItemQuantity); 
router.delete("/:id",verifyAdmin, deleteItem);

export default router;
