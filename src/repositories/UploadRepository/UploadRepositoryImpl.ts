import { dodamAxios } from "../../lib/Axios/dodamAxios";
import {
  PostUploadParams,
  PostUploadResponse,
  UploadRepository,
} from "./UploadRepository";

class UploadRepositoryImpl implements UploadRepository {
  public async postUpload({
    formData,
  }: PostUploadParams): Promise<PostUploadResponse> {
    const { data } = await dodamAxios.post("/upload", formData);
    return data;
  }
}

export default new UploadRepositoryImpl();
