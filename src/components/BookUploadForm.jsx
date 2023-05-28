import React from "react";

const BookUploadForm = () => {
  return (
    <div className="p-3 bg-light">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="bookName" class="form-label">
            Book Name
          </label>
          <input type="text" class="form-control" placeholder="Book Name" id="bookName" name="bookName"/>
        </div>
        <div class="col-md-6">
          <label for="authorName" class="form-label">
            Author Name
          </label>
          <input type="text" class="form-control" placeholder="Author Name" id="authorName" name="authorName"/>
        </div>
        <div class="col-md-6">
          <label for="imageUrl" class="form-label">
           Image Url
          </label>
          <input type="url" class="form-control" placeholder="Image Url" id="imageUrl" name="imageUrl"/>
        </div>

        <div class="col-md-6">
          
        </div>


        
      
       
        
     
        
      
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookUploadForm;
