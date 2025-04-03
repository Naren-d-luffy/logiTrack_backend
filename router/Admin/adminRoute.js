import express from "express";
import { createAdmin, getAdmins,getAdminById,loginAdmin,changeStatus,deleteAdmin } from "../../controller/adminController.js";
import {verifyAdmin } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",verifyAdmin, createAdmin);
router.get("/",verifyAdmin, getAdmins);
router.get("/:id",verifyAdmin, getAdminById);
router.post("/login", loginAdmin);
router.patch("/status/:adminId",verifyAdmin, changeStatus);
router.delete("/:adminId",verifyAdmin, deleteAdmin);

export default router;
