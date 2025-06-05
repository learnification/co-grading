import os
import uuid
from fastapi import APIRouter, HTTPException, UploadFile

router = APIRouter()


@router.post("/upload")
async def create_upload_file(file: UploadFile):
    if file.content_type not in ["application/pdf"]:
        raise HTTPException(status_code=400, detail="File must be a PDF")

    file_name = uuid.uuid4()
    file_path = f"downloads/resources/{file_name}.pdf"
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, "wb") as f:
        f.write(file.file.read())

    return {"pdf_id": file_name}
