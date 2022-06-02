import { __s3KeyId__, __s3Region__, __s3Secret__, __s3Bucket__, } from "../constants";
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
const getImagen = async (key) => {
    const url = s3.getSignedUrl("getObject", {
        Bucket: __s3Bucket__,
        Key: key,
        Expires: 100000,
    });
    return url;
};
const deleteImagen = async (key) => {
    try {
        const bucketParams = { Bucket: __s3Bucket__, Key: key };
        const data = await s3
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
};
export const uploadImage = async (req, res) => {
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
export const getImage = async (req, res) => {
    const { key } = req.params;
    const imagen = await getImagen(key);
    res.send(imagen);
};
export const deleteImage = async (req, res) => {
    try {
        const { key } = req.params;
        const data = await deleteImagen(key);
        res.send(data);
    }
    catch (err) {
        console.log(err.message);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29udHJvbGxlcnMvSW1hZ2VzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNMLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLFlBQVksR0FDYixNQUFNLGNBQWMsQ0FBQztBQUV0QixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN6QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QyxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRWxELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDaEIsV0FBVyxFQUFFLFdBQVc7SUFDeEIsZUFBZSxFQUFFLFlBQVk7SUFDN0IsTUFBTSxFQUFFLFlBQVk7Q0FDckIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxTQUFTLEdBQUcsS0FBSyxFQUFFLEdBQVEsRUFBRSxFQUFFO0lBQ25DLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1FBQ3ZDLE1BQU0sRUFBRSxZQUFZO1FBQ3BCLEdBQUcsRUFBRSxHQUFHO1FBQ1IsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxLQUFLLEVBQUUsR0FBUSxFQUFFLEVBQUU7SUFDdEMsSUFBSTtRQUNGLE1BQU0sWUFB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