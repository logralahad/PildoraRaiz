"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = exports.getImage = exports.uploadImage = void 0;
const constants_js_1 = require("../constants.js");
const S3 = require("aws-sdk/clients/s3");
const crypto = require("crypto");
const { promisify } = require("util");
const randomBytes = promisify(crypto.randomBytes);
const fs = require("fs");
const path = require("path");
const s3 = new S3({
    accessKeyId: constants_js_1.__s3KeyId__,
    secretAccessKey: constants_js_1.__s3Secret__,
    region: constants_js_1.__s3Region__,
});
const getImagen = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const url = s3.getSignedUrl("getObject", {
        Bucket: constants_js_1.__s3Bucket__,
        Key: key,
        Expires: 100000,
    });
    return url;
});
const deleteImagen = (key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bucketParams = { Bucket: constants_js_1.__s3Bucket__, Key: key };
        const data = yield s3
            .deleteObject(bucketParams)
            .promise()
            .then(() => { })
            .catch((err) => {
            console.log("errooor" + err);
        });
    }
    catch (err) {
        console.log("Error", err);
        return "error";
    }
});
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stream = fs.createReadStream(req.file.path);
    const ext = path.extname(req.file.originalname).toLowerCase();
    let fileType = "";
    if (ext == ".png") {
        fileType = "image/png";
    }
    else if (ext == ".jpg" || ext == ".jpeg") {
        fileType = "image/jpg";
    }
    else {
        res.send({ data: "error" });
    }
    stream.on("error", function (err) {
        console.log("error in read stream: ", err);
        throw err;
    });
    const rawBytes = yield randomBytes(16);
    const imageName = rawBytes.toString("hex");
    let params = {
        Bucket: constants_js_1.__s3Bucket__,
        Body: stream,
        Key: imageName,
        ContentType: fileType,
    };
    const data = yield s3.upload(params).promise();
    res.send({ data: data.Key });
});
exports.uploadImage = uploadImage;
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { key } = req.params;
    const imagen = yield getImagen(key);
    res.send(imagen);
});
exports.getImage = getImage;
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { key } = req.params;
        const data = yield deleteImagen(key);
        res.send(data);
    }
    catch (err) {
        console.log(err.message);
    }
});
exports.deleteImage = deleteImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29udHJvbGxlcnMvSW1hZ2VzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBS3lCO0FBRXpCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFbEQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU3QixNQUFNLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUNoQixXQUFXLEVBQUUsMEJBQVc7SUFDeEIsZUFBZSxFQUFFLDJCQUFZO0lBQzdCLE1BQU0sRUFBRSwyQkFBWTtDQUNyQixDQUFDLENBQUM7QUFFSCxNQUFNLFNBQVMsR0FBRyxDQUFPLEdBQVEsRUFBRSxFQUFFO0lBQ25DLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1FBQ3ZDLE1BQU0sRUFBRSwyQkFBWTtRQUNwQixHQUFHLEVBQUUsR0FBRztRQUNSLE9BQU8sRUFBRSxNQUFNO0tBQ2hCLENBQUMsQ0FBQztJQUNILE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFPLEdBQVEsRUFBRSxFQUFFO0lBQ3RDLElBQUk7UUFDRixNQUFNLFlBQVksR0FBRyxFQUFFLE1BQU0sRUFBRSwyQkFBWSxFQUFFLEdBQUcsRUFBRSxHQUFH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