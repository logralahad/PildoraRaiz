import { Request, Response } from "express";
import {
  __s3KeyId__,
  __s3Region__,
  __s3Secret__,
  __s3Bucket__,
} from "../constants.js";

const S3 = require("aws-sdk/clients/s3");
const crypto = require("crypto");
const { promisify } = require("util");
const randomBytes = promisify(crypto.randomBytes);

const fs = require("fs");
const path = require("path");

const s3 = new S3({
  accessKeyId: __s3KeyId__,
  secretAccessKey: __s3Secret__,
  region: __s3Region__,
});

const getImagen = async (key: any) => {
  const url = s3.getSignedUrl("getObject", {
    Bucket: __s3Bucket__,
    Key: key,
    Expires: 100000,
  });
  return url;
};

const deleteImagen = async (key: any) => {
  try {
    const bucketParams = { Bucket: __s3Bucket__, Key: key };
    const data = await s3
      .deleteObject(bucketParams)
      .promise()
      .then(() => {})
      .catch((err: any) => {
        console.log("errooor" + err);
      });
  } catch (err) {
    console.log("Error", err);
    return "error";
  }
};

export const uploadImage = async (req: any, res: Response) => {
  const stream = fs.createReadStream(req.file.path);

  const ext = path.extname(req.file.originalname).toLowerCase();

  let fileType = "";

  if (ext == ".png") {
    fileType = "image/png";
  } else if (ext == ".jpg" || ext == ".jpeg") {
    fileType = "image/jpg";
  } else {
    res.send({ data: "error" });
  }

  stream.on("error", function (err: any) {
    console.log("error in read stream: ", err);
    throw err;
  });

  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString("hex");

  let params = {
    Bucket: __s3Bucket__,
    Body: stream,
    Key: imageName,
    ContentType: fileType,
  };
  const data = await s3.upload(params).promise();

  res.send({ data: data.Key });
};

export const getImage = async (req: Request, res: Response) => {
  const { key } = req.params;
  const imagen = await getImagen(key);
  res.send(imagen);
};

export const deleteImage = async (req: Request, res: Response) => {
  try {
    const { key } = req.params;
    const data = await deleteImagen(key);
    res.send(data);
  } catch (err: any) {
    console.log(err.message);
  }
};
