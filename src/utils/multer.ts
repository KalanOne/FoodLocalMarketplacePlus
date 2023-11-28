import { Request } from "express";
import multer, { diskStorage } from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const storage = diskStorage({
  destination: "uploads/",
  filename: (req: Request, file, cb) => {
    const extension = path.extname(file.originalname);
    const filename = uuidv4() + extension;
    cb(null, filename);
  },
});

export const upload = multer({ storage });
