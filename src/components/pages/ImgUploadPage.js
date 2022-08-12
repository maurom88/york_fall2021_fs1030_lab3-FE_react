import React from "react";

export default function ImgUploadPage() {
    return (
        <div>
            <form 
                id='uploadForm'
                action='http://localhost:5000/job_seekers/imgUpload'
                method='post'
                encType="multipart/form-data">
                <input type="file" name="uploadedFile" />
                <input type='submit' value='Upload!' />
            </form>
        </div>
    )
}