import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { getUser } from "../controller/userController";

const router=Router();
//GET /api/users


router.get('/',protectRoute,getUser)





export default router