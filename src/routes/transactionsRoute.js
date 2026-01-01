// import express from "express";
 

// import {getTransactionsByUserId,
//    createTransactions,
//    deleteTransactions,
//     getSummaryByUserId,
//    } from "../controllers/transactionsController.js";

// const router =express.Router();
// router.get("/:userId", getTransactionsByUserId);

// router.post("/",createTransactions); 
// router.delete("/:id",deleteTransactions);
// router.get("/summary/:userId", getSummaryByUserId);


// export default router;// is real code 
// following  code is from GPT
// import express from "express";
// import {
//   getTransactionsByUserId,
//   createTransactions,
//   deleteTransactions,
//   getSummaryByUserId,
// } from "../controllers/transactionsController.js";

// const router = express.Router();

// // ⚠️ FIX: specific routes FIRST
// router.get("/summary/:userId", getSummaryByUserId);
// router.get("/:userId", getTransactionsByUserId);

// router.post("/", createTransactions);
// router.delete("/:id", deleteTransactions);

// export default router;
import express from "express";// ye 2 gpt ka code h 
 
import {
  getTransactionsByUserId,
  createTransactions,
  deleteTransactions,
  getSummaryByUserId,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/:userId", getTransactionsByUserId);
router.post("/", createTransactions);
router.delete("/:id", deleteTransactions);

// ✅ summary route YAHAN add karo
// router.get("/summary/:userId", getSummaryByUserId);
router.get("/summary/:userId", getSummaryByUserId);


export default router;

